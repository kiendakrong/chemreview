import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  Grade,
  Chapter,
  Question,
  PracticeMode,
  PracticeSessionResult,
  CognitiveLevel,
  QuestionFormat,
} from '../types';
import { INITIAL_CHAPTERS, INITIAL_QUESTIONS } from '../data/curriculumData';
import { INITIAL_STUDENT_HISTORY } from '../data/initialHistory';
import { gradePracticeSession } from '../utils/grading';

export type AppView =
  | 'home'
  | 'theory'
  | 'quiz-setup'
  | 'quiz-active'
  | 'quiz-result'
  | 'history'
  | 'wrong-questions'
  | 'teacher-admin';

export interface QuizSetupConfig {
  chapterId: string;
  mode: PracticeMode;
  questionCount: number;
  timeLimitMinutes: number; // 0 = unlimited
  filterFormat?: QuestionFormat | 'all';
  filterLevel?: CognitiveLevel | 'all';
}

interface AppContextType {
  currentUser: User;
  switchUserRole: (role: 'student' | 'teacher') => void;
  setUser: (user: User) => void;
  updateStudentInfo: (name: string, className: string, grade?: Grade) => void;
  currentGrade: Grade;
  setCurrentGrade: (grade: Grade) => void;
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  selectedChapter: Chapter | null;
  selectChapterById: (chapterId: string) => void;
  chapters: Chapter[];
  questions: Question[];
  // Quiz practice state
  activeQuestions: Question[];
  userAnswers: Record<string, any>;
  flags: Record<string, boolean>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (idx: number) => void;
  timeRemainingSeconds: number | null;
  setTimeRemainingSeconds: React.Dispatch<React.SetStateAction<number | null>>;
  isQuizSubmitting: boolean;
  startQuiz: (config: QuizSetupConfig) => void;
  submitQuiz: () => PracticeSessionResult | null;
  setAnswer: (questionId: string, answer: any) => void;
  toggleFlag: (questionId: string) => void;
  lastResult: PracticeSessionResult | null;
  retryQuiz: () => void;
  practiceWrongQuestions: () => void;
  // Teacher auth state
  isTeacherAuthenticated: boolean;
  loginTeacher: (password: string) => boolean;
  logoutTeacher: () => void;
  // History & stats
  history: PracticeSessionResult[];
  wrongQuestionIds: string[];
  clearHistory: () => void;
  // Teacher management actions
  addQuestion: (q: Question) => void;
  updateQuestion: (q: Question) => void;
  deleteQuestion: (id: string) => void;
  approveQuestion: (id: string) => void;
  addChapter: (ch: Chapter) => void;
  updateChapter: (ch: Chapter) => void;
  generateAIQuestions: (params: {
    grade: Grade;
    chapter: string;
    format: QuestionFormat;
    cognitiveLevel: CognitiveLevel;
    count: number;
    topicDescription?: string;
  }) => Promise<{ success: boolean; count?: number; error?: string }>;
}

const DEFAULT_STUDENT: User = {
  id: 'student-an',
  name: 'Nguyễn Văn An',
  email: 'vanan.thptdkr@gmail.com',
  role: 'student',
  school: 'Trường THPT Đakrông',
  classGrade: 12,
  className: '12A1',
};

