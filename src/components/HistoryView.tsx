import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Grade } from '../types';
import {
  Clock,
  Award,
  CheckCircle2,
  BarChart3,
  Trash2,
  Calendar,
  TrendingUp,
  FileText,
  Users,
  GraduationCap,
  Search,
  BookOpen,
} from 'lucide-react';

interface StudentAggregatedRecord {
  studentKey: string;
  studentName: string;
  className: string;
  grade: Grade;
  attemptsCount: number;
  totalScore: number;
  averageScore: number;
  highestScore: number;
  latestScore: number;
  latestDate: number;
  latestChapter: string;
}

export const HistoryView: React.FC = () => {
  const { history, clearHistory, setCurrentView, currentUser } = useApp();

  const [activeTab, setActiveTab] = useState<'personal' | 'school'>('personal');
  const [studentSearchKeyword, setStudentSearchKeyword] = useState('');
  const [studentGradeFilter, setStudentGradeFilter] = useState<Grade | 'all'>('all');
  const [studentSortBy, setStudentSortBy] = useState<'avg_desc' | 'highest_desc' | 'attempts_desc' | 'name_asc'>('avg_desc');

  // Personal history stats
  const personalHistory = history.filter(
    (h) => h.studentName === currentUser.name || h.studentId === currentUser.id
  );
  // If user has no specific matched attempts, show all recent attempts or current history
  const displayedPersonal = personalHistory.length > 0 ? personalHistory : history;

  const totalAttempts = displayedPersonal.length;
  const avgScore =
    totalAttempts > 0
      ? (displayedPersonal.reduce((acc, h) => acc + h.score, 0) / totalAttempts).toFixed(1)
      : '0.0';
  const highestScore =
    totalAttempts > 0 ? Math.max(...displayedPersonal.map((h) => h.score)).toFixed(1) : '0.0';
  const totalQuestionsPracticed = displayedPersonal.reduce((acc, h) => acc + h.targetQuestionsCount, 0);

  // Aggregation across all students in history
  const studentMap = new Map<string, StudentAggregatedRecord>();
  history.forEach((sess) => {
    const sName = (sess.studentName || 'Học sinh').trim();
    const sClass = (sess.className || `${sess.grade}A1`).trim();
    const key = `${sName}__${sClass}`;

    if (!studentMap.has(key)) {
      studentMap.set(key, {
        studentKey: key,
        studentName: sName,
        className: sClass,
        grade: sess.grade,
        attemptsCount: 0,
        totalScore: 0,
        averageScore: 0,
        highestScore: 0,
        latestScore: sess.score,
        latestDate: sess.endTime,
        latestChapter: sess.chapterTitle,
      });
    }

    const rec = studentMap.get(key)!;
    rec.attemptsCount += 1;
    rec.totalScore += sess.score;
    rec.highestScore = Math.max(rec.highestScore, sess.score);
    if (sess.endTime >= rec.latestDate) {
      rec.latestDate = sess.endTime;
      rec.latestScore = sess.score;
      rec.latestChapter = sess.chapterTitle;
    }
  });

  const allStudents = Array.from(studentMap.values()).map((s) => ({
    ...s,
    averageScore: s.attemptsCount > 0 ? Number((s.totalScore / s.attemptsCount).toFixed(1)) : 0,
  }));

  // School-wide numbers
  const totalStudentsAllSchool = allStudents.length;
  const schoolAvgScore =
    history.length > 0
      ? (history.reduce((sum, h) => sum + h.score, 0) / history.length).toFixed(1)
      : '0.0';

  // Grade breakdowns
  const grade10Students = allStudents.filter((s) => s.grade === 10);
  const grade10Attempts = history.filter((h) => h.grade === 10);
  const grade10Avg =
    grade10Attempts.length > 0
      ? (grade10Attempts.reduce((sum, h) => sum + h.score, 0) / grade10Attempts.length).toFixed(1)
      : '0.0';

  const grade11Students = allStudents.filter((s) => s.grade === 11);
  const grade11Attempts = history.filter((h) => h.grade === 11);
  const grade11Avg =
    grade11Attempts.length > 0
      ? (grade11Attempts.reduce((sum, h) => sum + h.score, 0) / grade11Attempts.length).toFixed(1)
      : '0.0';

  const grade12Students = allStudents.filter((s) => s.grade === 12);
  const grade12Attempts = history.filter((h) => h.grade === 12);
  const grade12Avg =
    grade12Attempts.length > 0
      ? (grade12Attempts.reduce((sum, h) => sum + h.score, 0) / grade12Attempts.length).toFixed(1)
      : '0.0';

  // Filtered & Sorted student list for School Leaderboard
  const filteredStudents = allStudents
    .filter((s) => {
      if (studentGradeFilter !== 'all' && s.grade !== studentGradeFilter) return false;
      if (studentSearchKeyword.trim() !== '') {
        const kw = studentSearchKeyword.toLowerCase();
        const matchName = s.studentName.toLowerCase().includes(kw);
        const matchClass = s.className.toLowerCase().includes(kw);
        if (!matchName && !matchClass) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (studentSortBy === 'avg_desc') return b.averageScore - a.averageScore;
      if (studentSortBy === 'highest_desc') return b.highestScore - a.highestScore;
      if (studentSortBy === 'attempts_desc') return b.attemptsCount - a.attemptsCount;
      if (studentSortBy === 'name_asc') return a.studentName.localeCompare(b.studentName, 'vi');
      return 0;
    });

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      {/* Header & Tabs */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-800 uppercase">
            Học bạ & Thống kê THPT Đakrông
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
            Tiến độ ôn tập & Bảng vàng kết quả
          </h1>
        </div>

        <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
              activeTab === 'personal'
                ? 'bg-white text-teal-800 shadow-xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Lịch sử của tôi</span>
          </button>
          <button
            onClick={() => setActiveTab('school')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
              activeTab === 'school'
                ? 'bg-white text-purple-800 shadow-xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Bảng vàng Toàn trường ({totalStudentsAllSchool})</span>
          </button>
        </div>
      </div>

      {/* TAB 1: PERSONAL HISTORY */}
      {activeTab === 'personal' && (
        <div className="space-y-6">
          {/* User Profile Banner */}
          <div className="bg-gradient-to-r from-teal-700 via-cyan-800 to-blue-900 text-white rounded-2xl p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-white/15 text-white flex items-center justify-center font-black text-lg border border-white/20">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <div className="text-xs text-teal-200 font-semibold">Tài khoản học sinh</div>
                <div className="text-lg font-black">{currentUser.name}</div>
                <div className="text-xs text-teal-100 flex items-center space-x-2">
                  <span>Lớp {currentUser.className || '12A1'}</span>
                  <span>•</span>
                  <span>Trường THPT Đakrông</span>
                </div>
              </div>
            </div>

            {displayedPersonal.length > 0 && (
              <button
                onClick={() => {
                  if (confirm('Bạn có chắc muốn xóa lịch sử ôn tập trên máy này?')) {
                    clearHistory();
                  }
                }}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors border border-white/20"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa lịch sử</span>
              </button>
            )}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-xs text-slate-500 font-semibold">Số lượt làm bài</div>
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

            {displayedPersonal.length === 0 ? (
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
                {displayedPersonal.map((item, idx) => {
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
                          <span className="font-extrabold text-xs text-slate-500">#{displayedPersonal.length - idx}</span>
                          <span className="text-xs font-bold text-slate-900">{item.chapterTitle}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-teal-800 border border-teal-200">
                            Khối {item.grade}
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
                          <div className="text-[10px] text-slate-400 font-medium">Thang 10 điểm</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: SCHOOL & GRADE STATISTICS */}
      {activeTab === 'school' && (
        <div className="space-y-6">
          {/* School Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-900 to-indigo-950 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
              <div className="flex items-center justify-between text-purple-200 text-xs font-bold uppercase tracking-wider">
                <span>Học sinh Toàn trường</span>
                <Users className="w-4 h-4 text-purple-300" />
              </div>
              <div className="text-3xl font-black mt-2">{totalStudentsAllSchool}</div>
              <div className="text-[11px] text-purple-200/90 mt-1 font-semibold">
                Đã tham gia ôn tập hệ thống
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider">
                <span>Tổng lượt ôn tập</span>
                <BarChart3 className="w-4 h-4 text-teal-600" />
              </div>
              <div className="text-3xl font-black text-slate-900 mt-2">{history.length}</div>
              <div className="text-[11px] text-slate-500 mt-1 font-semibold">
                Lượt làm bài toàn trường
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider">
                <span>Điểm trung bình chung</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-3xl font-black text-emerald-700 mt-2">
                {schoolAvgScore} <span className="text-sm text-slate-400 font-bold">/ 10</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1 font-semibold">
                Thang điểm 10 GDPT 2018
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider">
                <span>Trường THPT</span>
                <GraduationCap className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-xl font-black text-slate-900 mt-2">Đakrông</div>
              <div className="text-[11px] text-slate-500 mt-1 font-semibold">
                Tỉnh Quảng Trị
              </div>
            </div>
          </div>

          {/* Breakdown by Grade: Khối 10, Khối 11, Khối 12 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-sm sm:text-base">
                <GraduationCap className="w-5 h-5 text-purple-700" />
                <span>Thống kê tổng số học sinh và kết quả theo Khối</span>
              </div>
              <span className="text-xs text-slate-500 font-semibold">
                Trường THPT Đakrông
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Khối 10 */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50/70 to-teal-50/70 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-600 text-white">
                    KHỐI 10
                  </span>
                  <span className="text-xs font-bold text-emerald-800">7 Chương học</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="bg-white p-2 rounded-lg border border-emerald-100">
                    <div className="text-lg font-black text-slate-900">{grade10Students.length}</div>
                    <div className="text-[10px] text-slate-500 font-bold">Học sinh</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-emerald-100">
                    <div className="text-lg font-black text-slate-900">{grade10Attempts.length}</div>
                    <div className="text-[10px] text-slate-500 font-bold">Lượt làm</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-emerald-100">
                    <div className="text-lg font-black text-emerald-700">{grade10Avg}</div>
                    <div className="text-[10px] text-slate-500 font-bold">ĐTB Khối</div>
                  </div>
                </div>
              </div>

              {/* Khối 11 */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50/70 to-cyan-50/70 border border-blue-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-blue-600 text-white">
                    KHỐI 11
                  </span>
                  <span className="text-xs font-bold text-blue-800">6 Chương học</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="bg-white p-2 rounded-lg border border-blue-100">
                    <div className="text-lg font-black text-slate-900">{grade11Students.length}</div>
                    <div className="text-[10px] text-slate-500 font-bold">Học sinh</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-blue-100">
                    <div className="text-lg font-black text-slate-900">{grade11Attempts.length}</div>
                    <div className="text-[10px] text-slate-500 font-bold">Lượt làm</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-blue-100">
                    <div className="text-lg font-black text-blue-700">{grade11Avg}</div>
                    <div className="text-[10px] text-slate-500 font-bold">ĐTB Khối</div>
                  </div>
                </div>
              </div>

              {/* Khối 12 */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50/70 to-indigo-50/70 border border-purple-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-purple-700 text-white">
                    KHỐI 12
                  </span>
                  <span className="text-xs font-bold text-purple-800">8 Chương học</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="bg-white p-2 rounded-lg border border-purple-100">
                    <div className="text-lg font-black text-slate-900">{grade12Students.length}</div>
                    <div className="text-[10px] text-slate-500 font-bold">Học sinh</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-purple-100">
                    <div className="text-lg font-black text-slate-900">{grade12Attempts.length}</div>
                    <div className="text-[10px] text-slate-500 font-bold">Lượt làm</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-purple-100">
                    <div className="text-lg font-black text-purple-700">{grade12Avg}</div>
                    <div className="text-[10px] text-slate-500 font-bold">ĐTB Khối</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Statistics Table by Student Name */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-700" />
                  <span>Bảng vàng Thống kê theo Tên học sinh</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Xếp hạng theo điểm trung bình, điểm cao nhất và số lượt ôn luyện
                </p>
              </div>
            </div>

            {/* Controls Toolbar: Search & Filter */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={studentSearchKeyword}
                    onChange={(e) => setStudentSearchKeyword(e.target.value)}
                    placeholder="Tìm tên học sinh hoặc lớp..."
                    className="pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 w-48 sm:w-60 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500 font-medium"
                  />
                </div>

                {/* Grade filter */}
                <select
                  value={studentGradeFilter}
                  onChange={(e) => setStudentGradeFilter(e.target.value === 'all' ? 'all' : Number(e.target.value) as Grade)}
                  className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none"
                >
                  <option value="all">Tất cả các khối</option>
                  <option value={10}>Khối 10</option>
                  <option value={11}>Khối 11</option>
                  <option value={12}>Khối 12</option>
                </select>

                {/* Sort selector */}
                <select
                  value={studentSortBy}
                  onChange={(e) => setStudentSortBy(e.target.value as any)}
                  className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none"
                >
                  <option value="avg_desc">Sắp xếp: Điểm TB cao nhất</option>
                  <option value="highest_desc">Sắp xếp: Điểm cao nhất</option>
                  <option value="attempts_desc">Sắp xếp: Số lượt luyện tập</option>
                  <option value="name_asc">Sắp xếp: Tên học sinh A - Z</option>
                </select>
              </div>

              <div className="text-xs font-bold text-slate-600">
                Hiển thị: <strong className="text-purple-700">{filteredStudents.length}</strong> / {allStudents.length} học sinh
              </div>
            </div>

            {/* Students Table */}
            {filteredStudents.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-500">
                Không tìm thấy học sinh nào phù hợp với bộ lọc tìm kiếm.
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-3 w-12 text-center">STT</th>
                      <th className="py-3 px-4">Họ và tên học sinh</th>
                      <th className="py-3 px-3">Lớp & Khối</th>
                      <th className="py-3 px-3 text-center">Lượt ôn</th>
                      <th className="py-3 px-3 text-center">Điểm TB</th>
                      <th className="py-3 px-3 text-center">Điểm cao nhất</th>
                      <th className="py-3 px-4">Lần ôn gần nhất</th>
                      <th className="py-3 px-3 text-center">Xếp loại</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredStudents.map((student, idx) => {
                      const isExcellent = student.averageScore >= 9.0;
                      const isGood = student.averageScore >= 8.0 && student.averageScore < 9.0;
                      const isFair = student.averageScore >= 6.5 && student.averageScore < 8.0;
                      const isAverage = student.averageScore >= 5.0 && student.averageScore < 6.5;

                      let badgeClass = 'bg-rose-100 text-rose-800 border-rose-200';
                      let rankLabel = 'Cần cố gắng';
                      if (isExcellent) {
                        badgeClass = 'bg-purple-100 text-purple-800 border-purple-200 font-black';
                        rankLabel = 'Xuất sắc';
                      } else if (isGood) {
                        badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-200 font-bold';
                        rankLabel = 'Giỏi';
                      } else if (isFair) {
                        badgeClass = 'bg-blue-100 text-blue-800 border-blue-200 font-bold';
                        rankLabel = 'Khá';
                      } else if (isAverage) {
                        badgeClass = 'bg-amber-100 text-amber-800 border-amber-200 font-bold';
                        rankLabel = 'Trung bình';
                      }

                      return (
                        <tr key={student.studentKey} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-3 text-center font-bold text-slate-400">
                            {idx + 1}
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900">
                            <div className="flex items-center space-x-2">
                              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[10px] font-black shrink-0">
                                {student.studentName.charAt(0)}
                              </span>
                              <span>{student.studentName}</span>
                            </div>
                          </td>
                          <td className="py-3 px-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
                              Lớp {student.className}
                            </span>
                            <span className="ml-1 text-[10px] text-slate-500 font-semibold">
                              (K{student.grade})
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center font-bold text-slate-700">
                            {student.attemptsCount} lần
                          </td>
                          <td className="py-3 px-3 text-center font-black text-sm text-teal-700">
                            {student.averageScore.toFixed(1)}
                          </td>
                          <td className="py-3 px-3 text-center font-extrabold text-slate-900">
                            {student.highestScore.toFixed(1)}
                          </td>
                          <td className="py-3 px-4 text-slate-500">
                            <div className="font-semibold text-slate-700 truncate max-w-xs">{student.latestChapter}</div>
                            <div className="text-[10px] text-slate-400">
                              {new Date(student.latestDate).toLocaleDateString('vi-VN')} {new Date(student.latestDate).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] border ${badgeClass}`}>
                              {rankLabel}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
