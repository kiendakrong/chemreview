import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChemText } from '../utils/chemistry';
import { Question, QuestionFormat, CognitiveLevel, Grade, Chapter } from '../types';
import {
  ShieldAlert,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  Sparkles,
  Download,
  Upload,
  Search,
  Filter,
  BarChart3,
  Users,
  BookOpen,
  FileQuestion,
  AlertTriangle,
  RefreshCw,
  Send,
  Eye,
  X,
} from 'lucide-react';

export const TeacherAdminView: React.FC = () => {
  const {
    currentUser,
    chapters,
    questions,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    approveQuestion,
    updateChapter,
    generateAIQuestions,
    history,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'bank' | 'ai' | 'curriculum' | 'analytics'>('bank');

  // Filter state for Question Bank
  const [filterGrade, setFilterGrade] = useState<Grade | 'all'>('all');
  const [filterFormat, setFilterFormat] = useState<QuestionFormat | 'all'>('all');
  const [filterLevel, setFilterLevel] = useState<CognitiveLevel | 'all'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'approved' | 'pending_approval'>('all');
  const [searchKeyword, setSearchKeyword] = useState('');

  // AI Generator state
  const [aiGrade, setAiGrade] = useState<Grade>(12);
  const [aiChapter, setAiChapter] = useState('Chương 1: Ester - Lipid');
  const [aiFormat, setAiFormat] = useState<QuestionFormat>('multiple_choice');
  const [aiLevel, setAiLevel] = useState<CognitiveLevel>('understand');
  const [aiCount, setAiCount] = useState<number>(2);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [aiMessage, setAiMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Manual Question Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newQFormat, setNewQFormat] = useState<QuestionFormat>('multiple_choice');
  const [newQGrade, setNewQGrade] = useState<Grade>(12);
  const [newQChapterId, setNewQChapterId] = useState(chapters[0]?.id || '');
  const [newQLevel, setNewQLevel] = useState<CognitiveLevel>('know');
  const [newQContent, setNewQContent] = useState('');
  const [newQStimulus, setNewQStimulus] = useState('');
  const [newQExplanation, setNewQExplanation] = useState('');
  const [newQOptions, setNewQOptions] = useState([
    { id: 'A' as const, text: '' },
    { id: 'B' as const, text: '' },
    { id: 'C' as const, text: '' },
    { id: 'D' as const, text: '' },
  ]);
  const [newQCorrectKey, setNewQCorrectKey] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [newQTfItems, setNewQTfItems] = useState([
    { id: 'a' as const, text: '', isCorrect: true },
    { id: 'b' as const, text: '', isCorrect: false },
    { id: 'c' as const, text: '', isCorrect: true },
    { id: 'd' as const, text: '', isCorrect: false },
  ]);
  const [newQShortAnswer, setNewQShortAnswer] = useState('');

  // Export questions to JSON
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(questions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `ngan-hang-cau-hoi-hoa-thpt-dakrong-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import questions from JSON
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed)) {
          parsed.forEach((q) => addQuestion(q));
          alert(`Đã nhập thành công ${parsed.length} câu hỏi vào ngân hàng!`);
        }
      } catch (err) {
        alert('Tập tin không hợp lệ. Vui lòng chọn tệp JSON chuẩn.');
      }
    };
    reader.readAsText(file);
  };

  // AI Question Generation trigger
  const handleGenerateAI = async () => {
    setIsAiGenerating(true);
    setAiMessage(null);

    const res = await generateAIQuestions({
      grade: aiGrade,
      chapter: aiChapter,
      format: aiFormat,
      cognitiveLevel: aiLevel,
      count: aiCount,
      topicDescription: aiPrompt,
    });

    setIsAiGenerating(false);
    if (res.success) {
      setAiMessage({
        type: 'success',
        text: `Đã sinh thành công ${res.count} câu hỏi bám sát GDPT 2018! Câu hỏi đang ở trạng thái "Chờ duyệt" để thầy cô thẩm định.`,
      });
    } else {
      setAiMessage({
        type: 'error',
        text: res.error || 'Có lỗi xảy ra khi tạo câu hỏi bằng AI.',
      });
    }
  };

  // Create question manually
  const handleCreateManualQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    const ch = chapters.find((c) => c.id === newQChapterId) || chapters[0];

    const newQuestion: Question = {
      id: `Q-GV-${Date.now()}`,
      grade: newQGrade,
      chapterId: ch.id,
      chapterTitle: ch.title,
      format: newQFormat,
      cognitiveLevel: newQLevel,
      content: newQContent,
      stimulus: newQStimulus || undefined,
      explanation: newQExplanation,
      reviewedByTeacher: true,
      status: 'approved',
      createdDate: new Date().toISOString(),
      createdBy: currentUser.name,
    };

    if (newQFormat === 'multiple_choice') {
      newQuestion.options = newQOptions;
      newQuestion.correctAnswer = newQCorrectKey;
    } else if (newQFormat === 'true_false') {
      newQuestion.subItems = newQTfItems;
    } else if (newQFormat === 'short_answer') {
      newQuestion.acceptableAnswers = [newQShortAnswer.trim()];
      const num = parseFloat(newQShortAnswer.replace(/,/g, '.'));
      if (!isNaN(num)) {
        newQuestion.numericValue = num;
      }
    }

    addQuestion(newQuestion);
    setShowAddModal(false);
    // Reset form
    setNewQContent('');
    setNewQStimulus('');
    setNewQExplanation('');
    alert('Đã thêm câu hỏi mới vào ngân hàng thành công!');
  };

  // Filtered question list
  const filteredQuestions = questions.filter((q) => {
    if (filterGrade !== 'all' && q.grade !== filterGrade) return false;
    if (filterFormat !== 'all' && q.format !== filterFormat) return false;
    if (filterLevel !== 'all' && q.cognitiveLevel !== filterLevel) return false;
    if (filterStatus !== 'all' && q.status !== filterStatus) return false;
    if (searchKeyword.trim() !== '') {
      const kw = searchKeyword.toLowerCase();
      const matchContent = q.content.toLowerCase().includes(kw);
      const matchChapter = q.chapterTitle.toLowerCase().includes(kw);
      if (!matchContent && !matchChapter) return false;
    }
    return true;
  });

  // Calculate high-mistake questions
  const wrongCountMap: Record<string, number> = {};
  history.forEach((h) => {
    Object.entries(h.detailsPerQuestion).forEach(([qId, detail]) => {
      if (!detail.isCorrect) {
        wrongCountMap[qId] = (wrongCountMap[qId] || 0) + 1;
      }
    });
  });

  const highMistakeQuestions = Object.entries(wrongCountMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([qId, count]) => ({
      question: questions.find((q) => q.id === qId),
      wrongCount: count,
    }))
    .filter((item) => item.question !== undefined);

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-24">
      {/* Teacher Portal Header */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-purple-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-400/30 flex items-center justify-center font-bold">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-400/20 text-purple-200 border border-purple-400/30">
                  KHU QUẢN TRỊ GIÁO VIÊN
                </span>
                <span className="text-xs text-purple-300">THPT Đakrông</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
                Quản lý Hệ thống Ôn tập Hóa học GDPT 2018
              </h1>
              <p className="text-xs text-purple-200/80 mt-1">
                Tài khoản: <strong className="text-white">{currentUser.name}</strong> ({currentUser.email})
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow-md shadow-purple-500/20 transition-all hover:scale-102"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm câu hỏi mới</span>
            </button>
          </div>
        </div>

        {/* Portal Tabs */}
        <div className="mt-6 pt-4 border-t border-purple-800/60 flex items-center space-x-2 overflow-x-auto scrollbar-none text-xs font-bold">
          {[
            { id: 'bank', label: `Ngân hàng câu hỏi (${questions.length})`, icon: FileQuestion },
            { id: 'ai', label: 'Tạo câu hỏi AI (Gemini)', icon: Sparkles },
            { id: 'curriculum', label: 'Chương trình & Lý thuyết', icon: BookOpen },
            { id: 'analytics', label: 'Báo cáo & Thống kê học sinh', icon: BarChart3 },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl transition-all flex items-center space-x-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-950 shadow-md font-black'
                    : 'bg-white/10 text-purple-200 hover:bg-white/15'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: QUESTION BANK MANAGER */}
      {activeTab === 'bank' && (
        <div className="space-y-4">
          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Tìm nội dung, chương..."
                  className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-800 w-44 sm:w-56 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              {/* Grade filter */}
              <select
                aria-label="Lọc theo khối lớp"
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value === 'all' ? 'all' : (Number(e.target.value) as Grade))}
                className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700"
              >
                <option value="all">Tất cả lớp (10, 11, 12)</option>
                <option value="10">Lớp 10</option>
                <option value="11">Lớp 11</option>
                <option value="12">Lớp 12</option>
              </select>

              {/* Format filter */}
              <select
                aria-label="Lọc theo dạng câu hỏi"
                value={filterFormat}
                onChange={(e) => setFilterFormat(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700"
              >
                <option value="all">Tất cả 3 dạng thức</option>
                <option value="multiple_choice">Dạng 1: Nhiều lựa chọn</option>
                <option value="true_false">Dạng 2: Đúng - Sai</option>
                <option value="short_answer">Dạng 3: Trả lời ngắn</option>
              </select>

              {/* Status filter */}
              <select
                aria-label="Lọc theo trạng thái duyệt"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="approved">Đã duyệt (Chính thức)</option>
                <option value="pending_approval">Chờ duyệt (Mới tạo)</option>
              </select>
            </div>

            {/* Import / Export JSON buttons */}
            <div className="flex items-center space-x-2">
              <label className="cursor-pointer px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center space-x-1.5">
                <Upload className="w-3.5 h-3.5 text-slate-500" />
                <span>Nhập JSON</span>
                <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
              </label>

              <button
                onClick={handleExportJSON}
                className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Xuất JSON</span>
              </button>
            </div>
          </div>

          {/* Question List Table / Cards */}
          <div className="space-y-3">
            {filteredQuestions.map((q) => (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    <span className="font-extrabold text-xs text-purple-900 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
                      {q.id}
                    </span>
                    <span className="text-xs font-bold text-slate-700">Lớp {q.grade}</span>
                    <span className="text-xs text-slate-400">• {q.chapterTitle}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        q.status === 'approved'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200 animate-pulse'
                      }`}
                    >
                      {q.status === 'approved' ? 'Đã duyệt' : 'Chờ GV duyệt'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    {q.status === 'pending_approval' && (
                      <button
                        onClick={() => approveQuestion(q.id)}
                        className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold flex items-center space-x-1"
                        title="Phê duyệt câu hỏi này vào ngân hàng chính thức"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Duyệt câu này</span>
                      </button>
                    )}

                    <button
                      onClick={() => {
                        if (confirm(`Bạn có chắc muốn xóa câu hỏi ${q.id}?`)) {
                          deleteQuestion(q.id);
                        }
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                      title="Xóa câu hỏi"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {q.stimulus && (
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-600">
                    <ChemText content={q.stimulus} />
                  </div>
                )}

                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  <ChemText content={q.content} />
                </div>

                {/* Question specifics preview */}
                {q.format === 'multiple_choice' && q.options && (
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt) => (
                      <div
                        key={opt.id}
                        className={`p-2 rounded-lg border ${
                          opt.id === q.correctAnswer
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className="font-bold mr-1">{opt.id}.</span>
                        <ChemText content={opt.text} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Explanation preview */}
                <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60 leading-relaxed">
                  <strong className="text-purple-800">Lời giải chi tiết: </strong>
                  <ChemText content={q.explanation} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: AI QUESTION GENERATOR WITH GEMINI */}
      {activeTab === 'ai' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900">
                Tạo câu hỏi tự động bằng Trí tuệ nhân tạo Gemini
              </h2>
              <p className="text-xs text-slate-500">
                Mô hình <strong className="text-purple-700">Gemini 3.8 Flash</strong> tạo câu hỏi bám sát chuẩn Chương trình GDPT 2018. Tất cả câu hỏi sinh ra sẽ lưu ở trạng thái <em>Chờ duyệt</em> để giáo viên kiểm định trước.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="ai-grade-select" className="block text-xs font-bold text-slate-700 mb-1">Khối lớp:</label>
              <select
                id="ai-grade-select"
                value={aiGrade}
                onChange={(e) => setAiGrade(Number(e.target.value) as Grade)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800"
              >
                <option value={10}>Lớp 10</option>
                <option value={11}>Lớp 11</option>
                <option value={12}>Lớp 12</option>
              </select>
            </div>

            <div>
              <label htmlFor="ai-chapter-select" className="block text-xs font-bold text-slate-700 mb-1">Chương / Chủ đề:</label>
              <select
                id="ai-chapter-select"
                value={aiChapter}
                onChange={(e) => setAiChapter(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800"
              >
                {chapters
                  .filter((c) => c.grade === aiGrade)
                  .map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label htmlFor="ai-format-select" className="block text-xs font-bold text-slate-700 mb-1">Dạng thức câu hỏi:</label>
              <select
                id="ai-format-select"
                value={aiFormat}
                onChange={(e) => setAiFormat(e.target.value as QuestionFormat)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800"
              >
                <option value="multiple_choice">Dạng 1: Nhiều lựa chọn (A, B, C, D)</option>
                <option value="true_false">Dạng 2: Đúng - Sai (a, b, c, d)</option>
                <option value="short_answer">Dạng 3: Trả lời ngắn (Tính toán/Số)</option>
              </select>
            </div>

            <div>
              <label htmlFor="ai-level-select" className="block text-xs font-bold text-slate-700 mb-1">Mức độ nhận thức:</label>
              <select
                id="ai-level-select"
                value={aiLevel}
                onChange={(e) => setAiLevel(e.target.value as CognitiveLevel)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800"
              >
                <option value="know">Biết (Nhận biết - 40%)</option>
                <option value="understand">Hiểu (Thông hiểu - 30%)</option>
                <option value="apply">Vận dụng (Vận dụng - 30%)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="ai-prompt-input" className="block text-xs font-bold text-slate-700 mb-1">
              Yêu cầu bổ sung của giáo viên (tùy chọn):
            </label>
            <textarea
              id="ai-prompt-input"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Ví dụ: Tập trung vào bài toán tính toán hiệu suất ester hóa hoặc câu hỏi thực tiễn về lipid trong đời sống tại Quảng Trị..."
              rows={3}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <label htmlFor="ai-count-select" className="text-xs font-bold text-slate-600">Số lượng câu cần sinh:</label>
              <select
                id="ai-count-select"
                value={aiCount}
                onChange={(e) => setAiCount(Number(e.target.value))}
                className="bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-bold"
              >
                <option value={1}>1 câu</option>
                <option value={2}>2 câu</option>
                <option value={4}>4 câu</option>
              </select>
            </div>

            <button
              onClick={handleGenerateAI}
              disabled={isAiGenerating}
              className={`px-6 py-2.5 rounded-xl font-black text-xs sm:text-sm text-white flex items-center space-x-2 shadow-md transition-all ${
                isAiGenerating
                  ? 'bg-purple-400 cursor-not-allowed'
                  : 'bg-purple-700 hover:bg-purple-600 shadow-purple-700/20 hover:scale-102'
              }`}
            >
              {isAiGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Gemini đang sinh câu hỏi...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Bắt đầu sinh câu hỏi bằng AI</span>
                </>
              )}
            </button>
          </div>

          {aiMessage && (
            <div
              className={`p-4 rounded-xl text-xs sm:text-sm font-semibold flex items-start space-x-2 border ${
                aiMessage.type === 'success'
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                  : 'bg-rose-50 text-rose-900 border-rose-200'
              }`}
            >
              {aiMessage.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
              )}
              <span>{aiMessage.text}</span>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: CURRICULUM & THEORY EDITOR */}
      {activeTab === 'curriculum' && (
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-base font-extrabold text-slate-900">
              Quản lý Chương trình & Chỉnh sửa lý thuyết tóm tắt
            </h2>
            <p className="text-xs text-slate-500">
              Giáo viên có toàn quyền cập nhật các bài học, công thức và phương trình phản ứng cho từng chương của Lớp 10, 11 và 12.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chapters.map((ch) => (
                <div
                  key={ch.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                      Lớp {ch.grade} • {ch.code}
                    </span>
                    <span className="text-xs text-slate-400">{ch.lessons.length} bài học</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{ch.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{ch.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ANALYTICS & STUDENT PROGRESS */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-xs text-slate-500 font-semibold">Tổng lượt học sinh luyện tập</div>
              <div className="text-2xl font-black text-slate-900 mt-1">{history.length}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-xs text-slate-500 font-semibold">Điểm trung bình toàn trường</div>
              <div className="text-2xl font-black text-teal-700 mt-1">
                {history.length > 0
                  ? (history.reduce((a, b) => a + b.score, 0) / history.length).toFixed(1)
                  : '0.0'}{' '}
                / 10
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-xs text-slate-500 font-semibold">Tổng câu hỏi trong ngân hàng</div>
              <div className="text-2xl font-black text-purple-700 mt-1">{questions.length}</div>
            </div>
          </div>

          {/* High mistake questions alert for teacher */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-rose-700 font-black text-sm uppercase">
              <AlertTriangle className="w-5 h-5 text-rose-600" />
              <span>Các câu hỏi học sinh thường làm sai nhất (Cần chữa kỹ trên lớp)</span>
            </div>

            {highMistakeQuestions.length === 0 ? (
              <p className="text-xs text-slate-500">Chưa ghi nhận đủ dữ liệu làm bài để phân tích lỗi sai.</p>
            ) : (
              <div className="space-y-3">
                {highMistakeQuestions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-rose-200 bg-rose-50/30 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        [{item.question?.chapterTitle}] {item.question?.content}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Lời giải: <ChemText content={item.question?.explanation || ''} />
                      </div>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                      {item.wrongCount} lượt sai
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL: ADD QUESTION MANUALLY */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">
                Thêm câu hỏi mới vào Ngân hàng
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateManualQuestion} className="my-4 space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="new-q-grade-select" className="block font-bold text-slate-700 text-xs mb-1">Khối lớp:</label>
                  <select
                    id="new-q-grade-select"
                    value={newQGrade}
                    onChange={(e) => setNewQGrade(Number(e.target.value) as Grade)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-semibold"
                  >
                    <option value={10}>Lớp 10</option>
                    <option value={11}>Lớp 11</option>
                    <option value={12}>Lớp 12</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="new-q-format-select" className="block font-bold text-slate-700 text-xs mb-1">Dạng thức:</label>
                  <select
                    id="new-q-format-select"
                    value={newQFormat}
                    onChange={(e) => setNewQFormat(e.target.value as QuestionFormat)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-semibold"
                  >
                    <option value="multiple_choice">Dạng 1: Nhiều lựa chọn</option>
                    <option value="true_false">Dạng 2: Đúng - Sai</option>
                    <option value="short_answer">Dạng 3: Trả lời ngắn</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="new-q-chapter-select" className="block font-bold text-slate-700 text-xs mb-1">Chương:</label>
                <select
                  id="new-q-chapter-select"
                  value={newQChapterId}
                  onChange={(e) => setNewQChapterId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-semibold"
                >
                  {chapters
                    .filter((c) => c.grade === newQGrade)
                    .map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label htmlFor="new-q-stimulus-input" className="block font-bold text-slate-700 text-xs mb-1">
                  Ngữ liệu / Thí nghiệm dẫn (nếu có):
                </label>
                <textarea
                  id="new-q-stimulus-input"
                  value={newQStimulus}
                  onChange={(e) => setNewQStimulus(e.target.value)}
                  placeholder="Ví dụ: Cho các phản ứng hóa học sau trong dung dịch nước..."
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs"
                />
              </div>

              <div>
                <label htmlFor="new-q-content-input" className="block font-bold text-slate-700 text-xs mb-1">Nội dung câu hỏi (*):</label>
                <textarea
                  id="new-q-content-input"
                  value={newQContent}
                  onChange={(e) => setNewQContent(e.target.value)}
                  required
                  placeholder="Nhập nội dung câu hỏi..."
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold"
                />
              </div>

              {/* DẠNG 1 CONFIG */}
              {newQFormat === 'multiple_choice' && (
                <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="font-bold text-xs text-slate-800">4 Phương án A, B, C, D:</div>
                  {newQOptions.map((opt, i) => (
                    <div key={opt.id} className="flex items-center space-x-2">
                      <span className="font-bold w-4">{opt.id}:</span>
                      <input
                        type="text"
                        value={opt.text}
                        required
                        onChange={(e) => {
                          const updated = [...newQOptions];
                          updated[i].text = e.target.value;
                          setNewQOptions(updated);
                        }}
                        placeholder={`Phương án ${opt.id}...`}
                        className="flex-1 bg-white border border-slate-200 rounded-lg p-1.5 text-xs"
                      />
                      <input
                        type="radio"
                        name="correctOpt"
                        checked={newQCorrectKey === opt.id}
                        onChange={() => setNewQCorrectKey(opt.id)}
                        title="Chọn làm đáp án đúng"
                      />
                    </div>
                  ))}
                  <div className="text-[11px] text-slate-500">
                    * Đánh dấu radio bên phải phương án đúng.
                  </div>
                </div>
              )}

              {/* DẠNG 3 CONFIG */}
              {newQFormat === 'short_answer' && (
                <div>
                  <label htmlFor="new-q-short-answer-input" className="block font-bold text-slate-700 text-xs mb-1">
                    Đáp án đúng (chuẩn hóa số hoặc biểu thức):
                  </label>
                  <input
                    id="new-q-short-answer-input"
                    type="text"
                    value={newQShortAnswer}
                    required
                    onChange={(e) => setNewQShortAnswer(e.target.value)}
                    placeholder="Ví dụ: 12.5"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-bold"
                  />
                </div>
              )}

              <div>
                <label htmlFor="new-q-explanation-input" className="block font-bold text-slate-700 text-xs mb-1">
                  Lời giải chi tiết & Các bước tính toán (*):
                </label>
                <textarea
                  id="new-q-explanation-input"
                  value={newQExplanation}
                  onChange={(e) => setNewQExplanation(e.target.value)}
                  required
                  placeholder="Giải thích vì sao đáp án đúng, công thức và các bước tính..."
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-bold text-xs shadow-md"
                >
                  Lưu vào ngân hàng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
