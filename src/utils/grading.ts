import { Question, QuestionFormat, CognitiveLevel, PracticeSessionResult, PracticeMode, Grade } from '../types';

/**
 * Normalizes user answer for short-answer questions.
 * Handles decimal points, commas, whitespace, and basic unit stripping.
 */
export function normalizeShortAnswer(text: string): string {
  if (!text) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/,/g, '.'); // Vietnamese decimal comma to dot
}

/**
 * Checks if a short answer matches the key, supporting numeric tolerance and alternative representations.
 */
export function evaluateShortAnswer(
  userRawInput: string | undefined,
  question: Question
): { isCorrect: boolean; normalizedUser: string } {
  if (!userRawInput || userRawInput.trim() === '') {
    return { isCorrect: false, normalizedUser: '' };
  }

  const normalizedUser = normalizeShortAnswer(userRawInput);

  // 1. Direct match with acceptable answers list
  if (question.acceptableAnswers && question.acceptableAnswers.length > 0) {
    for (const alt of question.acceptableAnswers) {
      if (normalizeShortAnswer(alt) === normalizedUser) {
        return { isCorrect: true, normalizedUser };
      }
    }
  }

  // 2. Numeric comparison if numericValue is defined
  if (typeof question.numericValue === 'number') {
    // Strip possible units like 'g', 'gam', 'ml', 'l', 'lit', 'm', 'mol', '%', 'kj'
    const cleanNumericString = normalizedUser.replace(/[a-z%°]/g, '');
    const userNumber = parseFloat(cleanNumericString);

    if (!isNaN(userNumber)) {
      const tolerance = typeof question.tolerance === 'number' ? question.tolerance : 0.05;
      if (Math.abs(userNumber - question.numericValue) <= tolerance) {
        return { isCorrect: true, normalizedUser };
      }
    }
  }

  return { isCorrect: false, normalizedUser };
}

/**
 * Scores a True/False question based on the official GDPT 2018 grading matrix:
 * 1 item correct: 10%
 * 2 items correct: 25%
 * 3 items correct: 50%
 * 4 items correct: 100%
 */
export function scoreTrueFalseQuestion(
  userAnswers: Record<string, boolean | null> | undefined,
  question: Question
): {
  earnedRatio: number;
  correctSubCount: number;
  subResults: { id: string; userVal: boolean | null; correctVal: boolean; isCorrect: boolean }[];
} {
  const subItems = question.subItems || [];
  if (subItems.length === 0) {
    return { earnedRatio: 0, correctSubCount: 0, subResults: [] };
  }

  let correctCount = 0;
  const subResults = subItems.map((item) => {
    const userVal = userAnswers ? userAnswers[item.id] ?? null : null;
    const isCorrect = userVal !== null && userVal === item.isCorrect;
    if (isCorrect) correctCount++;
    return {
      id: item.id,
      userVal,
      correctVal: item.isCorrect,
      isCorrect,
    };
  });

  let earnedRatio = 0;
  if (correctCount === 1) earnedRatio = 0.1;
  else if (correctCount === 2) earnedRatio = 0.25;
  else if (correctCount === 3) earnedRatio = 0.5;
  else if (correctCount === 4) earnedRatio = 1.0;

  return {
    earnedRatio,
    correctSubCount: correctCount,
    subResults,
  };
}

/**
 * Grades the entire practice session and produces a comprehensive result report.
 */
