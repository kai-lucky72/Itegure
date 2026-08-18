import React from 'react';
import { Language, ViewMode } from '../types';
import { BookOpen, CheckCircle2, Award, Compass, FileText, Globe, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  totalAnswered: number;
  passedTests: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onSelectView,
  language,
  onLanguageChange,
  totalAnswered,
  passedTests,
}) => {
  const navItems: { id: ViewMode; label: { rw: string; en: string; fr: string }; icon: React.ReactNode }[] = [
    {
      id: 'home',
      label: { rw: 'Ahabanza', en: 'Home', fr: 'Accueil' },
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: 'quiz',
      label: { rw: 'Ikizamini (20 Q)', en: 'Mock Exam (20)', fr: 'Examen Blanc (20)' },
      icon: <CheckCircle2 className="w-4 h-4" />
    },
    {
      id: 'bank',
      label: { rw: 'Ibibazo 400', en: '400 Question Bank', fr: 'Banque 400 Qs' },
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      id: 'signs',
      label: { rw: 'Ibyapa', en: 'Road Signs', fr: 'Panneaux' },
      icon: <Compass className="w-4 h-4" />
    },
    {
      id: 'revision_notes',
      label: { rw: 'Incamake y\'Amategeko', en: 'Rule Summary', fr: 'Aide-Mémoire' },
      icon: <FileText className="w-4 h-4" />
    },
  ];

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6 pb-4 border-b border-[#E5E2D9]">
      {/* Brand & Title */}
      <div 
        onClick={() => onSelectView('home')}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-11 h-11 bg-[#4A6741] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:bg-[#3D5636] transition-colors">
          P
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-[#2D2D2D]">Provisoire RW</h1>
            <span className="bg-[#E9EDC9] text-[#4A6741] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#CCD5AE]">
              2026 OFFICIAL
            </span>
          </div>
          <p className="text-xs text-[#8B8678] font-medium tracking-wide uppercase">
            {language === 'rw' && 'Gahunda yo Kwitegura Uruhushya rw\'Agateganyo'}
            {language === 'en' && 'Rwandan Provisional Driving License Prep'}
            {language === 'fr' && 'Préparation au Permis Provisoire Rwanda'}
          </p>
        </div>
      </div>

      {/* Navigation Pills */}
      <nav className="flex items-center flex-wrap justify-center gap-1.5 bg-[#F1EDE4] p-1.5 rounded-full border border-[#E5E2D9]">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectView(item.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-[#4A6741] text-white shadow-sm'
                  : 'text-[#2D2D2D] hover:bg-white hover:text-[#4A6741]'
              }`}
            >
              {item.icon}
              <span>{item.label[language]}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Controls: Stats & Language Switcher */}
      <div className="flex items-center gap-3">
        {/* Quick Stats Pill */}
        <div className="hidden sm:flex bg-white px-3.5 py-1.5 rounded-full border border-[#E5E2D9] items-center gap-3 text-xs">
          <div className="flex items-center gap-1 text-[#4A6741] font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>{passedTests} {language === 'rw' ? 'Byatsinze' : language === 'en' ? 'Passed' : 'Réussis'}</span>
          </div>
          <span className="w-1 h-3 bg-[#E5E2D9] rounded-full"></span>
          <div className="text-[#8B8678] font-medium">
            {totalAnswered} {language === 'rw' ? 'Ibibazo' : 'Qs'}
          </div>
        </div>

        {/* Multilingual Selector */}
        <div className="flex items-center bg-white rounded-full border border-[#E5E2D9] p-1 shadow-2xs">
          <Globe className="w-3.5 h-3.5 text-[#8B8678] ml-2 mr-1" />
          <button
            onClick={() => onLanguageChange('rw')}
            className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
              language === 'rw'
                ? 'bg-[#4A6741] text-white'
                : 'text-[#8B8678] hover:text-[#2D2D2D]'
            }`}
            title="Ikinyarwanda (Official Test Language)"
          >
            RW
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
              language === 'en'
                ? 'bg-[#4A6741] text-white'
                : 'text-[#8B8678] hover:text-[#2D2D2D]'
            }`}
            title="English"
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange('fr')}
            className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
              language === 'fr'
                ? 'bg-[#4A6741] text-white'
                : 'text-[#8B8678] hover:text-[#2D2D2D]'
            }`}
            title="Français"
          >
            FR
          </button>
        </div>
      </div>
    </header>
  );
};
