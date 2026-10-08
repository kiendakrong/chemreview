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

  // Chapters & Questions state
  const [chapters, setChapters] = useState<Chapter[]>(() => {
    const saved = localStorage.getItem('thpt_dkr_chapters');
    return saved ? JSON.parse(saved) : INITIAL_CHAPTERS;
  });

  const [questions, setQuestions] = useState<Question[]>(() => {
    const saved = localStorage.getItem('thpt_dkr_questions');
    return saved ? JSON.parse(saved) : INITIAL_QUESTIONS;
  });

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
    return saved ? JSON.parse(saved) : [];
  });

  const [wrongQuestionIds, setWrongQuestionIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('thpt_dkr_wrong_qids');
    return saved ? JSON.parse(saved) : [];
  });

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

    // Target cognitive ratio: 40% Biết, 30% Hiểu, 30% Vận dụng
    const knowPool = candidates.filter((q) => q.cognitiveLevel === 'know');
    const understandPool = candidates.filter((q) => q.cognitiveLevel === 'understand');
    const applyPool = candidates.filter((q) => q.cognitiveLevel === 'apply');

    const totalNeeded = Math.min(config.questionCount, candidates.length);
    const targetKnow = Math.round(totalNeeded * 0.4);
    const targetUnderstand = Math.round(totalNeeded * 0.3);
    const targetApply = Math.max(0, totalNeeded - targetKnow - targetUnderstand);

    // Shuffle helper
    const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

    const picked: Question[] = [];
    picked.push(...shuffle(knowPool).slice(0, targetKnow));
    picked.push(...shuffle(understandPool).slice(0, targetUnderstand));
    picked.push(...shuffle(applyPool).slice(0, targetApply));

    // If not enough by cognitive balance, fill from remaining candidates
    if (picked.length < totalNeeded) {
      const pickedIds = new Set(picked.map((q) => q.id));
      const remaining = candidates.filter((q) => !pickedIds.has(q.id));
      picked.push(...shuffle(remaining).slice(0, totalNeeded - picked.length));
    }

    // If candidate bank is still small, use all available candidates
    const finalQuestions = picked.length > 0 ? shuffle(picked) : shuffle(candidates);

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
        setUser: setCurrentUser,
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