export function gradePracticeSession({
  sessionId,
  studentId,
  studentName,
  grade,
  chapterId,
  chapterTitle,
  mode,
  questions,
  userAnswers,
  flags,
  startTime,
  endTime,
}: {
  sessionId: string;
  studentId: string;
  studentName: string;
  grade: Grade;
  chapterId: string;
  chapterTitle: string;
  mode: PracticeMode;
  questions: Question[];
  userAnswers: Record<string, any>;
  flags: Record<string, boolean>;
  startTime: number;
  endTime: number;
}): PracticeSessionResult {
  const totalQuestions = questions.length;
  const maxScore = 10.0;
  const pointsPerQuestion = totalQuestions > 0 ? maxScore / totalQuestions : 0;

  let totalEarnedPoints = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const detailsPerQuestion: PracticeSessionResult['detailsPerQuestion'] = {};

  const performanceByFormat: PracticeSessionResult['performanceByFormat'] = {
    multiple_choice: { total: 0, correct: 0, earnedPoints: 0, maxPoints: 0 },
    true_false: { total: 0, correct: 0, earnedPoints: 0, maxPoints: 0 },
    short_answer: { total: 0, correct: 0, earnedPoints: 0, maxPoints: 0 },
  };

  const performanceByLevel: PracticeSessionResult['performanceByLevel'] = {
    know: { total: 0, correct: 0, earnedPoints: 0, maxPoints: 0 },
    understand: { total: 0, correct: 0, earnedPoints: 0, maxPoints: 0 },
    apply: { total: 0, correct: 0, earnedPoints: 0, maxPoints: 0 },
  };

  const weakTopics = new Set<string>();

  for (const q of questions) {
    const rawAnswer = userAnswers[q.id];
    let isFullyCorrect = false;
    let earnedPoints = 0;
    let subResults: any = undefined;

    // Format stats increment
    performanceByFormat[q.format].total += 1;
    performanceByFormat[q.format].maxPoints += pointsPerQuestion;
    performanceByLevel[q.cognitiveLevel].total += 1;
    performanceByLevel[q.cognitiveLevel].maxPoints += pointsPerQuestion;

    if (q.format === 'multiple_choice') {
      if (!rawAnswer) {
        unansweredCount++;
      } else if (rawAnswer === q.correctAnswer) {
        isFullyCorrect = true;
        earnedPoints = pointsPerQuestion;
        correctCount++;
      } else {
        incorrectCount++;
        if (q.lessonTitle) weakTopics.add(q.lessonTitle);
      }

      detailsPerQuestion[q.id] = {
        isCorrect: isFullyCorrect,
        earnedPoints,
        maxPoints: pointsPerQuestion,
        userAnswer: rawAnswer || 'Chưa trả lời',
        correctAnswer: q.correctAnswer || '',
        explanation: q.explanation,
      };
    } else if (q.format === 'true_false') {
      const hasAnyAnswer =
        rawAnswer && typeof rawAnswer === 'object' && Object.values(rawAnswer).some((v) => v !== null && v !== undefined);

      if (!hasAnyAnswer) {
        unansweredCount++;
      }

      const tfEval = scoreTrueFalseQuestion(rawAnswer, q);
      subResults = tfEval.subResults;
      earnedPoints = pointsPerQuestion * tfEval.earnedRatio;
      isFullyCorrect = tfEval.earnedRatio === 1.0;

      if (isFullyCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
        if (q.lessonTitle) weakTopics.add(q.lessonTitle);
      }

      const formattedUserTf = q.subItems?.reduce((acc: any, sub) => {
        acc[sub.id] = rawAnswer ? rawAnswer[sub.id] : null;
        return acc;
      }, {});

      const formattedCorrectTf = q.subItems?.reduce((acc: any, sub) => {
        acc[sub.id] = sub.isCorrect;
        return acc;
      }, {});

      detailsPerQuestion[q.id] = {
        isCorrect: isFullyCorrect,
        earnedPoints,
        maxPoints: pointsPerQuestion,
        userAnswer: formattedUserTf,
        correctAnswer: formattedCorrectTf,
        explanation: q.explanation,
        subResults,
      };
    } else if (q.format === 'short_answer') {
      if (!rawAnswer || String(rawAnswer).trim() === '') {
        unansweredCount++;
        incorrectCount++;
        if (q.lessonTitle) weakTopics.add(q.lessonTitle);
      } else {
        const shortEval = evaluateShortAnswer(rawAnswer, q);
        isFullyCorrect = shortEval.isCorrect;
        if (isFullyCorrect) {
          earnedPoints = pointsPerQuestion;
          correctCount++;
        } else {
          incorrectCount++;
          if (q.lessonTitle) weakTopics.add(q.lessonTitle);
        }
      }

      const primaryCorrectAnswer =
        q.acceptableAnswers && q.acceptableAnswers.length > 0
          ? q.acceptableAnswers[0]
          : q.numericValue !== undefined
          ? `${q.numericValue} ${q.unit || ''}`
          : '';

      detailsPerQuestion[q.id] = {
        isCorrect: isFullyCorrect,
        earnedPoints,
        maxPoints: pointsPerQuestion,
        userAnswer: rawAnswer || 'Chưa trả lời',
        correctAnswer: primaryCorrectAnswer,
        explanation: q.explanation,
      };
    }

    totalEarnedPoints += earnedPoints;

    if (isFullyCorrect) {
      performanceByFormat[q.format].correct += 1;
      performanceByLevel[q.cognitiveLevel].correct += 1;
    }
    performanceByFormat[q.format].earnedPoints += earnedPoints;
    performanceByLevel[q.cognitiveLevel].earnedPoints += earnedPoints;
  }

  // Round score to 2 decimal places, clamped between 0 and 10
  const finalScore = Math.min(10, Math.max(0, Math.round(totalEarnedPoints * 100) / 100));

  return {
    id: sessionId,
    studentId,
    studentName,
    grade,
    chapterId,
    chapterTitle,
    mode,
    targetQuestionsCount: totalQuestions,
    startTime,
    endTime,
    durationSeconds: Math.max(1, Math.round((endTime - startTime) / 1000)),
    score: finalScore,
    maxScore: 10.0,
    correctCount,
    incorrectCount,
    unansweredCount,
    questions,
    userAnswers,
    flags,
    detailsPerQuestion,
    performanceByFormat,
    performanceByLevel,
    weakTopicsSuggested: Array.from(weakTopics),
  };
}
