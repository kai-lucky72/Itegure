import React, { useState } from 'react';
import { Language, QuestionCategory, Difficulty } from '../types';
import { QUESTIONS_BANK } from '../data/questions';
import { 
  CheckCircle2, 
  BookOpen, 
  Compass, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Clock,
  HelpCircle,
  Award,
  Zap,
  Target,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Scale,
  Car,
  AlertTriangle,
  Lightbulb,
  UserCheck
} from 'lucide-react';

interface HomeDashboardProps {
  language: Language;
  onStartExam: () => void;
  onStartCategoryExam: (category: QuestionCategory) => void;
  onOpenBank: () => void;
  onOpenSigns: () => void;
  onOpenRevision: () => void;
  totalQuestions: number;
  completedTests: number;
  averageScore: number;
  difficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

const DIFFICULTIES: { id: Difficulty; label: { rw: string; en: string; fr: string }; time: string }[] = [
  { id: 'easy', label: { rw: 'Byoroshye', en: 'Easy', fr: 'Facile' }, time: '1m30s' },
  { id: 'medium', label: { rw: 'Hagati', en: 'Medium', fr: 'Moyen' }, time: '1m' },
  { id: 'hard', label: { rw: 'Bikomeye', en: 'Hard', fr: 'Difficile' }, time: '30s' },
];

const CATEGORIES: { id: QuestionCategory; name: { rw: string; en: string; fr: string }; icon: string; count: number; desc: { rw: string; en: string; fr: string } }[] = [
  { 
    id: 'definitions', 
    name: { rw: 'Ibisobanuro & Amategeko Rusange', en: 'Definitions & General Rules', fr: 'Définitions & Règles Générales' }, 
    icon: '📖', 
    count: 25,
    desc: { rw: 'Inzira nyabagendwa, ibinyabiziga, ibice by\'umuhanda', en: 'Public roads, vehicles, and road components', fr: 'Voies publiques, véhicules et composantes' }
  },
  { 
    id: 'priority', 
    name: { rw: 'Uburenganzira bwo Gutambuka (Priorité)', en: 'Right of Way & Intersections', fr: 'Priorités & Intersections' }, 
    icon: '🚦', 
    count: 35,
    desc: { rw: 'Amasangano, amategeko yo mu ruhande rw\'iburyo, amatara', en: 'Intersections, right-hand priority rules, signals', fr: 'Carrefours, priorité à droite, feux' }
  },
  { 
    id: 'signs', 
    name: { rw: "Ibyapa n'Ibimenyetso by'Umuhanda", en: 'Traffic Signs & Road Markings', fr: 'Panneaux & Signaux Routiers' }, 
    icon: '🛑', 
    count: 40,
    desc: { rw: 'Ibyapa by\'integuza, ibibuzwa, ibitegetswe n\'ibiyobora', en: 'Danger, prohibition, mandatory, and info signs', fr: 'Danger, interdiction, obligation et indication' }
  },
  { 
    id: 'speed', 
    name: { rw: 'Umuvuduko Ntarengwa (Vitesse)', en: 'Speed Limits & Distances', fr: 'Vitesses Maximales' }, 
    icon: '⚡', 
    count: 20,
    desc: { rw: 'Umuvuduko mu nsisiro (40 km/h), hanze (60-80 km/h)', en: 'Urban limits (40 km/h), highways (60-80 km/h)', fr: 'Agglomérations (40 km/h), hors agglomération (60-80 km/h)' }
  },
  { 
    id: 'lights', 
    name: { rw: 'Amatara n\'Ibimenyetso by\'Ikinyabiziga', en: 'Vehicle Lights & Signals', fr: 'Feux & Éclairage' }, 
    icon: '💡', 
    count: 20,
    desc: { rw: 'Amatara maremare, amagufi, ay\'umuvuduko, ibimenyetso', en: 'High beam, dipped beam, brake lights, indicators', fr: 'Feux de route, croisement, stop, clignotants' }
  },
  { 
    id: 'overtaking', 
    name: { rw: 'Kunyuranaho & Imyanya mu Muhanda', en: 'Overtaking & Lane Rules', fr: 'Dépassement & Positionnement' }, 
    icon: '🚗', 
    count: 20,
    desc: { rw: 'Kunyuranaho ibumoso, amategeko yo gukikira no gusatira', en: 'Overtaking on the left, lane discipline, clearance', fr: 'Dépassement à gauche, respect des voies' }
  },
  { 
    id: 'towing', 
    name: { rw: 'Gukurura & Ibitwarwa (Remorquage)', en: 'Towing & Loading Limits', fr: 'Remorquage & Chargement' }, 
    icon: '🚛', 
    count: 15,
    desc: { rw: 'Uburebure (4.30m), ubugari (2.50m), ikiziriko, imizigo', en: 'Height (4.30m), width (2.50m), tow bars, cargo limits', fr: 'Hauteur (4,30m), largeur (2,50m), remorquage' }
  },
  { 
    id: 'technical', 
    name: { rw: 'Igenzura ry\'Ikinyabiziga (Contrôle Technique)', en: 'Technical Inspection & Equipment', fr: 'Contrôle Technique' }, 
    icon: '🔧', 
    count: 15,
    desc: { rw: 'Fereri, amapine, indorerwamo, ibikoresho by\'ubutabazi', en: 'Braking, tyres, mirrors, emergency equipment', fr: 'Freinage, pneus, rétroviseurs, sécurité' }
  },
  { 
    id: 'penalties', 
    name: { rw: 'Ibihano n\'Amande (Contraventions)', en: 'Penalties & Fines', fr: 'Sanctions & Amendes' }, 
    icon: '⚖️', 
    count: 10,
    desc: { rw: 'Amande yo mu rwego rwa 1, 2, 3, 4 no kwamburwa uruhushya', en: 'Class 1 to 4 fines, suspensions, legal liability', fr: 'Amendes de 1ère à 4ème classe, suspensions' }
  },
  { 
    id: 'parking', 
    name: { rw: 'Guhagarara n\'Guparika (Stationnement)', en: 'Parking & Stopping', fr: 'Stationnement & Arrêt' }, 
    icon: '🅿️', 
    count: 25,
    desc: { rw: 'Aho guparika by\'umutegeko, intera n\'ibizira', en: 'Legal parking zones, distances, and prohibitions', fr: 'Zones de stationnement, distances et interdictions' }
  },
];

const FAQS = [
  {
    q: {
      rw: "Ni ayahe manota asabwa kugira ngo utsinde ikizamini cya Polisi?",
      en: "What is the official passing score for the provisional exam?",
      fr: "Quelle est la note minimale pour réussir l'examen provisoire ?"
    },
    a: {
      rw: "Usabwa kubona nibura amanota 12 kuri 20 (ni ukuvuga 60%) kugira ngo utsinde ikizamini cy'uruhushya rw'agateganyo mu Rwanda.",
      en: "You must score at least 12 out of 20 (60%) to pass the provisional driving license exam in Rwanda.",
      fr: "Vous devez obtenir au moins 12 sur 20 (60%) pour réussir l'examen du permis provisoire au Rwanda."
    }
  },
  {
    q: {
      rw: "Ikizamini cya Polisi kimara igihe kingana iki?",
      en: "How much time is allocated for the official computer exam?",
      fr: "Quelle est la durée officielle de l'examen ?"
    },
    a: {
      rw: "Uhabwa iminota makumyabiri (20 minutes) yo gusubiza ibibazo makumyabiri (20 questions). Buri kibazo kiba gifite amahitamo ane (A, B, C, D).",
      en: "You are given exactly 20 minutes to complete 20 multiple-choice questions (A, B, C, D).",
      fr: "Vous disposez de 20 minutes pour répondre à 20 questions à choix multiples (A, B, C, D)."
    }
  },
  {
    q: {
      rw: "Ibibazo by'iyi gahunda bishingiye kuki?",
      en: "What legal basis does this question bank follow?",
      fr: "Sur quel texte juridique cette plateforme est-elle basée ?"
    },
    a: {
      rw: "Ibibazo n'amategeko byose bishingiye 100% ku Iteka rya Perezida N° 85/01 ryo ku wa 02/09/2002 rigenga amategeko rusange y'umuhanda no gutwara ibinyabiziga mu Rwanda.",
      en: "All 400 questions and rules strictly adhere to Presidential Decree N° 85/01 of 02/09/2002 governing General Traffic Police Regulations in Rwanda.",
      fr: "Toutes les questions sont conformes au Décret Présidentiel N° 85/01 du 02/09/2002 réglementant la police de la circulation routière au Rwanda."
    }
  },
  {
    q: {
      rw: "Ese iyi gahunda ni ubuntu gukoresha?",
      en: "Is Provisoire RW free to use?",
      fr: "Cette plateforme est-elle gratuite ?"
    },
    a: {
      rw: "Yego, Provisoire RW ni gahunda y'ubuntu 100% yubatswe na Kagabo Lucky igamije gufasha abanyarwanda bose kwitegura neza no gutsindira uruhushya rw'agateganyo.",
      en: "Yes, Provisoire RW is 100% free and open for everyone, built by Kagabo Lucky to empower all Rwandan driving candidates.",
      fr: "Oui, Provisoire RW est 100% gratuite, créée par Kagabo Lucky pour aider tous les candidats à réussir leur permis."
    }
  }
];

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  language,
  onStartExam,
  onStartCategoryExam,
  onOpenBank,
  onOpenSigns,
  onOpenRevision,
  totalQuestions,
  completedTests,
  averageScore,
  difficulty,
  onDifficultyChange,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-12">
      {/* 1. HERO SECTION: Landing Header */}
      <section className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#E5E2D9] shadow-2xs relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="bg-[#E9EDC9] text-[#4A6741] text-xs font-bold px-3.5 py-1 rounded-full border border-[#CCD5AE] flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'rw' ? 'Gahunda Yizewe ya 2026' : language === 'en' ? 'Official 2026 Exam Prep' : 'Préparation Officielle 2026'}
            </span>
            <span className="text-xs text-[#8B8678] font-bold bg-[#F1EDE4] px-3 py-1 rounded-full border border-[#E5E2D9]">
              Iteka rya Perezida N° 85/01
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D2D] leading-[1.15] tracking-tight mb-5">
            {language === 'rw' && 'Tsinda Ikizamini cy\'Uruhushya rw\'Agateganyo (Provisoire)'}
            {language === 'en' && 'Pass Your Rwandan Provisional Driving License Exam on 1st Attempt'}
            {language === 'fr' && 'Réussissez votre Examen de Permis Provisoire du Premier Coup'}
          </h1>

          <p className="text-[#8B8678] text-base sm:text-lg leading-relaxed mb-8">
            {language === 'rw' && 'Urubuga rwuzuye rwo kwitoza ibibazo 400 by\'ukuri bikoreshwa mu kizamini cya Polisi y\'u Rwanda. Kora ibizamini by\'imyitozo by\'iminota 20, reba ibisobanuro by\'ingingo z\'amategeko ako kanya, unanoze ubumenyi bwawe ku byapa n\'amategeko y\'umuhanda.'}
            {language === 'en' && 'The comprehensive study platform featuring the authentic 400 question bank for the Rwanda National Police computer exam. Practice realistic 20-minute timed mock tests with instant legal justifications.'}
            {language === 'fr' && 'La plateforme complète d\'entraînement avec les 400 questions officielles de la Police Nationale du Rwanda. Passez des examens blancs chronométrés de 20 minutes avec explications légales immédiates.'}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onStartExam}
              className="bg-[#4A6741] hover:bg-[#3D5636] text-white px-8 py-4 rounded-full font-bold text-base shadow-sm flex items-center gap-3 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>{language === 'rw' ? 'Tangira Ikizamini (20 Qs)' : language === 'en' ? 'Start Mock Exam (20 Qs)' : 'Commencer l\'Examen (20 Qs)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBank}
              className="bg-[#F1EDE4] hover:bg-[#E5E2D9] text-[#2D2D2D] px-6 py-4 rounded-full font-bold text-sm border border-[#E5E2D9] transition-colors cursor-pointer flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#4A6741]" />
              <span>{language === 'rw' ? 'Ububiko bw\'Ibibazo 400' : 'Explore 400 Questions'}</span>
            </button>
          </div>

          {/* Difficulty / Time Per Question Selector */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[11px] font-bold text-[#8B8678] uppercase tracking-wider">
              {language === 'rw' ? 'Igihe ku Kibazo:' : language === 'en' ? 'Time Per Question:' : 'Temps par Question:'}
            </span>
            {DIFFICULTIES.map((d) => (
              <button
                key={d.id}
                onClick={() => onDifficultyChange(d.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                  difficulty === d.id
                    ? 'bg-[#4A6741] text-white border-[#4A6741] shadow-2xs'
                    : 'bg-white text-[#2D2D2D] border-[#E5E2D9] hover:border-[#4A6741]'
                }`}
                title={
                  language === 'rw' ? `Iminota ${d.time} ku kibazo` : `${d.time} per question`
                }
              >
                {d.label[language]}
                <span className={`text-[10px] font-bold ${difficulty === d.id ? 'text-[#E9EDC9]' : 'text-[#8B8678]'}`}>
                  {d.time}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Official Exam Requirements Badge Box */}
        <div className="w-full lg:w-84 bg-[#F9F7F2] rounded-3xl p-6 border border-[#E5E2D9] flex flex-col gap-4 shadow-2xs">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E5E2D9]">
            <ShieldCheck className="w-5 h-5 text-[#4A6741]" />
            <h3 className="font-bold text-sm text-[#2D2D2D] uppercase tracking-wider">
              {language === 'rw' ? 'Ibisabwa mu Kizamini cya Polisi' : language === 'en' ? 'Official Police Exam Rules' : 'Règles de l\'Examen Officiel'}
            </h3>
          </div>

          <div className="space-y-2.5 text-xs text-[#2D2D2D]">
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#E5E2D9]">
              <span className="text-[#8B8678] font-medium">{language === 'rw' ? 'Ibibazo bihabwa umukandida' : 'Questions per candidate'}</span>
              <span className="font-bold text-[#4A6741]">20 Questions</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#E5E2D9]">
              <span className="text-[#8B8678] font-medium">{language === 'rw' ? 'Amanota yo gutsinda' : 'Passing Mark'}</span>
              <span className="font-bold text-[#4A6741]">12 / 20 (60%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#E5E2D9]">
              <span className="text-[#8B8678] font-medium">{language === 'rw' ? 'Igihe kigenwe' : 'Time Allowed'}</span>
              <span className="font-bold text-[#2D2D2D]">20 Minutes</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#E5E2D9]">
              <span className="text-[#8B8678] font-medium">{language === 'rw' ? 'Ububiko bw\'ibibazo byose' : 'Total Question Bank'}</span>
              <span className="font-bold text-[#D4A373]">400 Questions</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#E5E2D9]">
              <span className="text-[#8B8678] font-medium">{language === 'rw' ? 'Uburyo bwo gusubiza' : 'Question Format'}</span>
              <span className="font-bold text-[#2D2D2D]">Multiple Choice (A, B, C, D)</span>
            </div>
          </div>

          {completedTests > 0 && (
            <div className="mt-1 pt-3 border-t border-[#E5E2D9] flex items-center justify-between text-xs">
              <span className="text-[#8B8678]">{language === 'rw' ? 'Ibizamini umaze gukora:' : 'Your tests completed:'}</span>
              <span className="font-bold text-[#4A6741]">{completedTests} ({averageScore}% avg)</span>
            </div>
          )}
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW: WHAT IS THIS PROJECT ABOUT */}
      <section className="bg-[#F1EDE4] rounded-[32px] p-8 sm:p-10 border border-[#E5E2D9]">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-[#4A6741] font-bold text-xs uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>{language === 'rw' ? 'Intego y\'uyu Mushinga' : language === 'en' ? 'About The Project' : 'À Propos du Projet'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-3">
            {language === 'rw' && 'Uyu mushinga ugamije iki kandi ufasha ute abakandida?'}
            {language === 'en' && 'What is Provisoire RW and how does it help you pass?'}
            {language === 'fr' && 'Quel est l\'objectif de ce projet et comment vous aide-t-il ?'}
          </h2>
          <p className="text-sm sm:text-base text-[#8B8678] leading-relaxed">
            {language === 'rw' && 'Kwiga no gutsindira uruhushya rw\'agateganyo (Provisoire) mu Rwanda bisaba gusobanukirwa neza amategeko y\'umuhanda, ubugenzuzi bwa tekiniki, n\'ibyapa byose. Uyu mushinga washinzwe na Kagabo Lucky hagamijwe guha abakandida bose ubushobozi bwo kwitoza mu buryo bugezweho, bworoshye, kandi bwerekeye amategeko y\'ukuri.'}
            {language === 'en' && 'Mastering the Rwandan theoretical driving exam requires a thorough command of road safety regulations, technical limits, and traffic signs. Created by Kagabo Lucky, this project provides a modern, interactive, and 100% legal-compliant digital platform for all candidates.'}
            {language === 'fr' && 'Réussir le permis provisoire rwandais exige une maîtrise claire du code de la route, des limites techniques et des panneaux. Créé par Kagabo Lucky, ce projet offre une plateforme moderne pour vous préparer efficacement.'}
          </p>
        </div>

        {/* 3 Pillars of the Platform */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E5E2D9]">
            <div className="w-10 h-10 rounded-xl bg-[#E9EDC9] text-[#4A6741] flex items-center justify-center font-bold mb-4">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#2D2D2D] mb-2">
              {language === 'rw' ? 'Amategeko Yizewe 100%' : '100% Legal Grounding'}
            </h3>
            <p className="text-xs text-[#8B8678] leading-relaxed">
              {language === 'rw' ? 'Ibibazo byose byakozwe hashingiwe ku Iteka rya Perezida N° 85/01 n\'amavugurura yaryo, bitanga ingingo z\'amategeko ku kimenyetso cyose.' : 'Every question cites exact presidential decree articles, giving you legal certainty on why answers are correct.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5E2D9]">
            <div className="w-10 h-10 rounded-xl bg-[#F1EDE4] text-[#D4A373] flex items-center justify-center font-bold mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#2D2D2D] mb-2">
              {language === 'rw' ? 'Ikizamini Nyakuri cya Mudasobwa' : 'Real Computer Simulator'}
            </h3>
            <p className="text-xs text-[#8B8678] leading-relaxed">
              {language === 'rw' ? 'Kwitoza mu minota 20 n\'ibibazo 20 bitondetse mu buryo butunguranye (Randomized) bituma witegura neza uburyo Polisi ikoresha.' : 'Simulate the exact 20-question, 20-minute computer environment used in Rwanda National Police exam centers.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5E2D9]">
            <div className="w-10 h-10 rounded-xl bg-[#E9EDC9] text-[#4A6741] flex items-center justify-center font-bold mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#2D2D2D] mb-2">
              {language === 'rw' ? 'Ibisobanuro by\'Ako Kanya' : 'Instant Feedback Mode'}
            </h3>
            <p className="text-xs text-[#8B8678] leading-relaxed">
              {language === 'rw' ? 'Buri gihe wishe ikibazo, uhita ubona igisubizo cy\'ukuri n\'ibisobanuro birambuye bituma udasubira gukora iryo kosa.' : 'Understand mistakes right away with instant color-coded corrections and detailed explanatory context.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP ROADMAP: HOW TO PRACTICE & PASS */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[#4A6741] font-bold text-xs uppercase tracking-wider">
              {language === 'rw' ? 'Uko Bikora Intambwe ku Yindi' : language === 'en' ? 'How It Works / Learning Path' : 'Comment Ça Marche'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D]">
              {language === 'rw' ? 'Intambwe 4 zo Kwitegura no Gutsinda' : '4 Steps to Pass with Confidence'}
            </h2>
          </div>
          <p className="text-xs text-[#8B8678] max-w-md">
            {language === 'rw' ? 'Kurikiza iyi nzira kugira ngo wuzuze ubumenyi bwose busabwa mbere yo kujya gukora ikizamini.' : 'Follow this proven roadmap to cover the entire curriculum before your test appointment.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-6 border border-[#E5E2D9] relative flex flex-col justify-between group hover:border-[#4A6741] transition-all">
            <div>
              <span className="text-3xl font-black text-[#E5E2D9] group-hover:text-[#CCD5AE] transition-colors mb-2 block">
                01
              </span>
              <h3 className="font-bold text-base text-[#2D2D2D] mb-2">
                {language === 'rw' ? 'Menya Ibyapa n\'Amategeko' : '1. Learn Signs & Rules'}
              </h3>
              <p className="text-xs text-[#8B8678] leading-relaxed mb-4">
                {language === 'rw' ? 'Soma incamake y\'amategeko y\'ingenzi (umuvuduko 40/60/80, uburebure 4.30m, ubugari 2.50m) hamwe n\'ibyapa byose byo mu muhanda.' : 'Review key numbers: 40/60/80 km/h speeds, 4.30m height, 2.50m width, and all 60+ traffic sign categories.'}
              </p>
            </div>
            <button
              onClick={onOpenSigns}
              className="text-xs font-bold text-[#4A6741] flex items-center gap-1 hover:underline cursor-pointer pt-2"
            >
              <span>{language === 'rw' ? 'Reba Ibyapa & Incamake' : 'Open Road Signs Guide'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-6 border border-[#E5E2D9] relative flex flex-col justify-between group hover:border-[#4A6741] transition-all">
            <div>
              <span className="text-3xl font-black text-[#E5E2D9] group-hover:text-[#CCD5AE] transition-colors mb-2 block">
                02
              </span>
              <h3 className="font-bold text-base text-[#2D2D2D] mb-2">
                {language === 'rw' ? 'Soma Ibibazo 400' : '2. Study Question Bank'}
              </h3>
              <p className="text-xs text-[#8B8678] leading-relaxed mb-4">
                {language === 'rw' ? 'Fungura ububiko bwose, shaka amagambo yihariye, shyira akamenyetso (Bookmark) ku bibazo bikugoye, usome n\'ingingo z\'amategeko.' : 'Explore all 400 authentic questions with search, bookmarks for tricky topics, and legal justifications.'}
              </p>
            </div>
            <button
              onClick={onOpenBank}
              className="text-xs font-bold text-[#4A6741] flex items-center gap-1 hover:underline cursor-pointer pt-2"
            >
              <span>{language === 'rw' ? 'Fungura Ibibazo 400' : 'Browse Question Bank'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-6 border border-[#E5E2D9] relative flex flex-col justify-between group hover:border-[#4A6741] transition-all">
            <div>
              <span className="text-3xl font-black text-[#E5E2D9] group-hover:text-[#CCD5AE] transition-colors mb-2 block">
                03
              </span>
              <h3 className="font-bold text-base text-[#2D2D2D] mb-2">
                {language === 'rw' ? 'Kora Ibizamini by\'Imyitozo' : '3. Take Mock Exams'}
              </h3>
              <p className="text-xs text-[#8B8678] leading-relaxed mb-4">
                {language === 'rw' ? 'Kora ikizamini cy\'iminota 20 n\'ibibazo 20 byahinduwe (Randomized). Koresha clavier (A, B, C, D / Enter) cyangwa utoze ukoresheje telefone.' : 'Simulate the 20-minute timed police exam with keyboard shortcuts (A, B, C, D, Enter) or touch controls.'}
              </p>
            </div>
            <button
              onClick={onStartExam}
              className="text-xs font-bold text-[#4A6741] flex items-center gap-1 hover:underline cursor-pointer pt-2"
            >
              <span>{language === 'rw' ? 'Tangira Ikizamini' : 'Launch Mock Test'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-3xl p-6 border border-[#E5E2D9] relative flex flex-col justify-between group hover:border-[#4A6741] transition-all">
            <div>
              <span className="text-3xl font-black text-[#E5E2D9] group-hover:text-[#CCD5AE] transition-colors mb-2 block">
                04
              </span>
              <h3 className="font-bold text-base text-[#2D2D2D] mb-2">
                {language === 'rw' ? 'Kosora Amakosa & Tsinda' : '4. Review & Pass (12+/20)'}
              </h3>
              <p className="text-xs text-[#8B8678] leading-relaxed mb-4">
                {language === 'rw' ? 'Reba raporo y\'amanota yawe, subira mu bibazo watsinzwe, ukomeze kwitoza kugeza ubonye hejuru ya 18/20 buri gihe.' : 'Review your score reports, re-test missed questions, and practice until you consistently score 18+/20.'}
              </p>
            </div>
            <button
              onClick={onStartExam}
              className="text-xs font-bold text-[#4A6741] flex items-center gap-1 hover:underline cursor-pointer pt-2"
            >
              <span>{language === 'rw' ? 'Reba Imibare yawe' : 'Check Your Progress'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. THREE CORE MODULES SHORTCUTS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Module 1: 400 Questions Bank */}
        <div 
          onClick={onOpenBank}
          className="bg-white rounded-[28px] p-6 border border-[#E5E2D9] shadow-2xs hover:border-[#4A6741] transition-all cursor-pointer group flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#F1EDE4] text-[#4A6741] flex items-center justify-center mb-4 group-hover:bg-[#4A6741] group-hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#2D2D2D] mb-1">
              {language === 'rw' ? `Ububiko bw'Ibibazo ${totalQuestions}` : `${totalQuestions} Questions Bank`}
            </h3>
            <p className="text-xs text-[#8B8678] leading-relaxed">
              {language === 'rw' ? `Reba ibibazo byose uko ari ${totalQuestions}, shaka ibibazo ukurikije amagambo, witoze n'ibisobanuro birambuye mu Kinyarwanda, Icyongereza, n'Igifaransa.` : `Review all ${totalQuestions} authentic questions with search filters, answers, and legal justifications in 3 languages.`}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#4A6741] pt-4 group-hover:translate-x-1 transition-transform">
            <span>{language === 'rw' ? 'Fungura Ububiko bwose' : 'Browse All Questions'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Module 2: Visual Road Signs */}
        <div 
          onClick={onOpenSigns}
          className="bg-white rounded-[28px] p-6 border border-[#E5E2D9] shadow-2xs hover:border-[#4A6741] transition-all cursor-pointer group flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#E9EDC9] text-[#4A6741] flex items-center justify-center mb-4 group-hover:bg-[#4A6741] group-hover:text-white transition-colors">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#2D2D2D] mb-1">
              {language === 'rw' ? 'Ibyapa byo mu Muhanda' : 'Rwandan Road Signs Guide'}
            </h3>
            <p className="text-xs text-[#8B8678] leading-relaxed">
              {language === 'rw' ? 'Menya ibyapa by\'integuza (Danger), ibibuzwa (Interdiction), ibitegetswe (Obligation) n\'ibiyobora bifite amashusho nyakuri.' : 'Interactive visual directory of hazard triangles, red prohibition circles, blue mandatory circles, and priority markings.'}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#4A6741] pt-4 group-hover:translate-x-1 transition-transform">
            <span>{language === 'rw' ? 'Reba Ibyapa Byose' : 'Explore Road Signs'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Module 3: Key Traffic Rules Cheat Sheet */}
        <div 
          onClick={onOpenRevision}
          className="bg-white rounded-[28px] p-6 border border-[#E5E2D9] shadow-2xs hover:border-[#4A6741] transition-all cursor-pointer group flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#F9F7F2] text-[#D4A373] flex items-center justify-center mb-4 group-hover:bg-[#D4A373] group-hover:text-white transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#2D2D2D] mb-1">
              {language === 'rw' ? 'Incamake y\'Amategeko (Cheat Sheet)' : 'Traffic Law Cheat Sheet'}
            </h3>
            <p className="text-xs text-[#8B8678] leading-relaxed">
              {language === 'rw' ? 'Incamake yihuse y\'imibare ikunze kubazwa: Umuvuduko 40/60/80, uburebure 4.30m, ubugari 2.50m, amatara n\'inzoga.' : 'High-yield memory summary of speeds, vehicle dimensions, alcohol limits, lights, and essential presidential decree articles.'}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#4A6741] pt-4 group-hover:translate-x-1 transition-transform">
            <span>{language === 'rw' ? 'Fungura Incamake' : 'Open Cheat Sheet'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </section>

      {/* 5. PRACTICE BY LEGAL CATEGORY */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2D2D2D]">
              {language === 'rw' ? 'Kwitoza Ukurikije Ingingo (Categories)' : 'Practice by Subject Category'}
            </h3>
            <p className="text-xs text-[#8B8678]">
              {language === 'rw' ? 'Hitamo ingingo wumva ukeneye kunoza kurushaho kugira ngo witoze ibibazo byayo gusa' : 'Target specific legal subjects to turn weaknesses into strengths'}
            </p>
          </div>
          <span className="text-xs font-bold text-[#4A6741] bg-[#E9EDC9] px-3 py-1 rounded-full border border-[#CCD5AE]">
            10 Legal Categories
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => {
            const catName = typeof cat.name === 'string' ? cat.name : (cat.name[language] || cat.name.rw);
            const catDesc = typeof cat.desc === 'string' ? cat.desc : (cat.desc[language] || cat.desc.rw);
            const actualCount = QUESTIONS_BANK.filter(q => q.category === cat.id).length;

            return (
              <div
                key={cat.id}
                onClick={() => onStartCategoryExam(cat.id)}
                className="bg-white p-5 rounded-2xl border border-[#E5E2D9] hover:border-[#4A6741] hover:bg-[#F1F4F0] transition-all cursor-pointer flex items-center justify-between group shadow-2xs"
              >
                <div className="flex items-start gap-3.5 flex-1 pr-2">
                  <span className="text-2xl pt-0.5">{cat.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#4A6741] transition-colors mb-0.5">
                      {catName}
                    </h4>
                    <p className="text-[11px] text-[#8B8678] line-clamp-1 mb-1.5">
                      {catDesc}
                    </p>
                    <span className="bg-[#F1EDE4] text-[#4A6741] font-bold text-[10px] px-2 py-0.5 rounded-full border border-[#E5E2D9]">
                      {actualCount || cat.count} {language === 'rw' ? 'Ibibazo' : 'Questions'}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8B8678] group-hover:text-[#4A6741] group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="bg-white rounded-[32px] p-8 sm:p-10 border border-[#E5E2D9]">
        <div className="flex items-center gap-2 text-[#4A6741] font-bold text-xs uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>{language === 'rw' ? 'Ibibazo Bikunze Kubazwa' : 'Frequently Asked Questions'}</span>
        </div>
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
          {language === 'rw' ? 'Ibyo wifuza kumenya ku kizamini cya Polisi' : 'Everything You Need to Know About the Exam'}
        </h2>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-[#E5E2D9] rounded-2xl overflow-hidden transition-all bg-[#F9F7F2]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#2D2D2D] hover:text-[#4A6741] cursor-pointer"
                >
                  <span>{faq.q[language] || faq.q.rw}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#4A6741] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#8B8678] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#8B8678] leading-relaxed border-t border-[#E5E2D9]/60 bg-white">
                    {faq.a[language] || faq.a.rw}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION */}
      <section className="bg-[#2D2D2D] text-white rounded-[32px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="max-w-xl">
          <span className="text-[#D4A373] text-xs font-bold uppercase tracking-widest block mb-2">
            {language === 'rw' ? 'Witeguye Gutsinda?' : 'Ready to Test Your Knowledge?'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
            {language === 'rw' && 'Tangira ubu ikizamini cyawe cya mbere cy\'iminota 20'}
            {language === 'en' && 'Start your first 20-minute mock examination now'}
            {language === 'fr' && 'Commencez votre premier examen blanc de 20 minutes maintenant'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {language === 'rw' && 'Buri kizamini kiguha ibibazo 20 bitunguranye. Reba uko uhagaze ubu kandi umenye ibyo gukosora.'}
            {language === 'en' && 'Each session draws 20 unique randomized questions. Measure your readiness and target areas for improvement.'}
            {language === 'fr' && 'Chaque session tire 20 questions aléatoires pour mesurer votre niveau réel.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
          <button
            onClick={onStartExam}
            className="w-full sm:w-auto bg-[#4A6741] hover:bg-[#3D5636] text-white px-8 py-4 rounded-full font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{language === 'rw' ? 'Tangira Ikizamini (20 Qs)' : 'Start 20-Question Exam'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