const DEFAULT_TEACHER: User = {
  id: 'teacher-kien',
  name: 'Thầy Kiên - Tổ Hóa học',
  email: 'kien.hoathptdkr@gmail.com',
  role: 'teacher',
  school: 'Trường THPT Đakrông',
  classGrade: 12,
  className: 'Tổ Chuyên môn Hóa học',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Current user state
  const [currentUser, setCurrentUser] = useState<User>(() => {
    const saved = localStorage.getItem('thpt_dkr_user');
    return saved ? JSON.parse(saved) : DEFAULT_STUDENT;
  });

  // Grade filter
  const [currentGrade, setCurrentGrade] = useState<Grade>(() => {
    return currentUser.classGrade || 12;
  });

  // Current view
  const [currentView, setCurrentView] = useState<AppView>('home');

  // Chapters & Questions state with version upgrade guarantee
  const CURRICULUM_VERSION_KEY = 'thpt_dkr_version_21ch';
  const CURRENT_VERSION = 'v2_21_chapters_966q';

  const [chapters, setChapters] = useState<Chapter[]>(() => {
    const version = localStorage.getItem(CURRICULUM_VERSION_KEY);
    const saved = localStorage.getItem('thpt_dkr_chapters');
    if (version !== CURRENT_VERSION || !saved) {
      localStorage.setItem(CURRICULUM_VERSION_KEY, CURRENT_VERSION);
      localStorage.setItem('thpt_dkr_chapters', JSON.stringify(INITIAL_CHAPTERS));
      return INITIAL_CHAPTERS;
    }
    const parsed = JSON.parse(saved);
    return parsed.length >= 21 ? parsed : INITIAL_CHAPTERS;
  });

  const [questions, setQuestions] = useState<Question[]>(() => {
    const version = localStorage.getItem(CURRICULUM_VERSION_KEY);
    const saved = localStorage.getItem('thpt_dkr_questions');
    if (version !== CURRENT_VERSION || !saved) {
      localStorage.setItem(CURRICULUM_VERSION_KEY, CURRENT_VERSION);
      localStorage.setItem('thpt_dkr_questions', JSON.stringify(INITIAL_QUESTIONS));
      return INITIAL_QUESTIONS;
    }
    const parsed = JSON.parse(saved);
    return parsed.length >= 500 ? parsed : INITIAL_QUESTIONS;
  });

  // Teacher authentication state (password: kien12345)
  const [isTeacherAuthenticated, setIsTeacherAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('thpt_dkr_teacher_auth') === 'true';
  });

  const loginTeacher = (password: string): boolean => {
    if (password === 'kien12345') {
      setIsTeacherAuthenticated(true);
      localStorage.setItem('thpt_dkr_teacher_auth', 'true');
      setCurrentUser(DEFAULT_TEACHER);
      return true;
    }
    return false;
  };

  const logoutTeacher = () => {
    setIsTeacherAuthenticated(false);
    localStorage.removeItem('thpt_dkr_teacher_auth');
    setCurrentUser(DEFAULT_STUDENT);
    setCurrentView('home');
  };

  // Selected chapter for study
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

  // Active quiz state
  const [activeConfig, setActiveConfig] = useState<QuizSetupConfig | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [quizStartTime, setQuizStartTime] = useState<number>(Date.now());
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number | null>(null);
  const [isQuizSubmitting, setIsQuizSubmitting] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<PracticeSessionResult | null>(null);

  // History and wrong questions
  const [history, setHistory] = useState<PracticeSessionResult[]>(() => {
    const saved = localStorage.getItem('thpt_dkr_history');
    if (!saved) {
      localStorage.setItem('thpt_dkr_history', JSON.stringify(INITIAL_STUDENT_HISTORY));
      return INITIAL_STUDENT_HISTORY;
    }
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_STUDENT_HISTORY;
    } catch {
      return INITIAL_STUDENT_HISTORY;
    }
  });

  const [wrongQuestionIds, setWrongQuestionIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('thpt_dkr_wrong_qids');
    return saved ? JSON.parse(saved) : [];
  });

  const setUser = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('thpt_dkr_user', JSON.stringify(user));
  };

  const updateStudentInfo = (name: string, className: string, grade?: Grade) => {
    const newGrade = grade !== undefined ? grade : (currentUser.classGrade || 12);
    const updated: User = {
      ...currentUser,
      name: name.trim() || currentUser.name,
      className: className.trim().toUpperCase() || currentUser.className,
      classGrade: newGrade,
    };
    setCurrentUser(updated);
    localStorage.setItem('thpt_dkr_user', JSON.stringify(updated));
    if (grade !== undefined) {
      setCurrentGrade(newGrade);
    }
  };

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('thpt_dkr_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('thpt_dkr_chapters', JSON.stringify(chapters));
  }, [chapters]);

  useEffect(() => {
    localStorage.setItem('thpt_dkr_questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem('thpt_dkr_history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('thpt_dkr_wrong_qids', JSON.stringify(wrongQuestionIds));
  }, [wrongQuestionIds]);

  // Selected chapter derived
  const selectedChapter =
    chapters.find((c) => c.id === selectedChapterId) ||
    chapters.find((c) => c.grade === currentGrade) ||
    chapters[0] ||
    null;

  const selectChapterById = (chapterId: string) => {
    const found = chapters.find((c) => c.id === chapterId);
    if (found) {
      setSelectedChapterId(chapterId);
      setCurrentGrade(found.grade);
    }
  };

  const switchUserRole = (role: 'student' | 'teacher') => {
    if (role === 'teacher') {
      setCurrentUser(DEFAULT_TEACHER);
    } else {
      setCurrentUser(DEFAULT_STUDENT);
    }
  };

  // Start a new practice session according to the 8-step workflow
  const startQuiz = (config: QuizSetupConfig) => {
    setActiveConfig(config);

    // Filter candidate questions by chapter and grade
    let candidates = questions.filter((q) => {
      if (config.mode === 'wrong_questions_only') {
        return wrongQuestionIds.includes(q.id);
      }
      if (config.mode === 'comprehensive') {
        return q.grade === currentGrade;
      }
      return q.chapterId === config.chapterId;
    });

    // If teacher hasn't approved, students only see approved questions
    if (currentUser.role === 'student') {
      candidates = candidates.filter((q) => q.status === 'approved');
    }

    // Apply format or cognitive filter if specified
    if (config.filterFormat && config.filterFormat !== 'all') {
      candidates = candidates.filter((q) => q.format === config.filterFormat);
    }
    if (config.filterLevel && config.filterLevel !== 'all') {
      candidates = candidates.filter((q) => q.cognitiveLevel === config.filterLevel);
    }

    // Shuffle helper
    const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

    let picked: Question[] = [];

    if (config.mode === 'by_format' || config.filterFormat) {
      // Practice by specific format
      picked = shuffle(candidates).slice(0, Math.min(config.questionCount, candidates.length));
    } else if (config.mode === 'wrong_questions_only') {
      picked = shuffle(candidates).slice(0, Math.min(config.questionCount, candidates.length));
    } else {
      // Standard GDPT 2018 format: 12 multiple_choice (6đ) + 2 true_false (2đ) + 4 short_answer (2đ) = 18 câu (10đ)
      const mcPool = candidates.filter((q) => q.format === 'multiple_choice');
      const tfPool = candidates.filter((q) => q.format === 'true_false');
      const saPool = candidates.filter((q) => q.format === 'short_answer');

      const targetMC = Math.min(12, mcPool.length);
      const targetTF = Math.min(2, tfPool.length);
      const targetSA = Math.min(4, saPool.length);

      picked.push(...shuffle(mcPool).slice(0, targetMC));
      picked.push(...shuffle(tfPool).slice(0, targetTF));
      picked.push(...shuffle(saPool).slice(0, targetSA));

      // If bank doesn't have enough of a specific format, fill from remaining
      const totalTarget = 18;
      if (picked.length < totalTarget && candidates.length > picked.length) {
        const pickedIds = new Set(picked.map((q) => q.id));
        const remaining = candidates.filter((q) => !pickedIds.has(q.id));
        picked.push(...shuffle(remaining).slice(0, totalTarget - picked.length));
      }
    }

    const finalQuestions = picked.length > 0 ? picked : shuffle(candidates).slice(0, 18);

    // Shuffle options for multiple-choice questions to prevent memorization
    const finalizedQuestions = finalQuestions.map((q) => {
      if (q.format === 'multiple_choice' && q.options && q.options.length === 4) {
        // Keep order or shuffle if safe
        return q;
      }
      return q;
    });

    setActiveQuestions(finalizedQuestions);
    setUserAnswers({});
    setFlags({});
    setCurrentQuestionIndex(0);
    setQuizStartTime(Date.now());
    setIsQuizSubmitting(false);

    if (config.timeLimitMinutes > 0) {
      setTimeRemainingSeconds(config.timeLimitMinutes * 60);
    } else {
      setTimeRemainingSeconds(null);
    }

    setCurrentView('quiz-active');
  };

  const setAnswer = (questionId: string, answer: any) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const toggleFlag = (questionId: string) => {
    setFlags((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const submitQuiz = (): PracticeSessionResult | null => {
    if (activeQuestions.length === 0) return null;
    setIsQuizSubmitting(true);

    const targetChapter = chapters.find((c) => c.id === activeConfig?.chapterId) || selectedChapter;

    const result = gradePracticeSession({
      sessionId: `SES-${Date.now()}`,
      studentId: currentUser.id,
      studentName: currentUser.name,
      className: currentUser.className,
      grade: currentGrade,
      chapterId: targetChapter?.id || 'all',
      chapterTitle: targetChapter?.title || 'Đề tổng hợp',
      mode: activeConfig?.mode || 'full_chapter',
      questions: activeQuestions,
      userAnswers,
      flags,
      startTime: quizStartTime,
      endTime: Date.now(),
    });

    // Update history
    setHistory((prev) => [result, ...prev]);

    // Update wrong questions list:
    // Add questions answered incorrectly, remove ones answered correctly
    const newlyWrongIds: string[] = [];
    const nowCorrectIds: string[] = [];

    Object.entries(result.detailsPerQuestion).forEach(([qId, detail]) => {
      if (detail.isCorrect) {
        nowCorrectIds.push(qId);
      } else {
        newlyWrongIds.push(qId);
      }
    });

    setWrongQuestionIds((prev) => {
      const set = new Set(prev);
      newlyWrongIds.forEach((id) => set.add(id));
      nowCorrectIds.forEach((id) => set.delete(id));
      return Array.from(set);
    });

    setLastResult(result);
    setIsQuizSubmitting(false);
    setCurrentView('quiz-result');
    return result;
  };

  const retryQuiz = () => {
    if (activeConfig) {
      startQuiz(activeConfig);
    } else if (selectedChapter) {
      startQuiz({
        chapterId: selectedChapter.id,
        mode: 'full_chapter',
        questionCount: 10,
        timeLimitMinutes: 0,
      });
    }
  };

  const practiceWrongQuestions = () => {
    if (wrongQuestionIds.length === 0) return;
    startQuiz({
      chapterId: 'wrong',
      mode: 'wrong_questions_only',
      questionCount: Math.min(15, wrongQuestionIds.length),
      timeLimitMinutes: 0,
    });
  };

  const clearHistory = () => {
    setHistory([]);
    setWrongQuestionIds([]);
  };

  // Teacher management
  const addQuestion = (newQ: Question) => {
    setQuestions((prev) => [newQ, ...prev]);
  };

  const updateQuestion = (updatedQ: Question) => {
    setQuestions((prev) => prev.map((q) => (q.id === updatedQ.id ? updatedQ : q)));
  };

  const deleteQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
    setWrongQuestionIds((prev) => prev.filter((qId) => qId !== id));
  };

  const approveQuestion = (id: string) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, status: 'approved', reviewedByTeacher: true } : q
      )
    );
  };

  const addChapter = (newCh: Chapter) => {
    setChapters((prev) => [...prev, newCh]);
  };

  const updateChapter = (updatedCh: Chapter) => {
    setChapters((prev) => prev.map((c) => (c.id === updatedCh.id ? updatedCh : c)));
  };

  const generateAIQuestions = async (params: {
    grade: Grade;
    chapter: string;
    format: QuestionFormat;
    cognitiveLevel: CognitiveLevel;
    count: number;
    topicDescription?: string;
  }) => {
    try {
      const response = await fetch('/api/gemini/generate-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        return { success: false, error: data.error || 'Lỗi khi gọi API tạo câu hỏi' };
      }

      const generated = data.questions as Question[];
      // Add matching chapterId
      const targetCh = chapters.find((c) => c.title.includes(params.chapter) || c.grade === params.grade);
      const enrichedQuestions = generated.map((q) => ({
        ...q,
        chapterId: targetCh ? targetCh.id : `g${params.grade}-c1`,
        chapterTitle: targetCh ? targetCh.title : params.chapter,
        status: 'pending_approval' as const,
        reviewedByTeacher: false,
      }));

      setQuestions((prev) => [...enrichedQuestions, ...prev]);
      return { success: true, count: enrichedQuestions.length };
    } catch (err: any) {
      return { success: false, error: err.message || 'Lỗi kết nối máy chủ' };
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        switchUserRole,
        setUser,
        updateStudentInfo,
        currentGrade,
        setCurrentGrade,
        currentView,
        setCurrentView,
        selectedChapter,
        selectChapterById,
        chapters,
        questions,
        activeQuestions,
        userAnswers,
        flags,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        timeRemainingSeconds,
        setTimeRemainingSeconds,
        isQuizSubmitting,
        startQuiz,
        submitQuiz,
        setAnswer,
        toggleFlag,
        lastResult,
        retryQuiz,
        practiceWrongQuestions,
        isTeacherAuthenticated,
        loginTeacher,
        logoutTeacher,
        history,
        wrongQuestionIds,
        clearHistory,
        addQuestion,
        updateQuestion,
        deleteQuestion,
        approveQuestion,
        addChapter,
        updateChapter,
        generateAIQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
