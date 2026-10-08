import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChemText } from '../utils/chemistry';
import {
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileCheck2,
  Table,
  Calculator,
  Flame,
  Search,
} from 'lucide-react';

export const TheoryView: React.FC = () => {
  const {
    selectedChapter,
    chapters,
    selectChapterById,
    currentGrade,
    setCurrentView,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'summary' | 'formulas' | 'reactions' | 'examples' | 'mistakes'>('all');

  if (!selectedChapter) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-500 text-sm">Chưa chọn chương ôn tập.</p>
        <button
          onClick={() => setCurrentView('home')}
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-xl text-xs font-bold"
        >
          Quay lại trang chủ
        </button>
      </div>
    );
  }

  const gradeChapters = chapters.filter((c) => c.grade === currentGrade);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Step Indicator Banner */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCurrentView('home')}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            title="Quay lại danh sách chương"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-teal-100 text-teal-800 uppercase">
                Bước 3: Ôn tập lý thuyết
              </span>
              <span className="text-xs text-slate-400 font-medium">Lớp {selectedChapter.grade}</span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              {selectedChapter.title}
            </h1>
          </div>
        </div>

        {/* Action Button: Start Practice */}
        <button
          onClick={() => setCurrentView('quiz-setup')}
          className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-teal-600/20 transition-all hover:scale-102 shrink-0"
        >
          <span>Đã ôn tập lý thuyết - Bắt đầu làm bài</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Chapter Switcher Bar & Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Switch Chapter Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="chapter-select" className="text-xs font-bold text-slate-600 shrink-0">Chương:</label>
          <select
            id="chapter-select"
            value={selectedChapter.id}
            onChange={(e) => selectChapterById(e.target.value)}
            className="bg-white border border-slate-200 text-xs font-semibold text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {gradeChapters.map((c) => (
              <option key={c.id} value={c.id}>
                {c.code}: {c.title}
              </option>
            ))}
          </select>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center overflow-x-auto py-1 space-x-1.5 scrollbar-none text-xs font-semibold text-slate-600">
          {[
            { id: 'all', label: 'Tất cả nội dung' },
            { id: 'summary', label: 'Tóm tắt lý thuyết' },
            { id: 'formulas', label: 'Công thức & Quy tắc' },
            { id: 'reactions', label: 'Phương trình phản ứng' },
            { id: 'examples', label: 'Ví dụ mẫu' },
            { id: 'mistakes', label: 'Lỗi sai thường gặp' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-teal-700 text-white font-bold shadow-2xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-6">
        {/* 1. Objectives (Mục tiêu cần đạt) */}
        {(activeTab === 'all' || activeTab === 'summary') && (
          <div className="bg-gradient-to-br from-teal-50/80 to-cyan-50/60 rounded-2xl p-5 border border-teal-200/80 shadow-2xs">
            <div className="flex items-center space-x-2 text-teal-900 font-extrabold text-sm mb-3">
              <FileCheck2 className="w-4 h-4 text-teal-700" />
              <span>1. YÊU CẦU CẦN ĐẠT (CHUẨN CHƯƠNG TRÌNH GDPT 2018)</span>
            </div>
            <ul className="space-y-2">
              {selectedChapter.objectives.map((obj, i) => (
                <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 2. Key Knowledge (Kiến thức trọng tâm) */}
        {(activeTab === 'all' || activeTab === 'summary') && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
            <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-sm mb-4">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>2. KIẾN THỨC TRỌNG TÂM CẦN NHỚ</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedChapter.keyKnowledge.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/60 text-xs sm:text-sm text-slate-800 leading-relaxed"
                >
                  <span className="font-bold text-teal-800 mr-1.5">•</span>
                  <ChemText content={item} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Detailed Theory Summary (Lý thuyết tóm tắt chi tiết) */}
        {(activeTab === 'all' || activeTab === 'summary') && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-sm border-b border-slate-100 pb-3">
              <BookOpen className="w-4 h-4 text-teal-600" />
              <span>3. LÝ THUYẾT TÓM TẮT CHI TIẾT</span>
            </div>
            <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed font-normal whitespace-pre-line text-xs sm:text-sm bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <ChemText content={selectedChapter.theorySummary} />
            </div>
          </div>
        )}

        {/* 4. Formulas & Calculations (Công thức tính toán) */}
        {(activeTab === 'all' || activeTab === 'formulas') && selectedChapter.formulas.length > 0 && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
            <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-sm mb-4">
              <Calculator className="w-4 h-4 text-blue-600" />
              <span>4. CÔNG THỨC VÀ ĐIỀU KIỆN ÁP DỤNG</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedChapter.formulas.map((form, idx) => (
                <div
                  key={idx}
                  className="bg-blue-50/50 border border-blue-200/80 rounded-xl p-4 flex flex-col justify-between"
                >
                  <div className="text-xs font-bold text-blue-900 mb-1">{form.name}</div>
                  <div className="text-sm font-extrabold text-slate-900 bg-white py-2 px-3 rounded-lg border border-blue-100 my-2 shadow-2xs font-mono">
                    <ChemText content={form.formula} />
                  </div>
                  {form.condition && (
                    <div className="text-[11px] text-slate-500 font-medium">
                      Điều kiện: {form.condition}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Key Reaction Equations (Phương trình phản ứng tiêu biểu) */}
        {(activeTab === 'all' || activeTab === 'reactions') && selectedChapter.reactions.length > 0 && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
            <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-sm mb-4">
              <Flame className="w-4 h-4 text-rose-500" />
              <span>5. PHƯƠNG TRÌNH PHẢN ỨNG HÓA HỌC TIÊU BIỂU</span>
            </div>
            <div className="space-y-3">
              {selectedChapter.reactions.map((rxn, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-700">{rxn.name}</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 font-mono mt-1">
                      <ChemText content={rxn.equation} />
                    </div>
                    {rxn.note && (
                      <div className="text-[11px] text-slate-500 mt-1 italic">
                        {rxn.note}
                      </div>
                    )}
                  </div>
                  {rxn.conditions && (
                    <span className="self-start sm:self-auto px-2 py-1 rounded bg-slate-200 text-slate-700 text-[10px] font-bold">
                      ĐK: {rxn.conditions}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Comparison Table (Bảng so sánh nếu có) */}
        {(activeTab === 'all' || activeTab === 'summary') && selectedChapter.comparisonTable && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
            <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-sm mb-4">
              <Table className="w-4 h-4 text-purple-600" />
              <span>6. {selectedChapter.comparisonTable.title || 'BẢNG SO SÁNH & HỆ THỐNG HÓA'}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                    {selectedChapter.comparisonTable.headers.map((h, i) => (
                      <th key={i} className="py-2.5 px-3 font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedChapter.comparisonTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/80">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="py-2.5 px-3 text-slate-700">
                          <ChemText content={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 7. Solved Sample Examples (Ví dụ minh họa có giải chi tiết) */}
        {(activeTab === 'all' || activeTab === 'examples') && selectedChapter.sampleExamples.length > 0 && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
            <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-sm mb-4">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>7. VÍ DỤ MINH HỌA CÓ HƯỚNG DẪN GIẢI</span>
            </div>
            <div className="space-y-4">
              {selectedChapter.sampleExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 space-y-3"
                >
                  <div className="text-xs font-bold text-teal-800 uppercase tracking-wide">
                    {ex.title}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900">
                    <ChemText content={ex.question} />
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                    <div className="text-[11px] font-bold text-emerald-700 mb-1">
                      Lời giải chi tiết:
                    </div>
                    <ChemText content={ex.solution} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. Common Mistakes (Lỗi sai thường gặp) */}
        {(activeTab === 'all' || activeTab === 'mistakes') && selectedChapter.commonMistakes.length > 0 && (
          <div className="bg-amber-50/70 rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-xs">
            <div className="flex items-center space-x-2 text-amber-900 font-extrabold text-sm mb-4">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>8. CÁC LỖI SAI HỌC SINH THƯỜNG MẮC PHẢI (CẦN TRÁNH)</span>
            </div>
            <div className="space-y-2.5">
              {selectedChapter.commonMistakes.map((mistake, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2 text-xs sm:text-sm text-amber-950 bg-white/80 p-3 rounded-xl border border-amber-200/60 leading-relaxed"
                >
                  <span className="font-bold text-amber-700">⚠️</span>
                  <span>{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA to start practice */}
      <div className="p-6 bg-gradient-to-r from-teal-700 to-blue-800 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div>
          <h3 className="font-extrabold text-base sm:text-lg">
            Bạn đã sẵn sàng củng cố kiến thức?
          </h3>
          <p className="text-xs sm:text-sm text-teal-100">
            Làm bài trắc nghiệm 3 dạng thức để kiểm tra năng lực và phát hiện lỗ hổng kiến thức.
          </p>
        </div>
        <button
          onClick={() => setCurrentView('quiz-setup')}
          className="px-6 py-3 rounded-xl bg-white text-teal-900 hover:bg-teal-50 font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105 shrink-0 flex items-center space-x-2"
        >
          <span>BẮT ĐẦU LUYỆN TẬP</span>
          <ArrowRight className="w-4 h-4 text-teal-700" />
        </button>
      </div>
    </div>
  );
};
