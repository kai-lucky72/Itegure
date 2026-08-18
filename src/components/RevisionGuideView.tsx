import React from 'react';
import { Language } from '../types';
import { FileText, ShieldAlert, Zap, Truck, Lightbulb, Compass, Award } from 'lucide-react';

interface RevisionGuideViewProps {
  language: Language;
}

export const RevisionGuideView: React.FC<RevisionGuideViewProps> = ({ language }) => {
  const revisionCards = [
    {
      title: { rw: 'Umuvuduko Ntarengwa (Speed Limits)', en: 'Speed Limits (Vitesse)', fr: 'Vitesses Maximales' },
      items: [
        { label: { rw: 'Mu mijyi / Insisiro (Agglomération)', en: 'Urban / Built-up areas', fr: 'En agglomération' }, value: '40 km/h' },
        { label: { rw: 'Imodoka zitwara abagenzi / Iremereye', en: 'Buses & Heavy Transport', fr: 'Transport en commun & poids lourds' }, value: '60 km/h' },
        { label: { rw: 'Imodoka nto hanze y\'insisiro', en: 'Cars outside built-up areas', fr: 'Voitures hors agglomération' }, value: '80 km/h' },
      ]
    },
    {
      title: { rw: 'Uburebure n\'Ibyo Ikinyabiziga Gikurura (Dimensions)', en: 'Vehicle Dimensions & Weights', fr: 'Dimensions & Poids' },
      items: [
        { label: { rw: 'Ubuhagarike ntarengwa (Height)', en: 'Maximum Height', fr: 'Hauteur maximale' }, value: '4.30 m' },
        { label: { rw: 'Ubugari ntarengwa (Width)', en: 'Maximum Width', fr: 'Largeur maximale' }, value: '2.50 m' },
        { label: { rw: 'Uburebure bw\'ikinyabiziga kimwe', en: 'Single Vehicle Length', fr: 'Longueur véhicule isolé' }, value: '11 m / 12 m' },
        { label: { rw: 'Uburebure bw\'ibinyabiziga bikururana', en: 'Articulated Vehicle Length', fr: 'Ensemble articulé' }, value: '18 m' },
      ]
    },
    {
      title: { rw: 'Amatara n\'Uko Amurika (Vehicle Lights)', en: 'Vehicle Lighting & Beam Distances', fr: 'Feux & Visibilité' },
      items: [
        { label: { rw: 'Amatara Maremare (Feux de route / High Beam)', en: 'High Beams distance', fr: 'Feux de route' }, value: '100 m' },
        { label: { rw: 'Amatara Magufi (Feux de croisement / Low Beam)', en: 'Low Beams distance', fr: 'Feux de croisement' }, value: '40 m' },
        { label: { rw: 'Amatara Ndangambere (Position / Sidelights)', en: 'Position Lights visibility', fr: 'Feux de position' }, value: '150 m' },
        { label: { rw: 'Amatara yo Gusubira Inyuma (Reversing)', en: 'Reverse Light distance', fr: 'Feux de marche arrière' }, value: '20 m' },
      ]
    },
    {
      title: { rw: 'Gukurura n\'Umutekano (Towing & Safety)', en: 'Towing, Loading & Distances', fr: 'Remorquage & Sécurité' },
      items: [
        { label: { rw: 'Intera y\'ikimenyetso cy\'inkingi y\'amakuba (Triangule)', en: 'Warning Triangle Distance', fr: 'Triangle de présignalisation' }, value: 'Nibura 30 m' },
        { label: { rw: 'Kurenza umutwaro inyuma y\'ikinyabiziga (Rear overhang)', en: 'Maximum Rear Overhang', fr: 'Dépassement arrière max' }, value: 'Max 3.00 m' },
        { label: { rw: 'Umutwaro urenze 1m inyuma ugomba kugira iki?', en: 'Overhang > 1m requirement', fr: 'Dépassement > 1m' }, value: 'Igitambaro gitukura / Itara' },
        { label: { rw: 'Intera y\'umugozi wo gukurura (Towing rope)', en: 'Towing Rope Distance', fr: 'Distance de remorquage' }, value: 'Max 5 m (Flag if > 3m)' },
      ]
    },
    {
      title: { rw: 'Inzoga & Amategeko (Alcohol & Priority)', en: 'Alcohol Limits & Priorities', fr: 'Alcoolémie & Priorité' },
      items: [
        { label: { rw: 'Igipimo ntarengwa cy\'inzoga mu maraso', en: 'Max Blood Alcohol Concentration', fr: 'Taux max d\'alcoolémie' }, value: '0.80 g/L' },
        { label: { rw: 'Itegeko rusange ry\'amasangano', en: 'Default Priority Rule', fr: 'Priorité par défaut' }, value: 'Iburyo (Right hand rule)' },
        { label: { rw: 'Ihembe ry\'imodoka ryumvikanira he?', en: 'Horn audible distance', fr: 'Avertisseur sonore' }, value: '100 m' },
        { label: { rw: 'Ubujyakuzimu bw\'inzira z\'ipine (Tread depth)', en: 'Minimum Tyre Tread Depth', fr: 'Profondeur des rainures' }, value: '1.0 mm' },
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Top Banner */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E5E2D9] shadow-2xs">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#E9EDC9] text-[#4A6741] text-xs font-bold px-3 py-1 rounded-full border border-[#CCD5AE]">
            Ibyo Kwibuka
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D]">
          {language === 'rw' ? 'Incamake y\'Amategeko y\'Umuhanda mu Rwanda' : 'Rwandan Traffic Law Quick Reference'}
        </h2>
        <p className="text-xs sm:text-sm text-[#8B8678] mt-1">
          {language === 'rw'
            ? 'Imibare n\'amategeko y\'ingenzi akunze kubazwa cyane mu kizamini cy\'uruhushya rw\'agateganyo (Iteka rya Perezida N° 85/01).'
            : 'Crucial numerical limits and key articles frequently tested in the official provisional driving exam.'}
        </p>
      </div>

      {/* Grid of Reference Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {revisionCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-[#E5E2D9] shadow-2xs flex flex-col gap-4"
          >
            <h3 className="font-bold text-base text-[#2D2D2D] pb-3 border-b border-[#E5E2D9] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4A6741]"></span>
              <span>{card.title[language] || card.title.rw}</span>
            </h3>

            <div className="space-y-3">
              {card.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#F9F7F2] border border-[#E5E2D9] text-xs"
                >
                  <span className="text-[#2D2D2D] font-medium max-w-[65%]">
                    {item.label[language] || item.label.rw}
                  </span>
                  <span className="font-bold text-[#4A6741] bg-white px-2.5 py-1 rounded-lg border border-[#E5E2D9]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
