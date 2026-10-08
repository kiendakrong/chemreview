export type Grade = 10 | 11 | 12;

export type QuestionFormat = 'multiple_choice' | 'true_false' | 'short_answer';

export type CognitiveLevel = 'know' | 'understand' | 'apply';

export type UserRole = 'student' | 'teacher';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  school: string;
  classGrade: Grade;
  className: string;
  avatar?: string;
}

export interface ReactionEquation {
  name: string;
  equation: string;
  conditions?: string;
  note?: string;
}

export interface ChemicalFormulaItem {
  name: string;
  formula: string;
  condition?: string;
  description?: string;
}

export interface SolvedExample {
  title: string;
  question: string;
  solution: string;
  tips?: string;
}

export interface ComparisonTable {
  title?: string;
  headers: string[];
  rows: string[][];
}

export interface Chapter {
  id: string;
  grade: Grade;
  order: number;
  code: string;
  title: string;
  description: string;
  lessons: string[];
  objectives: string[];
  keyKnowledge: string[];
  theorySummary: string;
  formulas: ChemicalFormulaItem[];
  reactions: ReactionEquation[];
  comparisonTable?: ComparisonTable;
  sampleExamples: SolvedExample[];
  commonMistakes: string[];
}

export interface MultipleChoiceOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface TrueFalseSubItem {
  id: 'a' | 'b' | 'c' | 'd';
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface Question {
  id: string;
  grade: Grade;
  chapterId: string;
  chapterTitle: string;
  lessonTitle?: string;
  format: QuestionFormat;
  cognitiveLevel: CognitiveLevel;
  content: string;
  stimulus?: string; // Scenario / Context / Experiment data
  // Dạng 1: Trắc nghiệm 4 lựa chọn
  options?: MultipleChoiceOption[];
  correctAnswer?: 'A' | 'B' | 'C' | 'D';
  // Dạng 2: Đúng - Sai 4 ý a, b, c, d
  subItems?: TrueFalseSubItem[];
  // Dạng 3: Trả lời ngắn
  acceptableAnswers?: string[];
  numericValue?: number;
  unit?: string;
  tolerance?: number;
  // Lời giải và phân tích
  explanation: string;
  calculationSteps?: string[];
  mistakesAnalysis?: { option: string; reason: string }[];
  reviewedByTeacher: boolean;
  status: 'approved' | 'pending_approval';
  createdDate?: string;
  createdBy?: string;
}

export type PracticeMode =
  | 'full_chapter'
  | 'by_lesson'
  | 'by_format'
  | 'wrong_questions_only'
  | 'comprehensive';

export interface PracticeSessionResult {
  id: string;
  studentId: string;
  studentName: string;
  grade: Grade;
  chapterId: string;
  chapterTitle: string;
  mode: PracticeMode;
  targetQuestionsCount: number;
  startTime: number;
  endTime: number;
  durationSeconds: number;
  score: number; // 0 - 10
  maxScore: number; // 10
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  questions: Question[];
  userAnswers: Record<string, any>;
  flags: Record<string, boolean>;
  detailsPerQuestion: Record<
    string,
    {
      isCorrect: boolean;
      earnedPoints: number;
      maxPoints: number;
      userAnswer: any;
      correctAnswer: any;
      explanation: string;
      subResults?: {
        id: string;
        userVal: boolean | null;
        correctVal: boolean;
        isCorrect: boolean;
      }[];
    }
  >;
  performanceByFormat: Record<
    QuestionFormat,
    { total: number; correct: number; earnedPoints: number; maxPoints: number }
  >;
  performanceByLevel: Record<
    CognitiveLevel,
    { total: number; correct: number; earnedPoints: number; maxPoints: number }
  >;
  weakTopicsSuggested: string[];
}

export interface StudentStats {
  totalAttempts: number;
  totalQuestionsPracticed: number;
  averageScore: number;
  highestScore: number;
  completedChapters: string[];
  wrongQuestionIds: string[];
  history: {
    id: string;
    date: string;
    chapterTitle: string;
    grade: Grade;
    score: number;
    durationSeconds: number;
    correctCount: number;
    totalCount: number;
  }[];
}
