import { Question } from '../types';

export const QUESTIONS_PART4: Question[] = [
  {
    id: 151,
    category: 'definitions',
    question: {
      rw: "Imyaka ntarengwa yo hasi (Âge minimum) yo guhabwa uruhushya rwo gutwara ibinyabiziga byo mu rwego rwa 'B' (Voiture) mu Rwanda ni iyihe?",
      en: "What is the minimum statutory age required to obtain a Category 'B' (Passenger Car) driving license in Rwanda?",
      fr: "Quel est l'âge minimum requis pour obtenir le permis de conduire de catégorie 'B' (Voiture) au Rwanda?"
    },
    options: {
      rw: ["Imyaka 18 (18 ans)", "Imyaka 16 (16 ans)", "Imyaka 21 (21 ans)", "Imyaka 25 (25 ans)"],
      en: ["18 years old", "16 years old", "21 years old", "25 years old"],
      fr: ["18 ans", "16 ans", "21 ans", "25 ans"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umunyarwanda cyangwa umuturage wujuje imyaka 18 y'amavuko aba yemerewe gukora ibizamini byo gutwara ibinyabiziga byo mu rwego rwa A na B.",
      en: "The legal minimum age to obtain motorcycle (A) and passenger car (B) driving licenses in Rwanda is 18 years.",
      fr: "L'âge minimal pour se présenter aux épreuves des permis de catégories A et B est fixé à 18 ans révolus."
    },
    articleRef: "Art. 78"
  },
  {
    id: 152,
    category: 'definitions',
    question: {
      rw: "Imyaka yo hasi isabwa kugira ngo umuntu ahabwe uruhushya rwo gutwara ibinyabiziga byo mu rwego rwa 'C' na 'D' (Amakamyo n'amabisi manini) ni iyihe?",
      en: "What is the minimum age required to qualify for Category 'C' (Trucks) and 'D' (Heavy Passenger Buses) licenses?",
      fr: "Quel est l'âge minimum pour obtenir les permis de conduire des catégories 'C' (Poids lourds) et 'D' (Transport en commun)?"
    },
    options: {
      rw: ["Imyaka 20 (20 ans)", "Imyaka 18 (18 ans)", "Imyaka 16 (16 ans)", "Imyaka 30 (30 ans)"],
      en: ["20 years old", "18 years old", "16 years old", "30 years old"],
      fr: ["20 ans", "18 ans", "16 ans", "30 ans"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kugira ngo uhabwe uruhushya rwo gutwara amakamyo (C) cyangwa amabisi atwara abagenzi (D), ugomba kuba ufite nibura imyaka 20 y'amavuko.",
      en: "Candidates must be at least 20 years of age to apply for commercial heavy transport (C) and large bus (D) permits.",
      fr: "Pour postuler aux catégories C et D, le candidat doit être âgé d'au moins 20 ans."
    },
    articleRef: "Art. 78"
  },
  {
    id: 153,
    category: 'definitions',
    question: {
      rw: "Icyiciro cy'uruhushya rwo gutwara ibinyabiziga rw'urwego rwa 'A' (Catégorie A) kigenewe ibihe binyabiziga?",
      en: "What vehicle category does a Category 'A' (Catégorie A) driving license cover in Rwanda?",
      fr: "À quelle catégorie de véhicules correspond le permis de conduire de catégorie 'A' au Rwanda?"
    },
    options: {
      rw: [
        "Amapikipiki yose n'amavelomoteri (Motocyclettes avec ou sans side-car)",
        "Imodoka zitwara abagenzi zirenga imyanya 30",
        "Amakamyo afite romoruki ziremereye",
        "Tarakiteri z'ubuhinzi gusa"
      ],
      en: [
        "All motorcycles with or without side-car, and motor tricycles (Motocyclettes)",
        "Heavy buses carrying over 30 passengers",
        "Heavy articulated semi-trailers",
        "Agricultural tractors only"
      ],
      fr: [
        "Motocyclettes avec ou sans side-car et tricycles à moteur",
        "Autocars de plus de 30 places",
        "Semi-remorques articulées",
        "Tracteurs agricoles uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Urwego rwa A rwemerera umuyobozi gutwara amapikipiki yose afite ibiziga bibiri cyangwa bitatu.",
      en: "Category A authorizes driving two or three-wheeled motorbikes and tricycles.",
      fr: "Le permis A donne le droit de conduire toutes les motocyclettes avec ou sans side-car."
    },
    articleRef: "Art. 77"
  },
  {
    id: 154,
    category: 'technical',
    question: {
      rw: "Isuzuma ry'ubuziranenge bw'ikinyabiziga (Contrôle Technique / Motor Vehicle Inspection) ku modoka z'abantu bwite (Voitures particulières) rikorwa nyuma y'igihe kingana iki?",
      en: "How frequently must private passenger cars undergo mandatory vehicle technical inspection (Contrôle Technique) in Rwanda?",
      fr: "À quelle fréquence les voitures particulières doivent-elles passer la visite technique obligatoire (Contrôle Technique) au Rwanda?"
    },
    options: {
      rw: ["Buri mwaka umwe (Buri mezi 12)", "Buri mezi 6 (Mezi 6 gusa)", "Buri myaka 5", "Ntabwo isuzuma ritegetswe ku modoka bwite"],
      en: ["Every 1 year (Every 12 months)", "Every 6 months (Semi-annually)", "Every 5 years", "Inspection is not required for private cars"],
      fr: ["Chaque 1 an (tous les 12 mois)", "Tous les 6 mois", "Tous les 5 ans", "Aucun contrôle pour les véhicules privés"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Imodoka zisanzwe z'abantu bwite zikorerwa contrôle technique buri mwaka (mezi 12), naho izitwara abagenzi mu bucuruzi zigakorerwa buri mezi 6.",
      en: "Private non-commercial cars must pass technical safety inspection annually (every 12 months), while commercial passenger vehicles require inspection every 6 months.",
      fr: "Les véhicules privés de tourisme sont soumis au contrôle technique annuel (12 mois), contre 6 mois pour les transports publics."
    },
    articleRef: "Art. 55"
  },
  {
    id: 155,
    category: 'technical',
    question: {
      rw: "Ibinyabiziga bitwara abagenzi mu buryo bwa rusange cyangwa ibitwara ibicuruzwa (Transport public / Commercial) bikorerwa isuzuma rya contrôle technique buri gihe kingana iki?",
      en: "How often must commercial freight vehicles and public passenger transport vehicles (Taxi/Bus) undergo vehicle technical inspection?",
      fr: "À quelle fréquence les véhicules de transport public de personnes et de marchandises doivent-ils subir la visite technique?"
    },
    options: {
      rw: ["Buri mezi 6 (Mezi atandatu)", "Buri myaka 2", "Buri myaka 4", "Rimwe gusa mu buzima bw'imodoka"],
      en: ["Every 6 months (Semi-annually)", "Every 2 years", "Every 4 years", "Once during the vehicle's lifespan"],
      fr: ["Tous les 6 mois (semestriellement)", "Tous les 2 ans", "Tous les 4 ans", "Une fois seulement"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kugira ngo abagenzi n'imizigo bagende mu mutekano, amabisi, tagisi n'amakamyo bisuzumwa buri mezi atandatu (mezi 6).",
      en: "Public passenger transports and heavy commercial goods vehicles must undergo safety fitness checks every six months.",
      fr: "Les véhicules de transport rémunéré de personnes ou marchandises sont contrôlés tous les six mois."
    },
    articleRef: "Art. 55"
  },
  {
    id: 156,
    category: 'overtaking',
    question: {
      rw: "Ni iki umushoferi agomba gukora iyo ipine ry'ikinyabiziga rituritse gitunguranye mu muvuduko mwinshi (Éclatement de pneu)?",
      en: "What should a driver do if a tire blows out violently at high speed (Éclatement de pneu)?",
      fr: "Que doit faire un conducteur en cas d'éclatement soudain d'un pneu à vive allure?"
    },
    options: {
      rw: [
        "Gufata vola akomeje cyane n'amaboko yombi, kureka gukandagira lisansi buhoro buhoro, no kwirinda gufata feri igitaraganya kugeza igihe imodoka igabanyirije umuvuduko",
        "Gukandagira feri yose n'imbaraga zose ako kanya",
        "Guta vola agakoma amashyi",
        "Guhita akata ikoni rikabije ku ruhande"
      ],
      en: [
        "Firmly grip the steering wheel with both hands, ease off the accelerator gradually, and avoid slamming the brakes until vehicle stabilizes",
        "Slam the brake pedal down with maximum force immediately",
        "Release the steering wheel and panic",
        "Make a sharp sudden steering jerk to the side"
      ],
      fr: [
        "Maintenir fermement le volant à deux mains, relâcher progressivement l'accélérateur et ne jamais freiner brusquement",
        "Piler sur les freins de toutes ses forces immédiatement",
        "Lâcher le volant sous le choc",
        "Donner un grand coup de volant sec"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo ipine rituritse, gufata feri igitaraganya bituma imodoka icurama cyangwa igasandara; ugomba kugumana vola ukagabanya umuvuduko buhoro.",
      en: "Sudden heavy braking on a blown tire causes violent spin-outs and rollovers; hold the wheel firmly and coast down gradually.",
      fr: "Freiner brusquement lors d'un éclatement provoque un tonneau; il faut stabiliser la trajectoire et décélérer en douceur."
    },
    articleRef: "Art. 21"
  },
  {
    id: 157,
    category: 'overtaking',
    question: {
      rw: "Igihe feri z'ikinyabiziga zanze gukora mu kumanuka umusozi (Panne totale de freinage), umushoferi akora iki?",
      en: "If service foot brakes completely fail while driving down a hill, what emergency steps should the driver execute?",
      fr: "En cas de rupture totale des freins de service en descente, quelles mesures d'urgence le conducteur doit-il adopter?"
    },
    options: {
      rw: [
        "Kumanura amavitesse mu buryo bukurikirana (Retrograder) ngo akoreshe feri ya moteri, gukurura feri y'amaboko buhoro buhoro, no gushaka ahantu horoheje ho guhagararira",
        "Gusimbuka mu modoka igenda",
        "Kuzimya umuriro no gufunga urufunguzo rwa vola",
        "Kongera lisansi ngo yihute agere hasi vuba"
      ],
      en: [
        "Progressively downshift gears to use engine braking, gently and incrementally apply the handbrake, and look for an uphill escape ramp or soft verge",
        "Jump out of the moving vehicle immediately",
        "Turn off the ignition and lock the steering column",
        "Floor the accelerator to reach the bottom faster"
      ],
      fr: [
        "Rétrograder successivement les rapports pour exploiter le frein moteur, serrer progressivement le frein à main et viser un bas-côté amortissant",
        "Sauter hors du véhicule en marche",
        "Couper le contact et bloquer le volant antivol",
        "Accélérer à fond pour en finir plus vite"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kumanura amavitesse (retrogradage) bituma moteri ifata imodoka, naho feri y'amaboko ikururwa buhoro kugira ngo amapine y'inyuma adafungwa agasimbuka.",
      en: "Sequential downshifting engages powerful engine compression braking while progressive handbrake application brings the car to a safe stop.",
      fr: "Le rétrogradage force le ralentissement par le frein moteur tandis que le frein à main doit être dosé avec précaution."
    },
    articleRef: "Art. 21"
  },
  {
    id: 158,
    category: 'overtaking',
    question: {
      rw: "Kunyura ku kindi kinyabiziga (Dépassement) birabujijwe mu bihe bikurikira:",
      en: "Overtaking another moving vehicle is strictly prohibited in all the following situations except:",
      fr: "Le dépassement d'un véhicule est strictement interdit dans toutes les situations suivantes sauf:"
    },
    options: {
      rw: [
        "Mu muhanda ugororotse ufite umurongo ucagaguye kandi nta kinyabiziga gituruka imbere",
        "Mu ikoni rikaze cyane ritabona imbere (Virage sans visibilité)",
        "Hafi yo hejuru y'umusozi (Sommet de côte)",
        "Ku masangano y'inzira ya gari ya moshi idafite inzitiro"
      ],
      en: [
        "On a straight open road with broken dashed center line and zero oncoming traffic (Overtaking permitted here)",
        "In a sharp blind bend with no forward visibility",
        "Near the crest of a hill summit",
        "At an unguarded railway level crossing"
      ],
      fr: [
        "Sur une ligne droite avec ligne discontinue et visibilité parfaite vers l'avant (dépassement autorisé)",
        "Dans un virage masqué sans visibilité",
        "Au sommet d'une côte",
        "À un passage à niveau sans barrières"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kunyuranaho byemewe gusa aho umuhanda ugororotse, umurongo ucagaguye kandi umushoferi abona neza imbere nta kinyabiziga kimwegereye.",
      en: "Overtaking is only legal on straight sections with broken center lines and unobstructed forward sightlines.",
      fr: "Le dépassement n'est permis que sur chaussée droite avec visibilité dégagée et marquage discontinu."
    },
    articleRef: "Art. 17"
  },
  {
    id: 159,
    category: 'overtaking',
    question: {
      rw: "Iyo umushoferi ari kunyurwaho n'ikindi kinyabiziga, ategetswe gukora iki?",
      en: "When your vehicle is being overtaken by another motorist, what are your mandatory legal obligations?",
      fr: "Lorsqu'un conducteur est en train d'être dépassé par un autre véhicule, quelles sont ses obligations légales?"
    },
    options: {
      rw: [
        "Kwegera iburyo bushoboka bw'umuhanda no kwirinda kongera umuvuduko",
        "Kongera umuvuduko kugira ngo uwo uri kumunyuraho amunanirwe",
        "Gucana amatara maremare mu maso y'uri kukunyuraho",
        "Kugana ibumoso ngo umubuze gutambuka"
      ],
      en: [
        "Move as far to the right edge of the lane as safely possible and strictly refrain from accelerating",
        "Accelerate hard to prevent the other car from passing",
        "Flash high beams into his eyes",
        "Swerve to the left to block his overtaking attempt"
      ],
      fr: [
        "Serrer le plus possible vers la droite de la chaussée et s'abstenir formellement d'accélérer",
        "Accélérer pour empêcher le dépassement",
        "Allumer les feux de route dans ses yeux",
        "Bifurquer à gauche pour bloquer le passage"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umushoferi uri kunyurwaho ategetswe gushyira ikinyabiziga cye iburyo no kutongera umuvuduko we kugira ngo uwo unyuraho atambuke vuba mu mutekano.",
      en: "Drivers being passed must hug the right curb and maintain or reduce speed to allow the overtaking vehicle to complete the maneuver safely.",
      fr: "L'usager sur le point d'être dépassé doit serrer sa droite sans jamais accélérer son allure."
    },
    articleRef: "Art. 18"
  },
  {
    id: 160,
    category: 'signs',
    question: {
      rw: "Umurongo w'umweru ucagaguye ufite uduce tugufi cyane twegerenye kandi dufite utwambi tw'inkoramutima twerekeza iburyo (Flèches de rabattement) usobanura iki?",
      en: "What do reduction deflection road arrows (Flèches de rabattement) curved to the right indicate?",
      fr: "Que signifient des flèches de rabattement blanches incurvées vers la droite peintes sur la chaussée?"
    },
    options: {
      rw: [
        "Kugabana umuvuduko no kwegera igisate cy'iburyo vuba kuko umurongo udacitse (Ligne continue) ugiye gutangira",
        "Kunyuranaho byemewe mu birometero 10 biri imbere",
        "Inzira yo guparika iburyo",
        "Ahasoresherezwa imodoka"
      ],
      en: [
        "Drivers must immediately complete overtaking and return to the right lane because a solid continuous line is beginning ahead",
        "Overtaking is permitted for the next 10 km",
        "Parking bay on the right",
        "Toll station lane"
      ],
      fr: [
        "Obligation de se rabattre rapidement sur la voie de droite en raison de l'approche d'une ligne continue infranchissable",
        "Dépassement autorisé sur 10 km",
        "Parking sur la droite",
        "Péage d'autoroute"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Utwambi two kwerekeza iburyo (flèches de rabattement) tuburira abashoferi ko umurongo ucagaguye ugiye gusimburwa n'umurongo udacitse ubuza kunyuranaho.",
      en: "Deflection arrows warn that the passing zone is terminating and a solid no-overtaking line is imminent.",
      fr: "Les flèches de rabattement annoncent la fin de la zone de dépassement et le début d'une ligne continue."
    },
    articleRef: "Art. 75"
  },
  {
    id: 161,
    category: 'signs',
    question: {
      rw: "Ibyapa by'imyambi irombeje iri mu bisate by'umuhanda yerekeza imbere, iburyo cyangwa ibumoso (Flèches de sélection / Directional arrows) bisobanura iki?",
      en: "What do lane selection arrows (Flèches de sélection) painted on the roadway surface require drivers to do?",
      fr: "Que prescrivent les flèches de sélection et de direction tracées sur les voies d'un carrefour?"
    },
    options: {
      rw: [
        "Gukurikiza icyerekezo cy'umwambi uri mu gisate wahisemo igihe ugeze mu masangano",
        "Guhindura igisate mu masangano rwagati uko wishakiye",
        "Guhagarara aho umwambi urangiriye",
        "Kuvuza ihoni mbere yo gutambuka"
      ],
      en: [
        "Follow the specific direction mandated by the arrows in the lane you have selected once entering the junction",
        "Change lanes abruptly inside the intersection at will",
        "Stop at the arrow tip",
        "Sound horn before each arrow"
      ],
      fr: [
        "Suivre obligatoirement la direction indiquée par les flèches de la voie choisie à l'approche de l'intersection",
        "Changer de file au milieu du carrefour",
        "S'arrêter sur la flèche",
        "Klaxonner avant chaque flèche"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umushoferi winjiye mu gisate gifite umwambi agomba gukurikiza icyo cyerekezo (urugero: uguma mu gisate cyo gukata ibumoso agomba gukata ibumoso).",
      en: "Drivers in dedicated turn lanes must execute the turn or through movement specified by lane markings.",
      fr: "Le conducteur engagé dans une voie fléchée est tenu de suivre impérativement la direction prescrite."
    },
    articleRef: "Art. 75"
  },
  {
    id: 162,
    category: 'signs',
    question: {
      rw: "Imirongo y'ibara ry'umweru icagaguye igizwe n'inzira z'ubushushanyo bunyuranamo (Zébrures / Îlots directionnels) ku muhanda isobanura iki?",
      en: "What do hatched chevron markings (Zébrures / Îlots directionnels) painted on the road surface mean?",
      fr: "Que signifient les zones hachurées blanches (Zébrures / Îlots directionnels) peintes sur la chaussée?"
    },
    options: {
      rw: [
        "Ahantu habujijwe kugendwamo, guhagararwamo cyangwa guparikwamo n'ikinyabiziga icyo ari cyo cyose",
        "Aho guparika byihuse ku modoka zose",
        "Inzira y'abanyamaguru y'umuvuduko",
        "Ahasiganirwa imodoka"
      ],
      en: [
        "Neutral safety traffic islands where driving, stopping, or parking is strictly prohibited for all vehicles",
        "Express parking spaces for all cars",
        "High speed pedestrian walkway",
        "Car rally circuit"
      ],
      fr: [
        "Îlots de sécurité neutres : circulation, arrêt et stationnement formellement interdits à tous les véhicules",
        "Emplacements de stationnement express",
        "Piste piétonne rapide",
        "Circuit de course"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Uduce turimo zeburure (zébrures) tuba tugamije kuyobora umuvuduko w'ibinyabiziga no gutandukanya imihanda; birabujijwe kuhakandagira.",
      en: "Hatched chevron markings channel traffic flow and protect merging paths; encroaching or parking on them is illegal.",
      fr: "Les zones à zébrures délimitent des îlots infranchissables réservés à la canalisation sécurisée des flux."
    },
    articleRef: "Art. 75"
  },
  {
    id: 163,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi ashatse gukata ibumoso mu muhanda ugendwamo mu byerekezo byombi (Tourner à gauche), agomba guha inzira:",
      en: "When turning left (Tourner à gauche) at an intersection on a two-way street, whom must the driver yield to?",
      fr: "Lors d'un changement de direction vers la gauche sur une chaussée à double sens, à qui doit-on céder le passage?"
    },
    options: {
      rw: [
        "Ibinyabiziga biturutse imbere ye bigana mu cyerekezo kigororotse cyangwa bikata iburyo",
        "Ibinyabiziga bimuri inyuma gusa",
        "Nta muntu n'umwe, kuko gukata ibumoso biha uburenganzira bwo hejuru",
        "Abanyonzi bari ku ruhande rwe gusa"
      ],
      en: [
        "All oncoming vehicles proceeding straight ahead or turning right from the opposite direction",
        "Trailing vehicles directly behind him only",
        "Nobody, left turns have superior priority",
        "Cyclists on his side only"
      ],
      fr: [
        "Tous les véhicules arrivant en sens inverse qui continuent tout droit ou tournent à leur droite",
        "Aux véhicules qui le suivent uniquement",
        "À personne, le virage à gauche est prioritaire",
        "Aux cyclistes de son côté seulement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gukata ibumoso bisaba guca mu gisate cy'abaturuka imbere, bityo umushoferi agomba kubanza kureka abaturuka imbere bose bagatambuka.",
      en: "Turning left cuts across the path of oncoming through-traffic; drivers must wait for opposing traffic to clear.",
      fr: "Couper la voie opposée pour tourner à gauche oblige à céder le passage à tous les usagers venant d'en face."
    },
    articleRef: "Art. 14"
  },
  {
    id: 164,
    category: 'lights',
    question: {
      rw: "Iyo uhuye n'ikindi kinyabiziga nijoro kikaza kigucaniye amatara maremare (Feux de route) akakuhuma amaso (Éblouissement), ugomba gukora iki?",
      en: "When blinded at night by oncoming headlights on high beam (Éblouissement), what safe action should you take?",
      fr: "En cas d'éblouissement nocturne causé par les feux de route d'un véhicule venant en sens inverse, que devez-vous faire?"
    },
    options: {
      rw: [
        "Kugabanya umuvuduko, kwitegereza umurongo w'umweru w'iburyo ku nkengero y'umuhanda, no gukoresha amatara magufi",
        "Gucana amatara maremare yawe ngo na we umuhume amaso",
        "Gufunga amaso ukikomereza ku muvuduko wari uriho",
        "Gukata ibumoso ngo ugongane na we"
      ],
      en: [
        "Slow down, avert your gaze toward the white fog line on the right shoulder, and keep your low beams on",
        "Retaliate by switching on your high beams to blind the other driver in return",
        "Close your eyes and maintain your previous speed",
        "Swerve left into a head-on crash"
      ],
      fr: [
        "Ralentir, fixer le regard sur le marquage blanc de rive droite de la chaussée et garder les feux de croisement",
        "Allumer ses pleins phares par vengeance pour l'aveugler à son tour",
        "Fermer les yeux et garder la même allure",
        "Donner un coup de volant à gauche pour le percuter"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kureba ku nkengero y'iburyo y'umuhanda bituma utabona urumuri rw'amatara y'undi mu maso, ugakomeza kubona inzira yawe utagize impanuka.",
      en: "Looking down and to the right edge line prevents retina glare while tracking your lane boundary safely.",
      fr: "Porter son regard sur le bord droit de la chaussée permet de conserver le guidage visuel sans être aveuglé."
    },
    articleRef: "Art. 27"
  },
  {
    id: 165,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Intera yo guhagarara' (Distance d'arrêt totale) rigizwe n'iki?",
      en: "What two physical components constitute the total vehicle stopping distance (Distance d'arrêt totale)?",
      fr: "Quels sont les deux éléments qui composent la distance d'arrêt totale d'un véhicule?"
    },
    options: {
      rw: [
        "Intera igenda mu gihe cyo kwitegura (Distance de réaction) hamwe n'Intera igenda mu gihe cya feri (Distance de freinage)",
        "Ubugari bw'amapine gusa",
        "Uburebure bw'ikinyabiziga cyose",
        "Intera yo kuvuza ihoni"
      ],
      en: [
        "Driver Reaction Distance (Distance de réaction) PLUS Mechanical Braking Distance (Distance de freinage)",
        "Tire width dimension only",
        "Vehicle overall bumper length",
        "Horn sounding distance"
      ],
      fr: [
        "La distance parcourue pendant le temps de réaction PLUS la distance de freinage mécanique",
        "La largeur des pneus uniquement",
        "La longueur hors-tout du véhicule",
        "La distance du coup de klaxon"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Intera yo guhagarara = intera ikinyabiziga kigenda umushoferi agitekereza (amasegonda 1) + intera kigenda feri zimaze gufata kugeza gihagaze burundu.",
      en: "Total Stopping Distance = Perception/Reaction Distance (distance covered in ~1 sec) + Braking Distance.",
      fr: "Distance d'arrêt = Distance de réaction (temps de perception) + Distance de freinage mécanique."
    },
    articleRef: "Art. 21"
  },
  {
    id: 166,
    category: 'definitions',
    question: {
      rw: "Igihe cyo kwitegura (Temps de réaction) cy'umushoferi usanzwe uri maso udatekereje ibindi kingana n'iki?",
      en: "What is the average reaction time (Temps de réaction) for an alert, unimpaired adult driver?",
      fr: "Quel est le temps de réaction moyen d'un conducteur attentif en bonne condition physique?"
    },
    options: {
      rw: ["Isogonda rimwe (1 seconde)", "Amasegonda 10 (10 secondes)", "Iminota 2 (2 minutes)", "Amasegonda 30 (30 secondes)"],
      en: ["Approximately 1 second (1 seconde)", "10 seconds", "2 minutes", "30 seconds"],
      fr: ["Environ 1 seconde", "10 secondes", "2 minutes", "30 secondes"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umushoferi uri maso afata igihe kigera ku isogonda rimwe hagati y'igihe abonye akaga n'igihe akandagiye kuri feri.",
      en: "Under normal conditions, human perception and physical brake application takes approximately 1 second.",
      fr: "Le temps de réaction physiologique moyen entre la détection d'un obstacle et l'action sur le frein est de 1 seconde."
    },
    articleRef: "Art. 21"
  },
  {
    id: 167,
    category: 'definitions',
    question: {
      rw: "Iyo umushoferi ananiwe (Fatigue) cyangwa yanyoye inzoga n'imiti isinziriza, igihe cye cyo kwitegura (Temps de réaction) kigenda gite?",
      en: "When a driver is fatigued, sleepy, or under the influence of alcohol/medication, what happens to their reaction time?",
      fr: "Sous l'effet de la fatigue, de l'alcool ou de médicaments sédatifs, comment évolue le temps de réaction du conducteur?"
    },
    options: {
      rw: [
        "Igihe cyo kwitegura kiriyongera cyane (kikarenga amasegonda 2 cyangwa 3), bikongera ibyago by'impanuka",
        "Igihe cyo kwitegura kiragabanuka kikarangira",
        "Ntacyo bihindura ku mikorere ye",
        "Bimwongerera ubushobozi bwo gutwara neza kurushaho"
      ],
      en: [
        "Reaction time increases significantly (to 2 or 3 seconds or more), drastically increasing collision risk",
        "Reaction time drops to zero instantly",
        "Has no effect on driving performance",
        "Improves driving capability and reflexes"
      ],
      fr: [
        "Le temps de réaction augmente considérablement (dépassant 2 à 3 secondes), démultipliant le risque d'accident",
        "Le temps de réaction diminue à zéro",
        "N'a aucun impact",
        "Améliore les réflexes et la conduite"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umunaniro n'inzoga bituma ubwonko butinda gufata icyemezo, bityo imodoka ikagenda intera ndende mbere y'uko ifatwa na feri.",
      en: "Fatigue and impairment delay mental processing, lengthening reaction distance and resulting in severe crashes.",
      fr: "L'alcool et la fatigue ralentissent l'influx nerveux, allongeant dangereusement la distance parcourue avant freinage."
    },
    articleRef: "Art. 21"
  },
  {
    id: 168,
    category: 'penalties',
    question: {
      rw: "Kugendera ku muvuduko urenze uwemewe n'amategeko mu mujyi (Excess of speed / Excès de vitesse) bihanishwa iki?",
      en: "Speeding in excess of the legal municipal limit (Excès de vitesse) in Rwanda results in what penalty?",
      fr: "Le dépassement de la vitesse autorisée en ville (Excès de vitesse) est sanctionné de quelle manière au Rwanda?"
    },
    options: {
      rw: [
        "Amande y'amafaranga y'u Rwanda acibwa hakoreshejwe camera za polisi (Speed cameras / Radars) cyangwa abapolisi",
        "Guhabwa imodoka nshya yihuta kurushaho",
        "Gusonerwa imisoro",
        "Kwakirwa mu bihembo by'intwari"
      ],
      en: [
        "Automated traffic speed camera (Radar) fines and administrative violation penalties",
        "Awarded a new faster sports car",
        "Tax exemption certificate",
        "National hero driving award"
      ],
      fr: [
        "Amendes forfaitaires automatisées par radars automatiques et sanctions administratives de police",
        "Attribution d'une voiture de sport plus rapide",
        "Exonération fiscale",
        "Trophée de conduite héroïque"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mu Rwanda camera z'umutekano (speed cameras) zifata imodoka zirengeje umuvuduko zikazicira amande ako kanya.",
      en: "Automated speed enforcement cameras across Rwanda detect speeding violations and issue statutory monetary fines directly.",
      fr: "Les radars fixes et mobiles sanctionnent immédiatement les infractions d'excès de vitesse par des amendes légales."
    },
    articleRef: "Art. 84"
  },
  {
    id: 169,
    category: 'definitions',
    question: {
      rw: "Iyo umunyamaguru afite inkoni y'umweru (Canne blanche), biba bisobanura iki ku mushoferi?",
      en: "When a pedestrian carrying a white cane (Canne blanche) is crossing the road, what does it signify to drivers?",
      fr: "Lorsqu'un piéton tenant une canne blanche traverse la chaussée, que cela signale-t-il aux conducteurs?"
    },
    options: {
      rw: [
        "Ni umuntu utabona (Ubumuga bwo kutabona / Non-voyant); abashoferi bose bagomba guhagarara burundu bakamuha inzira",
        "Ni umusaza ukunda gukina",
        "Ni umupolisikazi uri mu kazi",
        "Ni umukinnyi wa siporo y'inkoni"
      ],
      en: [
        "The pedestrian is visually impaired / blind (Non-voyant); all drivers must come to a complete stop and yield",
        "An elderly person playing games",
        "An undercover police officer",
        "A hockey sports player"
      ],
      fr: [
        "Le piéton est malvoyant ou non-voyant : tous les conducteurs ont l'obligation stricte de s'arrêter pour le laisser traverser",
        "Un vieillard en train de jouer",
        "Un policier en civil",
        "Un joueur de hockey"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Inkoni y'umweru iranga abantu bafite ubumuga bwo kutabona; amategeko ategeka abashoferi bose kubaha inzira aho baba banyura hose.",
      en: "A white cane identifies blind or visually impaired pedestrians; drivers must yield absolute right-of-way unconditionally.",
      fr: "La canne blanche signale une cécité; la priorité aux piétons non-voyants est absolue en tout lieu."
    },
    articleRef: "Art. 38"
  },
  {
    id: 170,
    category: 'definitions',
    question: {
      rw: "Amagambo 'Kunyura mu kidiba cy'amazi ku muvuduko mwinshi bigatuma amapine adakora ku butaka' (Hydroplaning / Aquaplaning) bisobanura iki?",
      en: "What dangerous physical phenomenon occurs when tires ride on a sheet of water losing all road contact (Aquaplaning)?",
      fr: "Quel phénomène dangereux se produit lorsque les pneus flottent sur un film d'eau sans toucher le bitume (Aquaplanage)?"
    },
    options: {
      rw: [
        "Ikinyabiziga kigatakariza ubushobozi bwo kuyoborwa na vola no gufata feri kubera amazi ari munsi y'amapine (Aquaplaning)",
        "Imodoka ikarushaho kugenda neza",
        "Amapine agakomera cyane",
        "Imodoka ikoga nk'ubwato nta kibazo"
      ],
      en: [
        "Vehicle loses all steering control and braking grip due to a layer of water separating tires from pavement (Aquaplaning)",
        "Vehicle accelerates smoothly without resistance",
        "Tires become indestructible",
        "Vehicle transforms into an amphibious boat safely"
      ],
      fr: [
        "Perte totale de contrôle directionnel et d'adhérence de freinage causée par une pellicule d'eau sous les pneus (Aquaplanage)",
        "Le véhicule roule plus vite sans frottement",
        "Les pneus se renforcent",
        "La voiture navigue comme un bateau"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Muri aquaplaning, amapine ntiyirukana amazi neza bityo imodoka ikanyerera hejuru y'amazi; umushoferi agomba kurekera aho gukandagira lisansi no kwirinda gukata vola cyane.",
      en: "Aquaplaning occurs when water builds up faster than tire treads can evacuate it, causing total loss of traction.",
      fr: "L'aquaplanage soulève les pneus sur une nappe d'eau, anéantissant l'adhérence et le pouvoir directionnel."
    },
    articleRef: "Art. 21"
  },
  {
    id: 171,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura kirimo ibimenyetso by'imodoka ebyiri zegeranye (iy'umutuku n'iy'umukara) gisobanura iki ku binyabiziga bikoresha moteri?",
      en: "What does a circular sign with a red border showing a red car alongside a black car indicate?",
      fr: "Que signifie un panneau rond à bord rouge montrant une voiture rouge à côté d'une voiture noire?"
    },
    options: {
      rw: [
        "Birabujijwe ku binyabiziga byose bikoresha moteri kunyurana ku bindi binyabiziga bifite ibiziga birenze bibiri (Interdiction de dépasser)",
        "Amasangano y'imodoka z'amabara atandukanye",
        "Aho kugurishiriza imodoka z'umutuku",
        "Isiganwa ry'imodoka ebyiri"
      ],
      en: [
        "Overtaking prohibited for all motor vehicles (except passing two-wheeled single-track cycles/motorcycles)",
        "Junction for different colored cars",
        "Red car showroom nearby",
        "Two-car drag race zone"
      ],
      fr: [
        "Interdiction à tous les véhicules à moteur de dépasser les véhicules à plus de deux roues",
        "Carrefour pour voitures de couleurs",
        "Vente de voitures rouges",
        "Course à deux voitures"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza ibinyabiziga bikoresha moteri kunyura ku bindi binyabiziga uretse amagare cyangwa amapikipiki adafite intebe y'uruhande.",
      en: "This no-overtaking sign prohibits motorized vehicles from passing four-wheeled motor traffic.",
      fr: "Ce panneau interdit le dépassement de tous les véhicules à moteur autres que les deux-roues sans side-car."
    },
    articleRef: "Art. 69"
  },
  {
    id: 172,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura kirimo ikamyo y'umutuku n'imodoka y'umukara bisobanura iki?",
      en: "What does a circular sign with a red border depicting a red truck next to a black car mean?",
      fr: "Que signifie un panneau rond à bord rouge illustrant un camion rouge à côté d'une voiture noire?"
    },
    options: {
      rw: [
        "Birabujijwe ku binyabiziga bitwara imizigo bifite PTAC irenze toni 3.5 kunyurana ku bindi binyabiziga (Interdiction aux poids lourds de dépasser)",
        "Amakamyo yemerewe kunyura ku modoka zose",
        "Imodoka nini zitegetswe kwihuta",
        "Amasangano y'amakamyo n'imodoka ntoya"
      ],
      en: [
        "Prohibits heavy goods vehicles over 3.5 tonnes from overtaking any motor vehicles",
        "Trucks are encouraged to overtake all cars",
        "Heavy trucks must accelerate",
        "Intersection for trucks and compact cars"
      ],
      fr: [
        "Interdiction aux véhicules de transport de marchandises de plus de 3,5 t de dépasser tout véhicule à moteur",
        "Camions autorisés à doubler",
        "Poids lourds prioritaires",
        "Croisement camions et voitures"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza amakamyo manini (arengeje Toni 3.5) gukora maneuver yo kunyuranaho mu muhanda.",
      en: "Trucks and heavy cargo haulers exceeding 3.5t gross weight are banned from executing overtaking maneuvers.",
      fr: "Ce panneau interdit spécifiquement aux poids lourds le dépassement des autres usagers à moteur."
    },
    articleRef: "Art. 69"
  },
  {
    id: 173,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende rw'ubururu kirimo ikimenyetso cy'umuhanda ucagaguyemo ibice byinshi n'umwambi wiyongeraho gisobanura iki?",
      en: "What does an informational lane management sign showing an additional lane emerging indicate?",
      fr: "Que signale un panneau rectangulaire bleu indiquant l'apparition d'une voie supplémentaire?"
    },
    options: {
      rw: [
        "Iyiyongera ry'igisate cy'umuhanda cyo kwihutiramo cyangwa kuzamukiramo ku binyabiziga bigenda buhoro (Création d'une voie de circulation)",
        "Umuhanda urafunze",
        "Aho guparika byihuse",
        "Umuvuduko muke"
      ],
      en: [
        "Creation/opening of an additional traffic lane for climbing slow vehicles or overtaking (Création d'une voie)",
        "Road closed ahead",
        "Express parking spaces",
        "Low speed zone"
      ],
      fr: [
        "Création d'une nouvelle voie de circulation (voie pour véhicules lents en montée ou voie de dépassement)",
        "Route fermée",
        "Parking express",
        "Zone à vitesse réduite"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kigaragaza ko umuhanda wagutse ukunguka ikindi gisate kigenewe ibinyabiziga byihuta cyangwa ibizamuka buhoro.",
      en: "This lane allocation sign informs motorists of the start of an auxiliary passing or crawler lane.",
      fr: "Ce panneau indique l'élargissement de la chaussée par l'ajout d'une nouvelle voie de circulation."
    },
    articleRef: "Art. 71"
  },
  {
    id: 174,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende rw'ubururu kirimo inyuguti ya 'P' yonyine gisobanura iki?",
      en: "What does a blue square or rectangular sign containing the white letter 'P' indicate?",
      fr: "Que signifie un panneau rectangulaire bleu affichant la lettre blanche 'P'?"
    },
    options: {
      rw: [
        "Ahantu hagenewe guhagararamo akanya karekire / Guparika byemewe (Emplacement de stationnement autorisé / Parking)",
        "Ibiro bya Polisi y'igihugu",
        "Aho kunywera ifanta",
        "Umuhanda w'amapikipiki gusa"
      ],
      en: [
        "Designated authorized parking zone / Public parking area (Parking autorisé)",
        "National Police headquarters",
        "Soda beverage shop",
        "Motorcycle-only route"
      ],
      fr: [
        "Emplacement de stationnement autorisé et aménagé / Parking public",
        "Commissariat de Police",
        "Débit de boissons",
        "Voie réservée aux motos"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Inyuguti 'P' y'umweru ku buso bw'ubururu iranga ahantu hagenewe guparika ibinyabiziga mu buryo bwemewe.",
      en: "The standard white 'P' on blue indicates legal public parking facilities and designated parking bays.",
      fr: "Le panneau 'P' matérialise un lieu où le stationnement des véhicules est expressément autorisé."
    },
    articleRef: "Art. 71"
  },
  {
    id: 175,
    category: 'parking',
    question: {
      rw: "Birabujijwe guhagarara akanya karekire (Guparika) ahantu hose:",
      en: "Parking a vehicle (Stationnement) is strictly prohibited in all the following locations except:",
      fr: "Le stationnement d'un véhicule est strictement interdit dans tous les lieux suivants sauf:"
    },
    options: {
      rw: [
        "Muri parikingi yabugenewe yashyizweho ibyapa bya 'P'",
        "Ku nzira y'abanyamaguru (Trottoir / Sidewalk)",
        "Ku ikiraro (Pont) no mu muyoboro wo munsi y'ubutaka (Tunnel)",
        "Imbere y'irembo ry'urugo rw'umuntu ribangamira imodoka ze kwinjira cyangwa gusohoka"
      ],
      en: [
        "Inside an officially designated and signposted parking lot marked with 'P' (Parking is allowed here)",
        "On public pedestrian sidewalks / footways",
        "On road bridges and inside tunnels",
        "Directly in front of private driveway gates blocking ingress/egress"
      ],
      fr: [
        "Sur un emplacement de parking officiel signalé par le panneau 'P' (stationnement autorisé)",
        "Sur les trottoirs réservés aux piétons",
        "Sur les ponts et sous les tunnels",
        "Devant les entrées charretières d'immeubles et portails privés"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guparika byemewe gusa ahagenewe guparika; birabujijwe kuri trottoir, ku biraro, mu miyoboro n'imbere y'amarembo y'abandi.",
      en: "Parking is legally permitted in designated bays, but strictly forbidden on sidewalks, bridges, tunnels, and driveways.",
      fr: "Le stationnement n'est licite que sur les emplacements prévus à cet effet et interdit sur les ponts, tunnels et trottoirs."
    },
    articleRef: "Art. 24"
  },
  {
    id: 176,
    category: 'priority',
    question: {
      rw: "Iyo imodoka itwaye umurambo (Corbillard / Convoi funèbre) igenda mu nzira nyabagendwa, abandi bayobozi basabwa iki?",
      en: "When a hearse or organized funeral procession travels on a public highway, other motorists are required to:",
      fr: "Lorsqu'un corbillard ou convoi funèbre circule en cortège sur la voie publique, les autres conducteurs doivent:"
    },
    options: {
      rw: [
        "Kubahiriza uwo muhango, kutinjira hagati muri iyo mirongo no kutawubangamira",
        "Kuvuza amahoni no guca mu modoka z'abashyinguye",
        "Kwiruka ngo batange imva",
        "Gufunga umuhanda wose ngo badatambuka"
      ],
      en: [
        "Show respect, refrain from cutting into or interrupting the cortege, and facilitate its continuous movement",
        "Honk loudly and weave aggressively through the mourning cars",
        "Race to reach the cemetery first",
        "Block the roadway completely"
      ],
      fr: [
        "Respecter le cortège, s'abstenir de couper les files et faciliter son passage avec déférence",
        "Klaxonner et zigzaguer au milieu du deuil",
        "Faire la course avec le corbillard",
        "Barricader la chaussée"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko y'u Rwanda ateganya ko ibirori by'amashyingura n'amakoni y'abantu bateguwe neza bitagomba gucibwamo cyangwa kubangamirwa.",
      en: "Disrupting or cutting through funeral corteges is strictly prohibited by Rwandan traffic regulations.",
      fr: "La loi interdit expressément de couper ou perturber la marche d'un convoi funèbre."
    },
    articleRef: "Art. 36"
  },
  {
    id: 177,
    category: 'technical',
    question: {
      rw: "Amapine y'ikinyabiziga (Pneus) agomba kugira ubujyakuzimu bw'inzira z'amazi (Profondeur des rainures / Tread depth) bungana iki byibura mu mategeko?",
      en: "What is the minimum statutory tread groove depth (Profondeur des rainures) required for passenger car tires?",
      fr: "Quelle est la profondeur minimale légale des sculptures/rainures principales d'un pneu de voiture?"
    },
    options: {
      rw: ["Milimetero 1 n'ibice 6 (1.6 mm)", "Milimetero 10 (10 mm)", "Milimetero 0 (Amapine asennye neza)", "Santimetero 5 (5 cm)"],
      en: ["1.6 millimeters (1.6 mm)", "10 millimeters", "0 millimeters (Bald slick tires)", "5 centimeters"],
      fr: ["1,6 millimètre (1,6 mm)", "10 millimètres", "0 millimètre (pneu lisse)", "5 centimètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amapine agomba kugira ubujyakuzimu bwa milimetero 1.6 byibura kugira ngo abashe gusohora amazi mu mvura no gufata ku butaka.",
      en: "Tire tread depth must be at least 1.6 mm across the central three-quarters of the tread width to prevent skidding.",
      fr: "La profondeur des rainures d'un pneu ne doit pas être inférieure à 1,6 mm sous peine de contravention et risque de dérapage."
    },
    articleRef: "Art. 44"
  },
  {
    id: 178,
    category: 'technical',
    question: {
      rw: "Iyo ipine ry'ikinyabiziga ryasize cyane rikaba umuserereki (Pneu lisse), biba biteje ibihe byago?",
      en: "What severe safety dangers arise from driving on bald, worn-out smooth tires (Pneus lisses)?",
      fr: "Quels dangers majeurs présente la conduite avec des pneus excessivement usés et lisses (Pneus lisses)?"
    },
    options: {
      rw: [
        "Guterwa impanuka kubera kunyerera byoroshye mu mvura (Aquaplaning), guturika kw'ipine, no kongera cyane intera ya feri",
        "Kugabanya amavuta ya moteri",
        "Gutuma umuziki uvuga neza kurushaho",
        "Kongera ubushobozi bwa batiri"
      ],
      en: [
        "High risk of violent skidding/aquaplaning on wet roads, sudden tire blowouts, and substantially increased braking distance",
        "Reduces engine oil consumption",
        "Improves radio speaker sound quality",
        "Boosts battery charging capacity"
      ],
      fr: [
        "Risque aigu d'aquaplanage sous la pluie, éclatement inopiné et allongement dramatique des distances de freinage",
        "Réduction d'huile moteur",
        "Amélioration du son de l'autoradio",
        "Recharge accrue de la batterie"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amapine yashize ntiyirukana amazi kandi ntiyafata ku muhanda, bityo agashobora guturika cyangwa gutera impanuka zikomeye mu mvura.",
      en: "Bald tires cannot disperse water and have lost structural casing strength, creating imminent disaster on wet or hot roads.",
      fr: "Des pneus lisses ne peuvent plus évacuer l'eau, entraînant un risque maximal de dérapage incontrôlable et d'explosion."
    },
    articleRef: "Art. 44"
  },
  {
    id: 179,
    category: 'technical',
    question: {
      rw: "Umuvuduko w'umuyaga mu mapine (Pression des pneus) ugomba gupimwa ryari kugira ngo utange ibipimo nyabyo?",
      en: "When should tire inflation pressure (Pression des pneus) be measured to obtain accurate cold readings?",
      fr: "Quand la pression de gonflage des pneumatiques doit-elle être contrôlée pour être exacte?"
    },
    options: {
      rw: [
        "Iyo amapine akonje (Pneus froids), mbere yo gukora urugendo rurerure cyangwa nyuma yo guhagarara nibura amasaha abiri",
        "Nyuma yo kwiruka ku muvuduko wa 120 km/h ku zuba ryinshi",
        "Mugihe ipine rimaze gutoboka gusa",
        "Nijoro mu mwijima utareba"
      ],
      en: [
        "When tires are cold (Pneus froids), before embarking on long trips or after resting parked for at least 2 hours",
        "Immediately after driving at 120 km/h under blazing hot sun",
        "Only after a tire has suffered a complete puncture",
        "Only in pitch-black midnight"
      ],
      fr: [
        "À froid (pneus froids), avant d'entreprendre un long trajet ou après au moins deux heures d'arrêt",
        "Immédiatement après avoir roulé à 120 km/h sous une chaleur torride",
        "Uniquement après une crevaison",
        "Dans l'obscurité totale"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umuvuduko w'amapine upimwa igihe amapine akonje kuko iyo amaze kugenda arashyuha umwuka ukiyongera bikaba byatanga ibipimo bitari byo.",
      en: "Tire friction warms compressed air and elevates pressure readings artificially; always measure cold tire pressure for accuracy.",
      fr: "La pression se vérifie à froid car l'échauffement en roulant augmente artificiellement la pression interne."
    },
    articleRef: "Art. 44"
  },
  {
    id: 180,
    category: 'definitions',
    question: {
      rw: "Akanyabiziga k'ibiziga bibiri gifite moteri idarengeje santimetero kibe 50 (50 cc) cyitwa iki mu mategeko y'u Rwanda?",
      en: "A two-wheeled vehicle equipped with an internal combustion engine not exceeding 50 cc displacement is classified as what?",
      fr: "Un véhicule à deux roues muni d'un moteur ne dépassant pas 50 cm³ de cylindrée est classé comme:"
    },
    options: {
      rw: [
        "Velomoteri (Vélomoteur / Moped)",
        "Ipikipiki iremereye (Grosse moto)",
        "Imodoka y'urugendo",
        "Tarakiteri"
      ],
      en: [
        "Moped / Light motorized cycle (Velomoteri / Vélomoteur)",
        "Heavy motorcycle",
        "Passenger motorcar",
        "Tractor"
      ],
      fr: [
        "Un vélomoteur / cyclomoteur",
        "Une motocyclette lourde",
        "Une voiture de tourisme",
        "Un tracteur"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Velomoteri ni ikinyabiziga cy'ibiziga bibiri gifite moteri ifite ingufu zidashobora kurenza santimetero kibe 50 (50 cc).",
      en: "Vélomoteur (moped) is defined as a light two-wheeled motor vehicle with an engine displacement up to 50 cubic centimeters.",
      fr: "Le vélomoteur est un deux-roues motorisé d'une cylindrée maximale de 50 cm³."
    },
    articleRef: "Art. 2"
  },
  {
    id: 181,
    category: 'definitions',
    question: {
      rw: "Ikinyabiziga cy'ibiziga bibiri gifite moteri irengeje santimetero kibe 50 (50 cc) cyitwa iki?",
      en: "A two-wheeled motor vehicle with an engine capacity exceeding 50 cc is classified as what?",
      fr: "Un véhicule à deux roues à moteur dont la cylindrée excède 50 cm³ est désigné sous le nom de:"
    },
    options: {
      rw: [
        "Ipikipiki (Motocyclette / Motorcycle)",
        "Igare risanzwe (Bicyclette)",
        "Velomoteri yoroheje",
        "Ikamyo y'ibiziga bibiri"
      ],
      en: [
        "Motorcycle (Ipikipiki / Motocyclette)",
        "Standard bicycle",
        "Light moped",
        "Two-wheeled freight truck"
      ],
      fr: [
        "Une motocyclette (moto)",
        "Une bicyclette ordinaire",
        "Un cyclomoteur léger",
        "Un camion à deux roues"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ipikipiki (motocyclette) ni ikinyabiziga cyose cy'ibiziga bibiri gifite moteri irengeje santimetero kibe 50.",
      en: "Any two-wheeled motor vehicle with engine displacement exceeding 50 cc falls into the motorcycle category requiring Category A license.",
      fr: "Tout véhicule à deux roues dont la cylindrée dépasse 50 cm³ est légalement une motocyclette."
    },
    articleRef: "Art. 2"
  },
  {
    id: 182,
    category: 'definitions',
    question: {
      rw: "Ikinyabiziga kigizwe n'imodoka ikurura ifatanye mu buryo budatana na romoruki (Véhicule articulé / Semi-remorque) cyitwa iki?",
      en: "A coupled combination consisting of a tractor unit permanently linked to a semi-trailer is termed what?",
      fr: "Un ensemble composé d'un véhicule tracteur accouplé à une semi-remorque est appelé comment?"
    },
    options: {
      rw: [
        "Ikinyabiziga kigizwe n'ibice bifatanye (Véhicule articulé / Semi-trailer truck)",
        "Ipikipiki nini",
        "Tagisi y'abagenzi",
        "Akanyabiziga k'abana"
      ],
      en: [
        "Articulated vehicle combination / Semi-trailer tractor unit (Véhicule articulé)",
        "Mega motorcycle",
        "Passenger shared taxi",
        "Children's toy wagon"
      ],
      fr: [
        "Un véhicule articulé (ensemble semi-remorque et tracteur routier)",
        "Une méga moto",
        "Un taxi passagers",
        "Une poussette d'enfant"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ikinyabiziga gifatanye (véhicule articulé) kigizwe n'ikurura n'ikururwa biteranyijwe mu buryo bw'umutambiko ushobora kuzunguruka.",
      en: "An articulated vehicle consists of a prime mover tractor combined with a semi-trailer pivoting on a fifth-wheel coupling.",
      fr: "Le véhicule articulé est l'ensemble constitué par un tracteur et une semi-remorque prenant appui sur lui."
    },
    articleRef: "Art. 2"
  },
  {
    id: 183,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende rw'icyatsi kibisi cyangwa ubururu kiranga 'Umuhanda wihuta / Icyerekezo cy'Umuhanda w'Ibisate Byinshi' (Autoroute / Expressway) kimenyesha iki?",
      en: "What does an expressway/motorway status sign (Autoroute / Expressway) signify to road users?",
      fr: "Que signale le panneau d'entrée d'autoroute ou de voie express aux usagers?"
    },
    options: {
      rw: [
        "Umuhanda w'umuvuduko wagenewe ibinyabiziga byihuta gusa; abanyamaguru, amagare n'inyamaswa birabujijwe rwose",
        "Inzira y'abanyamaguru bose",
        "Aho gutemberera n'amatungo",
        "Aho guhinga imyaka"
      ],
      en: [
        "High-speed grade-separated expressway reserved strictly for fast motor traffic; pedestrians, cycles, and animals strictly banned",
        "Public walking promenade",
        "Livestock grazing track",
        "Agricultural crop zone"
      ],
      fr: [
        "Voie rapide réservée exclusivement aux véhicules à moteur rapides; accès interdit aux piétons, cycles et animaux",
        "Promenade piétonne publique",
        "Piste de pâturage",
        "Zone agricole"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ku muhanda w'umuvuduko wihariye (autoroute), birabujijwe ku banyamaguru, amagare, amapikipiki mato cyangwa amatungo kwinjiramo.",
      en: "Expressways are restricted-access highways prohibited to slow non-motorized road users for high-speed safety.",
      fr: "Les autoroutes sont interdites aux usagers lents, piétons et animaux pour des impératifs stricts de sécurité à haute vitesse."
    },
    articleRef: "Art. 37"
  },
  {
    id: 184,
    category: 'signs',
    question: {
      rw: "Icyapa kiranga iherezo ry'umuhanda wihuta (Fin d'autoroute) gisobanura iki?",
      en: "What does an 'End of Motorway/Expressway' (Fin d'autoroute) sign indicate?",
      fr: "Que signifie le panneau marquant la fin d'une autoroute (Fin d'autoroute)?"
    },
    options: {
      rw: [
        "Iherezo ry'amategeko yihariye y'umuhanda wihuta; umushoferi asubiye mu mategeko asanzwe yo mu muhanda",
        "Umuhanda uracitse burundu",
        "Imodoka zose zigomba guhagarara zikavamo",
        "Gukomeza ku muvuduko urenze 200 km/h"
      ],
      en: [
        "Termination of expressway special regulations; drivers return to standard general highway driving and speed rules",
        "The asphalt roadway has completely collapsed",
        "All cars must stop and drivers evacuate",
        "Accelerate beyond 200 km/h"
      ],
      fr: [
        "Fin du régime particulier de l'autoroute et retour aux règles générales de circulation et limitations ordinaires",
        "La route s'effondre",
        "Arrêt obligatoire et évacuation",
        "Accélérer à plus de 200 km/h"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iherezo ry'umuhanda wihuta risaba umushoferi kugabanya umuvuduko we kuko yinjiye mu muhanda usanzwe ushobora gusangwamo abanyamaguru n'amasangano.",
      en: "The end of motorway sign prompts drivers to reduce speed to adjust to two-way traffic, intersections, and pedestrians.",
      fr: "Ce panneau signale la fin de la voie rapide et le retour aux croisements à niveau et présences de piétons."
    },
    articleRef: "Art. 37"
  },
  {
    id: 185,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende rw'ubururu kirimo ikimenyetso cy'umuhanda urangira ufite igipande gitukura hejuru (Impasse / Cul-de-sac / No through road) gisobanura iki?",
      en: "What does an informational sign depicting a road terminating in a solid red T-bar (Impasse / Dead end) mean?",
      fr: "Que signifie le panneau carré bleu comportant une voie débouchant sur une barre transversale rouge (Impasse)?"
    },
    options: {
      rw: [
        "Inzira idakomeza / Umuhanda ufunze imbere nta kundi wasohoka (Voie sans issue / Dead end road)",
        "Umuhanda ujya mu yindi mijyi yose",
        "Inzira y'umuvuduko udasanzwe",
        "Ikiraro kirekire cyane"
      ],
      en: [
        "No-through road / Dead end with no exit at the far end (Voie sans issue / Cul-de-sac)",
        "Highway connecting to all major cities",
        "Unrestricted high speed circuit",
        "Very long suspension bridge"
      ],
      fr: [
        "Voie sans issue : la route se termine en impasse sans possibilité de sortie vers l'avant",
        "Autoroute vers toutes les villes",
        "Piste de vitesse sans limite",
        "Long pont suspendu"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kimenyesha ko uwo muhanda ugarukira aho nta kundi wasohoka imbere, bityo uwinjiyemo azagarukira mu nzira imwe.",
      en: "This sign indicates a dead-end street with no outlet; vehicles entering will have to turn around to exit.",
      fr: "Ce panneau informe que la voie empruntée se termine sans débouché pour la circulation de transit."
    },
    articleRef: "Art. 71"
  },
  {
    id: 186,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ikimenyetso cya gari ya moshi y'amashanyarazi / Tramway (Traversée de voies de tramway) kimenyesha iki?",
      en: "What does a warning sign indicating a tramway crossing (Traversée de voies de tramway) command?",
      fr: "Que signale un panneau triangulaire de danger illustrant une rame de tramway?"
    },
    options: {
      rw: [
        "Amasangano y'inzira ya Tramway aho amamashini y'amashanyarazi afite uburenganzira bwo gutambuka mbere",
        "Aho gucururiza amatike ya tramway",
        "Inzira y'abanyamaguru b'amashanyarazi",
        "Uruganda rw'amashanyarazi"
      ],
      en: [
        "Tramway rails intersection where electric trams have absolute right of way",
        "Tram ticket counter",
        "Electric pedestrian track",
        "Power generation plant"
      ],
      fr: [
        "Croisement avec des voies de tramway où les rames de tramway bénéficient d'une priorité absolue",
        "Vente de tickets de tram",
        "Piste piétonne électrique",
        "Centrale électrique"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga bigendera ku mirongo y'ibyuma (nk'inzira za tramway na gari ya moshi) bifite uburenganzira bwo gutambuka mbere y'ibindi binyabiziga byose.",
      en: "Rail vehicles and trams have unconditional right-of-way over motor road traffic at all street level crossings.",
      fr: "Les véhicules circulant sur rails ont une priorité constante sur les autres véhicules de la chaussée."
    },
    articleRef: "Art. 36"
  },
  {
    id: 187,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ikimenyetso cy'uruziga rw'ubururu kirimo umwambi urombeje werekeza hasi iburyo (Contournement obligatoire par la droite) kigutegeka iki?",
      en: "What does a circular blue sign with a diagonal arrow pointing downward to the right require?",
      fr: "Que prescrit un panneau rond bleu avec une flèche inclinée pointant vers le bas à droite?"
    },
    options: {
      rw: [
        "Guca / kuzenguruka ku ruhande rw'iburyo bw'inzitizi cyangwa umukingo (Contournement obligatoire par la droite)",
        "Gukata ibumoso vuba na vuba",
        "Guhagarara aho uri",
        "Gusubira inyuma"
      ],
      en: [
        "Pass the traffic island, bollard, or road obstruction strictly on the right-hand side",
        "Make an immediate hard left turn",
        "Come to an emergency halt",
        "Reverse vehicle backwards"
      ],
      fr: [
        "Obligation de contourner l'obstacle ou l'îlot par le côté droit",
        "Tourner immédiatement à gauche",
        "Arrêt d'urgence sur place",
        "Reculer en marche arrière"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa gitegeka umushoferi kunyura iburyo bw'inzitizi, umukingo cyangwa ikirwa cyo mu muhanda.",
      en: "This mandatory sign directs traffic to pass to the right of a roadway divider, bollard, or physical obstacle.",
      fr: "Ce signal de prescription impose de passer obligatoirement à droite de l'îlot directionnel."
    },
    articleRef: "Art. 70"
  },
  {
    id: 188,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rw'ubururu kirimo umwambi werekeza hasi ibumoso n'undi werekeza hasi iburyo (Passage obligatoire de chaque côté) gisobanura iki?",
      en: "What does a circular blue sign with two diagonal downward arrows pointing to both left and right mean?",
      fr: "Que signifie un panneau rond bleu comportant deux flèches inclinées vers la gauche et vers la droite?"
    },
    options: {
      rw: [
        "Umushoferi yemerewe kunyura ku ruhande rw'iburyo cyangwa ku ruhande rw'ibumoso bw'inzitizi (Contournement possible des deux côtés)",
        "Birabujijwe gutambuka ku mpande zombi",
        "Umuhanda uragabanyijemo kabiri nta nzira",
        "Amasangano y'indege n'imodoka"
      ],
      en: [
        "Traffic is permitted to pass on either the left or right side of the traffic splitter/island",
        "Passing is forbidden on both sides",
        "Roadway split with no passable path",
        "Plane and car intersection"
      ],
      fr: [
        "Possibilité et autorisation de contourner l'obstacle indifféremment par la droite ou par la gauche",
        "Passage interdit des deux côtés",
        "Voie scindée impraticable",
        "Intersection avions et voitures"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa cyemerera umushoferi guhitamo guca iburyo cyangwa ibumoso bw'inzitizi bitewe n'aho agana.",
      en: "This sign permits passing around a roadway median or divider on either the left or right side.",
      fr: "Ce panneau de prescription autorise le franchissement de l'obstacle par l'un ou l'autre côté."
    },
    articleRef: "Art. 70"
  },
  {
    id: 189,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ikimenyetso cy'uruziga rutukura rurimo ibice bibiri by'umukara n'umutuku bitanganya intera bisobanura iki ku cyambu cyangwa gasutamo (Douane / Customs)?",
      en: "What does a circular red border sign with a horizontal black bar and the word 'DOUANE' / 'CUSTOMS' command?",
      fr: "Que prescrit le panneau rond à bord rouge comportant une barre horizontale noire et le mot 'DOUANE'?"
    },
    options: {
      rw: [
        "Guhagarara byanze bikunze ku kigo cya gasutamo / ku mupaka (Arrêt obligatoire au poste de douane)",
        "Gukomeza ku muvuduko mwinshi ngo urenge umupaka",
        "Aho kugurisha ibicuruzwa nta musoro",
        "Inzira y'abanyamaguru ba gasutamo"
      ],
      en: [
        "Mandatory complete stop at the customs checkpoint / border station (Arrêt obligatoire - Douane)",
        "Speed up through the border barrier",
        "Duty-free shopping center",
        "Customs officers walking trail"
      ],
      fr: [
        "Arrêt obligatoire au poste de douane / contrôle frontalier",
        "Accélérer pour franchir la frontière",
        "Magasin hors taxes",
        "Piste pour douaniers"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa gitegeka buri kinyabiziga guhagarara ku biro bya gasutamo no gutegereza uruhushya rw'abakozi ba gasutamo.",
      en: "Every driver must bring their vehicle to a complete standstill at the customs post until cleared by border officials.",
      fr: "Ce panneau d'interdiction/obligation impose l'arrêt absolu des véhicules pour contrôle douanier."
    },
    articleRef: "Art. 69"
  },
  {
    id: 190,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura kirimo inyuguti 'PÉAGE' / 'TOLL' gisobanura iki?",
      en: "What does a circular red border sign with the word 'PÉAGE' / 'TOLL' mandate?",
      fr: "Que prescrit le panneau rond à bord rouge avec la mention 'PÉAGE'?"
    },
    options: {
      rw: [
        "Guhagarara byanze bikunze ku kigo cyo kwishyuriraho umusanzu w'umuhanda (Arrêt obligatoire au poste de péage)",
        "Kwishyura amafaranga ku banyamaguru",
        "Aho gupimira uburemere gusa",
        "Umuhanda w'ubuntu ku modoka zose"
      ],
      en: [
        "Mandatory complete stop at the road toll collection plaza / Toll booth station (Arrêt obligatoire - Péage)",
        "Pay pedestrian crossing fees",
        "Weight inspection bridge only",
        "Free expressway for all cars"
      ],
      fr: [
        "Arrêt obligatoire au poste de péage autoroutier pour acquitter le droit de péage",
        "Paiement de taxe piétonne",
        "Pont de pesage uniquement",
        "Route gratuite pour tous"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa gitegeka guhagarara ku muryango w'aho bishyurira umuhanda (Péage) kugira ngo wishyure mbere yo gukomeza.",
      en: "Drivers must stop completely at toll collection barrier gates to pay the mandatory road user charge.",
      fr: "Ce panneau impose un arrêt obligatoire au poste de péage pour régler la redevance routière."
    },
    articleRef: "Art. 69"
  },
  {
    id: 191,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura kirimo inyuguti 'POLICE' / 'GENDARMERIE' gisobanura iki?",
      en: "What does a circular red-bordered sign with the inscription 'POLICE' command?",
      fr: "Que prescrit le panneau rond à bord rouge avec l'inscription 'POLICE'?"
    },
    options: {
      rw: [
        "Guhagarara byanze bikunze ku kigo cy'igenzura rya polisi (Arrêt obligatoire au poste de police / Contrôle)",
        "Aho gusaba akazi muri polisi",
        "Aho baparika imodoka za polisi gusa",
        "Kwiruka cyane kuko polisi ikwirukaho"
      ],
      en: [
        "Mandatory complete stop at the police road checkpoint (Arrêt obligatoire - Contrôle de Police)",
        "Police recruitment application point",
        "Police car parking only",
        "Speed up to escape police pursuit"
      ],
      fr: [
        "Arrêt obligatoire au poste de contrôle de la police ou barrage routier",
        "Bureau de recrutement de la police",
        "Parking réservé aux voitures de police",
        "Accélérer pour fuir la police"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa gitegeka umushoferi guhagarika ikinyabiziga cye burundu ku kigo cya Polisi kugira ngo asuzumwe.",
      en: "Vehicles must halt completely at the designated police checkpoint until signaled forward by officers.",
      fr: "Ce panneau de prescription impose un arrêt effectif au barrage de police pour contrôle des pièces de bord."
    },
    articleRef: "Art. 69"
  },
  {
    id: 192,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'ikoni ry'iburyo (Virage à droite) kimenyesha iki?",
      en: "What does a danger triangle showing a curve bending to the right warn of?",
      fr: "Que signale un panneau triangulaire de danger illustrant un virage vers la droite?"
    },
    options: {
      rw: [
        "Ikoni rikaze cyane rigana iburyo riri imbere (Virage dangereux à droite); umushoferi agomba kugabanya umuvuduko",
        "Umuhanda ugororotse iburyo",
        "Inzira ifunze iburyo",
        "Aho gukarabira iburyo"
      ],
      en: [
        "Dangerous right-hand curve ahead (Virage à droite); drivers must slow down before entering the bend",
        "Straight road to the right",
        "Right lane closed",
        "Washing bay on right"
      ],
      fr: [
        "Virage dangereux à droite : obligation de modérer sa vitesse avant d'aborder la courbe",
        "Route droite sur la droite",
        "Voie de droite fermée",
        "Station de lavage à droite"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa kimenyesha ikoni ry'iburyo kiburira umushoferi kugabanya umuvuduko hakiri kare kugira ngo ikinyabiziga kitarenga umuhanda.",
      en: "This danger sign warns of a sharp right curve requiring braking prior to entry to avoid lateral spin-out.",
      fr: "Ce panneau d'avertissement annonce une courbe serrée à droite imposant un ralentissement préalable."
    },
    articleRef: "Art. 67"
  },
  {
    id: 193,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'amakoni abiri akurikiranye irya mbere ryerekeza ibumoso (Succession de virages dont le premier est à gauche) kimenyesha iki?",
      en: "What does a danger triangle showing an S-curve bending first to the left warn of?",
      fr: "Que signale un panneau triangulaire montrant une succession de virages dont le premier est à gauche?"
    },
    options: {
      rw: [
        "Uruhererekane rw'amakoni ateje akaga irya mbere riri ibumoso (Succession de virages dangereux)",
        "Umuhanda urimo inzoka nyinshi",
        "Ahasiganirwa imodoka gusa",
        "Uruzi runyura munsi y'umuhanda"
      ],
      en: [
        "Series of dangerous curves ahead, the first bending to the left",
        "Snake habitat area",
        "Racing rally stage only",
        "Underground river passage"
      ],
      fr: [
        "Succession de virages dangereux dont le premier tourne à gauche : ralentissement obligatoire",
        "Zone de serpents",
        "Circuit de course",
        "Rivière souterraine"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira ko imbere hari amakoni menshi yikurikiranya; umushoferi agomba kugumana umuvuduko ucagaguye mu makoni yose.",
      en: "This warning sign alerts to consecutive winding curves, requiring sustained moderate speed and strict lane discipline.",
      fr: "Ce signal prévient d'une série de courbes sinueuses nécessitant une allure prudente et constante."
    },
    articleRef: "Art. 67"
  },
  {
    id: 194,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'amatara atatu y'amabara (Feux tricolores) kimenyesha iki?",
      en: "What does a danger triangle containing a three-color traffic light signal warn of?",
      fr: "Que signale un panneau triangulaire de danger comportant le symbole d'un feu tricolore?"
    },
    options: {
      rw: [
        "Amasangano agengwa n'amatara y'amabara atatu ari imbere (Annonce de signaux lumineux tricolores)",
        "Amatara yo mu nzu",
        "Iduka rigurisha amatara",
        "Amasangano y'umwijima"
      ],
      en: [
        "Advance warning of traffic light control signals ahead (Annonce de feux tricolores)",
        "Interior lighting shop",
        "Light bulb marketplace",
        "Unlit dark junction"
      ],
      fr: [
        "Annonce d'un carrefour régulé par des signaux lumineux tricolores",
        "Magasin d'éclairage",
        "Marché d'ampoules",
        "Carrefour obscur"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira umushoferi ko imbere agiye gusanga amasangano agengwa n'amatara (rouge, jaune, vert) bityo yitegure guhagarara.",
      en: "This advance warning triangle alerts drivers that the upcoming intersection is governed by traffic signals.",
      fr: "Ce panneau annonce la présence prochaine de feux de circulation pour préparer les conducteurs à un arrêt éventuel."
    },
    articleRef: "Art. 67"
  },
  {
    id: 195,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'akanyabiziga k'ibiziga bitatu cyangwa amapikipiki gisobanura iki?",
      en: "What does a warning danger triangle showing a motorcycle or moped symbol mean?",
      fr: "Que signifie un panneau triangulaire de danger illustrant une motocyclette?"
    },
    options: {
      rw: [
        "Agace gakunze kugendwamo cyangwa kwambukirwamo n'amapikipiki na velomoteri byinshi",
        "Aho gukinira imikino ya moto",
        "Isoko rya moto",
        "Umuhanda w'amakamyo gusa"
      ],
      en: [
        "Area with heavy motorcycle and moped traffic or frequent motorcycle crossing points",
        "Motocross stunt arena",
        "Motorcycle flea market",
        "Heavy truck only highway"
      ],
      fr: [
        "Zone à forte circulation ou traversée fréquente de motocyclistes et cyclomotoristes",
        "Arène de motocross",
        "Marché de motos",
        "Voie réservée aux camions"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira ko muri ako gace hari urujya n'uruza rwinshi rw'abamotari n'abanyonzi ba velomoteri, bityo umushoferi akaba maso.",
      en: "This warning sign highlights dense motorcycle presence, urging drivers to check blind spots and maintain lateral margins.",
      fr: "Ce panneau alerte sur une concentration importante de deux-roues motorisés nécessitant une vigilance accrue."
    },
    articleRef: "Art. 67"
  },
  {
    id: 196,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi ageze ku masangano maze itara ry'icyatsi rigacana ariko umuhanda w'imbere ye wuzuye imodoka zafunze (Embouteillage / Gridlock), agomba gukora iki?",
      en: "When a traffic light turns green but the intersection exit ahead is blocked by backed-up traffic (Gridlock), what must the driver do?",
      fr: "Lorsque le feu passe au vert mais que le carrefour est encombré en aval, que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Guhagarara mbere y'umurongo w'amasangano ntagere mu masangano rwagati kugeza igihe imbere hafungukiye",
        "Kwinjira mu masangano agahagarara hagati akazitira abandi bose",
        "Kuvuza ihoni cyane ngo bose bimuke",
        "Gusubira inyuma ku muvuduko mwinshi"
      ],
      en: [
        "Hold before the intersection stop line and do NOT enter until the exit side is clear to prevent blocking cross-traffic",
        "Drive straight into the middle of the intersection and block all intersecting traffic permanently",
        "Honk continuously to force forward traffic to evaporate",
        "Reverse rapidly backwards"
      ],
      fr: [
        "S'arrêter avant la ligne d'effet du feu et ne PAS s'engager dans le carrefour tant que la sortie n'est pas dégagée",
        "S'engager en force et bloquer tout le croisement transversal",
        "Klaxonner pour forcer le passage",
        "Reculer à toute vitesse"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko abuza kwinjira mu masangano n'iyo itara ryaba ari icyatsi niba ubona ko ushobora guhagarara hagati ukazitira abaturuka mu yindi mihanda.",
      en: "Entering an intersection on green when the exit is blocked constitutes an illegal box blocking infraction.",
      fr: "Il est interdit de s'engager dans un carrefour même au vert si l'encombrement risque d'immobiliser le véhicule au milieu."
    },
    articleRef: "Art. 13"
  },
  {
    id: 197,
    category: 'parking',
    question: {
      rw: "Ni ayahe magambo akoreshwa mu kugaragaza guhagarara k'ikinyabiziga igihe cyose gikenewe gukuramo abantu cyangwa gupakurura imizigo (Arrêt)?",
      en: "What legal term defines vehicle immobilization strictly for the duration needed to board/discharge passengers or load/unload cargo?",
      fr: "Quel terme légal définit l'immobilisation momentanée d'un véhicule le temps strictement nécessaire à la montée/descente de passagers ou chargement?"
    },
    options: {
      rw: [
        "Guhagarara akanya gato (Arrêt / Stopping)",
        "Guhagarara akanya karekire (Stationnement / Parking)",
        "Kwangirika k'ikinyabiziga (Panne)",
        "Uruhushya rwo gutwara"
      ],
      en: [
        "Stopping / Brief stop (Arrêt / Guhagarara akanya gato)",
        "Parking / Extended parking (Stationnement / Guhagarara akanya karekire)",
        "Mechanical breakdown (Panne)",
        "Driver licensing"
      ],
      fr: [
        "L'arrêt (Arrêt / Guhagarara akanya gato)",
        "Le stationnement (Stationnement / Guhagarara akanya karekire)",
        "La panne mécanique",
        "Le permis de conduire"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guhagarara akanya gato (Arrêt) ni uguhagarika imodoka igihe gusa umushoferi agumye hafi yayo apakurura cyangwa yinjiza abagenzi n'imizigo.",
      en: "An 'Arrêt' (Stopping) is momentary immobilization with the driver nearby for immediate loading/unloading or passenger boarding.",
      fr: "L'arrêt est l'immobilisation temporaire du véhicule pendant le temps nécessaire à la montée/descente ou manutention."
    },
    articleRef: "Art. 2"
  },
  {
    id: 198,
    category: 'parking',
    question: {
      rw: "Guhagarika ikinyabiziga ku buryo burenze igihe gikenewe cyo gukuramo abagenzi cyangwa umushoferi akisigira ikinyabiziga akigendera cyitwa iki?",
      en: "Immobilizing a vehicle beyond the time necessary for passenger handling, or leaving the vehicle unattended, is legally defined as:",
      fr: "L'immobilisation d'un véhicule au-delà du temps nécessaire au chargement, ou le fait de quitter son véhicule, est défini comme:"
    },
    options: {
      rw: [
        "Guhagarara akanya karekire / Guparika (Stationnement / Parking)",
        "Guhagarara akanya gato (Arrêt)",
        "Kunyuranaho (Dépassement)",
        "Kubisikana (Croisement)"
      ],
      en: [
        "Parking / Extended vehicle parking (Stationnement / Guhagarara akanya karekire)",
        "Brief stopping (Arrêt)",
        "Overtaking (Dépassement)",
        "Passing oncoming traffic (Croisement)"
      ],
      fr: [
        "Le stationnement (Stationnement / Guhagarara akanya karekire)",
        "L'arrêt simple (Arrêt)",
        "Le dépassement",
        "Le croisement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guparika (Stationnement) ni igihe ikinyabiziga gihagaze ku ruhande rw'umuhanda kitari mu bikorwa byo kwinjiza cyangwa gupakurura kandi umushoferi akaba ashobora no gusohokamo akigendera.",
      en: "Parking (Stationnement) applies whenever vehicle stoppage exceeds active passenger/cargo loading or when the driver vacates the vehicle.",
      fr: "Le stationnement désigne toute immobilisation prolongée qui ne relève pas de la stricte définition de l'arrêt."
    },
    articleRef: "Art. 2"
  },
  {
    id: 199,
    category: 'penalties',
    question: {
      rw: "Gutwara ikinyabiziga nta ruhushya rwo gutwara (Conduite sans permis de conduire) bihanishwa iki mu mategeko y'u Rwanda?",
      en: "Driving a motor vehicle without a valid driving license (Conduite sans permis) is punishable by what penalty in Rwanda?",
      fr: "La conduite d'un véhicule sans permis de conduire valide est punie de quelles peines au Rwanda?"
    },
    options: {
      rw: [
        "Igifungo cy'amategeko, amande y'amafaranga menshi, no gufatira ikinyabiziga (Fourrière)",
        "Gushimirwa no guhabwa uruhushya rw'ubuntu ako kanya",
        "Gutegekwa gutwara kumanywa gusa",
        "Nta gihano kuko amategeko abyemera"
      ],
      en: [
        "Imprisonment, heavy criminal fines, and immediate vehicle impoundment (Fourrière)",
        "Commended and issued a free driving license on the spot",
        "Restricted to daylight driving only",
        "No penalty since unlicensed driving is allowed"
      ],
      fr: [
        "Peine d'emprisonnement, fortes amendes pénales et saisie immédiate en fourrière du véhicule",
        "Félicitations et remise d'un permis gratuit",
        "Autorisation de jour uniquement",
        "Aucune sanction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gutwara nta ruhushya ni icyaha gikomeye cyane cyangiza umutekano w'abanyarwanda, gihanishwa igifungo n'amande aremereye.",
      en: "Driving without a valid license is a serious offense leading to prosecution, hefty fines, and vehicle impoundment.",
      fr: "La conduite sans permis constitue un délit majeur sanctionné par des peines d'emprisonnement et d'amende."
    },
    articleRef: "Art. 85"
  },
  {
    id: 200,
    category: 'definitions',
    question: {
      rw: "Intego nyamukuru y'amategeko y'umuhanda n'ikizamini cy'uruhushya rw'agateganyo (Provisoire) mu Rwanda ni iyihe?",
      en: "What is the overarching primary goal of Rwandan road traffic regulations and the provisional driving license exam (Provisoire)?",
      fr: "Quel est l'objectif fondamental du code de la route et de l'examen du permis provisoire au Rwanda?"
    },
    options: {
      rw: [
        "Kurengera ubuzima bw'abakoresha umuhanda bose, gukumira impanuka, no guteza imbere urujya n'uruza ruteguye neza kandi rufite umutekano",
        "Kureka abashoferi biruke uko bishakiye",
        "Gucira amande abaturage gusa",
        "Gufunga imihanda yose ngo abantu badakora ingendo"
      ],
      en: [
        "Protect lives of all road users, prevent traffic accidents, and ensure orderly, disciplined, and safe mobility nationwide",
        "Allow reckless high-speed driving everywhere",
        "Exclusively levy monetary fines on citizens",
        "Close all roads to stop public transportation"
      ],
      fr: [
        "Protéger la vie de tous les usagers, prévenir les accidents mortels et garantir une circulation ordonnée et sécurisée",
        "Permettre la vitesse sauvage sans règle",
        "Uniquement collecter des amendes",
        "Fermer les routes"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko y'umuhanda yashyiriweho kurengera ubuzima bw'abanyarwanda n'abaturarwanda bose, kugabanya impanuka no gutuma buri wese agera aho agiye ari mutaraga.",
      en: "Traffic laws exist fundamentally to protect human life, preserve safety, prevent road trauma, and facilitate fluid transportation for all.",
      fr: "Le code de la route a pour vocation première la préservation des vies humaines et la sécurité harmonieuse des déplacements."
    },
    articleRef: "Art. 1"
  }
];
