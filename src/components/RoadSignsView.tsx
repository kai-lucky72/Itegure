import React, { useState } from 'react';
import { Language } from '../types';
import { TRAFFIC_SIGNS_DATA, TrafficSign } from '../data/trafficSigns';
import { Compass, AlertTriangle, Ban, ArrowUpCircle, Info } from 'lucide-react';

interface RoadSignsViewProps {
  language: Language;
}

export const RoadSignsView: React.FC<RoadSignsViewProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { rw: 'Ibyapa Byose', en: 'All Signs', fr: 'Tous les Panneaux' } },
    { id: 'priority', label: { rw: 'Uburenganzira (Priorité)', en: 'Priority', fr: 'Priorité' } },
    { id: 'danger', label: { rw: 'Ibimenyetso by\'Amakuba (Danger)', en: 'Danger & Warning', fr: 'Danger' } },
    { id: 'prohibition', label: { rw: 'Ibibuzwa (Interdiction)', en: 'Prohibition', fr: 'Interdiction' } },
    { id: 'obligation', label: { rw: 'Ibitegekwa (Obligation)', en: 'Mandatory', fr: 'Obligation' } },
    { id: 'indication', label: { rw: 'Ibyerekeza n\'Ibiyobora', en: 'Indication & Info', fr: 'Indication' } },
  ];

  const filteredSigns = TRAFFIC_SIGNS_DATA.filter(
    sign => activeCategory === 'all' || sign.category === activeCategory
  );

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Top Banner */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E5E2D9] shadow-2xs flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#E9EDC9] text-[#4A6741] text-xs font-bold px-3 py-1 rounded-full border border-[#CCD5AE]">
              Ibyapa byo mu Rwanda
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D]">
            {language === 'rw' ? 'Ibyapa n\'Ibimenyetso byo mu Muhanda' : 'Rwandan Traffic Signs & Symbols'}
          </h2>
          <p className="text-xs sm:text-sm text-[#8B8678] mt-1">
            {language === 'rw'
              ? 'Menya amoko y\'ibyapa: Impandeshatu (Amakuba), Uruziga rutukura (Kubuza), Uruziga rw\'ubururu (Gutegeka), na Kare y\'ubururu (Kumenyesha).'
              : 'Master sign shapes: Triangle (Danger/Warning), Red Circle (Prohibition), Blue Circle (Mandatory Order), and Blue Square (Information).'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors cursor-pointer ${
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

      {/* Signs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSigns.map((sign) => {
          let shapeBadge = 'bg-[#F9F7F2] border-[#E5E2D9] text-[#2D2D2D]';
          if (sign.shape === 'octagon') shapeBadge = 'bg-[#E07A5F] text-white font-extrabold';
          if (sign.shape === 'circle_red') shapeBadge = 'border-4 border-[#E07A5F] bg-white text-[#2D2D2D]';
          if (sign.shape === 'circle_blue') shapeBadge = 'bg-[#2B6CB0] text-white font-bold';
          if (sign.shape === 'square_blue') shapeBadge = 'bg-[#2B6CB0] text-white rounded-lg';
          if (sign.shape === 'triangle') shapeBadge = 'border-4 border-[#E07A5F] bg-white text-[#2D2D2D]';
          if (sign.shape === 'diamond') shapeBadge = 'border-4 border-[#D4A373] bg-[#FEF3C7] text-[#2D2D2D] rotate-45';

          return (
            <div
              key={sign.id}
              className="bg-white rounded-2xl p-6 border border-[#E5E2D9] shadow-2xs hover:border-[#4A6741] transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                {/* Visual Icon / Symbol */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-black shadow-xs shrink-0 ${shapeBadge}`}>
                  <span className={sign.shape === 'diamond' ? '-rotate-45' : ''}>
                    {sign.symbol}
                  </span>
                </div>

                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B8678] block mb-1">
                    {sign.category}
                  </span>
                  <h3 className="text-base font-bold text-[#2D2D2D] leading-snug">
                    {sign.name[language] || sign.name.rw}
                  </h3>
                </div>
              </div>

              <div className="bg-[#F1EDE4] rounded-xl p-3.5 text-xs text-[#2D2D2D] leading-relaxed border border-[#E5E2D9]">
                {sign.description[language] || sign.description.rw}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
