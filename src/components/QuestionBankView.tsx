import React, { useState } from 'react';
import { Question, Language, QuestionCategory } from '../types';
import { Search, Filter, BookOpen, CheckCircle2, ChevronDown, ChevronUp, Bookmark, BookmarkCheck } from 'lucide-react';

interface QuestionBankViewProps {
  questions: Question[];
  language: Language;
  onStartExamWithQuestions: (questions: Question[]) => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({
  questions,
  language,
  onStartExamWithQuestions,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('provisoire_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: number) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('provisoire_bookmarks', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const categories: { id: string; label: { rw: string; en: string; fr: string } }[] = [
    { id: 'all', label: { rw: `Byose (${questions.length})`, en: `All (${questions.length})`, fr: `Tous (${questions.length})` } },
    { id: 'bookmarks', label: { rw: `Ibyo Washyizeho Akamenyetso (${bookmarkedIds.length})`, en: `Bookmarked (${bookmarkedIds.length})`, fr: `Favoris (${bookmarkedIds.length})` } },
    { id: 'definitions', label: { rw: 'Ibisobanuro', en: 'Definitions', fr: 'Définitions' } },
    { id: 'priority', label: { rw: 'Uburenganzira', en: 'Priority', fr: 'Priorités' } },
    { id: 'signs', label: { rw: 'Ibyapa', en: 'Signs', fr: 'Panneaux' } },
    { id: 'speed', label: { rw: 'Umuvuduko', en: 'Speed', fr: 'Vitesse' } },
    { id: 'lights', label: { rw: 'Amatara', en: 'Lights', fr: 'Feux' } },
    { id: 'overtaking', label: { rw: 'Kunyuranaho', en: 'Overtaking', fr: 'Dépassement' } },
    { id: 'towing', label: { rw: 'Gukurura', en: 'Towing', fr: 'Remorquage' } },
    { id: 'technical', label: { rw: 'Igenzura', en: 'Inspection', fr: 'Contrôle' } },
    { id: 'penalties', label: { rw: 'Ibihano', en: 'Penalties', fr: 'Amandes' } },
    { id: 'parking', label: { rw: 'Guparika', en: 'Parking', fr: 'Stationnement' } },
  ];

  const filteredQuestions = questions.filter((q) => {
    if (selectedCategory === 'bookmarks') {
      if (!bookmarkedIds.includes(q.id)) return false;
    } else if (selectedCategory !== 'all' && q.category !== selectedCategory) {
      return false;
    }

    if (!searchQuery.trim()) return true;

    const clean = searchQuery.toLowerCase().trim();
    const qText = q.question[language]?.toLowerCase() || '';
    const expText = q.explanation[language]?.toLowerCase() || '';
    const optText = q.options[language]?.join(' ').toLowerCase() || '';
    const article = q.articleRef?.toLowerCase() || '';

    return qText.includes(clean) || expText.includes(clean) || optText.includes(clean) || article.includes(clean);
  });

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header Bar */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E5E2D9] shadow-2xs flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#2D2D2D]">
              {language === 'rw' ? `Ububiko bw'Ibibazo ${questions.length} Byose` : `${questions.length} Complete Question Bank`}
            </h2>
            <p className="text-xs text-[#8B8678]">
              {language === 'rw'
                ? `Ibibazo byose ${questions.length} bifite ibisubizo by'ukuri n'ingingo z'amategeko y'u Rwanda.`
                : `All ${questions.length} official questions with correct answers and Rwandan legal articles.`}
            </p>
          </div>

          {filteredQuestions.length > 0 && (
            <button
              onClick={() => onStartExamWithQuestions(filteredQuestions.slice(0, 20))}
              className="bg-[#4A6741] hover:bg-[#3D5636] text-white px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 self-start sm:self-auto transition-colors cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{language === 'rw' ? `Kora Ikizamini ku Bibazo Bishunguwe (${Math.min(20, filteredQuestions.length)})` : `Quiz Filtered Set (${Math.min(20, filteredQuestions.length)})`}</span>
            </button>
          )}
        </div>

        {/* Search Input in Natural Tones style */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#8B8678] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'rw'
                ? 'Shakisha ikibazo cyangwa amagambo (urugero: icyapa, umuvuduko, 40, feri)...'
                : 'Search questions by keyword (e.g., speed, right of way, overtaking, lights)...'
            }
            className="w-full bg-[#F9F7F2] border border-[#E5E2D9] rounded-2xl pl-11 pr-4 py-3 text-sm text-[#2D2D2D] focus:outline-none focus:border-[#4A6741] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#8B8678] hover:text-[#2D2D2D]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#4A6741] text-white shadow-2xs'
                    : 'bg-[#F1EDE4] text-[#2D2D2D] hover:bg-[#E5E2D9]'
                }`}
              >
                {cat.label[language] || cat.label.rw}
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions List */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs font-bold text-[#8B8678] uppercase tracking-wider">
            {filteredQuestions.length} {language === 'rw' ? 'Ibibazo Bibonetse' : 'Questions Found'}
          </span>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="bg-white rounded-[32px] p-12 text-center border border-[#E5E2D9]">
            <BookOpen className="w-10 h-10 text-[#8B8678] mx-auto mb-3" />
            <h3 className="font-bold text-[#2D2D2D] mb-1">
              {language === 'rw' ? 'Nta kibazo gihuye n\'ibyo ushaka' : 'No questions match your query'}
            </h3>
            <p className="text-xs text-[#8B8678]">
              {language === 'rw' ? 'Gerageza guhindura amagambo ushakisha cyangwa uhindure category.' : 'Try adjusting your search terms or category filter.'}
            </p>
          </div>
        ) : (
          filteredQuestions.map((q, index) => {
            const isExpanded = expandedQuestionId === q.id;
            const isBookmarked = bookmarkedIds.includes(q.id);

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl p-6 border border-[#E5E2D9] shadow-2xs hover:border-[#4A6741]/50 transition-all flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F1EDE4] text-[#4A6741] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {q.id}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B8678]">
                          {q.category}
                        </span>
                        {q.articleRef && (
                          <span className="bg-[#F9F7F2] text-[#4A6741] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#E5E2D9]">
                            {q.articleRef}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#2D2D2D] leading-snug">
                        {q.question[language] || q.question.rw}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => toggleBookmark(q.id)}
                      className={`p-2 rounded-full transition-colors cursor-pointer ${
                        isBookmarked
                          ? 'bg-[#E9EDC9] text-[#4A6741]'
                          : 'text-[#8B8678] hover:bg-[#F1EDE4]'
                      }`}
                      title="Bookmark Question"
                    >
                      {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                      className="p-2 rounded-full text-[#8B8678] hover:bg-[#F1EDE4] transition-colors cursor-pointer"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Always Show Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.options[language]?.map((opt, optIdx) => {
                    const isCorrect = optIdx === q.correctIndex;
                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border text-xs flex items-center gap-2.5 transition-colors ${
                          isCorrect
                            ? 'bg-[#E9EDC9] border-[#CCD5AE] text-[#4A6741] font-semibold'
                            : 'bg-[#F9F7F2] border-[#E5E2D9] text-[#2D2D2D]'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${
                          isCorrect ? 'bg-[#4A6741] text-white' : 'bg-white text-[#8B8678] border border-[#E5E2D9]'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1 leading-normal">{opt}</span>
                        {isCorrect && <CheckCircle2 className="w-4 h-4 text-[#4A6741] shrink-0" />}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation accordion */}
                {isExpanded && (
                  <div className="bg-[#F1EDE4] rounded-xl p-4 text-xs text-[#2D2D2D] leading-relaxed border border-[#E5E2D9]">
                    <strong className="text-[#4A6741] mr-1">
                      {language === 'rw' ? 'Ibisobanuro & Iteka rya Perezida:' : 'Official Explanation & Legal Basis:'}
                    </strong>
                    {q.explanation[language] || q.explanation.rw}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
