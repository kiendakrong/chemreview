import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ChemText } from '../utils/chemistry';
import {
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Send,
  HelpCircle,
  X,
} from 'lucide-react';

export const QuizActiveView: React.FC = () => {
  const {
    activeQuestions,
    userAnswers,
    setAnswer,
    flags,
    toggleFlag,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    timeRemainingSeconds,
    setTimeRemainingSeconds,
    submitQuiz,
    selectedChapter,
    setCurrentView,
  } = useApp();

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showQuickTheoryModal, setShowQuickTheoryModal] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    if (timeRemainingSeconds === null) return;
    if (timeRemainingSeconds <= 0) {
      // Auto submit when time runs out
      submitQuiz();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemainingSeconds((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemainingSeconds]);

  if (activeQuestions.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
        <p className="text-slate-500 text-sm">Không có câu hỏi nào trong lượt này.</p>
        <button
          onClick={() => setCurrentView('quiz-setup')}
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-xl text-xs font-bold"
        >
          Thiết lập lại bài làm
        </button>
      </div>
    );
  }

  const currentQ = activeQuestions[currentQuestionIndex];
  const isFlagged = flags[currentQ?.id] || false;
  const currentAnswer = userAnswers[currentQ?.id];

  // Calculate answered count
  const answeredCount = activeQuestions.filter((q) => {
    const ans = userAnswers[q.id];
    if (ans === undefined || ans === null) return false;
    if (q.format === 'multiple_choice') return typeof ans === 'string' && ans !== '';
    if (q.format === 'true_false') {
      return (
        typeof ans === 'object' &&
        Object.values(ans).some((v) => v !== null && v !== undefined)
      );
    }
    if (q.format === 'short_answer') return String(ans).trim() !== '';
    return false;
  }).length;

  const unansweredCount = activeQuestions.length - answeredCount;

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-5 pb-16">
      {/* Top Bar: Progress, Timer, Flag, and Submit */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3 sticky top-16 z-30">
        <div className="flex items-center space-x-3">
          <div className="text-xs font-bold text-slate-800">
            Câu <span className="text-base text-teal-700">{currentQuestionIndex + 1}</span> / {activeQuestions.length}
          </div>
          <div className="hidden sm:flex items-center space-x-1.5 text-xs text-slate-500 font-semibold pl-3 border-l border-slate-200">
            <span>Đã làm:</span>
            <span className="text-emerald-600 font-bold">{answeredCount}</span>
            <span>• Chưa làm:</span>
            <span className="text-amber-600 font-bold">{unansweredCount}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Quick theory look-up modal */}
          <button
            onClick={() => setShowQuickTheoryModal(true)}
            className="px-2.5 py-1.5 rounded-xl text-slate-600 hover:text-teal-700 hover:bg-teal-50 border border-slate-200 text-xs font-bold flex items-center space-x-1.5 transition-colors"
            title="Tra cứu nhanh lý thuyết"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tra cứu lý thuyết</span>
          </button>

          {/* Timer Display */}
          {timeRemainingSeconds !== null && (
            <div
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center space-x-1.5 border ${
                timeRemainingSeconds < 180
                  ? 'bg-rose-50 text-rose-700 border-rose-200 animate-pulse'
                  : 'bg-slate-100 text-slate-800 border-slate-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(timeRemainingSeconds)}</span>
            </div>
          )}

          {/* Flag Toggle */}
          <button
            onClick={() => toggleFlag(currentQ.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors ${
              isFlagged
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
            }`}
            title="Đánh dấu câu cần xem lại"
          >
            <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current text-amber-600' : ''}`} />
            <span className="hidden sm:inline">Gắn cờ</span>
          </button>

          {/* Submit Button */}
          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center space-x-1.5 shadow-xs shadow-teal-600/20 transition-all hover:scale-102"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Nộp bài</span>
          </button>
        </div>
      </div>

      {/* Question Navigation Palette */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs flex items-center overflow-x-auto space-x-1.5 scrollbar-none">
        {activeQuestions.map((q, idx) => {
          const isCurrent = idx === currentQuestionIndex;
          const isQFlagged = flags[q.id];
          const hasAnswer =
            userAnswers[q.id] !== undefined &&
            userAnswers[q.id] !== null &&
            (typeof userAnswers[q.id] === 'string'
              ? userAnswers[q.id].trim() !== ''
              : typeof userAnswers[q.id] === 'object'
              ? Object.values(userAnswers[q.id]).some((v) => v !== null && v !== undefined)
              : false);

          return (
            <button
              key={q.id}
              onClick={() => setCurrentQuestionIndex(idx)}
              className={`relative min-w-8 h-8 rounded-lg text-xs font-bold transition-all shrink-0 flex items-center justify-center ${
                isCurrent
                  ? 'ring-2 ring-teal-600 ring-offset-1 bg-slate-900 text-white'
                  : hasAnswer
                  ? 'bg-teal-50 text-teal-800 border border-teal-300 font-extrabold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{idx + 1}</span>
              {isQFlagged && (
                <span className="w-2 h-2 rounded-full bg-amber-500 absolute -top-0.5 -right-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
        {/* Question Header: Format & Cognitive Level */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase bg-teal-50 text-teal-800 border border-teal-200">
              {currentQ.format === 'multiple_choice'
                ? 'Dạng 1: Nhiều lựa chọn'
                : currentQ.format === 'true_false'
                ? 'Dạng 2: Đúng - Sai'
                : 'Dạng 3: Trả lời ngắn'}
            </span>

            <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold text-slate-600 bg-slate-100">
              {currentQ.cognitiveLevel === 'know'
                ? 'Mức độ Biết'
                : currentQ.cognitiveLevel === 'understand'
                ? 'Mức độ Hiểu'
                : 'Mức độ Vận dụng'}
            </span>
          </div>

          <span className="text-xs text-slate-400 font-medium">
            {currentQ.chapterTitle}
          </span>
        </div>

        {/* Question Context / Stimulus if any */}
        {currentQ.stimulus && (
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            <div className="font-bold text-teal-800 text-[11px] uppercase mb-1">
              Ngữ liệu / Tình huống thực nghiệm:
            </div>
            <ChemText content={currentQ.stimulus} />
          </div>
        )}

        {/* Question Content */}
        <div className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
          <ChemText content={currentQ.content} />
        </div>

        {/* INPUT OPTIONS BASED ON QUESTION FORMAT */}
        {/* DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN */}
        {currentQ.format === 'multiple_choice' && currentQ.options && (
          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt) => {
              const isSelected = currentAnswer === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setAnswer(currentQ.id, opt.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start space-x-3.5 ${
                    isSelected
                      ? 'border-teal-600 bg-teal-50/60 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 bg-white'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-teal-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {opt.id}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 font-medium pt-0.5 leading-relaxed">
                    <ChemText content={opt.text} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* DẠNG 2: ĐÚNG - SAI 4 Ý (a, b, c, d) */}
        {currentQ.format === 'true_false' && currentQ.subItems && (
          <div className="space-y-3 pt-2">
            <div className="text-xs text-slate-500 font-medium italic mb-2">
              Hãy đánh giá mỗi mệnh đề sau là <strong>Đúng</strong> hoặc <strong>Sai</strong>:
            </div>
            {currentQ.subItems.map((sub) => {
              const subAnswer = currentAnswer ? currentAnswer[sub.id] : null;
              return (
                <div
                  key={sub.id}
                  className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 rounded-md bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0">
                      {sub.id}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      <ChemText content={sub.text} />
                    </span>
                  </div>

                  {/* True / False Selector */}
                  <div className="flex items-center space-x-2 shrink-0 self-end sm:self-auto">
                    <button
                      type="button"
                      onClick={() =>
                        setAnswer(currentQ.id, {
                          ...(currentAnswer || {}),
                          [sub.id]: true,
                        })
                      }
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        subAnswer === true
                          ? 'bg-teal-600 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Đúng
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setAnswer(currentQ.id, {
                          ...(currentAnswer || {}),
                          [sub.id]: false,
                        })
                      }
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        subAnswer === false
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Sai
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN */}
        {currentQ.format === 'short_answer' && (
          <div className="pt-2 space-y-3">
            <div className="text-xs text-slate-600 font-medium">
              Nhập đáp án số hoặc công thức/giá trị tính toán vào ô bên dưới:
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={currentAnswer || ''}
                onChange={(e) => setAnswer(currentQ.id, e.target.value)}
                placeholder="Ví dụ: 12.5 hoặc 12,5..."
                className="max-w-md w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-teal-600 focus:outline-none text-base font-bold text-slate-900 bg-white placeholder:text-slate-400"
              />
              {currentQ.unit && (
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-3 rounded-xl border border-slate-200">
                  {currentQ.unit}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-400">
              * Lưu ý: Có thể dùng dấu chấm (.) hoặc dấu phẩy (,) cho số thập phân.
            </p>
          </div>
        )}

        {/* Bottom Navigation Buttons */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors ${
              currentQuestionIndex === 0
                ? 'opacity-30 cursor-not-allowed text-slate-400'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Câu trước</span>
          </button>

          {currentQuestionIndex < activeQuestions.length - 1 ? (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center space-x-1.5 shadow-xs transition-colors"
            >
              <span>Câu kế tiếp</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-6 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-extrabold flex items-center space-x-1.5 shadow-xs shadow-teal-600/20 transition-all hover:scale-102"
            >
              <span>Xem lại & Nộp bài</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Confirmation Modal to Submit Quiz */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <h3 className="font-extrabold text-slate-900 text-lg mb-2">
              Xác nhận nộp bài
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Hệ thống sẽ chấm điểm tự động và hiển thị phân tích lời giải chi tiết cho tất cả các câu.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-600">Tổng số câu hỏi:</span>
                <span className="font-bold text-slate-900">{activeQuestions.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Đã trả lời:</span>
                <span className="font-bold text-emerald-600">{answeredCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Chưa trả lời:</span>
                <span className="font-bold text-amber-600">{unansweredCount}</span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <div className="p-3 bg-amber-50 text-amber-900 border border-amber-200 rounded-xl text-xs mb-5 flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Bạn còn <strong>{unansweredCount}</strong> câu chưa trả lời. Những câu chưa làm sẽ không được tính điểm.
                </span>
              </div>
            )}

            <div className="flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
              >
                Tiếp tục làm bài
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSubmitModal(false);
                  submitQuiz();
                }}
                className="px-5 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-black rounded-xl shadow-xs transition-colors"
              >
                Nộp bài ngay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Theory Lookup Modal */}
      {showQuickTheoryModal && selectedChapter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl border border-slate-100">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-teal-800 font-bold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>Tra cứu nhanh: {selectedChapter.title}</span>
              </div>
              <button
                onClick={() => setShowQuickTheoryModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 text-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="bg-teal-50/60 p-4 rounded-xl border border-teal-100">
                <h4 className="font-bold text-teal-900 mb-2">Kiến thức trọng tâm:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {selectedChapter.keyKnowledge.map((item, i) => (
                    <li key={i}>
                      <ChemText content={item} />
                    </li>
                  ))}
                </ul>
              </div>

              {selectedChapter.formulas.length > 0 && (
                <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Công thức áp dụng:</h4>
                  {selectedChapter.formulas.map((f, i) => (
                    <div key={i} className="mb-2">
                      <span className="font-semibold">{f.name}: </span>
                      <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-blue-200">
                        {f.formula}
                      </code>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-3 border-t border-slate-100 text-right">
              <button
                onClick={() => setShowQuickTheoryModal(false)}
                className="px-4 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-bold"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
