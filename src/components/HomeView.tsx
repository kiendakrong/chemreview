import React from 'react';
import { useApp } from '../context/AppContext';
import { Grade } from '../types';
import {
  BookOpen,
  FlaskConical,
  Award,
  Clock,
  ArrowRight,
  Sparkles,
  AlertCircle,
  BarChart2,
  CheckCircle,
  FileText,
  PlayCircle,
  Bookmark,
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const {
    currentUser,
    currentGrade,
    setCurrentGrade,
    chapters,
    questions,
    selectChapterById,
    setCurrentView,
    history,
    wrongQuestionIds,
    startQuiz,
  } = useApp();

  const gradeChapters = chapters
    .filter((c) => c.grade === currentGrade)
    .sort((a, b) => a.order - b.order);

  // Stats calculation
  const totalAttempts = history.length;
  const avgScore =
    totalAttempts > 0
      ? (history.reduce((sum, h) => sum + h.score, 0) / totalAttempts).toFixed(1)
      : '0.0';
  const highestScore =
    totalAttempts > 0 ? Math.max(...history.map((h) => h.score)).toFixed(1) : '0.0';
  const completedChaptersCount = new Set(history.map((h) => h.chapterId)).size;

  // Find last practiced chapter
  const lastSession = history[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-blue-950 text-white p-6 sm:p-10 shadow-xl border border-slate-800">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-teal-300 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>Chương trình GDPT 2018 • Trường THPT Đakrông</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-3">
            Chào mừng {currentUser.name}! 👋
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6 max-w-2xl">
            Hệ thống ôn luyện Hóa học toàn diện: nắm chắc lý thuyết trọng tâm, thành thạo{' '}
            <strong className="text-white font-semibold">3 dạng thức câu hỏi mới</strong> (Nhiều lựa chọn, Đúng - Sai, Trả lời ngắn), tự động chấm điểm và chữa chi tiết từng bước.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {lastSession ? (
              <button
                onClick={() => {
                  selectChapterById(lastSession.chapterId);
                  setCurrentView('quiz-setup');
                }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/25 transition-all hover:scale-102"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Tiếp tục ôn tập: {lastSession.chapterTitle}</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  if (gradeChapters[0]) {
                    selectChapterById(gradeChapters[0].id);
                    setCurrentView('theory');
                  }
                }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/25 transition-all hover:scale-102"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Bắt đầu ôn tập Lớp {currentGrade}</span>
              </button>
            )}

            {wrongQuestionIds.length > 0 && (
              <button
                onClick={() => setCurrentView('wrong-questions')}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 font-semibold text-xs sm:text-sm transition-all"
              >
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Luyện lại {wrongQuestionIds.length} câu đã sai</span>
              </button>
            )}

            <button
              onClick={() => {
                startQuiz({
                  chapterId: 'comprehensive',
                  mode: 'comprehensive',
                  questionCount: 15,
                  timeLimitMinutes: 25,
                });
              }}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/15 transition-all"
            >
              <FlaskConical className="w-4 h-4" />
              <span>Đề tổng hợp Lớp {currentGrade}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Progress & Stat Cards */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900">{totalAttempts}</div>
            <div className="text-xs text-slate-500 font-medium">Lượt làm bài</div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900">{highestScore}/10</div>
            <div className="text-xs text-slate-500 font-medium">Điểm cao nhất</div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <BarChart2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900">{avgScore}</div>
            <div className="text-xs text-slate-500 font-medium">Điểm trung bình</div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900">
              {completedChaptersCount}/{gradeChapters.length}
            </div>
            <div className="text-xs text-slate-500 font-medium">Chương đã ôn tập</div>
          </div>
        </div>
      </section>

      {/* Grade Selector & Curriculum Header */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Chương trình Hóa học Lớp {currentGrade}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Thực hiện quy trình: <strong className="text-teal-700">Học Lý thuyết tóm tắt</strong> → <strong className="text-blue-700">Làm bài luyện tập</strong> → <strong className="text-emerald-700">Xem giải thích chi tiết</strong>.
            </p>
          </div>

          {/* Quick grade pills for easy mobile switching */}
          <div className="inline-flex p-1 bg-slate-200/70 rounded-xl self-start sm:self-auto">
            {([10, 11, 12] as Grade[]).map((g) => (
              <button
                key={g}
                onClick={() => setCurrentGrade(g)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentGrade === g
                    ? 'bg-white text-teal-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lớp {g}
              </button>
            ))}
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gradeChapters.map((chapter) => {
            const chapterQuestions = questions.filter((q) => q.chapterId === chapter.id);
            const chapterAttempts = history.filter((h) => h.chapterId === chapter.id);
            const bestScore =
              chapterAttempts.length > 0
                ? Math.max(...chapterAttempts.map((h) => h.score))
                : null;

            return (
              <div
                key={chapter.id}
                className="group relative bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200/60">
                      {chapter.code}
                    </span>
                    {bestScore !== null ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Cao nhất: {bestScore.toFixed(1)} đ
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-slate-400">
                        Chưa làm bài
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-teal-700 transition-colors mb-2">
                    {chapter.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {chapter.description}
                  </p>

                  {/* Badges Info */}
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-500 mb-4">
                    <span className="inline-flex items-center space-x-1 px-2 py-1 rounded-md bg-slate-50 border border-slate-100">
                      <Bookmark className="w-3 h-3 text-slate-400" />
                      <span>{chapter.lessons.length} bài học</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2 py-1 rounded-md bg-slate-50 border border-slate-100">
                      <FlaskConical className="w-3 h-3 text-teal-600" />
                      <span>{chapterQuestions.length} câu trong ngân hàng</span>
                    </span>
                  </div>
                </div>

                {/* Workflow Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center space-x-2">
                  <button
                    onClick={() => {
                      selectChapterById(chapter.id);
                      setCurrentView('theory');
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                    <span>Lý thuyết</span>
                  </button>

                  <button
                    onClick={() => {
                      selectChapterById(chapter.id);
                      setCurrentView('quiz-setup');
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-xs shadow-teal-600/20 transition-all hover:scale-102"
                  >
                    <span>Luyện tập</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3 Question Formats Guide Box */}
      <section className="bg-gradient-to-r from-teal-50/70 via-cyan-50/70 to-blue-50/70 rounded-2xl p-6 border border-teal-100">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-xl bg-teal-600 text-white shadow-sm">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base mb-1">
              Cấu trúc câu hỏi bám sát định dạng đề thi tốt nghiệp THPT mới
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
              Hệ thống được thiết kế theo 3 dạng thức khảo thí của Bộ Giáo dục và Đào tạo:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              <div className="bg-white/90 p-3 rounded-xl border border-teal-200/60 shadow-2xs">
                <div className="text-xs font-bold text-teal-800">Dạng 1: Nhiều lựa chọn</div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  4 phương án A, B, C, D; chọn 1 đáp án đúng nhất.
                </div>
              </div>
              <div className="bg-white/90 p-3 rounded-xl border border-blue-200/60 shadow-2xs">
                <div className="text-xs font-bold text-blue-800">Dạng 2: Đúng - Sai</div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  1 ngữ liệu bối cảnh + 4 mệnh đề a, b, c, d đánh giá Đúng/Sai (thang điểm tích lũy chuẩn 0.1 - 0.25 - 0.5 - 1.0 đ).
                </div>
              </div>
              <div className="bg-white/90 p-3 rounded-xl border border-indigo-200/60 shadow-2xs">
                <div className="text-xs font-bold text-indigo-800">Dạng 3: Trả lời ngắn</div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  Học sinh tự giải và điền kết quả số/công thức (hỗ trợ kiểm tra sai số và dạng tương đương).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
