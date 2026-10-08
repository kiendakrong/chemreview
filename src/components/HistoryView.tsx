import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  BarChart3,
  RotateCcw,
  Trash2,
  Calendar,
  ArrowRight,
  TrendingUp,
  FileText,
} from 'lucide-react';

export const HistoryView: React.FC = () => {
  const { history, clearHistory, setCurrentView, startQuiz, questions } = useApp();

  const totalAttempts = history.length;
  const avgScore =
    totalAttempts > 0
      ? (history.reduce((acc, h) => acc + h.score, 0) / totalAttempts).toFixed(1)
      : '0.0';
  const highestScore =
    totalAttempts > 0 ? Math.max(...history.map((h) => h.score)).toFixed(1) : '0.0';
  const totalQuestionsPracticed = history.reduce((acc, h) => acc + h.targetQuestionsCount, 0);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-800 uppercase">
            Học bạ & Tiến độ cá nhân
          </span>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-1">
            Lịch sử ôn tập & Thống kê kết quả
          </h1>
        </div>

        {totalAttempts > 0 && (
          <button
            onClick={() => {
              if (confirm('Bạn có chắc muốn xóa toàn bộ lịch sử các lần làm bài?')) {
                clearHistory();
              }
            }}
            className="px-3 py-1.5 rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200 text-xs font-bold flex items-center space-x-1.5 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Xóa lịch sử</span>
          </button>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="text-xs text-slate-500 font-semibold">Tổng lượt làm bài</div>
          <div className="text-2xl font-black text-slate-900 mt-1">{totalAttempts}</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="text-xs text-slate-500 font-semibold">Điểm trung bình</div>
          <div className="text-2xl font-black text-teal-700 mt-1">{avgScore} / 10</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="text-xs text-slate-500 font-semibold">Điểm cao nhất</div>
          <div className="text-2xl font-black text-emerald-700 mt-1">{highestScore} / 10</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="text-xs text-slate-500 font-semibold">Tổng câu đã luyện</div>
          <div className="text-2xl font-black text-blue-700 mt-1">{totalQuestionsPracticed}</div>
        </div>
      </div>

      {/* History List */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-teal-600" />
          <span>Danh sách các lần luyện tập gần đây</span>
        </h2>

        {history.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <p className="text-slate-500 text-xs sm:text-sm">
              Bạn chưa thực hiện lượt làm bài nào. Hãy chọn một chương và bắt đầu thử sức ngay!
            </p>
            <button
              onClick={() => setCurrentView('home')}
              className="px-4 py-2 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-500 transition-colors"
            >
              Chọn chương ôn tập
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((item, idx) => {
              const formattedDate = new Date(item.endTime).toLocaleString('vi-VN', {
                dateStyle: 'short',
                timeStyle: 'short',
              });

              return (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-slate-200 hover:border-teal-300 transition-all bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-extrabold text-xs text-slate-500">#{history.length - idx}</span>
                      <span className="text-xs font-bold text-slate-900">{item.chapterTitle}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-200 text-slate-700">
                        Lớp {item.grade}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formattedDate}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{Math.floor(item.durationSeconds / 60)}p {item.durationSeconds % 60}s</span>
                      </span>
                      <span>•</span>
                      <span>
                        Đúng {item.correctCount}/{item.targetQuestionsCount} câu
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0 self-end sm:self-auto">
                    <div className="text-right">
                      <div className="text-base font-black text-teal-700">{item.score.toFixed(1)} đ</div>
                      <div className="text-[10px] text-slate-400 font-medium">Thang điểm 10</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
