import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChemText } from '../utils/chemistry';
import { QuestionFormat, CognitiveLevel } from '../types';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Clock,
  BarChart3,
  Flame,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileText,
  ListRestart,
  Sparkles,
} from 'lucide-react';

export const QuizResultView: React.FC = () => {
  const {
    lastResult,
    retryQuiz,
    practiceWrongQuestions,
    setCurrentView,
    selectedChapter,
  } = useApp();

  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [filterResult, setFilterResult] = useState<'all' | 'wrong_only' | 'correct_only'>('all');

  useEffect(() => {
    if (lastResult && lastResult.score >= 8.0) {
      // Trigger celebratory confetti for great results
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [lastResult]);

  if (!lastResult) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
        <p className="text-slate-500 text-sm">Chưa có kết quả bài làm gần nhất.</p>
        <button
          onClick={() => setCurrentView('home')}
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-xl text-xs font-bold"
        >
          Quay lại trang chủ
        </button>
      </div>
    );
  }

  const {
    score,
    maxScore,
    correctCount,
    incorrectCount,
    unansweredCount,
    targetQuestionsCount,
    durationSeconds,
    performanceByFormat,
    performanceByLevel,
    detailsPerQuestion,
    questions,
    weakTopicsSuggested,
  } = lastResult;

  const accuracy = Math.round((correctCount / Math.max(1, targetQuestionsCount)) * 100);

  // Performance classification
  const getGradeRank = (s: number) => {
    if (s >= 9.0) return { label: 'Xuất sắc! 🎉', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (s >= 8.0) return { label: 'Giỏi! 🌟', color: 'text-teal-700 bg-teal-50 border-teal-200' };
    if (s >= 6.5) return { label: 'Khá 👍', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    if (s >= 5.0) return { label: 'Trung bình 📚', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    return { label: 'Cần cố gắng thêm 💪', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  const rank = getGradeRank(score);

  const toggleExpand = (qId: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const filteredQuestions = questions.filter((q) => {
    const detail = detailsPerQuestion[q.id];
    if (filterResult === 'wrong_only') return !detail?.isCorrect;
    if (filterResult === 'correct_only') return detail?.isCorrect;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Result Hero Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            {/* Score Badge */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-teal-600 to-blue-600 text-white flex flex-col items-center justify-center shadow-lg shadow-teal-500/20 shrink-0">
              <span className="text-3xl sm:text-4xl font-black leading-none">{score}</span>
              <span className="text-[11px] font-semibold text-teal-100 uppercase tracking-widest mt-1">
                / {maxScore} đ
              </span>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold border ${rank.color}`}>
                  {rank.label}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {lastResult.chapterTitle}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                Kết quả bài làm của {lastResult.studentName}
              </h1>
              <div className="flex items-center space-x-3 text-xs text-slate-500 mt-2 font-medium">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Thời gian: {Math.floor(durationSeconds / 60)} phút {durationSeconds % 60} giây</span>
                </span>
                <span>•</span>
                <span>Độ chính xác: <strong className="text-teal-700">{accuracy}%</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Counter Chips */}
          <div className="grid grid-cols-3 gap-2.5 w-full md:w-auto">
            <div className="bg-emerald-50/80 border border-emerald-200 p-3 rounded-xl text-center">
              <div className="text-lg font-black text-emerald-700">{correctCount}</div>
              <div className="text-[10px] font-bold text-emerald-800 uppercase">Câu đúng</div>
            </div>
            <div className="bg-rose-50/80 border border-rose-200 p-3 rounded-xl text-center">
              <div className="text-lg font-black text-rose-700">{incorrectCount}</div>
              <div className="text-[10px] font-bold text-rose-800 uppercase">Câu sai</div>
            </div>
            <div className="bg-slate-100 border border-slate-200 p-3 rounded-xl text-center">
              <div className="text-lg font-black text-slate-700">{unansweredCount}</div>
              <div className="text-[10px] font-bold text-slate-600 uppercase">Bỏ trống</div>
            </div>
          </div>
        </div>

        {/* Action Buttons: Step 8 in workflow */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
          <button
            onClick={retryQuiz}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center space-x-2 transition-all hover:scale-102"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm lại bài này</span>
          </button>

          {incorrectCount > 0 && (
            <button
              onClick={practiceWrongQuestions}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center justify-center space-x-2 shadow-xs transition-all hover:scale-102"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Luyện lại {incorrectCount} câu đã làm sai</span>
            </button>
          )}

          <button
            onClick={() => setCurrentView('theory')}
            className="px-4 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-bold flex items-center justify-center space-x-2 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Ôn lại lý thuyết</span>
          </button>

          <button
            onClick={() => setCurrentView('history')}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center space-x-2 transition-colors"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Xem lịch sử kết quả</span>
          </button>
        </div>
      </div>

      {/* Breakdown by Format & Cognitive Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Breakdown by Format */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
          <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <FileText className="w-4 h-4 text-teal-600" />
            <span>Kết quả theo 3 dạng thức câu hỏi</span>
          </h3>

          <div className="space-y-2.5">
            {[
              { key: 'multiple_choice' as QuestionFormat, name: 'Dạng 1: Nhiều lựa chọn' },
              { key: 'true_false' as QuestionFormat, name: 'Dạng 2: Đúng - Sai' },
              { key: 'short_answer' as QuestionFormat, name: 'Dạng 3: Trả lời ngắn' },
            ].map(({ key, name }) => {
              const stat = performanceByFormat[key];
              if (!stat || stat.total === 0) return null;
              const pct = Math.round((stat.earnedPoints / Math.max(0.001, stat.maxPoints)) * 100);
              return (
                <div key={key} className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-800">{name}</span>
                    <span className="text-teal-700">
                      {stat.earnedPoints.toFixed(2)} / {stat.maxPoints.toFixed(2)} đ ({pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-teal-600 h-full rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Breakdown by Cognitive Level */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
          <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span>Kết quả theo mức độ nhận thức</span>
          </h3>

          <div className="space-y-2.5">
            {[
              { key: 'know' as CognitiveLevel, name: 'Mức độ Biết (40%)', color: 'bg-emerald-600' },
              { key: 'understand' as CognitiveLevel, name: 'Mức độ Hiểu (30%)', color: 'bg-blue-600' },
              { key: 'apply' as CognitiveLevel, name: 'Mức độ Vận dụng (30%)', color: 'bg-purple-600' },
            ].map(({ key, name, color }) => {
              const stat = performanceByLevel[key];
              if (!stat || stat.total === 0) return null;
              const pct = Math.round((stat.earnedPoints / Math.max(0.001, stat.maxPoints)) * 100);
              return (
                <div key={key} className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-800">{name}</span>
                    <span className="text-slate-900 font-extrabold">
                      {stat.correct}/{stat.total} câu ({pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className={`${color} h-full rounded-full transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Suggested Topics to Review */}
      {weakTopicsSuggested.length > 0 && (
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 shadow-2xs">
          <div className="flex items-center space-x-2 text-amber-900 font-extrabold text-xs uppercase mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Gợi ý kiến thức lý thuyết bạn cần xem lại:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {weakTopicsSuggested.map((topic, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-white border border-amber-300 text-xs font-bold text-amber-900 shadow-2xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Question Details Header & Filter */}
      <div className="flex items-center justify-between pt-2">
        <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
          Chi tiết từng câu hỏi & Lời giải bài bản
        </h2>

        <div className="inline-flex p-1 bg-slate-200/70 rounded-xl text-xs font-bold">
          <button
            onClick={() => setFilterResult('all')}
            className={`px-3 py-1 rounded-lg transition-all ${
              filterResult === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
            }`}
          >
            Tất cả ({questions.length})
          </button>
          <button
            onClick={() => setFilterResult('wrong_only')}
            className={`px-3 py-1 rounded-lg transition-all ${
              filterResult === 'wrong_only' ? 'bg-white text-rose-700 shadow-2xs' : 'text-slate-600'
            }`}
          >
            Câu sai ({incorrectCount})
          </button>
          <button
            onClick={() => setFilterResult('correct_only')}
            className={`px-3 py-1 rounded-lg transition-all ${
              filterResult === 'correct_only' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600'
            }`}
          >
            Câu đúng ({correctCount})
          </button>
        </div>
      </div>

      {/* Question Review Cards */}
      <div className="space-y-4">
        {filteredQuestions.map((q, idx) => {
          const detail = detailsPerQuestion[q.id];
          const isCorrect = detail?.isCorrect || false;
          const isExpanded = expandedQuestions[q.id] ?? true; // default expanded

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl border-2 transition-all p-5 sm:p-6 shadow-xs ${
                isCorrect ? 'border-emerald-200/80' : 'border-rose-200/80'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center space-x-2">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    {q.format === 'multiple_choice'
                      ? 'Dạng 1: Nhiều lựa chọn'
                      : q.format === 'true_false'
                      ? 'Dạng 2: Đúng - Sai'
                      : 'Dạng 3: Trả lời ngắn'}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                    • {q.cognitiveLevel === 'know' ? 'Biết' : q.cognitiveLevel === 'understand' ? 'Hiểu' : 'Vận dụng'}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center space-x-1 ${
                      isCorrect
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Đúng (+{detail?.earnedPoints.toFixed(2)} đ)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Chưa chính xác (+{detail?.earnedPoints.toFixed(2)} đ)</span>
                      </>
                    )}
                  </span>

                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="p-1 rounded text-slate-400 hover:text-slate-600"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Stimulus if any */}
              {q.stimulus && (
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 mb-3">
                  <span className="font-bold text-teal-800 text-[11px] uppercase mr-2">Ngữ liệu:</span>
                  <ChemText content={q.stimulus} />
                </div>
              )}

              {/* Question Text */}
              <div className="text-sm font-bold text-slate-900 mb-4">
                <ChemText content={q.content} />
              </div>

              {/* Answer comparison */}
              {isExpanded && (
                <div className="space-y-4 pt-2">
                  {/* Dạng 1: Comparison */}
                  {q.format === 'multiple_choice' && q.options && (
                    <div className="space-y-2">
                      {q.options.map((opt) => {
                        const isStudentChoice = detail?.userAnswer === opt.id;
                        const isCorrectKey = q.correctAnswer === opt.id;

                        let style = 'bg-slate-50/50 border-slate-200 text-slate-700';
                        if (isCorrectKey) {
                          style = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold';
                        } else if (isStudentChoice && !isCorrectKey) {
                          style = 'bg-rose-50 border-rose-300 text-rose-950 line-through';
                        }

                        return (
                          <div
                            key={opt.id}
                            className={`p-3 rounded-xl border flex items-center justify-between text-xs sm:text-sm ${style}`}
                          >
                            <div className="flex items-center space-x-2.5">
                              <span className="font-extrabold w-5">{opt.id}.</span>
                              <ChemText content={opt.text} />
                            </div>
                            <div className="flex items-center space-x-2 text-[11px] font-bold">
                              {isStudentChoice && (
                                <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                                  Bạn đã chọn
                                </span>
                              )}
                              {isCorrectKey && (
                                <span className="px-2 py-0.5 rounded bg-emerald-600 text-white">
                                  Đáp án đúng
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Dạng 2: True/False SubItem Details */}
                  {q.format === 'true_false' && detail?.subResults && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-700 mb-1">
                        Kết quả đánh giá từng mệnh đề (a, b, c, d):
                      </div>
                      {detail.subResults.map((sub, sIdx) => {
                        const originalSub = q.subItems?.find((item) => item.id === sub.id);
                        return (
                          <div
                            key={sub.id}
                            className={`p-3 rounded-xl border text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                              sub.isCorrect
                                ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                                : 'bg-rose-50/60 border-rose-200 text-rose-950'
                            }`}
                          >
                            <div className="flex items-start space-x-2">
                              <span className="font-extrabold text-xs">{sub.id})</span>
                              <span>
                                <ChemText content={originalSub?.text || ''} />
                              </span>
                            </div>

                            <div className="flex items-center space-x-2 shrink-0 text-xs font-bold self-end sm:self-auto">
                              <span>
                                Bạn chọn: <strong>{sub.userVal === true ? 'Đúng' : sub.userVal === false ? 'Sai' : 'Chưa chọn'}</strong>
                              </span>
                              <span>→</span>
                              <span className="text-emerald-700">
                                Chuẩn: <strong>{sub.correctVal ? 'Đúng' : 'Sai'}</strong>
                              </span>
                              {sub.isCorrect ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <XCircle className="w-4 h-4 text-rose-600" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Dạng 3: Short Answer Comparison */}
                  {q.format === 'short_answer' && (
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
                      <div>
                        Câu trả lời của bạn:{' '}
                        <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                          {detail?.userAnswer || '(Bỏ trống)'}
                        </strong>
                      </div>
                      <div>
                        Đáp án chuẩn xác:{' '}
                        <strong className="text-emerald-700">{detail?.correctAnswer}</strong>
                      </div>
                    </div>
                  )}

                  {/* Detailed Explanation & Math Calculations */}
                  <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 p-4 rounded-xl border border-teal-100 text-xs sm:text-sm text-slate-800 space-y-2.5">
                    <div className="font-extrabold text-teal-900 text-xs uppercase flex items-center space-x-1.5">
                      <HelpCircle className="w-4 h-4 text-teal-700" />
                      <span>Hướng dẫn giải chi tiết:</span>
                    </div>

                    <div className="leading-relaxed font-normal whitespace-pre-line text-slate-700">
                      <ChemText content={q.explanation} />
                    </div>

                    {/* Calculation steps if provided */}
                    {q.calculationSteps && q.calculationSteps.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-teal-100 space-y-1.5 bg-white p-3 rounded-lg border border-teal-100/60 font-mono text-xs">
                        <div className="font-bold text-slate-900 mb-1">Các bước tính toán:</div>
                        {q.calculationSteps.map((step, sIdx) => (
                          <div key={sIdx} className="text-slate-800">
                            <ChemText content={step} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
