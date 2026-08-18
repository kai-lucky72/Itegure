import { Question } from '../types';

export const QUESTIONS_PART7: Question[] = [
  {
    id: 301,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Igisate cy'umuhanda cyo kwihutiraho' (Voie d'accélération) risobanura iki?",
      en: "What is an acceleration lane (Voie d'accélération) on a high-speed arterial roadway?",
      fr: "Que désigne une voie d'insertion ou d'accélération (Voie d'accélération)?"
    },
    options: {
      rw: [
        "Igisate cy'agateganyo cyashyiriweho gufasha ikinyabiziga kongera umuvuduko kugira ngo cyinjire mu muhanda munini mu mutekano",
        "Aho guparika imodoka zose",
        "Inzira yo gukiniraho imikino y'isiganwa ry'imodoka",
        "Inzira y'abanyamaguru yihuta"
      ],
      en: [
        "An auxiliary entry lane permitting joining vehicles to build sufficient speed before merging smoothly into main traffic",
        "A long-term parking bay",
        "A closed drag-racing track lane",
        "A fast pedestrian walking lane"
      ],
      fr: [
        "Une voie auxiliaire permettant aux véhicules d'augmenter leur vitesse pour s'insérer en sécurité dans le flux principal",
        "Un emplacement de stationnement",
        "Une piste de course automobile",
        "Une voie pour piétons rapides"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Igisate cyo kwihutiraho gituma umushoferi agera ku muvuduko w'abandi bari mu muhanda munini bityo agahuza nabo bitamuteje ibyago.",
      en: "Acceleration lanes allow entering drivers to match the speed of mainstream highway traffic before merging.",
      fr: "La voie d'accélération est conçue pour permettre d'atteindre la vitesse de la circulation principale avant de s'y insérer."
    },
    articleRef: "Art. 2"
  },
  {
    id: 302,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi ari mu gisate cyo kwinjira mu muhanda munini (Voie d'insertion), uburenganzira bwo gutambuka buhabwa nde?",
      en: "When a driver is on an acceleration slip road entering a primary highway, who holds right-of-way priority?",
      fr: "Sur une voie d'insertion pour entrer sur une voie rapide, qui a la priorité de passage?"
    },
    options: {
      rw: [
        "Ibinyabiziga biri muri uwo muhanda munini nicyo gifite uburenganzira (Priorité aux usagers sur la voie principale)",
        "Ikinyabiziga kiri kwinjira nicyo gifite uburenganzira bwo gucomeka imbere y'abandi",
        "Ufite imodoka nshya niwe utambuka mbere",
        "Bose bafite uburenganzira bumwe bagomba guhagarara"
      ],
      en: [
        "Vehicles already traveling on the main highway retain priority (Priorité à la voie principale)",
        "The entering vehicle has absolute right to force its way in",
        "The newer vehicle always gets priority",
        "Both streams have equal rights and must come to a dead stop"
      ],
      fr: [
        "Les véhicules circulant déjà sur la chaussée principale ont la priorité absolue",
        "Le véhicule entrant a le droit de forcer le passage",
        "Le véhicule le plus récent",
        "Les deux doivent s'arrêter au milieu"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ukinjira mu muhanda munini avuye mu gisate cyo kwinjira agomba guha inzira abasanzwe mu muhanda munini bose batamuzitiye.",
      en: "Drivers merging from an on-ramp must yield to vehicles already cruising on the main highway carriageway.",
      fr: "Le conducteur s'engageant depuis une voie d'insertion doit obligatoirement céder le passage aux usagers circulant sur l'axe principal."
    },
    articleRef: "Art. 14"
  },
  {
    id: 303,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende gifite ubuso bw'umweru n'umurongo w'umukara utambitse ucagaguye (Fin de toutes les interdictions) gisobanura iki?",
      en: "What does a circular white sign crossed by diagonal black oblique stripes indicate?",
      fr: "Que signifie un panneau circulaire à fond blanc barré de bandes diagonales noires?"
    },
    options: {
      rw: [
        "Iherezo ry'ibibuzwa byose byatanzwe mbere ku binyabiziga bigenda (Fin de toutes les interdictions)",
        "Uruhande rwo guparika ku buntu",
        "Umuhanda urangiye",
        "Kwinjira mu gasozi k'amabuye"
      ],
      en: [
        "End of all previous local traffic prohibitions for moving vehicles (Fin de toutes les interdictions)",
        "Free parking area ahead",
        "Road completely closed dead-end",
        "Quarry gravel territory entrance"
      ],
      fr: [
        "Fin de toutes les interdictions précédemment imposées aux véhicules en mouvement",
        "Parking gratuit",
        "Fin définitive de la route",
        "Entrée de zone pierreuse"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kigaragaza ko ibyo wari wabujijwe byose (nk'umuvuduko, kubuzwa kunyuranaho) birangiye aho ngaho.",
      en: "This de-restriction sign terminates all previously posted local prohibitions such as speed caps and overtaking bans.",
      fr: "Ce panneau marque le point où toutes les interdictions temporaires ou spécifiques antérieures prennent fin."
    },
    articleRef: "Art. 68"
  },
  {
    id: 304,
    category: 'speed',
    question: {
      rw: "Umuvuduko ntarengwa w'ikinyabiziga kigendera ku biziga bitatu cyangwa amapikipiki hanze y'insisiro ni uwuhe?",
      en: "What is the maximum legal speed limit for tricycles (Tricycles) and motorcycles on highways outside built-up areas?",
      fr: "Quelle est la vitesse maximale légale pour les tricycles et motocyclettes hors agglomération?"
    },
    options: {
      rw: ["80 km/h", "120 km/h", "50 km/h", "40 km/h"],
      en: ["80 km/h", "120 km/h", "50 km/h", "40 km/h"],
      fr: ["80 km/h", "120 km/h", "50 km/h", "40 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amapikipiki n'ibinyabiziga by'ibiziga bitatu hanze y'insisiro ntibigomba kurenza kilometero 80 mu isaha (80 km/h).",
      en: "Motorcycles and motorized tricycles are capped at a top statutory speed of 80 km/h on open roads outside towns.",
      fr: "Hors agglomération, la vitesse des motocyclettes et tricycles motorisés est plafonnée à 80 km/h."
    },
    articleRef: "Art. 18"
  },
  {
    id: 305,
    category: 'lights',
    question: {
      rw: "Iyo ikinyabiziga gihagaze ku ruhande rw'umuhanda nijoro ahantu hatamuritswe, ni ayahe matara kigomba gucana?",
      en: "When a vehicle is parked on an unlit road verge at night, which lights must remain illuminated?",
      fr: "Lorsqu'un véhicule est stationné la nuit sur un accotement non éclairé, quels feux doivent rester allumés?"
    },
    options: {
      rw: [
        "Amatara ndangambere n'amatara ndanganyuma (Feux de position avant et feux rouges arrière)",
        "Amatara maremare gusa (Feux de route)",
        "Amatara yo gusubira inyuma",
        "Kuzimya amatara yose ngo batiba batiri"
      ],
      en: [
        "Front position sidelights and rear red position tail lights (Feux de position)",
        "High beam headlights only",
        "Reverse lights",
        "Extinguish all lights to conserve vehicle battery"
      ],
      fr: [
        "Les feux de position avant et les feux rouges arrière",
        "Les feux de route uniquement",
        "Les feux de recul",
        "Éteindre tous les feux"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Imodoka ihagaze mu mwijima igomba kugaragarira abandi ikoresheje amatara ndangambere n'andanyuma kugira ngo badayigonga.",
      en: "Vehicles immobilized on unlit roads must maintain active front and rear parking position lights to avoid collisions.",
      fr: "De nuit sur route non éclairée, tout véhicule à l'arrêt doit être signalé par ses feux de position avant et arrière."
    },
    articleRef: "Art. 32"
  },
  {
    id: 306,
    category: 'overtaking',
    question: {
      rw: "Umurongo w'uduce duce w'umweru (Ligne discontinue) uha umushoferi uburenganzira bwo gukora iki mu muhanda?",
      en: "What maneuver is permitted by a broken/dashed white centerline marking (Ligne discontinue)?",
      fr: "Qu'autorise une ligne blanche discontinue tracée au milieu de la chaussée?"
    },
    options: {
      rw: [
        "Kunyuranaho no gukata icyerekezo igihe cyose ubona ko imbere nta kinyabiziga kije mu mutekano usesuye",
        "Guhagarara rwagati mu muhanda ugasinzira",
        "Kwiruka ku muvuduko urenze 200 km/h",
        "Kubuza abandi bose gutambuka"
      ],
      en: [
        "Overtaking and lane crossing provided oncoming traffic is clear and safety conditions are fully met",
        "Stopping dead in the center of the lane to sleep",
        "Driving at speeds exceeding 200 km/h",
        "Blocking all other vehicles from passing"
      ],
      fr: [
        "Le dépassement et le franchissement de voie lorsque la visibilité et la sécurité sont parfaitement assurées",
        "Stationner au milieu de la route",
        "Rouler à plus de 200 km/h",
        "Interdire aux autres de circuler"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umurongo w'uduce duce wemerera umushoferi kuwurenga akanyuranaho iyo yabonye ko imbere hakinguye kandi hatekanye.",
      en: "A broken centerline permits crossing maneuvers for overtaking when forward sightlines confirm ample safety clearance.",
      fr: "La ligne discontinue peut être franchie pour effectuer un dépassement si la manœuvre est sans danger."
    },
    articleRef: "Art. 73"
  },
  {
    id: 307,
    category: 'towing',
    question: {
      rw: "Igihe ikinyabiziga gikurura remorque ifite uburemere burenze ibiro 750 (750 kg), iyo remorque igomba kugira iki?",
      en: "When a trailer's gross weight exceeds 750 kg, what braking system is legally mandatory on the trailer itself?",
      fr: "Lorsqu'une remorque dépasse un poids total en charge de 750 kg, de quel équipement de freinage doit-elle être dotée?"
    },
    options: {
      rw: [
        "Feri zayo bwite zifata zikurukije feri y'ikinyabiziga kiyikurura (Freinage propre / Frein à inertie)",
        "Nta feri ikenera kuko ikururwa n'imodoka",
        "Umugozi w'ipamba gusa",
        "Amapine abiri y'inyongera mu kirere"
      ],
      en: [
        "Its own independent braking system synchronized or inertia-actuated with the towing vehicle",
        "No braking equipment needed since the tow car brakes",
        "A cotton safety string",
        "Two spare wheels suspended in mid-air"
      ],
      fr: [
        "Un système de freinage propre (frein à inertie ou commandé) agissant sur ses propres roues",
        "Aucun frein puisque le tracteur freine",
        "Une simple ficelle",
        "Des roues en l'air"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Remorque irengeje ibiro 750 igomba kugira feri zayo bwite zifatira hamwe n'iz'imodoka iyikurura kugira ngo itayisunika ikayigonga.",
      en: "Trailers exceeding 750 kg gross weight must feature independent service brakes to prevent jackknifing under deceleration.",
      fr: "Toute remorque de plus de 750 kg doit être équipée d'un dispositif de freinage continu ou à inertie conforme."
    },
    articleRef: "Art. 44"
  },
  {
    id: 308,
    category: 'technical',
    question: {
      rw: "Kuki abanyonzi b'amapikipiki n'abagenzi babo bategetswe kwambara ingofero yabugenewe (Casque de protection)?",
      en: "Why are motorcycle riders and their pillion passengers legally required to wear certified safety helmets (Casque)?",
      fr: "Pourquoi le port d'un casque de protection homologué est-il obligatoire pour les conducteurs et passagers de moto?"
    },
    options: {
      rw: [
        "Kurinda umutwe ibikomere bikomeye n'impfu igihe habaye impanuka yo kwitura hasi",
        "Kugira ngo bangeze umusatsi wabo neza",
        "Kugira ngo badasuhuzanya n'abanyamaguru",
        "Kugira ngo bahumure izuba gusa"
      ],
      en: [
        "To protect the head and brain from fatal trauma and severe injuries in falls or impact collisions",
        "To keep haircuts perfectly styled",
        "To prevent them from greeting passing pedestrians",
        "Solely to block sun glare"
      ],
      fr: [
        "Pour protéger la tête et le cerveau contre les traumatismes crâniens mortels en cas de chute ou de collision",
        "Pour protéger sa coiffure",
        "Pour ne pas saluer les piétons",
        "Uniquement contre le soleil"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kaside irinda ubwonko n'umutwe w'umunyamoto n'umugenzi we bityo ikaba itegeko kuri buri wese ugenda kuri moto.",
      en: "Motorcycle helmets dramatically reduce fatal head trauma during crashes and are legally mandatory for both rider and passenger.",
      fr: "Le casque réduit drastiquement la mortalité par traumatisme crânien et est obligatoire pour tout motocycliste et passager."
    },
    articleRef: "Art. 58"
  },
  {
    id: 309,
    category: 'penalties',
    question: {
      rw: "Gukoresha ibirahure byijimye bitemewe n'amategeko (Vitres teintées non conformes) ku binyabiziga bihanishwa iki?",
      en: "Equipping a vehicle with illegal non-compliant blacked-out tinted window tint (Vitres teintées) is penalized by:",
      fr: "L'usage de vitres teintées non conformes à la réglementation sur un véhicule est sanctionné par:"
    },
    options: {
      rw: [
        "Amande y'amategeko no gutegekwa gukuraho iyo filime y'umukara ako kanya",
        "Gushimirwa kubera ubwiza bw'imodoka",
        "Nta cyaha kirimo",
        "Kugabanyirizwa ibiciro by'amatara"
      ],
      en: [
        "Statutory traffic fine and mandatory on-the-spot removal of the non-compliant dark tint film",
        "Praise for vehicle visual styling",
        "Completely permitted without penalty",
        "Discounted replacement bulbs"
      ],
      fr: [
        "Amende forfaitaire et obligation de retirer immédiatement le film teinté non homologué",
        "Félicitations pour l'esthétique",
        "Aucune infraction",
        "Réduction sur les ampoules"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibirahure by'imbere n'iby'impande bigomba gutuma abapolisi babona abari mu modoka; gushyiraho ibyijimye binyuranyije n'amategeko bihanishwa amande.",
      en: "Excessively dark window films obstruct interior passenger visibility necessary for police security and are subject to immediate removal.",
      fr: "Les vitres avant doivent garantir une transparence totale pour la sécurité; les films opaques non autorisés sont verbalisés."
    },
    articleRef: "Art. 54"
  },
  {
    id: 310,
    category: 'parking',
    question: {
      rw: "Ni iki umushoferi agomba gukora iyo asohotse mu modoka ye ayisize mu mwanya wo guparika?",
      en: "What safety steps must a driver take before leaving a parked vehicle unattended?",
      fr: "Quelles précautions le conducteur doit-il prendre avant de quitter son véhicule en stationnement?"
    },
    options: {
      rw: [
        "Kuzimya moteri, gufata feri y'urugendo (Frein à main), gukuramo urufunguzo no gufunga imiryango yose n'amadirishya",
        "Gusiga moteri yaka n'urufunguzo rurimo",
        "Gusiga imiryango ifunguye ngo abantu binjiremo",
        "Gusiga radiyo ivuga cyane"
      ],
      en: [
        "Turn off engine, engage parking handbrake, remove the ignition key, and lock all doors and windows securely",
        "Leave the engine idling with keys in ignition",
        "Leave doors open to invite passersby",
        "Leave vehicle audio blaring loudly"
      ],
      fr: [
        "Couper le moteur, serrer le frein à main, retirer la clé de contact et verrouiller les portes et vitres",
        "Laisser le moteur tourner avec la clé",
        "Laisser les portières ouvertes",
        "Laisser la radio allumée"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kureka imodoka ifite urufunguzo cyangwa moteri yaka bishobora gutuma umuntu atwaye imodoka ku ngufu cyangwa igatemba ikica abantu.",
      en: "Securing parked vehicles by turning off motors, engaging handbrakes, and locking doors prevents theft and rolling runaway accidents.",
      fr: "Le conducteur doit s'assurer que le véhicule ne peut se déplacer seul ni être utilisé sans son consentement."
    },
    articleRef: "Art. 29"
  },
  {
    id: 311,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Ikiraro cya gari ya moshi' (Pont ferroviaire) risobanura iki mu mategeko?",
      en: "What is the definition of a grade-separated railway bridge (Passage supérieur/inférieur ferroviaire)?",
      fr: "Que désigne un ouvrage d'art ferroviaire dénivelé (Pont ferroviaire)?"
    },
    options: {
      rw: [
        "Inyubako y'ikiraro ituma inzira ya gari ya moshi inyura hejuru cyangwa munsi y'umuhanda nyabagendwa batabanje gusangira ubutaka",
        "Amasangano aho gari ya moshi igongana n'imodoka",
        "Aho gupakururira ibicuruzwa",
        "Umuhanda w'amakamyo gusa"
      ],
      en: [
        "A bridge structure carrying railway tracks above or below the public roadway without level ground intersection",
        "An intersection where trains and cars collide on level ground",
        "A cargo transshipment freight depot",
        "A truck-only access ramp"
      ],
      fr: [
        "Un pont ou passage dénivelé permettant à la voie ferrée de franchir la route sans croisement à niveau",
        "Un carrefour de collision",
        "Un quai de déchargement",
        "Une rampe pour camions"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibiraro binyura hejuru cyangwa munsi bituma imodoka na gari ya moshi bidahura ku butaka bumwe bityo bikarinda impanuka zose.",
      en: "Grade separation bridges eliminate level intersection collisions between automotive and rail traffic streams.",
      fr: "Les ponts ferroviaires assurent un croisement dénivelé sécurisé supprimant tout risque de collision directe."
    },
    articleRef: "Art. 2"
  },
  {
    id: 312,
    category: 'priority',
    question: {
      rw: "Iyo ikinyabiziga gikoze uburyo bwo gusubira inyuma (Marche arrière) cyangwa guhindukira mu muhanda (Demi-tour), gifite ubuhe burenganzira?",
      en: "When a vehicle is reversing (Marche arrière) or making a U-turn (Demi-tour) in the roadway, what priority does it hold?",
      fr: "Lorsqu'un véhicule effectue une marche arrière ou un demi-tour sur la chaussée, quelle est sa priorité?"
    },
    options: {
      rw: [
        "Nta burenganzira na buke gifite; kigomba kubanza guha inzira ibindi binyabiziga byose n'abanyamaguru bari mu muhanda",
        "Gifite uburenganzira busesuye bwo guhagarika abandi bose",
        "Ikinyabiziga kiri inyuma yacyo kigomba gukurikira gusa",
        "Gisabwa gusa kuvuza ihoni cyane"
      ],
      en: [
        "It has NO priority whatsoever; it must yield completely to all other vehicles and pedestrians",
        "It possesses absolute right to halt all ongoing road traffic",
        "Following vehicles must blindly trail it",
        "It only needs to sound the horn loudly"
      ],
      fr: [
        "Il n'a AUCUNE priorité; il doit impérativement céder le passage à tous les autres usagers et piétons",
        "Il a priorité absolue pour arrêter tout le monde",
        "Les autres doivent le suivre",
        "Il suffit de klaxonner"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo usubira inyuma cyangwa uhindukira, uba urimo gukora imyitozo ibangamira abandi bityo ugomba kubaha inzira bose.",
      en: "Reversing and U-turns are disruptive non-standard maneuvers carrying strict zero-priority obligations.",
      fr: "Tout véhicule effectuant une manœuvre perturbatrice (marche arrière, demi-tour) doit céder la priorité à tous les usagers."
    },
    articleRef: "Art. 14"
  },
  {
    id: 313,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho ya mpandeshatu ifite umuzenguruko utukura kirimo igishushanyo cy'amazi n'inkombe itembana gisobanura iki?",
      en: "What does a triangular warning sign with a red border depicting a car falling off a riverbank or quayside indicate?",
      fr: "Que signifie un panneau triangulaire de danger illustrant une voiture tombant d'un quai dans l'eau?"
    },
    options: {
      rw: [
        "Kwegera inkombe y'amazi, uruzi cyangwa icyambu bitarinzwe (Débouché sur un quai ou une berge)",
        "Aho koza imodoka mu mazi",
        "Inzira y'amato y'amazi gusa",
        "Isoko ry'amazi meza"
      ],
      en: [
        "Road leads towards an unprotected riverbank, canal, or quayside embankment (Débouché sur un quai ou une berge)",
        "Drive-through car washing river spot",
        "Water vessels only pathway",
        "Fresh drinking water spring"
      ],
      fr: [
        "Débouché sur un quai, une berge ou un cours d'eau sans barrière de protection",
        "Lavage de voitures dans la rivière",
        "Voie pour navires",
        "Fontaine d'eau potable"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira ko umuhanda werekeza ku mazi aho utitondeye imodoka ishobora gushoreka ikagwa mu ruzi cyangwa mu kiyaga.",
      en: "This warning sign alerts drivers to open quaysides, docks, or riverbanks lacking crash barriers.",
      fr: "Ce panneau avertit du danger de chute dans l'eau au débouché de quais ou berges non protégés."
    },
    articleRef: "Art. 65"
  },
  {
    id: 314,
    category: 'speed',
    question: {
      rw: "Ni uwuhe muvuduko ntarengwa wemewe ku kinyabiziga gitwaye ibintu biturika cyangwa ibikomoka kuri peteroli (Matières dangereuses / Flammable fuels)?",
      en: "What is the statutory top speed limit for tankers carrying hazardous flammable fuels or dangerous explosive cargo?",
      fr: "Quelle est la vitesse maximale légale autorisée pour un camion-citerne transportant des matières dangereuses ou hydrocarbures?"
    },
    options: {
      rw: ["50 km/h hanze y'insisiro na 30 km/h mu nsisiro", "100 km/h ahantu hose", "80 km/h mu mujyi", "Nta cyapa kibigenga"],
      en: ["50 km/h outside built-up zones and 30 km/h in urban areas", "100 km/h anywhere", "80 km/h in town", "No speed limit exists"],
      fr: ["50 km/h hors agglomération et 30 km/h en agglomération", "100 km/h partout", "80 km/h en ville", "Aucune limite"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Imodoka zitwaye lisansi na gaze zitegetswe kugendera ku muvuduko muto cyane kubera akaga gakomeye ko gushya cyangwa guturika igihe zikoze impanuka.",
      en: "Hazardous flammable cargo vehicles are subject to stringent reduced speed limits (50 km/h highway / 30 km/h urban) to mitigate catastrophic fire risks.",
      fr: "Le transport d'hydrocarbures et matières dangereuses impose des vitesses réduites strictes (50 km/h hors ville / 30 km/h en ville)."
    },
    articleRef: "Art. 18"
  },
  {
    id: 315,
    category: 'lights',
    question: {
      rw: "Amatara ndangambere y'ikinyabiziga agomba kuba afite irihe bara ryemewe n'amategeko?",
      en: "What authorized light color must vehicle front position sidelights emit?",
      fr: "De quelle couleur réglementaire doivent être les feux de position avant d'un véhicule automobile?"
    },
    options: {
      rw: ["Umweru (Blanc) cyangwa umuhondo (Jaune)", "Umutuku gusa", "Ubururu bwerurutse", "Icyatsi kibisi"],
      en: ["White (Blanc) or selective yellow (Jaune)", "Red only", "Light blue", "Green"],
      fr: ["Blanc ou jaune sélectif", "Rouge uniquement", "Bleu clair", "Vert"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara yose areba imbere y'ikinyabiziga agomba kuba umweru cyangwa umuhondo; amatara atukura abujijwe burundu kureba imbere.",
      en: "All forward-facing position and driving lamps must emit white or yellow light; red lights facing forward are illegal.",
      fr: "Les feux dirigés vers l'avant doivent obligatoirement émettre une lumière blanche ou jaune."
    },
    articleRef: "Art. 32"
  },
  {
    id: 316,
    category: 'overtaking',
    question: {
      rw: "Iyo umuhanda ufite umurongo udacagaguye ubangikanye n'umurongo w'uduce duce (Ligne mixte), umushoferi agendera ku wuhe murongo?",
      en: "On a road marked with a continuous line alongside a broken line (Ligne mixte), which line dictates the driver's permissions?",
      fr: "Sur une chaussée à ligne mixte (ligne continue doublée d'une ligne discontinue), quelle ligne le conducteur doit-il observer?"
    },
    options: {
      rw: [
        "Umurongo uri mu ruhande rwe yegereye mbere (La ligne située de son côté)",
        "Umurongo wo hakurya mu yindi nzira",
        "Umurongo udacagaguye gusa igihe cyose",
        "Nta murongo n'umwe agomba kwitaho"
      ],
      en: [
        "The line closest to their own vehicle side (La ligne située de son côté)",
        "The line on the far opposite lane",
        "The solid unbroken line under all circumstances",
        "Neither line needs to be observed"
      ],
      fr: [
        "La ligne qui se trouve la plus proche de son côté de circulation",
        "La ligne opposée",
        "Toujours la ligne continue",
        "Aucune ligne"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ku murongo w'amoko abiri abangikanye, umushoferi agendera ku murongo uri mu ruhande rwe. Niba ari uw'uduce duce ashobora kunyuranaho; niba ari udacagaguye ntiyemerewe kuwurenga.",
      en: "Drivers obey the marking closest to their driving lane: if broken, crossing is permitted; if solid, crossing is forbidden.",
      fr: "Le conducteur ne doit prendre en considération que la ligne située immédiatement de son côté."
    },
    articleRef: "Art. 73"
  },
  {
    id: 317,
    category: 'technical',
    question: {
      rw: "Kuki amapine y'imbere ku mutwe w'ikinyabiziga agomba kugira ingano imwe n'ubwoko bumwe (Même dimension et structure)?",
      en: "Why must vehicle tires mounted on the same axle have identical dimensions and radial structure?",
      fr: "Pourquoi les pneumatiques montés sur un même essieu doivent-ils avoir les mêmes dimensions et la même structure?"
    },
    options: {
      rw: [
        "Kugira ngo ikinyabiziga kigire uburinganire butaziguye mu gufata feri no kuyobora ikerekezo mu mutekano",
        "Kugira ngo bise neza gusa",
        "Kugira ngo bidasaza vuba",
        "Nta tegeko ribitegeka"
      ],
      en: [
        "To guarantee symmetric road adhesion, balanced braking forces, and stable directional steering",
        "For visual aesthetic symmetry only",
        "To prevent rubber wear",
        "No legal mandate applies"
      ],
      fr: [
        "Pour assurer une adhérence symétrique, un freinage équilibré et une tenue de cap parfaite",
        "Pour l'esthétique uniquement",
        "Pour l'usure",
        "Aucune obligation"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amapine atandukanye ku mutwe umwe ashobora gutuma imodoka ibirinduka cyangwa igata umuhanda iyo ifashe feri ikomeye.",
      en: "Asymmetric tires on a shared axle induce dangerous directional pull and braking imbalance during emergency stops.",
      fr: "Des pneus de dimensions ou structures différentes sur un même essieu déstabilisent dangereusement le véhicule au freinage."
    },
    articleRef: "Art. 52"
  },
  {
    id: 318,
    category: 'penalties',
    question: {
      rw: "Kutishyura amande y'ikosa ryo mu muhanda mu gihe giteganywa n'amategeko (Délai légal de paiement) biteza izihe ngaruka?",
      en: "Failing to pay statutory traffic violation fines within the prescribed legal time limit leads to what consequence?",
      fr: "Le non-paiement d'une amende forfaitaire dans les délais légaux entraîne quelles conséquences?"
    },
    options: {
      rw: [
        "Kwishyuzwa inyongera y'amande (Majoration), guhagarikirwa ikoranabuhanga ryo kwishyura no gufatirwa ikinyabiziga",
        "Guhanagurwaho amande burundu",
        "Gushimirwa na Minisiteri",
        "Nta kintu na kimwe biba"
      ],
      en: [
        "Financial penalty surcharges (Majoration), administrative holds, and vehicle impoundment upon interception",
        "Total cancellation and pardon of fine",
        "Commendation by Ministry",
        "No consequence occurs"
      ],
      fr: [
        "Majoration de l'amende, blocage administratif et saisie du véhicule lors des contrôles",
        "Annulation totale de l'amende",
        "Félicitations ministérielles",
        "Rien du tout"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo udishyuye amande mu minota cyangwa iminsi yagenwe n'amategeko, amande yiyongeraho inyongera kandi imodoka igashyirwa ku rutonde rw'izigomba gufatirwa.",
      en: "Late penalty payments trigger statutory surcharges and vehicle flag alerts on police traffic enforcement systems.",
      fr: "Le retard de paiement d'amende entraîne des majorations légales et l'immobilisation du véhicule au prochain contrôle."
    },
    articleRef: "Art. 85"
  },
  {
    id: 319,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho ya mpandeshatu ifite umuzenguruko utukura kirimo ikimenyetso cy'umuyaga uhuha cyane (Vent latéral) gisobanura iki?",
      en: "What does a triangular warning sign with a red border depicting a windsock indicate?",
      fr: "Que signifie un panneau triangulaire de danger illustrant une manche à air (Vent latéral)?"
    },
    options: {
      rw: [
        "Kwegera agace karangwamo umuyaga mwinshi w'umuvumba uhuha ku ruhande (Vent latéral violent)",
        "Aho indege zihagurukira gusa",
        "Ikigo cy'ubumenyi bw'ikirere",
        "Isoko ry'imyenda y'imbeho"
      ],
      en: [
        "Approaching a roadway exposed to severe sudden lateral crosswinds (Vent latéral)",
        "Direct airport runway threshold only",
        "Meteorological weather station",
        "Winter clothing shop"
      ],
      fr: [
        "Zone exposée à de violentes rafales de vent latéral pouvant dévier les véhicules",
        "Piste d'aviation uniquement",
        "Station météo",
        "Magasin de vêtements"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira abashoferi cyane cyane abatwaye ibinyabiziga birebire n'amapikipiki ko umuyaga w'imbaraga ushobora kubahinduriza icyerekezo ku biraro no mu bibaya.",
      en: "Crosswind hazard signs warn high-sided trucks and motorcyclists of destabilizing gusts across exposed viaducts and open valleys.",
      fr: "Ce panneau signale un risque de rafales latérales dangereuses pour les deux-roues et camions hauts."
    },
    articleRef: "Art. 65"
  },
  {
    id: 320,
    category: 'parking',
    question: {
      rw: "Ni gute umushoferi agomba guhagarara ku ruhande rw'umuhanda w'icyerekezo kimwe (Sens unique)?",
      en: "How may a driver park along a designated one-way street (Sens unique)?",
      fr: "Comment le conducteur doit-il stationner sur une chaussée à sens unique?"
    },
    options: {
      rw: [
        "Ku ruhande rw'iburyo cyangwa rw'ibumoso hose igihe cyose hasize umwanya uhagije w'ikinyabiziga gishobora gutambuka hagati",
        "Rwagati mu muhanda gusa",
        "Ku ruhande rw'iburyo gusa iteka ryose",
        "Bitemewe guparika na gato mu muhanda w'icyerekezo kimwe"
      ],
      en: [
        "On either the right or left roadside, provided sufficient lane width remains clear for moving traffic",
        "Directly in the exact middle of the roadway",
        "Strictly and exclusively on the right side under all circumstances",
        "Parking is entirely banned on one-way streets"
      ],
      fr: [
        "Du côté droit ou du côté gauche, à condition de laisser une largeur de voie suffisante pour le passage des véhicules",
        "Au milieu de la chaussée",
        "Strictement à droite uniquement",
        "Interdit en tout temps"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mu muhanda w'icyerekezo kimwe, birashoboka guparika iburyo cyangwa ibumoso niba nta cyapa kibibuza kandi hagasigara inzira y'abandi.",
      en: "On one-way streets, parking is permissible along either curb as long as free carriageway clearance is preserved.",
      fr: "Sur une route à sens unique, le stationnement peut s'effectuer des deux côtés si la largeur de voie restante le permet."
    },
    articleRef: "Art. 26"
  },
  {
    id: 321,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Uburemere ntarengwa bwemewe ku kinyabiziga cyikoreye' (Poids Total Autorisé en Charge / PTAC / Gross Vehicle Weight) bisobanura iki?",
      en: "What is the Gross Vehicle Weight Rating (Poids Total Autorisé en Charge - PTAC)?",
      fr: "Que signifie le 'Poids Total Autorisé en Charge' (PTAC) d'un véhicule?"
    },
    options: {
      rw: [
        "Uburemere bwose hamwe bw'ikinyabiziga, abakigendamo n'imizigo cyikoreye bitagomba kurenga ku mpamvu z'umutekano n'ubushobozi bwa tekiniki",
        "Uburemere bw'amavuta ya moteri gusa",
        "Uburemere bwa lisansi yuzuye muri reserivwari",
        "Uburemere bw'amapine gusa"
      ],
      en: [
        "The maximum permissible total weight of the vehicle, occupants, and cargo combined for safe road operation",
        "The weight of engine lubricant only",
        "The weight of a full fuel tank",
        "The weight of spare tires only"
      ],
      fr: [
        "Le poids maximal cumulé du véhicule, de ses passagers et de son chargement autorisé pour circuler en sécurité",
        "Le poids de l'huile moteur",
        "Le poids du carburant",
        "Le poids des pneus"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "PTAC ni uburemere ntarengwa ikinyabiziga gishobora kugira gifite abantu n'imizigo; kurenza ubwo buremere byangiza umuhanda no guturika kw'amapine.",
      en: "Gross Vehicle Weight (PTAC) is the certified maximum combined operating mass of a loaded vehicle.",
      fr: "Le PTAC est la limite légale maximale de charge totale autorisée pour un véhicule roulant."
    },
    articleRef: "Art. 2"
  },
  {
    id: 322,
    category: 'priority',
    question: {
      rw: "Ku masangano ayobowe n'icyapa cya 'Cédez le passage' (Uruhande rw'umweru rureba hasi ruri mu mpandeshatu itukura), umushoferi agomba gukora iki?",
      en: "At an intersection governed by an inverted triangular 'Yield' sign (Cédez le passage), what must the driver do?",
      fr: "À une intersection régie par le panneau triangulaire pointe en bas 'Cédez le passage', que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Kugabanya umuvuduko no guha inzira ibinyabiziga byose biri mu muhanda agiye kwinjiramo, agahagarara niba bikenewe",
        "Kuvuduka cyane akitambutsiriza ku ngufu",
        "Guhagarara burundu iminota icumi nubwo umuhanda waba urimo ubusa",
        "Kuvuza ihoni gusa akigendera"
      ],
      en: [
        "Slow down and yield priority to all vehicles traveling on the intersecting road, stopping if necessary",
        "Accelerate heavily to beat oncoming traffic",
        "Stop for ten minutes even if the road is completely vacant",
        "Sound the horn and charge through"
      ],
      fr: [
        "Ralentir et céder le passage à tous les usagers de la voie prioritaire abordée, en marquant l'arrêt si nécessaire",
        "Accélérer pour passer en force",
        "S'arrêter dix minutes même sans circulation",
        "Klaxonner et passer"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa cya Cédez le passage gisaba guha inzira abari mu muhanda ugiye kwinjiramo; ntutegetswe guhagarara burundu niba nta modoka ihari.",
      en: "A yield sign requires giving right-of-way to cross traffic, stopping only when approaching vehicles are present.",
      fr: "Le panneau Cédez le passage impose de laisser la priorité sans obliger à l'arrêt si la voie est libre."
    },
    articleRef: "Art. 67"
  },
  {
    id: 323,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo igishushanyo cy'ingorofani ikururwa n'inyamaswa (Traction animale) gisobanura iki?",
      en: "What does a circular sign with a red border containing an animal-drawn cart symbol indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge illustrant un attelage à traction animale?"
    },
    options: {
      rw: [
        "Inzira ibujijwe ibinyabiziga bikururwa n'inyamaswa (Accès interdit aux véhicules à traction animale)",
        "Inzira yagenewe inyamaswa gusa",
        "Isoko ry'amatungo",
        "Aho guhingira imirima"
      ],
      en: [
        "Access prohibited to animal-drawn carts and wagons (Accès interdit aux véhicules à traction animale)",
        "Dedicated livestock pathway only",
        "Livestock auction market",
        "Agricultural crop farmland"
      ],
      fr: [
        "Accès interdit aux véhicules à traction animale et charrettes attelées",
        "Chemin réservé aux animaux",
        "Marché aux bestiaux",
        "Terres agricoles"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza amagare cyangwa ingorofani zikururwa n'indogobe, inka cyangwa amafarashi kwinjira muri uwo muhanda.",
      en: "This regulatory prohibition sign forbids animal-drawn carriages from entering the road.",
      fr: "Ce panneau d'interdiction interdit l'accès aux véhicules et charrettes tractés par des animaux."
    },
    articleRef: "Art. 68"
  },
  {
    id: 324,
    category: 'lights',
    question: {
      rw: "Amatara yerekana ko ikinyabiziga kiri gusubira inyuma (Feux de marche arrière / Reversing lights) agomba kugaragara mu ntera ingana iki?",
      en: "What is the effective illumination distance for white reversing backing lights (Feux de marche arrière)?",
      fr: "À quelle distance les feux de marche arrière doivent-ils éclairer la chaussée vers l'arrière?"
    },
    options: {
      rw: ["Nibura metero 20 (Au moins 20m) mu ijoro", "Metero 500", "Santimetero 10", "Metero 1000"],
      en: ["At least 20 meters (Min 20m) at night", "500 meters", "10 centimeters", "1000 meters"],
      fr: ["Au moins 20 mètres (Min 20m) la nuit", "500 mètres", "10 centimètres", "1000 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara yo gusubira inyuma amurika inyuma y'imodoka mu ntera ya metero 20 kugira ngo umushoferi abone aho asubira inyuma kandi n'abandi babimenye.",
      en: "Reverse lights illuminate ground for at least 20 meters behind while signaling backward vehicle motion.",
      fr: "Les feux de recul doivent éclairer la route à l'arrière sur au moins 20 mètres et signaler la manœuvre."
    },
    articleRef: "Art. 34"
  },
  {
    id: 325,
    category: 'speed',
    question: {
      rw: "Iyo umushoferi anyura mu kazu gasoresherezwamo ibinyabiziga (Péage routier / Toll plaza), agomba kugendera ku wuhe muvuduko?",
      en: "When driving through a toll plaza or inspection checkpoint booth lane, what speed rule applies?",
      fr: "À quelle allure le conducteur doit-il aborder et franchir une barrière de péage ou de contrôle?"
    },
    options: {
      rw: [
        "Umuvuduko muto cyane witeguye guhagarara (Allure très lente - au pas)",
        "80 km/h ngo akize igihe",
        "Kuvuduka cyane ngo atishyura",
        "Umuvuduko wa 120 km/h"
      ],
      en: [
        "Very slow walking crawl pace ready for a full stop (Allure au pas)",
        "80 km/h to save time",
        "Accelerate to evade payment",
        "120 km/h motorway speed"
      ],
      fr: [
        "Allure très lente au pas avec arrêt obligatoire au point de contrôle",
        "80 km/h pour gagner du temps",
        "Accélérer pour ne pas payer",
        "120 km/h"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Aho basoreshereza cyangwa bagenzura ibinyabiziga haba hari abakozi na bariyeri bityo umushoferi agomba kugendera ku muvuduko muto cyane.",
      en: "Toll and inspection barriers feature narrow lanes and on-foot agents, demanding walking-pace approach.",
      fr: "Les voies de péage exigent une vitesse au pas pour la sécurité des préposés et la précision du passage."
    },
    articleRef: "Art. 18"
  },
  {
    id: 326,
    category: 'overtaking',
    question: {
      rw: "Kuki bibujijwe kunyuranaho ku kinyabiziga cy'imbere kirimo kukinira ikindi kinyabiziga cyangwa abanyamaguru (Dépassement en 3ème position / Double overtaking)?",
      en: "Why is triple overtaking (overtaking a vehicle that is itself actively overtaking another) prohibited on two-lane roads?",
      fr: "Pourquoi le dépassement en 3ème position (dépasser un véhicule qui en dépasse déjà un autre) est-il interdit sur route à double sens?"
    },
    options: {
      rw: [
        "Bituma ikinyabiziga gifata igisate cy'ibumoso birenze urugero bikaba byatera impanuka ikomeye ku baturuka imbere",
        "Kugira ngo lisansi idashira",
        "Bituma moteri isakuza",
        "Nta cyaha kirimo kuko ari ubuhanga mu gutwara"
      ],
      en: [
        "It pushes the overtaking vehicle far into opposing traffic lanes, triggering high head-on collision risks",
        "To conserve vehicle fuel",
        "To reduce engine acoustic roar",
        "It is legal as a display of advanced driving skill"
      ],
      fr: [
        "Cela déporte dangereusement le véhicule sur la voie opposée et crée un risque mortel de collision frontale",
        "Pour économiser le carburant",
        "Pour éviter le bruit du moteur",
        "C'est autorisé pour les pilotes experts"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kunyuranaho kuri babiri icyarimwe (Double dépassement) bishyira ikinyabiziga mu kaga k'abaturuka imbere bityo bikaba bibujijwe burundu.",
      en: "Attempting to pass an overtaking vehicle encroaches deeply into oncoming lanes with fatal crash consequences.",
      fr: "Dépasser un véhicule en cours de dépassement est formellement interdit sur les chaussées à deux voies."
    },
    articleRef: "Art. 20"
  },
  {
    id: 327,
    category: 'technical',
    question: {
      rw: "Ikizirikisho cy'umukandara wo kwirinda (Boucle de ceinture de sécurité) kigomba kuba giteye ku buryo ki?",
      en: "How must a vehicle safety seatbelt buckle mechanism operate by law?",
      fr: "Comment doit fonctionner le système de boucle et verrouillage de la ceinture de sécurité?"
    },
    options: {
      rw: [
        "Gufunguka byihuse ku gukanda buto imwe gusa n'ukuboko kumwe igihe cy'impanuka cyangwa ubutabazi",
        "Gusaba urufunguzo rwihariye rwo mu cyuma",
        "Gusaba iminota icumi yo gufungura",
        "Kudashobora gufunguka na gato iyo kimaze gufunga"
      ],
      en: [
        "Release instantly with a single press of a button using one hand in an emergency",
        "Require a specialized metal key to unlock",
        "Take ten minutes to release",
        "Permanently lock without release possibility"
      ],
      fr: [
        "Se déverrouiller instantanément d'une seule main par simple pression sur un bouton-poussoir",
        "Nécessiter une clé métallique spécifique",
        "Prendre dix minutes",
        "Ne jamais se déverrouiller"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umukandara wo kwirinda ugomba gufunga neza ariko ugafungukira rimwe ku ibuto imwe kugira ngo uwurimo asohoke vuba igihe habaye impanuka.",
      en: "Safety belt buckles must feature quick-release single-action pushbuttons for rapid emergency egress.",
      fr: "La boucle de ceinture doit s'ouvrir instantanément par un geste simple pour permettre l'évacuation rapide en cas d'accident."
    },
    articleRef: "Art. 58"
  },
  {
    id: 328,
    category: 'penalties',
    question: {
      rw: "Guta imyanda, amabuye, ibirahure cyangwa amavuta mu muhanda nyabagendwa bihanishwa iki?",
      en: "Dumping trash, broken glass, stones, or waste oil onto a public roadway is punished by:",
      fr: "Le fait de jeter des ordures, débris de verre, pierres ou huile sur la voie publique est sanctionné par:"
    },
    options: {
      rw: [
        "Amande y'amategeko no gutegekwa gukubura no gukuraho iyo myanda yose",
        "Gushimirwa kubera gusukura imodoka",
        "Nta cyaha kirimo",
        "Kugabanyirizwa ibiciro by'amazi"
      ],
      en: [
        "Statutory penal fine and mandatory order to sweep and clear all hazardous debris immediately",
        "Praise for cleaning out personal vehicle interiors",
        "No legal offense",
        "Water utility discount"
      ],
      fr: [
        "Amende contraventionnelle et obligation de nettoyer et retirer immédiatement tous les débris",
        "Félicitations pour le nettoyage de sa voiture",
        "Aucune infraction",
        "Réduction d'eau"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kujugunya ibintu byangiza mu muhanda bishyira mu kaga abandi bakoresha umuhanda (nk'amapine gutoboka cyangwa kunyerera) bityo bikaba bihanirwa bikomeye.",
      en: "Discharging debris onto roadways endangers traffic via punctures and slippage, incurring mandatory cleanup and fines.",
      fr: "Déposer des objets ou substances dangereuses sur la chaussée met en péril la circulation et constitue une infraction."
    },
    articleRef: "Art. 6"
  },
  {
    id: 329,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo igishushanyo cy'imodoka y'ikamyo itwaye ibikomoka ku burozi cyangwa ibyahumanya amazi (Produits polluants) gisobanura iki?",
      en: "What does a circular sign with a red border depicting a truck spilling pollutants into water indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge illustrant un camion et une nappe d'eau polluée?"
    },
    options: {
      rw: [
        "Inzira ibujijwe ibinyabiziga bitwaye ibintu bishobora kwangiza amazi n'ibidukikije (Accès interdit aux véhicules transportant des produits polluants)",
        "Aho gupakururira imyanda mu mazi",
        "Ikinyabiziga kigiye koga mu ruzi",
        "Isoko ry'amavuta ya moteri"
      ],
      en: [
        "Access prohibited to vehicles carrying water-pollutant or environmentally toxic cargo",
        "Dumping waste into river permit zone",
        "Vehicle swimming ramp",
        "Motor oil sales market"
      ],
      fr: [
        "Accès interdit aux véhicules transportant des produits de nature à polluer les eaux",
        "Zone de déversement autorisée",
        "Baignade de véhicules",
        "Vente d'huile"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kirinda amasoko y'amazi yo kunywa n'ibidukikije bityo kigabuza amakamyo atwaye imiti n'amavuta kwinjira muri ako gace.",
      en: "This environmental protection sign bars hazardous pollutant transport across water catchment basins.",
      fr: "Ce panneau interdit le transit de matières polluantes à proximité de nappes phréatiques et zones protégées."
    },
    articleRef: "Art. 68"
  },
  {
    id: 330,
    category: 'parking',
    question: {
      rw: "Ni iki kibuza guparika ikinyabiziga hafi y'ikimenyetso cyo kuburira impanuka (Triangle) cyangwa icyapa cy'umuhanda?",
      en: "Why is parking prohibited in front of fixed road traffic signs or emergency breakdown triangles?",
      fr: "Pourquoi est-il interdit de stationner devant un panneau de signalisation routière?"
    },
    options: {
      rw: [
        "Kuko bituma icyapa gikingirizwa abandi bashoferi ntibashobore kukibona no kukubahiriza",
        "Kugira ngo icyapa kitangirika",
        "Kugira ngo imodoka idasaza",
        "Nta kibazo kirimo"
      ],
      en: [
        "Because it obstructs the sign's visibility, preventing approaching drivers from reading and obeying the warning",
        "To prevent sign wear and tear",
        "To prevent vehicle paint deterioration",
        "No safety issue exists"
      ],
      fr: [
        "Car cela masque la visibilité du panneau et empêche les autres conducteurs de voir et respecter la prescription",
        "Pour protéger le panneau",
        "Pour la peinture",
        "Aucun problème"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guparika imbere y'ibyapa bituma abandi bashoferi batabona amategeko n'integuza bigatuma bakora impanuka.",
      en: "Concealing road signposts behind parked vehicles blinds approaching motorists to regulatory hazards.",
      fr: "Masquer un panneau de signalisation par son stationnement constitue une infraction grave gênant la sécurité de tous."
    },
    articleRef: "Art. 28"
  },
  {
    id: 331,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Akamenyetso k'umuryango w'amasangano' (Ligne d'effet des feux / Stop line) risobanura iki?",
      en: "What is the function of the transverse stop line (Ligne d'effet des feux ou du Stop)?",
      fr: "Quelle est la fonction d'une ligne transversale d'arrêt (Ligne d'effet des feux ou du Stop)?"
    },
    options: {
      rw: [
        "Umurongo w'umweru utambitse ku butaka ugaragaza aho ibinyabiziga bigomba guhagarara imbere y'itara cyangwa icyapa cya Stop",
        "Umurongo wo gukiniraho umupira",
        "Aho guparika amakamyo",
        "Inzira y'abanyamaguru gusa"
      ],
      en: [
        "A solid transverse white line marking the exact point where vehicles must stop before a traffic light or Stop sign",
        "Sports boundary line",
        "Truck parking boundary",
        "Pedestrian crossing boundary only"
      ],
      fr: [
        "Une ligne blanche transversale continue indiquant l'endroit exact où les véhicules doivent s'arrêter au feu ou au Stop",
        "Ligne de jeu",
        "Limite de parking camions",
        "Ligne décorative"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umurongo utambitse w'amasangano werekana aho umutwe w'ikinyabiziga utagomba kurenga mu gihe itara ryatse umutuku cyangwa uri kuri Stop.",
      en: "Transverse stop lines establish the legal immobilization boundary for stopping at red signals and STOP junctions.",
      fr: "La ligne d'effet marque la limite à ne pas franchir lors de l'arrêt imposé par le feu ou le panneau STOP."
    },
    articleRef: "Art. 74"
  },
  {
    id: 332,
    category: 'priority',
    question: {
      rw: "Iyo ikinyabiziga gisatira amasangano aho itara ry'icyatsi ryatse ariko hakaba hari umupolisi ubimenyesha guhagarara (Bras levé verticalement), ugomba gukurikiza iki?",
      en: "At a green traffic light intersection where a police officer signals an upright raised arm (Stop), what command takes precedence?",
      fr: "À un feu vert où un agent de police lève le bras verticalement pour ordonner l'arrêt, quel ordre prévaut?"
    },
    options: {
      rw: [
        "Guhagarara ako kanya kuko amategeko n'ibimenyetso by'umupolisi biruta amatara yo mu muhanda",
        "Gukomeza kuko itara ry'icyatsi riruta umupolisi",
        "Kuvuza ihoni kuri polisi ugatambuka",
        "Gusubira inyuma wiruka cyane"
      ],
      en: [
        "Stop immediately because an authorized officer's hand signal overrides all automated traffic lights",
        "Proceed forward because the green light supersedes the officer",
        "Honk at the police officer and drive through",
        "Reverse at high speed"
      ],
      fr: [
        "S'arrêter immédiatement car les injonctions des agents qualifiés prévalent sur les feux de circulation",
        "Continuer car le feu vert prime sur l'agent",
        "Klaxonner l'agent et passer",
        "Reculer à toute allure"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibimenyetso by'umupolisi biruta amatara, ibyapa n'amategeko asanzwe; iyo ategetse guhagarara urahagarara nubwo itara ryaba ari icyatsi.",
      en: "Manual gestures from certified police officers supersede automated signals, requiring immediate compliance over green lights.",
      fr: "Les signaux d'un agent de circulation l'emportent toujours sur les feux et commandent un arrêt immédiat."
    },
    articleRef: "Art. 7"
  },
  {
    id: 333,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho ya mpandeshatu ifite umuzenguruko utukura kirimo ikimenyetso cy'akanyabiziga k'abamugaye (Chaise roulante / Handicapés) gisobanura iki?",
      en: "What does a warning sign with a red border depicting a person in a wheelchair indicate?",
      fr: "Que signifie un panneau de danger triangulaire à bordure rouge illustrant une personne en fauteuil roulant?"
    },
    options: {
      rw: [
        "Kwegera agace gakunze kwambukirwamo cyangwa kugendwamo n'abafite ubumuga (Passage fréquent de personnes handicapées)",
        "Aho kugurira intebe z'abamugaye",
        "Ibitaro by'indwara zo mu mutwe gusa",
        "Kubuza abamugaye kugenda mu muhanda"
      ],
      en: [
        "Approaching a zone frequently used or crossed by persons with disabilities (Passage de personnes handicapées)",
        "Wheelchair retail shop",
        "Psychiatric clinic only",
        "Prohibition of disabled people from roads"
      ],
      fr: [
        "Zone de passage fréquent ou présence de personnes à mobilité réduite ou en fauteuil roulant",
        "Magasin de fauteuils roulants",
        "Clinique psychiatrique",
        "Interdiction aux handicapés"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kimenyesha umushoferi kwitonda cyane kuko mu gace harimo abantu bafite ubumuga bakeneye kwitabwaho no koroherezwa kwambuka.",
      en: "This warning sign alerts to frequent wheelchair users and vulnerable mobility-impaired pedestrians requiring extra care.",
      fr: "Ce panneau invite à une vigilance particulière envers les personnes à mobilité réduite traversant la chaussée."
    },
    articleRef: "Art. 65"
  },
  {
    id: 334,
    category: 'speed',
    question: {
      rw: "Kuki umushoferi agomba guhora afite ubushobozi bwo guhagarika ikinyabiziga cye mu ntera y'aho abona imbere (Distance de visibilité)?",
      en: "Why is a driver legally required to always maintain a speed allowing vehicle stoppage within their forward clear sight distance?",
      fr: "Pourquoi le conducteur doit-il constamment être en mesure d'arrêter son véhicule dans le champ de visibilité libre devant lui?"
    },
    options: {
      rw: [
        "Kugira ngo niba abonye ikintu gitunguranye mu muhanda ashobore guhagarara atagigonze",
        "Kugira ngo abagenzi baticara nabi",
        "Kugira ngo imodoka idakoresha amazi ya moteri",
        "Nta mpamvu kuko amategeko atabishyiramo imbaraga"
      ],
      en: [
        "To guarantee the ability to come to a complete halt before striking any unforeseen obstacle or hazard in the travel path",
        "To prevent passengers from adjusting seating",
        "To prevent engine coolant consumption",
        "No reason since the law rarely enforces sightlines"
      ],
      fr: [
        "Pour être capable de s'immobiliser à temps devant tout obstacle imprévu présent sur la trajectoire",
        "Pour le confort passagers",
        "Pour l'eau du moteur",
        "Aucune raison"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umushoferi agomba kugendera ku muvuduko umwemerera guhagarara mu ntera y'umuhanda abona neza; kutabikora biteza impanuka zo kugonga ibiri imbere.",
      en: "Drivers must master their speed so vehicle stopping distance never exceeds unobstructed forward visibility distance.",
      fr: "Tout conducteur doit régler sa vitesse de façon à pouvoir s'arrêter dans l'espace de visibilité libre devant lui."
    },
    articleRef: "Art. 18"
  },
  {
    id: 335,
    category: 'lights',
    question: {
      rw: "Itara ryerekana icyerekezo (Clignotant) riramutse ryapfuye rikaba ridakora, umushoferi agomba gukoresha iki mu kumenyesha abandi ko agiye gukata?",
      en: "If a turn indicator light fails mechanically, what manual hand signal must a driver use to indicate a left turn?",
      fr: "En cas de défaillance des clignotants, quel signal manuel le conducteur doit-il faire pour indiquer un virage à gauche?"
    },
    options: {
      rw: [
        "Kumanika ukuboko kw'ibumoso kugororotse hanze y'idirishya gushinze mu buryo butambitse (Bras gauche tendu horizontalement)",
        "Kuvuza ihoni gusa inshuro eshatu",
        "Gupakurura igitambaro mu idirishya",
        "Kuzunguza umutwe"
      ],
      en: [
        "Extend the left arm horizontally straight out of the driver's window",
        "Sound the horn three distinct times",
        "Wave a towel out the passenger window",
        "Nod head vigorously"
      ],
      fr: [
        "Tendre le bras gauche horizontalement et immobile hors de la vitre",
        "Klaxonner trois fois",
        "Agiter un chiffon",
        "Faire un geste de la tête"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo amatara y'icyerekezo adakora, umushoferi agomba gukoresha amaboko: kurambura ukuboko kw'ibumoso bitambitse bisobanura gukata ibumoso.",
      en: "Hand signals substitute for broken blinkers: a horizontally extended left arm signals intent to turn left.",
      fr: "En cas de panne d'indicateur, le conducteur signale son intention de virer à gauche en tendant le bras gauche horizontalement."
    },
    articleRef: "Art. 23"
  },
  {
    id: 336,
    category: 'overtaking',
    question: {
      rw: "Kuki bibujijwe kunyuranaho ku kinyabiziga cyose cyahagaze mbere y'inzira y'abanyamaguru (Passage piétons)?",
      en: "Why is it strictly forbidden to overtake a vehicle that has stopped before a pedestrian crosswalk?",
      fr: "Pourquoi est-il rigoureusement interdit de dépasser un véhicule arrêté devant un passage pour piétons?"
    },
    options: {
      rw: [
        "Kuko gishobora kuba cyahagariye abanyamaguru bari kwambuka utabona, ukaba wabagonga",
        "Kugira ngo abanyamaguru baze bakurebe",
        "Kugira ngo umushoferi w'iyo modoka atarakara",
        "Nta cyaha kirimo kuko nawe wihuta"
      ],
      en: [
        "Because that vehicle is likely stopped to let hidden crossing pedestrians pass, creating a fatal blind strike risk",
        "To let pedestrians admire your car",
        "To avoid angering the stopped driver",
        "There is no offense if in a hurry"
      ],
      fr: [
        "Car ce véhicule est très probablement arrêté pour laisser traverser des piétons masqués que vous risquez de faucher",
        "Pour que les piétons vous regardent",
        "Pour ne pas fâcher l'autre conducteur",
        "Aucune infraction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Imodoka ihagaze imbere y'umurongo w'abanyamaguru iba ihaye inzira abantu bambuka; kunyuranaho muri ako kanya bica abanyamaguru.",
      en: "Overtaking at occupied crosswalks causes catastrophic pedestrian impacts due to sightline masking by stopped vehicles.",
      fr: "Dépasser devant un passage piéton masque les usagers en cours de traversée et constitue un danger mortel."
    },
    articleRef: "Art. 22"
  },
  {
    id: 337,
    category: 'technical',
    question: {
      rw: "Agasanduku k'ubutabazi bw'ibanze (Trousse de premiers secours / First aid kit) mu kinyabiziga kigomba kuba karimo iki byibura?",
      en: "What essential supplies must an automotive first aid kit (Trousse de premiers secours) contain?",
      fr: "Que doit contenir au minimum la trousse de premiers secours obligatoire dans un véhicule?"
    },
    options: {
      rw: [
        "Pansoma (Bandages), ipamba, imiti yica udukoko (Antiseptique), igikasi, n'uturindantoki tw'isuku",
        "Ibiryo by'urugendo n'amazi yo kunywa gusa",
        "Ibyuma byo gukanika moteri gusa",
        "Amavuta yo gusiga imodoka"
      ],
      en: [
        "Sterile bandages, gauze, antiseptic disinfectant, scissors, and protective sterile gloves",
        "Snack food and drinking water bottles only",
        "Mechanical engine spanner tools only",
        "Car polish wax"
      ],
      fr: [
        "Pansements stériles, compresses, antiseptique désinfectant, ciseaux et gants médicaux",
        "Nourriture et boissons",
        "Outils mécaniques uniquement",
        "Cire de lustrage"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Agasanduku k'ubutabazi gafasha guhagarika amaraso no kurengera ubuzima bw'abakomeretse mu mpanuka mbere y'uko abaganga bahagera.",
      en: "First aid kits provide life-saving wound dressing and hemorrhage control before emergency medical arrival.",
      fr: "La trousse de secours permet de prodiguer les premiers soins d'urgence et de stopper les hémorragies lors d'un accident."
    },
    articleRef: "Art. 59"
  },
  {
    id: 338,
    category: 'penalties',
    question: {
      rw: "Gutwara ikinyabiziga nta cyemezo cy'ubugenzuzi bwa tekiniki (Contrôle technique valide) gifite agaciro bihanishwa iki?",
      en: "Operating a motor vehicle without a valid roadworthiness inspection certificate (Contrôle technique) is penalized by:",
      fr: "La conduite d'un véhicule sans certificat de contrôle technique valide est sanctionnée par:"
    },
    options: {
      rw: [
        "Guhagarikwa, amande y'amategeko no gufatirwa ikinyabiziga kikajyanwa muri furiye",
        "Gushimirwa kubera ko ikinyabiziga kikigenda",
        "Guhabwa perimi nshya",
        "Nta cyaha kirimo"
      ],
      en: [
        "Traffic citation, statutory fines, and vehicle impoundment to police storage (Fourrière)",
        "Commendation that the vehicle still moves",
        "Issued a replacement driving license",
        "No penalty applies"
      ],
      fr: [
        "Procès-verbal, amende et mise en fourrière immédiate du véhicule jusqu'à régularisation",
        "Félicitations",
        "Nouveau permis",
        "Aucune sanction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ikinyabiziga kidafite contrôle technique kiba gishobora kugira intege nke muri feri n'amapine bikaba byateza impanuka bityo kigafatwa.",
      en: "Uninspected vehicles present uncertified safety risks on public roads, resulting in mandatory impoundment and fines.",
      fr: "L'absence de contrôle technique valide expose à des risques d'accidents par défaillance et entraîne la mise en fourrière."
    },
    articleRef: "Art. 85"
  },
  {
    id: 339,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite ubuso bw'ubururu kirimo igishushanyo cy'umunyamaguru n'umwana bafatanye mu ntoki gisobanura iki?",
      en: "What does a circular blue mandatory sign depicting a pedestrian holding a child's hand indicate?",
      fr: "Que signifie un panneau circulaire bleu illustrant un piéton adulte tenant un enfant par la main?"
    },
    options: {
      rw: [
        "Inzira itegetswe abanyamaguru gusa (Chemin obligatoire pour piétons)",
        "Inzira ibujijwe abanyamaguru",
        "Aho gukinira umupira w'amaguru",
        "Isoko ry'abana"
      ],
      en: [
        "Mandatory path reserved exclusively for pedestrians (Chemin obligatoire pour piétons)",
        "Pedestrian access strictly prohibited",
        "Soccer athletic field",
        "Children toy boutique"
      ],
      fr: [
        "Chemin obligatoire réservé exclusivement aux piétons",
        "Accès interdit aux piétons",
        "Terrain de football",
        "Boutique de jouets"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibyapa by'uruziga rw'ubururu bitegeka icyo gukora; aha biba bitegetswe ko abanyamaguru bakoresha iyo nzira kandi ibinyabiziga ntibibyemererwe.",
      en: "Blue circular signs prescribe mandatory routing: here, pedestrian walkway obligation barring motor vehicles.",
      fr: "Ce panneau d'obligation impose l'utilisation de cette voie aux piétons et interdit son accès aux véhicules."
    },
    articleRef: "Art. 69"
  },
  {
    id: 340,
    category: 'parking',
    question: {
      rw: "Ni ryari umushoferi yemerewe gukoresha umwanya wagenewe guparika abafite ubumuga (Emplacement réservé aux personnes handicapées)?",
      en: "When is a driver legally permitted to park in a designated disabled accessible parking bay (Emplacement handicapé)?",
      fr: "Quand un conducteur est-il légalement autorisé à stationner sur un emplacement réservé aux personnes handicapées?"
    },
    options: {
      rw: [
        "Igihe gusa ikinyabiziga gifite ikarita cyangwa ikirango cyemewe n'amategeko cy'abafite ubumuga kigaragara ku kirahure",
        "Igihe cyose yihuta agiye guhaha",
        "Iyo afite imodoka nini nziza",
        "Igihe indi myanya yose yuzuye"
      ],
      en: [
        "Only when the vehicle displays an official, legally valid disability parking permit on its windshield",
        "Whenever hurrying for quick convenience shopping",
        "Whenever driving a luxury SUV",
        "Whenever all standard bays are occupied"
      ],
      fr: [
        "Uniquement si le véhicule arbore le macaron ou carte officielle de stationnement pour personnes handicapées",
        "Pour faire une course rapide",
        "En conduisant un grand SUV",
        "Quand le parking est plein"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Imyanya y'abafite ubumuga yagenewe gusa ababifitiye ibyangombwa; kuyiparikamo nta burenganzira bihanishwa amande yo hejuru no gukururwa.",
      en: "Designated disabled bays are strictly reserved for verified disability permit holders; unauthorized parking triggers fines and towing.",
      fr: "Les emplacements pour handicapés sont strictement réservés aux titulaires d'une carte d'invalidité; l'abus est verbalisé."
    },
    articleRef: "Art. 28"
  },
  {
    id: 341,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Icyerekezo cy'umuhanda w'amashami' (Voie de décélération / Exit slip road) risobanura iki?",
      en: "What is a deceleration exit slip lane (Voie de décélération)?",
      fr: "Que désigne une voie de décélération (Voie de sortie)?"
    },
    options: {
      rw: [
        "Igisate cy'umuhanda cyagenewe gutuma ikinyabiziga kigabanya umuvuduko mu mutekano mbere yo gusohoka mu muhanda munini",
        "Inzira y'imodoka zapfuye",
        "Aho guparika ibinyabiziga",
        "Inzira y'abanyamaguru"
      ],
      en: [
        "An auxiliary lane designed to allow exiting vehicles to reduce speed safely before entering an exit ramp",
        "A breakdown holding bay",
        "A designated parking shoulder",
        "A pedestrian pathway"
      ],
      fr: [
        "Une voie auxiliaire permettant aux véhicules de ralentir en sécurité avant de quitter la voie rapide",
        "Une voie de détresse",
        "Un parking",
        "Un trottoir"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Igisate cyo kugabanyirizaho umuvuduko gituma udatera feri ukiri mu gisate nyamukuru cy'abandi bakoresha umuhanda munini.",
      en: "Deceleration lanes allow drivers to brake after leaving high-speed lanes, avoiding rear-end collisions on main carriageways.",
      fr: "La voie de décélération permet de freiner hors du flux rapide pour aborder la sortie sans surprendre les usagers qui suivent."
    },
    articleRef: "Art. 2"
  },
  {
    id: 342,
    category: 'priority',
    question: {
      rw: "Iyo ikinyabiziga cy'imbangukiragutabara (Ambulance) gituruka inyuma yawe cyakije amatara yacyo y'ubururu n'ihembe ryihariye (Sirène), ugomba gukora iki?",
      en: "When an emergency ambulance approaches from behind with blue flashing beacon lights and sirens sounding, what action must you take?",
      fr: "Lorsqu'une ambulance en mission d'urgence approche derrière vous avec gyrophares bleus et sirène, que devez-vous faire?"
    },
    options: {
      rw: [
        "Kwigira iburyo bw'umuhanda no kugabanya umuvuduko cyangwa guhagarara kugira ngo uyireke itambuke nta nkomyi",
        "Kongera umuvuduko ukayiruka imbere",
        "Kuyifungira inzira ngo itakunyuraho",
        "Kuguma rwagati mu muhanda nta cyo uhinduye"
      ],
      en: [
        "Pull over to the right verge, reduce speed or stop completely to yield immediate clear passage",
        "Accelerate heavily to race ahead of the ambulance",
        "Block the lane to stop it from overtaking",
        "Remain motionless in the center lane without reacting"
      ],
      fr: [
        "Serrer immédiatement à droite, ralentir ou s'arrêter pour libérer complètement le passage",
        "Accélérer pour faire la course",
        "Bloquer la route",
        "Rester au milieu sans bouger"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko ategeka abashoferi bose guhita bava mu nzira bagaharurira ibinyabiziga by'ubutabazi nka ambulances ziri mu butumwa bwihuse.",
      en: "Emergency priority vehicles must be afforded immediate unobstructed roadway clearance by moving safely to the right.",
      fr: "Tous les usagers doivent faciliter le passage immédiat des véhicules de secours prioritaires en serrant à droite."
    },
    articleRef: "Art. 15"
  },
  {
    id: 343,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho ya mpandeshatu ifite umuzenguruko utukura kirimo ikimenyetso cy'inkingi z'amashanyarazi n'umuriro w'amashanyarazi gisobanura iki?",
      en: "What does a triangular warning sign with a red border depicting high-voltage power lines indicate?",
      fr: "Que signifie un panneau triangulaire de danger illustrant une ligne électrique à haute tension?"
    },
    options: {
      rw: [
        "Kwegera imirongo y'insinga z'amashanyarazi ziri hejuru zifite umuriro mwinshi (Lignes électriques aériennes)",
        "Aho gucagingira telefone",
        "Isoko ry'amabuye ya batiri",
        "Inzira y'imodoka z'amashanyarazi gusa"
      ],
      en: [
        "Approaching high-voltage overhead electric power transmission lines (Lignes électriques aériennes)",
        "Mobile phone charging station",
        "Battery retail market",
        "Electric vehicle exclusive path"
      ],
      fr: [
        "Danger lié au franchissement sous des lignes électriques aériennes à haute tension",
        "Borne de recharge téléphone",
        "Marché de batteries",
        "Voie pour voitures électriques"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira cyane cyane amakamyo maremare n'ibinyabiziga bifite imitwaro miremire kwitondera insinga z'amashanyarazi ziri mu kirere.",
      en: "Overhead power line warnings alert tall trucks and loaded vehicles against electrocution clearance hazards.",
      fr: "Ce panneau met en garde les véhicules de grande hauteur contre les risques d'arc électrique sous les câbles aériens."
    },
    articleRef: "Art. 65"
  },
  {
    id: 344,
    category: 'speed',
    question: {
      rw: "Umuvuduko ntarengwa w'ikinyabiziga gikurura remorque irengeje ibiro 750 hanze y'insisiro ni uwuhe?",
      en: "What is the maximum legal speed limit for a vehicle combination towing a trailer exceeding 750 kg on rural highways?",
      fr: "Quelle est la vitesse maximale légale pour un ensemble attelé d'une remorque de plus de 750 kg hors agglomération?"
    },
    options: {
      rw: ["60 km/h", "100 km/h", "80 km/h", "40 km/h"],
      en: ["60 km/h", "100 km/h", "80 km/h", "40 km/h"],
      fr: ["60 km/h", "100 km/h", "80 km/h", "40 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga bikurura remorque iremereye ntibishobora kurenza 60 km/h hanze y'insisiro kubera intera ndende yo guhagarara no gushikama kwayo.",
      en: "Heavy trailer combinations are legally limited to 60 km/h on open rural roads due to dynamic trailer sway and braking inertia.",
      fr: "Les ensembles avec remorque lourde sont plafonnés à 60 km/h hors agglomération pour garantir la stabilité du train roulant."
    },
    articleRef: "Art. 18"
  },
  {
    id: 345,
    category: 'lights',
    question: {
      rw: "Kuki amatara maremare (Feux de route) atagomba gukoreshwa igihe ugendera mu muhanda urimo amatara y'amashanyarazi amurika neza mu mujyi?",
      en: "Why must high beams NOT be used on urban city roads illuminated by functioning street lighting?",
      fr: "Pourquoi les feux de route ne doivent-ils PAS être utilisés sur les voies urbaines dotées d'un éclairage public continu?"
    },
    options: {
      rw: [
        "Kubera ko umuhanda wamaze kumurikwa neza kandi amatara maremare ahuma amaso abandi bashoferi n'abanyamaguru",
        "Kugira ngo itara ridashya",
        "Kugira ngo batakwishyuza amashanyarazi",
        "Nta kibazo kirimo kuko ari byiza kubona cyane"
      ],
      en: [
        "Because continuous street lighting already provides sufficient illumination, and high beams dangerously blind other road users",
        "To prevent headlight bulb burnout",
        "To avoid street electricity surcharge billing",
        "No problem since brighter vision is always preferable"
      ],
      fr: [
        "Car l'éclairage public assure déjà une visibilité suffisante et les pleins phares éblouissent gravement les autres usagers",
        "Pour préserver l'ampoule",
        "Pour ne pas payer de taxe électrique",
        "Aucun problème"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mu nsisiro imuritswe n'amatara yo ku muhanda, bitegetswe gukoresha amatara magufi (Feux de croisement) gusa.",
      en: "Dipped low beams are mandatory in illuminated urban areas; high beams cause unlawful blinding glare.",
      fr: "En agglomération éclairée, seuls les feux de croisement sont autorisés pour éviter tout éblouissement."
    },
    articleRef: "Art. 30"
  },
  {
    id: 346,
    category: 'overtaking',
    question: {
      rw: "Iyo umushoferi amaze kwinjira mu gisate cyo kunyuranaho akabona ikindi kinyabiziga gitunguranye giturutse imbere, agomba gukora iki?",
      en: "If during an overtaking maneuver an unexpected oncoming vehicle suddenly appears, what should the driver do?",
      fr: "Si pendant un dépassement un véhicule survient soudainement en sens inverse, que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Kugabanya umuvuduko witonze ukareka uwo washakaga kunyuraho agasubira imbere, nawe ukisubirira mu ruhande rwawe rw'iburyo",
        "Kongera umuvuduko cyane ngo umugonge",
        "Kwijugunya mu murima w'ibumoso",
        "Kuzimya amatara yose ugasenga"
      ],
      en: [
        "Abort the overtaking maneuver smoothly, decelerate, and tuck safely back behind the vehicle into the right lane",
        "Accelerate directly to collide head-on",
        "Swerve off the road into the left ditch",
        "Extinguish all lights and pray"
      ],
      fr: [
        "Renoncer immédiatement au dépassement, ralentir et se réinsérer en sécurité à droite derrière le véhicule",
        "Accélérer pour percuter l'autre",
        "Se jeter dans le fossé gauche",
        "Éteindre ses feux"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo ubonye kunyuranaho biteje ibyago, uhita ubireka ukisubirira inyuma y'uwo wagendaga inyuma mu mutekano.",
      en: "Aborting an unsafe overtake by dropping back into the original lane is the legally required defensive action.",
      fr: "L'annulation du dépassement et la réinsertion prudente sur la voie d'origine s'imposent en cas de danger soudain."
    },
    articleRef: "Art. 20"
  },
  {
    id: 347,
    category: 'technical',
    question: {
      rw: "Ni iki gitera ikinyabiziga guta umurongo n'uburinganire bwo kuyoborwa (Perte de contrôle / Skidding) igihe gifashe feri ikomeye?",
      en: "What primary mechanical or environmental defect causes vehicle skidding and loss of directional control during hard braking?",
      fr: "Quelle défaillance technique ou cause principale provoque le dérapage et la perte de contrôle lors d'un freinage d'urgence?"
    },
    options: {
      rw: [
        "Amapine yashize inzira (Pneus lisses), feri zidafata kimwe ku biziga byombi, cyangwa amazi n'amavuta ku muhanda",
        "Kugira lisansi nyinshi muri moteri",
        "Gufungura idirishya ry'imodoka",
        "Gushyira umuziki muke muri radiyo"
      ],
      en: [
        "Bald worn tires (Pneus lisses), unevenly adjusted axle brakes, or water/oil slicks on the asphalt",
        "Having a full fuel tank in the engine",
        "Opening the car passenger window",
        "Lowering the radio volume"
      ],
      fr: [
        "Pneumatiques lisses ou usés, déséquilibre de freinage entre roues ou présence d'eau/huile sur la chaussée",
        "Avoir trop de carburant",
        "Ouvrir la vitre",
        "Baisse du volume radio"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amapine yashize n'ubusembwa bwa feri bituma amapine afunga nabi imodoka igata umuhanda igakora impanuka.",
      en: "Tire tread wear and brake force imbalance on axles trigger catastrophic lockup skids and vehicle rollover.",
      fr: "L'usure des pneumatiques et le déséquilibre des freins provoquent le blocage dissymétrique des roues et le dérapage."
    },
    articleRef: "Art. 50"
  },
  {
    id: 348,
    category: 'penalties',
    question: {
      rw: "Kurenga ku mategeko agenga umutekano ku bibuga by'indege cyangwa ibiraro by'ingenzi by'igihugu bihanishwa iki?",
      en: "Violating specialized security traffic regulations around airports or strategic national bridges is punished by:",
      fr: "La violation des règles de circulation et sécurité aux abords des aéroports et ponts stratégiques est punie par:"
    },
    options: {
      rw: [
        "Ibihano bikomeye by'amategeko, amande yo mu rwego rwo hejuru no gushyikirizwa inzego z'umutekano",
        "Gushimirwa kubera gutembera",
        "Nta cyaha kirimo",
        "Kugabanyirizwa ibiciro by'amatike y'indege"
      ],
      en: [
        "Severe legal penalties, highest-class fines, and handover to national security authorities",
        "Commendation for sightseeing",
        "No violation",
        "Airline ticket discounts"
      ],
      fr: [
        "Sanctions pénales sévères, amendes de classe supérieure et remise aux autorités de sécurité",
        "Félicitations touristiques",
        "Aucune sanction",
        "Réduction de billet d'avion"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ahantu h'ingenzi nk'ibiraro n'ibibuga by'indege hafite amategeko akaze cyane yo kurinda umutekano w'igihugu.",
      en: "Strategic national infrastructure assets possess strict security traffic protocols with severe penal enforcement.",
      fr: "Les infrastructures stratégiques sont soumises à une réglementation de sécurité renforcée sévèrement réprimée."
    },
    articleRef: "Art. 85"
  },
  {
    id: 349,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo amagambo '3.5 t' gisobanura iki?",
      en: "What does a circular sign with a red border containing the weight marking '3.5 t' indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge portant la mention '3,5 t'?"
    },
    options: {
      rw: [
        "Inzira ibujijwe ibinyabiziga bifite uburemere burenze Toni 3.5 (Accès interdit aux véhicules de plus de 3,5 tonnes)",
        "Inzira y'ibinyabiziga bifite metero 3.5 z'uburebure",
        "Umuvuduko wa 35 km/h",
        "Aho kugurishiriza toni 3.5 z'isukari"
      ],
      en: [
        "Access prohibited to vehicles exceeding 3.5 metric tonnes gross laden weight (Accès interdit aux plus de 3.5t)",
        "Road reserved for vehicles 3.5 meters long",
        "Speed limit of 35 km/h",
        "Commercial sugar wholesale depot"
      ],
      fr: [
        "Accès interdit aux véhicules dont le poids total autorisé en charge dépasse 3,5 tonnes",
        "Voie pour véhicules de 3,5 mètres de long",
        "Vitesse limitée à 35 km/h",
        "Dépôt de sucre"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kirinda imihanda mito cyangwa amateme gucika kubera amakamyo aremereye bityo kikabuza ikinyabiziga kirenze toni 3.5 kuwinjiramo.",
      en: "Weight restriction signs protect light road structures and bridges by barring heavy goods vehicles above 3.5t.",
      fr: "Ce panneau de limitation de tonnage protège les chaussées et ouvrages d'art contre les surcharges lourdes."
    },
    articleRef: "Art. 68"
  },
  {
    id: 350,
    category: 'parking',
    question: {
      rw: "Kuki bibujijwe guparika ikinyabiziga ku buryo kibangamiye imirimo yo kuzimya umuriro (Bouche d'incendie / Fire hydrant)?",
      en: "Why is parking within range of emergency municipal fire hydrants (Bouche d'incendie) strictly illegal?",
      fr: "Pourquoi le stationnement est-il formellement interdit devant ou à proximité immédiate d'une bouche d'incendie?"
    },
    options: {
      rw: [
        "Bizitira imodoka zizimya umuriro gukuramo amazi igihe inzu zirimo gushya bikaba byatuma abantu bahasiga ubuzima",
        "Bituma amatafari asaza",
        "Bituma amazi akonja",
        "Nta mpamvu y'amategeko"
      ],
      en: [
        "It obstructs firefighter access to water connections during structural conflagrations, endangering human lives",
        "It causes brick masonry to age",
        "It cools municipal water temperature",
        "No legal justification exists"
      ],
      fr: [
        "Cela empêche les pompiers de brancher leurs lances en cas d'incendie, mettant des vies humaines en péril",
        "Pour préserver les briques",
        "Pour l'eau froide",
        "Aucune raison"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guparika imbere ya robine z'amazi ya kizimyamuriro bishyira mu kaga ubuzima bw'abaturage igihe habaye inkongi y'umuriro.",
      en: "Blocking municipal fire hydrants deprives emergency fire brigades of immediate water supply, incurring heavy penalties.",
      fr: "Le blocage des bouches d'incendie par un véhicule en stationnement entrave les secours d'urgence et constitue un délit."
    },
    articleRef: "Art. 28"
  }
];
