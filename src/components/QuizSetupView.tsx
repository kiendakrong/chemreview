import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PracticeMode, QuestionFormat, CognitiveLevel } from '../types';
import {
  Settings2,
  Play,
  ArrowLeft,
  BookOpen,
  Clock,
  Layers,
  HelpCircle,
  BarChart,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const QuizSetupView: React.FC = () => {
  const {
    selectedChapter,
    currentGrade,
    chapters,
    questions,
    selectChapterById,
    startQuiz,
    setCurrentView,
    wrongQuestionIds,
  } = useApp();

  const [mode, setMode] = useState<PracticeMode>('full_chapter');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(15);
  const [filterFormat, setFilterFormat] = useState<QuestionFormat | 'all'>('all');
  const [filterLevel, setFilterLevel] = useState<CognitiveLevel | 'all'>('all');

  const gradeChapters = chapters.filter((c) => c.grade === currentGrade);

  // Available question count in bank for current selection
  const availableQuestionsCount = questions.filter((q) => {
    if (mode === 'wrong_questions_only') {
      return wrongQuestionIds.includes(q.id);
    }
    if (mode === 'comprehensive') {
      return q.grade === currentGrade;
    }
    return q.chapterId === selectedChapter?.id;
  }).length;

  // Calculate cognitive distribution
  const actualCount = Math.min(questionCount, Math.max(1, availableQuestionsCount));
  const countKnow = Math.round(actualCount * 0.4);
  const countUnderstand = Math.round(actualCount * 0.3);
  const countApply = Math.max(0, actualCount - countKnow - countUnderstand);

  const handleStart = () => {
    startQuiz({
      chapterId: selectedChapter?.id || 'all',
      mode,
      questionCount,
      timeLimitMinutes,
      filterFormat,
      filterLevel,
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCurrentView('theory')}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            title="Quay lại lý thuyết"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-800 uppercase">
              Bước 4: Thiết lập bài luyện tập
            </span>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Cấu hình bài ôn tập Hóa học Lớp {currentGrade}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Settings Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-6">
        {/* 1. Chọn Chương */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            1. Chương ôn tập
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {gradeChapters.map((ch) => (
              <div
                key={ch.id}
                onClick={() => {
                  selectChapterById(ch.id);
                  if (mode === 'comprehensive') setMode('full_chapter');
                }}
                className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedChapter?.id === ch.id && mode !== 'comprehensive'
                    ? 'border-teal-600 bg-teal-50/50 text-slate-900 font-bold'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="text-[11px] text-teal-700 font-semibold">{ch.code}</div>
                <div className="text-xs truncate">{ch.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Chế độ luyện tập */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            2. Chế độ luyện tập
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              {
                id: 'full_chapter',
                title: 'Toàn bộ chương',
                desc: 'Bao quát toàn bộ kiến thức của chương đã chọn',
              },
              {
                id: 'by_format',
                title: 'Luyện theo dạng câu hỏi',
                desc: 'Tập trung rèn riêng Dạng 1, Dạng 2 hoặc Dạng 3',
              },
              {
                id: 'wrong_questions_only',
                title: `Luyện câu đã trả lời sai (${wrongQuestionIds.length})`,
                desc: 'Khắc phục ngay những câu hỏi từng làm sai',
                disabled: wrongQuestionIds.length === 0,
              },
              {
                id: 'comprehensive',
                title: `Đề tổng hợp Lớp ${currentGrade}`,
                desc: 'Trộn đều câu hỏi từ tất cả các chương trong lớp',
              },
            ].map((m) => (
              <div
                key={m.id}
                onClick={() => !m.disabled && setMode(m.id as PracticeMode)}
                className={`p-3.5 rounded-xl border-2 transition-all ${
                  m.disabled
                    ? 'opacity-40 cursor-not-allowed border-slate-100 bg-slate-50'
                    : mode === m.id
                    ? 'border-teal-600 bg-teal-50/50 shadow-2xs cursor-pointer'
                    : 'border-slate-200 hover:border-slate-300 bg-white cursor-pointer'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">{m.title}</div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-filter if by_format is selected */}
        {mode === 'by_format' && (
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="text-xs font-bold text-slate-800">
              Chọn dạng thức câu hỏi cần rèn luyện:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'multiple_choice', label: 'Dạng 1: Nhiều lựa chọn' },
                { id: 'true_false', label: 'Dạng 2: Đúng - Sai' },
                { id: 'short_answer', label: 'Dạng 3: Trả lời ngắn' },
              ].map((fmt) => (
                <button
                  key={fmt.id}
                  type="button"
                  onClick={() => setFilterFormat(fmt.id as QuestionFormat)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    filterFormat === fmt.id
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {fmt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 3. Số lượng câu hỏi */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            3. Số lượng câu hỏi
          </label>
          <div className="flex flex-wrap items-center gap-2">
            {[5, 10, 15, 20, 28].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setQuestionCount(num)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  questionCount === num
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {num} câu
              </button>
            ))}
          </div>
          <div className="text-[11px] text-slate-500 mt-1.5">
            Ngân hàng hiện có <strong className="text-teal-700">{availableQuestionsCount}</strong> câu phù hợp tiêu chí này.
          </div>
        </div>

        {/* 4. Thời gian làm bài */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            4. Thời gian làm bài
          </label>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { val: 0, label: 'Không giới hạn (Tự do)' },
              { val: 10, label: '10 phút' },
              { val: 15, label: '15 phút' },
              { val: 30, label: '30 phút' },
              { val: 50, label: '50 phút (Chuẩn thi)' },
            ].map((t) => (
              <button
                key={t.val}
                type="button"
                onClick={() => setTimeLimitMinutes(t.val)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  timeLimitMinutes === t.val
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Ma trận mức độ nhận thức (Chuẩn 40% - 30% - 30%) */}
        <div className="p-4 bg-gradient-to-br from-teal-50/70 to-blue-50/70 rounded-xl border border-teal-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
              <BarChart className="w-4 h-4 text-teal-700" />
              <span>Phân bố mức độ nhận thức dự kiến:</span>
            </span>
            <span className="text-[11px] font-extrabold text-teal-800">
              Tổng {actualCount} câu
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs mt-3">
            <div className="bg-white p-2.5 rounded-lg border border-teal-100">
              <div className="font-extrabold text-teal-700 text-sm">{countKnow} câu</div>
              <div className="text-[11px] text-slate-600 font-semibold">40% Biết (Nhận biết)</div>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-blue-100">
              <div className="font-extrabold text-blue-700 text-sm">{countUnderstand} câu</div>
              <div className="text-[11px] text-slate-600 font-semibold">30% Hiểu (Thông hiểu)</div>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-purple-100">
              <div className="font-extrabold text-purple-700 text-sm">{countApply} câu</div>
              <div className="text-[11px] text-slate-600 font-semibold">30% Vận dụng</div>
            </div>
          </div>
        </div>

        {/* Start practice button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
          <button
            onClick={() => setCurrentView('theory')}
            className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center space-x-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Xem lại lý thuyết trước</span>
          </button>

          <button
            onClick={handleStart}
            disabled={availableQuestionsCount === 0}
            className={`w-full sm:w-auto px-8 py-3 rounded-xl font-black text-sm flex items-center justify-center space-x-2 shadow-md transition-all hover:scale-102 ${
              availableQuestionsCount === 0
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                : 'bg-teal-600 hover:bg-teal-500 text-white shadow-teal-600/25'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>BẮT ĐẦU LÀM BÀI</span>
          </button>
        </div>
      </div>
    </div>
  );
};
