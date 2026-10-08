import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { TheoryView } from './components/TheoryView';
import { QuizSetupView } from './components/QuizSetupView';
import { QuizActiveView } from './components/QuizActiveView';
import { QuizResultView } from './components/QuizResultView';
import { HistoryView } from './components/HistoryView';
import { WrongQuestionsView } from './components/WrongQuestionsView';
import { TeacherAdminView } from './components/TeacherAdminView';
import { FlaskConical, MapPin, Mail, Award, BookOpen } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentView } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentView === 'home' && <HomeView />}
        {currentView === 'theory' && <TheoryView />}
        {currentView === 'quiz-setup' && <QuizSetupView />}
        {currentView === 'quiz-active' && <QuizActiveView />}
        {currentView === 'quiz-result' && <QuizResultView />}
        {currentView === 'history' && <HistoryView />}
        {currentView === 'wrong-questions' && <WrongQuestionsView />}
        {currentView === 'teacher-admin' && <TeacherAdminView />}
      </main>

      {/* Educational Footer */}
      <footer className="mt-auto bg-white border-t border-slate-200/80 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-slate-800 text-xs sm:text-sm">
                TRƯỜNG THPT ĐAKRÔNG • TỔ CHUYÊN MÔN HÓA HỌC
              </div>
              <div className="text-[11px] text-slate-500">
                Chương trình Giáo dục Phổ thông 2018 — Định hướng Đề thi Tốt nghiệp THPT Quốc gia
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-medium text-slate-600">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Huyện Đakrông, Tỉnh Quảng Trị</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>kien.hoathptdkr@gmail.com</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
