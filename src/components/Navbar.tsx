import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Grade } from '../types';
import {
  FlaskConical,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  ShieldAlert,
  UserCheck,
  ChevronDown,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentUser,
    switchUserRole,
    currentGrade,
    setCurrentGrade,
    currentView,
    setCurrentView,
    wrongQuestionIds,
    questions,
  } = useApp();

  const [showUserModal, setShowUserModal] = useState(false);

  const pendingQuestionsCount = questions.filter((q) => q.status === 'pending_approval').length;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo & Brand */}
            <div
              onClick={() => setCurrentView('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-base sm:text-lg font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-teal-900 to-blue-900 bg-clip-text text-transparent">
                    HÓA HỌC THPT ĐAKRÔNG
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                    GDPT 2018
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                  Hệ thống ôn luyện & đánh giá năng lực Hóa học trực tuyến
                </p>
              </div>
            </div>

            {/* Grade Switcher Tabs */}
            <div className="hidden md:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
              {([10, 11, 12] as Grade[]).map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    setCurrentGrade(g);
                    if (currentView === 'theory' || currentView === 'quiz-setup') {
                      // remain in current view or update
                    }
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currentGrade === g
                      ? 'bg-white text-teal-700 shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Lớp {g}
                </button>
              ))}
            </div>

            {/* Navigation & User Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Quick nav */}
              <button
                onClick={() => setCurrentView('home')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                  currentView === 'home'
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
                title="Trang chủ"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden lg:inline">Chương trình</span>
              </button>

              <button
                onClick={() => setCurrentView('wrong-questions')}
                className={`relative p-2 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                  currentView === 'wrong-questions'
                    ? 'text-amber-700 bg-amber-50'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
                title="Luyện câu sai"
              >
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span className="hidden lg:inline">Câu sai</span>
                {wrongQuestionIds.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500 text-white">
                    {wrongQuestionIds.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setCurrentView('history')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                  currentView === 'history'
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
                title="Lịch sử kết quả"
              >
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <span className="hidden lg:inline">Lịch sử</span>
              </button>

              {/* Teacher Admin Entry */}
              <button
                onClick={() => setCurrentView('teacher-admin')}
                className={`relative px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-all ${
                  currentView === 'teacher-admin'
                    ? 'bg-purple-700 text-white shadow-xs'
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200'
                }`}
                title="Khu vực quản trị giáo viên"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Quản trị GV</span>
                {pendingQuestionsCount > 0 && (
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping absolute -top-0.5 -right-0.5" />
                )}
              </button>

              {/* User badge & role switch button */}
              <button
                onClick={() => setShowUserModal(true)}
                className="flex items-center space-x-2 pl-2 pr-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-left transition-colors"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                    currentUser.role === 'teacher'
                      ? 'bg-purple-600'
                      : 'bg-teal-600'
                  }`}
                >
                  {currentUser.role === 'teacher' ? 'GV' : 'HS'}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-slate-800 leading-tight truncate max-w-[110px]">
                    {currentUser.name}
                  </div>
                  <div className="text-[10px] text-slate-500 capitalize">
                    {currentUser.role === 'teacher' ? 'Giáo viên Hóa' : `Học sinh ${currentUser.className}`}
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Grade Bar */}
        <div className="flex md:hidden items-center justify-center bg-slate-100/90 py-1.5 px-4 border-t border-slate-200/60 space-x-2">
          <span className="text-[11px] font-medium text-slate-500">Khối lớp:</span>
          {([10, 11, 12] as Grade[]).map((g) => (
            <button
              key={g}
              onClick={() => setCurrentGrade(g)}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                currentGrade === g
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              Lớp {g}
            </button>
          ))}
        </div>
      </header>

      {/* User Switch Modal */}
      {showUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Tài khoản & Phân quyền
                  </h3>
                  <p className="text-xs text-slate-500">
                    Trường THPT Đakrông, tỉnh Quảng Trị
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowUserModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            <div className="my-5 space-y-3">
              <p className="text-xs text-slate-600 font-medium">
                Chọn vai trò để trải nghiệm ứng dụng:
              </p>

              {/* Student Option */}
              <div
                onClick={() => {
                  switchUserRole('student');
                  setShowUserModal(false);
                }}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  currentUser.role === 'student'
                    ? 'border-teal-500 bg-teal-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">
                        Nguyễn Văn An (Học sinh)
                      </div>
                      <div className="text-xs text-slate-500">
                        Lớp 12A1 • Trường THPT Đakrông
                      </div>
                    </div>
                  </div>
                  {currentUser.role === 'student' && (
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  )}
                </div>
                <div className="mt-2 text-[11px] text-slate-600 bg-white/70 p-2 rounded-lg border border-slate-100">
                  Ôn lý thuyết, luyện tập 3 dạng thức, làm lại không giới hạn, xem giải thích chi tiết và bảng thống kê kết quả.
                </div>
              </div>

              {/* Teacher Option */}
              <div
                onClick={() => {
                  switchUserRole('teacher');
                  setShowUserModal(false);
                }}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  currentUser.role === 'teacher'
                    ? 'border-purple-500 bg-purple-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">
                        Thầy Kiên (Giáo viên quản trị)
                      </div>
                      <div className="text-xs text-slate-500">
                        kien.hoathptdkr@gmail.com • Tổ Hóa học
                      </div>
                    </div>
                  </div>
                  {currentUser.role === 'teacher' && (
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  )}
                </div>
                <div className="mt-2 text-[11px] text-purple-900/80 bg-white/70 p-2 rounded-lg border border-purple-100">
                  Quản lý ngân hàng câu hỏi, duyệt câu hỏi, sinh đề AI bằng Gemini, cấu hình lý thuyết và theo dõi điểm số học sinh.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowUserModal(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
