import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChemText } from '../utils/chemistry';
import {
  AlertTriangle,
  Play,
  RotateCcw,
  CheckCircle2,
  Trash2,
  BookOpen,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const WrongQuestionsView: React.FC = () => {
  const { wrongQuestionIds, questions, startQuiz, setCurrentView } = useApp();

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const wrongQuestions = questions.filter((q) => wrongQuestionIds.includes(q.id));

  const handleStartPractice = () => {
    if (wrongQuestions.length === 0) return;
    startQuiz({
      chapterId: 'wrong_pool',
      mode: 'wrong_questions_only',
      questionCount: Math.min(20, wrongQuestions.length),
      timeLimitMinutes: 0,
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800 uppercase">
              Sổ tay sai sót
            </span>
            <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
              Ngân hàng câu hỏi cần khắc phục ({wrongQuestionIds.length})
            </h1>
          </div>
        </div>

        {wrongQuestions.length > 0 && (
          <button
            onClick={handleStartPractice}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center space-x-2 shadow-md shadow-amber-500/20 transition-all hover:scale-102"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Luyện tập ngay các câu này</span>
          </button>
        )}
      </div>

      {/* Main List */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
        {wrongQuestions.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center font-bold">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Tuyệt vời! Bạn không có câu hỏi nào bị sai.</h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
              Khi bạn làm bài kiểm tra và trả lời chưa chính xác, câu hỏi sẽ tự động được lưu vào đây để bạn rèn luyện lại cho đến khi thành thạo.
            </p>
            <button
              onClick={() => setCurrentView('home')}
              className="px-4 py-2 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-500 transition-colors"
            >
              Quay lại luyện tập các chương
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-xs text-slate-500 font-medium">
              Dưới đây là các câu hỏi bạn từng trả lời sai trong các lần luyện tập trước. Hãy xem lại lời giải chi tiết và làm lại để biến điểm yếu thành điểm mạnh!
            </p>

            {wrongQuestions.map((q, idx) => {
              const isExpanded = expandedId === q.id;

              return (
                <div
                  key={q.id}
                  className="rounded-2xl border border-amber-200/80 bg-amber-50/20 p-5 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-md bg-amber-500 text-white font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-700">
                        {q.format === 'multiple_choice'
                          ? 'Dạng 1: Nhiều lựa chọn'
                          : q.format === 'true_false'
                          ? 'Dạng 2: Đúng - Sai'
                          : 'Dạng 3: Trả lời ngắn'}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        • {q.chapterTitle}
                      </span>
                    </div>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : q.id)}
                      className="text-xs font-bold text-amber-800 hover:text-amber-900 flex items-center space-x-1"
                    >
                      <span>{isExpanded ? 'Thu gọn' : 'Xem lời giải'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {q.stimulus && (
                    <div className="bg-white p-3 rounded-xl border border-amber-200/60 text-xs text-slate-700">
                      <ChemText content={q.stimulus} />
                    </div>
                  )}

                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    <ChemText content={q.content} />
                  </div>

                  {/* Expanded Explanation */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-amber-200/60 space-y-2 text-xs sm:text-sm bg-white p-4 rounded-xl border border-amber-200">
                      <div className="font-extrabold text-teal-800 uppercase text-xs flex items-center space-x-1">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Lời giải thích chi tiết:</span>
                      </div>
                      <div className="text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                        <ChemText content={q.explanation} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
