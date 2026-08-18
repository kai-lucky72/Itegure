import { Question } from '../types';

export const QUESTIONS_PART3: Question[] = [
  {
    id: 101,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura rurimo umurongo w'umweru uhagaritse mu buryo bw'ubutambike (Sens interdit) gisobanura iki?",
      en: "What does a solid red circular sign with a horizontal white bar (Sens interdit / No Entry) mean?",
      fr: "Que signifie le panneau circulaire rouge avec une barre horizontale blanche (Sens interdit)?"
    },
    options: {
      rw: [
        "Inzira ibujijwe kwinjiramo ku binyabiziga byose (Sens interdit / No entry)",
        "Inzira y'icyerekezo kimwe",
        "Aho guparika byemewe",
        "Umuhanda urangiye"
      ],
      en: [
        "No entry for all vehicles from this direction (Sens interdit / No entry)",
        "One-way road entry point",
        "Authorized parking zone",
        "Dead-end road"
      ],
      fr: [
        "Sens interdit : interdiction formelle d'entrer pour tous les véhicules",
        "Voie à sens unique autorisée",
        "Parking autorisé",
        "Voie sans issue"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza kwinjira muri uwo muhanda ku baturuka muri icyo cyerekezo (Sens interdit).",
      en: "This sign indicates a one-way street or restricted route where entry is prohibited for vehicles approaching from this direction.",
      fr: "Ce panneau marque une interdiction absolue d'accéder à la voie dans le sens considéré."
    },
    articleRef: "Art. 69"
  },
  {
    id: 102,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga gifite umuzenguruko utukura kirimo umwambi ugonda iburyo ucagaguye n'umurongo utukura gisobanura iki?",
      en: "What does a circular sign with a red border and a right-bent arrow struck through with a red bar mean?",
      fr: "Que signifie un panneau rond à bord rouge avec une flèche virant à droite barrée de rouge?"
    },
    options: {
      rw: [
        "Birabujijwe gukata iburyo mu masangano akurikira (Interdiction de tourner à droite)",
        "Birategetswe gukata iburyo",
        "Inzira ifunganye iburyo",
        "Umuvuduko mwinshi iburyo"
      ],
      en: [
        "Prohibited to turn right at the next intersection (Interdiction de tourner à droite)",
        "Mandatory right turn ahead",
        "Narrow lane on the right",
        "High speed lane on right"
      ],
      fr: [
        "Interdiction de tourner à droite au prochain croisement",
        "Obligation de tourner à droite",
        "Voie étroite à droite",
        "Voie rapide à droite"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa kibuzanya gukata iburyo biburira umushoferi kutagoreka ikinyabiziga cye agana iburyo mu masangano.",
      en: "This prohibition sign makes it illegal to execute a right-hand turn at the upcoming intersection.",
      fr: "Ce panneau interdit au conducteur de bifurquer vers la droite à l'intersection suivante."
    },
    articleRef: "Art. 69"
  },
  {
    id: 103,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga gifite umuzenguruko utukura kirimo umwambi ugonda ibumoso ucagaguye n'umurongo utukura gisobanura iki?",
      en: "What does a circular sign with a red border and a left-bent arrow struck through with a red line mean?",
      fr: "Que signifie un panneau rond à bord rouge avec une flèche virant à gauche barrée de rouge?"
    },
    options: {
      rw: [
        "Birabujijwe gukata ibumoso mu masangano akurikira (Interdiction de tourner à gauche)",
        "Birategetswe gukata ibumoso",
        "Inzira ibumoso irakinguye",
        "Aho guparika ibumoso"
      ],
      en: [
        "Prohibited to turn left at the next intersection (Interdiction de tourner à gauche)",
        "Mandatory left turn",
        "Left lane open",
        "Parking on left"
      ],
      fr: [
        "Interdiction de tourner à gauche au prochain croisement",
        "Obligation de tourner à gauche",
        "Voie libre à gauche",
        "Parking à gauche"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza gukata ibumoso mu masangano akurikira.",
      en: "This sign strictly bans making a left turn at the next upcoming junction.",
      fr: "Ce panneau interdit d'effectuer un virage à gauche au carrefour qui suit."
    },
    articleRef: "Art. 69"
  },
  {
    id: 104,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'umuhanda ugabanuka buhanamye (Descente dangereuse 10%) kimenyesha iki?",
      en: "What does a danger triangle showing a steep downhill slope with a percentage (e.g. 10%) indicate?",
      fr: "Que signale un panneau triangulaire montrant une pente abrupte avec un pourcentage (ex: 10%)?"
    },
    options: {
      rw: [
        "Amanuka hacuritse cyane hateje akaga (Descente dangereuse), umushoferi agomba gukoresha feri ya moteri (Frein moteur)",
        "Umuhanda uzamuka mu misozi",
        "Aho gutwarira ibicuruzwa",
        "Umuvuduko wa 10 km/h gusa"
      ],
      en: [
        "Steep dangerous descent ahead (Descente dangereuse); driver must use engine braking and low gear",
        "Steep uphill climb ahead",
        "Freight transport area",
        "Speed limit of 10 km/h"
      ],
      fr: [
        "Descente rapide et dangereuse : obligation d'engager un rapport de vitesse inférieur pour utiliser le frein moteur",
        "Montée en montagne",
        "Zone de fret",
        "Vitesse de 10 km/h"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amanuka ahacuritse asaba umushoferi gushyira mu ivitesse nto (rapport inférieur) kugira ngo feri z'imodoka zidasya zigashyuha zikananirwa.",
      en: "On steep descents, drivers must downshift to use engine compression braking to avoid brake fade and overheating.",
      fr: "En forte descente, l'usage du frein moteur par rétrogradage est indispensable pour éviter la surchauffe des freins."
    },
    articleRef: "Art. 67"
  },
  {
    id: 105,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'ikiraro gifunganye (Pont étroit / Chaussée rétrécie) kimenyesha iki?",
      en: "What does a danger triangle sign depicting a bottleneck narrowing road or bridge mean?",
      fr: "Que signifie un panneau triangulaire d'avertissement indiquant un rétrécissement ou un pont étroit?"
    },
    options: {
      rw: [
        "Umuhanda ufunganye cyangwa ikiraro kitorohereza ibinyabiziga kubisikaniramo byoroshye",
        "Ikiraro kigiye gusenyuka",
        "Umuhanda w'amazi gusa",
        "Aho kurobera amafi"
      ],
      en: [
        "Road narrowing ahead or narrow bridge where two vehicles may not pass simultaneously without yielding",
        "Collapsing bridge",
        "Waterway only",
        "Fishing pier"
      ],
      fr: [
        "Rétrécissement de chaussée ou passage sur pont étroit nécessitant une vigilance pour le croisement",
        "Pont effondré",
        "Voie maritime",
        "Zone de pêche"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira ko imbere hari umuhanda ufunganye cyangwa ikiraro kito, bisaba kugabanya umuvuduko no kwitegura kubisikana.",
      en: "This warning triangle indicates roadway constriction where overtaking or simultaneous crossing requires caution.",
      fr: "Ce panneau prévient que la voie se rétrécit des deux côtés ou d'un côté, imposant de ralentir."
    },
    articleRef: "Art. 67"
  },
  {
    id: 106,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cya gari ya moshi ifite uruzitiro (Passage à niveau avec barrières) gisobanura iki?",
      en: "What does a danger triangle with a picket fence symbol indicate?",
      fr: "Que signale un panneau triangulaire de danger comportant une barrière de clôture?"
    },
    options: {
      rw: [
        "Amasangano y'inzira ya gari ya moshi irinzwe n'inzitiro (Passage à niveau avec barrières)",
        "Amasangano ya gari ya moshi itarindwa n'inzitiro",
        "Uruganda rw'ibiti",
        "Uruzi rurinzwe"
      ],
      en: [
        "Level crossing with railway gates or automatic barriers (Passage à niveau avec barrières)",
        "Uncontrolled railway crossing without gates",
        "Lumber mill factory",
        "Protected river crossing"
      ],
      fr: [
        "Passage à niveau avec barrières ou demi-barrières automatiques",
        "Passage à niveau non gardé sans barrières",
        "Scierie de bois",
        "Fleuve protégé"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ikimenyetso cy'uruzitiro cyerekana ko inzira ya gari ya moshi irinzwe n'inzitiro zifunga n'amatara.",
      en: "The fence symbol warns of an upcoming level crossing equipped with physical gates or barrier arms.",
      fr: "Ce signal indique un croisement de voie ferrée protégé par des barrières de sécurité."
    },
    articleRef: "Art. 67"
  },
  {
    id: 107,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ifoto ya gari ya moshi icumba umwotsi (Passage à niveau sans barrières) kimenyesha iki?",
      en: "What does a danger triangle with an old steam locomotive symbol mean?",
      fr: "Que signale un panneau triangulaire de danger illustrant une locomotive à vapeur crachant de la fumée?"
    },
    options: {
      rw: [
        "Amasangano ya gari ya moshi itarindwa n'inzitiro (Passage à niveau sans barrières)",
        "Gari ya moshi yashaje",
        "Uruganda rw'imyotsi",
        "Gariyamoshi y'ubukerarugendo"
      ],
      en: [
        "Uncontrolled railway level crossing without barrier gates (Passage à niveau sans barrières)",
        "Antique train museum",
        "Smoke factory nearby",
        "Tourist mountain locomotive"
      ],
      fr: [
        "Passage à niveau non gardé et sans barrières de protection",
        "Musée du chemin de fer",
        "Usine à vapeur",
        "Train touristique"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ifoto ya gari ya moshi iburira ko amasangano y'inzira ya gari ya moshi adafite inzitiro; umushoferi agomba guhagarara akareba impande zombi.",
      en: "The locomotive silhouette warns of a level crossing with no physical barrier; drivers must look both ways before proceeding.",
      fr: "Ce panneau annonce un passage à niveau sans aucune barrière; l'arrêt et l'observation stricte sont obligatoires."
    },
    articleRef: "Art. 67"
  },
  {
    id: 108,
    category: 'signs',
    question: {
      rw: "Umusaraba mutagatifu wa Andereya (Croix de Saint-André / St. Andrew's Cross) usobanura iki ku nzira ya gari ya moshi?",
      en: "What does the St. Andrew's Cross (Croix de Saint-André) indicate at a railway crossing?",
      fr: "Que signifie la Croix de Saint-André implantée près d'une voie ferrée?"
    },
    options: {
      rw: [
        "Amasangano nyirizina y'inzira ya gari ya moshi aho umushoferi ategetswe guha inzira gari ya moshi",
        "Ibitaro bya Andereya",
        "Amasangano y'imihanda ine isanzwe",
        "Aho gushyingura"
      ],
      en: [
        "The exact position of a railway level crossing where trains have absolute right-of-way",
        "St. Andrew Hospital entrance",
        "Four-way regular road intersection",
        "Cemetery entrance"
      ],
      fr: [
        "Position immédiate du passage à niveau où la priorité appartient impérativement au train",
        "Hôpital Saint-André",
        "Croisement classique à 4 branches",
        "Entrée de cimetière"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umusaraba wa Andereya ushyirwa ku masangano ya gari ya moshi nyirizina kandi utegeka guha inzira gari ya moshi.",
      en: "The St. Andrew's Cross marks the immediate track boundary where motor traffic must yield to approaching trains.",
      fr: "La Croix de Saint-André matérialise l'emplacement précis de la voie ferrée et impose la priorité absolue au train."
    },
    articleRef: "Art. 68"
  },
  {
    id: 109,
    category: 'technical',
    question: {
      rw: "Mu binyabiziga bitwara abantu cyangwa ibintu mu Rwanda, ni ibihe bikoresho by'umutekano bitegetswe kubamo?",
      en: "Which mandatory safety equipment items must be carried inside vehicles in Rwanda?",
      fr: "Quels équipements obligatoires de sécurité doivent être présents à bord d'un véhicule au Rwanda?"
    },
    options: {
      rw: [
        "Mpadeshatu z'umutekano ebyiri (2 Triangles), Kizimyamoto (Extincteur), Agasanduku k'ubutabazi bw'ibanze (Trousse de secours), na Jile ibonerana (Gilet fluorescent)",
        "Televiziyo n'indangururamajwi",
        "Ibyuma byo kuryamaho gusa",
        "Nta gikoresho na kimwe gitegetswe"
      ],
      en: [
        "Two reflective warning triangles, certified fire extinguisher, first aid kit, and high-visibility reflective vest",
        "Television and mega loudspeakers",
        "Sleeping mattress only",
        "No equipment is mandatory"
      ],
      fr: [
        "Deux triangles de pré-signalisation, extincteur homologué, trousse de premiers secours et gilet de sécurité rétroréfléchissant",
        "Téléviseur et haut-parleurs",
        "Matelas de couchage",
        "Aucun équipement requis"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko y'umutekano mu muhanda mu Rwanda ategeka buri modoka kugira mpadeshatu ebyiri, kizimyamoto ikora, ubutabazi bw'ibanze na jile y'umutekano.",
      en: "Rwanda traffic regulations mandate carrying two triangles, fire extinguisher, first aid kit, and reflective vest at all times.",
      fr: "La réglementation rwandaise impose la présence de 2 triangles, d'un extincteur valide, d'une trousse médicale et d'un gilet haute visibilité."
    },
    articleRef: "Art. 52"
  },
  {
    id: 110,
    category: 'technical',
    question: {
      rw: "Imikandara y'umutekano (Ceintures de sécurité) itegetswe kwambarwa na bande mu kinyabiziga?",
      en: "Who is legally mandated to wear safety seatbelts (Ceintures de sécurité) in a passenger motor vehicle?",
      fr: "Qui a l'obligation légale d'attacher la ceinture de sécurité dans un véhicule de tourisme?"
    },
    options: {
      rw: [
        "Umuyobozi n'abagenzi bose bicaye mu myanya y'imbere n'iy'inyuma ifite imikandara",
        "Umushoferi gusa iyo abibonye",
        "Umugenzi uri imbere gusa",
        "Nta muntu n'umwe"
      ],
      en: [
        "The driver and all passengers in both front and rear seats equipped with seatbelts",
        "The driver only if he feels like it",
        "Only the front-seat passenger",
        "Nobody is required to wear seatbelts"
      ],
      fr: [
        "Le conducteur ainsi que tous les passagers avant et arrière occupant des sièges munis de ceintures",
        "Le conducteur seul s'il le souhaite",
        "Le passager avant uniquement",
        "Personne"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kwambara umukandara w'umutekano ni itegeko kuri buri wese uri mu modoka igihe cyose igenda mu nzira nyabagendwa.",
      en: "Wearing seatbelts is strictly compulsory for all vehicle occupants to minimize injury and prevent ejection during crashes.",
      fr: "Le port de la ceinture de sécurité est obligatoire pour tous les occupants du véhicule, à l'avant comme à l'arrière."
    },
    articleRef: "Art. 51"
  },
  {
    id: 111,
    category: 'penalties',
    question: {
      rw: "Urugero rw'inzoga mu maraso (Taux d'alcoolémie) rurenze urwemewe mu Rwanda rugenzurwa hakoreshejwe iki?",
      en: "How is blood alcohol concentration (BAC) measured and enforced on drivers by Rwanda National Police?",
      fr: "Comment le taux d'alcoolémie des conducteurs est-il contrôlé par la Police au Rwanda?"
    },
    options: {
      rw: [
        "Hakoreshejwe igikoresho cyo gupima umwuka (Éthylotest / Alcootest / Breathalyzer)",
        "Guhumurirwa n'umupolisi gusa",
        "Gupima uburebure bw'umushoferi",
        "Kureba ibara ry'amaso ye"
      ],
      en: [
        "Using an approved breathalyzer device (Éthylotest / Alcootest) and blood testing",
        "Officer sniffing breath casually",
        "Measuring driver's height",
        "Checking eye color"
      ],
      fr: [
        "Au moyen d'un éthylotest / éthylomètre homologué mesurant l'air expiré ou prise de sang",
        "À l'odeur simplement",
        "En mesurant la taille du conducteur",
        "En regardant la couleur des yeux"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Polisi y'u Rwanda ikoresha utwuma twa Alcotest dupima urugero rw'inzoga mu mwuka umushoferi ahumeka; gutwara wasinze birahanirwa cyane.",
      en: "Calibrated breathalyzers are officially used during roadside checkpoints to detect and prosecute drunk driving infractions.",
      fr: "Les contrôles d'alcoolémie sont effectués par les forces de police à l'aide d'éthylomètres étalonnés."
    },
    articleRef: "Art. 82"
  },
  {
    id: 112,
    category: 'penalties',
    question: {
      rw: "Ni iki giteganywa ku mushoferi wanze gupimwa urugero rw'inzoga mu maraso (Refus de se soumettre au contrôle d'alcoolémie)?",
      en: "What legal consequences apply to a driver who refuses to undergo a mandatory breathalyzer/alcohol test?",
      fr: "Quelles conséquences juridiques s'appliquent à un conducteur qui refuse de se soumettre au dépistage d'alcoolémie?"
    },
    options: {
      rw: [
        "Afatwa nk'uwanyoye inzoga zirenze urugero, agacibwa amande y'ikirenga, agafungirwa imodoka n'uruhushya rukanyagirwa",
        "Arakomeza akigendera kuko ni uburenganzira bwe",
        "Ahabwa amafaranga y'urugendo",
        "Ntacyo amategeko amutwara"
      ],
      en: [
        "Treated as legally intoxicated, fined the maximum statutory penalty, vehicle impounded, and license suspended",
        "Allowed to drive away freely as personal choice",
        "Given travel allowance money",
        "No legal consequences"
      ],
      fr: [
        "Considéré d'office en état d'ivresse manifeste, passible d'amende maximale, mise en fourrière et retrait de permis",
        "Autorisé à repartir librement",
        "Reçoit une prime de transport",
        "Aucune sanction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kwangira umupolisi gupima inzoga bifatwa nk'icyaha cy'ubusinzi mu muhanda kandi bihanishwa igihano gikomeye cyane kurusha abapimwe.",
      en: "Refusing a lawful sobriety test is treated with the highest severity: immediate impoundment, maximum fine, and criminal charges.",
      fr: "Le refus de se soumettre au contrôle d'alcoolémie entraîne les peines les plus sévères prévues pour la conduite en état d'ivresse."
    },
    articleRef: "Art. 83"
  },
  {
    id: 113,
    category: 'definitions',
    question: {
      rw: "Ubugari ntarengwa bwemewe bw'ikinyabiziga n'imizigo yacyo mu Rwanda (uretse ibikoresho by'ubuhinzi) ni ubuhe?",
      en: "What is the standard maximum legal width for a vehicle and its load in Rwanda (excluding specialized agricultural gear)?",
      fr: "Quelle est la largeur maximale autorisée pour un véhicule et son chargement au Rwanda?"
    },
    options: {
      rw: ["Metero 2 n'ibice 50 (2.50 m)", "Metero 4 n'ibice 00 (4.00 m)", "Metero 1 n'ibice 50 (1.50 m)", "Metero 5 n'ibice 20 (5.20 m)"],
      en: ["2.50 meters", "4.00 meters", "1.50 meters", "5.20 meters"],
      fr: ["2,50 mètres", "4,00 mètres", "1,50 mètres", "5,20 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ubugari bw'ikinyabiziga gipakiyemo imizigo ntibugomba kurenga metero 2.50 mu nzira nyabagendwa zose.",
      en: "The standard statutory vehicle width limit including mirrors/cargo is 2.50 meters on Rwandan public roads.",
      fr: "La largeur maximale d'un véhicule chargé ne peut dépasser 2,50 mètres selon le code de la route."
    },
    articleRef: "Art. 40"
  },
  {
    id: 114,
    category: 'definitions',
    question: {
      rw: "Ubuhagarike ntarengwa bwemewe bw'ikinyabiziga n'imizigo yacyo uhereye ku butaka ni ubuhe?",
      en: "What is the maximum overall height limit for a loaded vehicle measured from the road ground level in Rwanda?",
      fr: "Quelle est la hauteur maximale autorisée pour un véhicule chargé, mesurée depuis le sol au Rwanda?"
    },
    options: {
      rw: ["Metero 4 n'ibice 30 (4.30 m)", "Metero 6 n'ibice 00 (6.00 m)", "Metero 2 n'ibice 00 (2.00 m)", "Metero 8 n'ibice 50 (8.50 m)"],
      en: ["4.30 meters", "6.00 meters", "2.00 meters", "8.50 meters"],
      fr: ["4,30 mètres", "6,00 mètres", "2,00 mètres", "8,50 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ubuhagarike bw'ikinyabiziga cyose n'imizigo yacyo ntibugomba kurenga metero 4.30 kugira ngo kidakubita ku nsinga z'amashanyarazi n'ibiraro.",
      en: "The maximum statutory total vehicle height is capped at 4.30 meters to safely clear electrical cables and overhead bridges.",
      fr: "La hauteur maximale hors-tout d'un véhicule ne doit en aucun cas excéder 4,30 mètres."
    },
    articleRef: "Art. 40"
  },
  {
    id: 115,
    category: 'definitions',
    question: {
      rw: "Imizigo y'ikinyabiziga yemerewe kurenga imbere y'ikinyabiziga ku rugero rungana iki?",
      en: "How far forward is cargo legally permitted to overhang the frontmost bumper of a motor vehicle?",
      fr: "De combien de mètres un chargement peut-il dépasser l'avant d'un véhicule à moteur?"
    },
    options: {
      rw: [
        "Ntiyemerewe na gato kurenga imbere y'imbere y'ikinyabiziga (0 metero)",
        "Metero 3",
        "Metero 5",
        "Metero 1"
      ],
      en: [
        "Not permitted to overhang the front at all (0 meters / no forward overhang)",
        "3 meters",
        "5 meters",
        "1 meter"
      ],
      fr: [
        "Le chargement ne doit en aucun cas dépasser l'aplomb avant du véhicule (0 mètre)",
        "3 mètres",
        "5 mètres",
        "1 mètre"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umurongo w'imbere w'ikinyabiziga ntugomba kurengwaho n'imizigo na gato; imizigo ishobora kurenga inyuma gusa.",
      en: "Cargo is strictly forbidden from extending beyond the front bumper of the vehicle under Rwandan road safety law.",
      fr: "Tout débordement de chargement vers l'avant du véhicule est strictement proscrit par la loi."
    },
    articleRef: "Art. 41"
  },
  {
    id: 116,
    category: 'definitions',
    question: {
      rw: "Imizigo y'ikinyabiziga yemerewe kurenga inyuma y'ikinyabiziga ku rugero rungana iki ntarengwa?",
      en: "What is the maximum permissible rearward cargo overhang beyond the rear extremity of the vehicle?",
      fr: "Quel est le dépassement maximal autorisé pour un chargement à l'arrière d'un véhicule?"
    },
    options: {
      rw: [
        "Ntiyemerewe kurenga metero 3 (3.00 m) inyuma y'ikinyabiziga kandi igomba gushyirwaho ikimenyetso cy'igitambaro gitukura / itara ritukura",
        "Metero 10",
        "Metero 7",
        "Ntiyemerewe kurenga na santimetero imwe"
      ],
      en: [
        "Maximum 3 meters (3.00 m) overhang with mandatory red flag by day and red light/reflector by night",
        "10 meters",
        "7 meters",
        "Zero overhang permitted"
      ],
      fr: [
        "3 mètres maximum à l'arrière, avec obligation d'un chiffon rouge le jour et d'un catadioptre/feu rouge la nuit",
        "10 mètres",
        "7 mètres",
        "Aucun dépassement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Imizigo irenze inyuma ntigomba kurenga metero 3 kandi iyo irenze metero 1 igomba kugaragazwa n'igitambaro gitukura ku manywa n'itara ritukura nijoro.",
      en: "Rear overhang must not exceed 3 meters, and any projection over 1 meter requires red flag marking and nighttime red reflector lighting.",
      fr: "Le dépassement arrière est plafonné à 3 m et doit être balisé d'un dispositif réfléchissant rouge dès 1 mètre."
    },
    articleRef: "Art. 41"
  },
  {
    id: 117,
    category: 'lights',
    question: {
      rw: "Itara ryo gusubira inyuma (Feu de recul / Reverse light) rigomba kugira irihe bara kandi rimurika ryari?",
      en: "What color is the vehicle reversing light (Feu de recul) and when does it illuminate?",
      fr: "De quelle couleur est le feu de recul et quand s'allume-t-il?"
    },
    options: {
      rw: [
        "Ibara ry'umweru, ryaka igihe gusa ikinyabiziga gishyizwe mu cyerekezo cyo gusubira inyuma (Marche arrière)",
        "Ibara ry'umutuku, ryaka iyo imodoka ifashe feri",
        "Ibara ry'ubururu, ryaka igihe cyose",
        "Ibara ry'umukara"
      ],
      en: [
        "White color, automatically illuminating only when reverse gear (Marche arrière) is engaged",
        "Red color, activating on brake",
        "Blue color, on permanently",
        "Black non-lighting"
      ],
      fr: [
        "Couleur blanche, s'allumant automatiquement uniquement lorsque la marche arrière est enclenchée",
        "Couleur rouge, liée au frein",
        "Couleur bleue, permanent",
        "Couleur noire"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara ryo gusubira inyuma riba ryera kugira ngo rimurikire umushoferi inyuma no kumenyesha abandi ko asubira inyuma.",
      en: "Reversing lights emit white light to illuminate the rear path and signal oncoming motorists of reversing motion.",
      fr: "Les feux de recul éclairent la zone arrière d'une lumière blanche non éblouissante lors des manœuvres de marche arrière."
    },
    articleRef: "Art. 31"
  },
  {
    id: 118,
    category: 'lights',
    question: {
      rw: "Amatara y'igihu (Feux de brouillard / Fog lights) yemererwa gukoreshwa ryari?",
      en: "When are front and rear fog lights (Feux de brouillard) legally authorized to be used?",
      fr: "Quand est-il légalement autorisé d'utiliser les feux antibrouillard avant et arrière?"
    },
    options: {
      rw: [
        "Igihe hari igihu gikabije, imvura y'amahindu cyangwa umukungugu mwinshi bituma kureba biba munsi ya metero 50",
        "Igihe cyose ku manywa mu zuba ryinshi",
        "Igihe umushoferi ashatse kurushanwa",
        "Mu mujyi nijoro ahari amatara asanzwe"
      ],
      en: [
        "During dense fog, heavy downpours, or thick dust clouds when forward visibility drops below 50 meters",
        "All the time under clear bright sunlight",
        "During high-speed street racing",
        "On well-lit city streets at night"
      ],
      fr: [
        "En cas de brouillard épais, de forte chute de pluie ou poussière réduisant la visibilité à moins de 50 mètres",
        "En plein soleil",
        "En course de vitesse",
        "En ville éclairée la nuit"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara y'igihu akoreshwa gusa igihe ikirere kimeze nabi cyane (igihu, imvura nyinshi, ivumbi ryinshi) kuko ashobora guhuma amaso abandi mu bihe bisanzwe.",
      en: "Fog lights produce wide piercing beams suitable strictly for severe low-visibility conditions under 50 meters.",
      fr: "L'utilisation des antibrouillards est strictement réservée aux intempéries réduisant fortement la visibilité."
    },
    articleRef: "Art. 29"
  },
  {
    id: 119,
    category: 'priority',
    question: {
      rw: "Ku masangano azenguruka (Rond-point / Roundabout), umushoferi ugiye kwinjiramo agomba guha inzira:",
      en: "At a roundabout (Rond-point) intersection, a driver intending to enter must yield right of way to:",
      fr: "À l'entrée d'un rond-point / carrefour à sens giratoire, le conducteur doit céder le passage à:"
    },
    options: {
      rw: [
        "Ibinyabiziga bimaze kwinjira no kugendera mu ruziga (abaturuka ibumoso bwe)",
        "Ibinyabiziga bimuri inyuma",
        "Nta muntu na rimwe, kuko ufite umuvuduko munini",
        "Abanyamaguru bari inyuma ye gusa"
      ],
      en: [
        "Vehicles already circulating inside the roundabout ring (approaching from the left)",
        "Vehicles trailing directly behind him",
        "Nobody, entering driver has full right of way",
        "Pedestrians behind his car only"
      ],
      fr: [
        "Tous les véhicules déjà engagés dans l'anneau du rond-point (venant de sa gauche)",
        "Aux véhicules qui le suivent",
        "À personne, le véhicule entrant est prioritaire",
        "Aux piétons situés derrière lui"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo winjira muri rond-point, ugomba guha inzira ibinyabiziga bimaze kuyinjiramo biturutse ibumoso bwawe.",
      en: "Traffic inside the roundabout circulatory roadway possesses absolute priority over approaching entering traffic.",
      fr: "Les usagers engagés sur le rond-point ont la priorité absolue sur ceux qui s'y engagent."
    },
    articleRef: "Art. 13"
  },
  {
    id: 120,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rw'ubururu kirimo imyambi itatu y'umweru izenguruka mu buryo bw'isaha (Sens giratoire obligatoire) kimenyesha iki?",
      en: "What does a circular blue sign containing three rotating curved white arrows mean?",
      fr: "Que signifie un panneau rond bleu comportant trois flèches blanches disposées en cercle?"
    },
    options: {
      rw: [
        "Amasangano azenguruka ategetswe kugendwamo mu cyerekezo cy'imyambi (Sens giratoire obligatoire)",
        "Inzira ifunze izenguruka",
        "Aho gukinira imikino y'imodoka",
        "Amasangano y'inzira eshatu zidafite rond-point"
      ],
      en: [
        "Mandatory roundabout: drivers must follow the circular direction indicated by the arrows",
        "Closed circular loop",
        "Go-kart racing track",
        "Standard three-branch junction without ring"
      ],
      fr: [
        "Carrefour à sens giratoire obligatoire : obligation de contourner l'îlot central par la droite",
        "Boucle fermée",
        "Piste de karting",
        "Carrefour simple à 3 branches"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa cy'uruziga rw'ubururu gitegeka umuyobozi wese gukurikiza icyerekezo cy'uruziga azenguruka ibumoso ajya iburyo.",
      en: "This mandatory sign designates a roundabout where traffic must circulate in the direction of the arrows.",
      fr: "Ce panneau de prescription impose aux usagers de suivre le sens giratoire autour du terre-plein central."
    },
    articleRef: "Art. 70"
  },
  {
    id: 121,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'umuyaga ukomeye (Vent latéral) kimenyesha iki?",
      en: "What does a danger triangle depicting a windsock (Vent latéral / Crosswind) warn of?",
      fr: "Que signale un panneau triangulaire de danger représentant une manche à air (Vent latéral)?"
    },
    options: {
      rw: [
        "Agace gakunze kubamo umuyaga mwinshi w'imvura cyangwa uza mu mbavu z'ikinyabiziga (Vent latéral)",
        "Ikibuga cy'indege gusa aho indege zigwa",
        "Umuhanda ukonje cyane",
        "Aho kumanika imyenda"
      ],
      en: [
        "Zone prone to severe sideways crosswinds that could destabilize high-sided vehicles",
        "Airport landing runway only",
        "Extremely cold road zone",
        "Clothes drying area"
      ],
      fr: [
        "Zone exposée à de fortes rafales de vent latéral pouvant dévier la trajectoire des véhicules",
        "Piste d'aviation uniquement",
        "Route glaciale",
        "Zone d'étendage"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira ko hashobora kuza umuyaga mwinshi uturutse mu mbavu z'ikinyabiziga, bityo umushoferi agomba gufata vola neza akagabanya umuvuduko.",
      en: "High sideways wind gusts can blow tall vehicles off course; drivers should slow down and grip the steering wheel firmly.",
      fr: "Ce panneau avertit d'un danger de vent latéral soudain; le conducteur doit modérer sa vitesse et tenir fermement son volant."
    },
    articleRef: "Art. 67"
  },
  {
    id: 122,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'ikiraro cyigira hejuru (Pont mobile) kimenyesha iki?",
      en: "What does a danger triangle depicting an opening drawbridge (Pont mobile) warn of?",
      fr: "Que signale un panneau triangulaire montrant un pont s'ouvrant vers le haut (Pont mobile)?"
    },
    options: {
      rw: [
        "Ikiraro kinyeganyega cyangwa cyifungura kigakingurira amato (Pont mobile)",
        "Ikiraro cyacitse burundu",
        "Ahasimbukirwa n'imodoka",
        "Inzira ya siporo"
      ],
      en: [
        "Movable or opening drawbridge ahead that may interrupt road traffic for vessel passage",
        "Permanently collapsed bridge",
        "Stunt car jump ramp",
        "Athletics sports course"
      ],
      fr: [
        "Débouché sur un pont mobile ou basculant pouvant interrompre la circulation",
        "Pont effondré définitivement",
        "Rampe de cascade",
        "Piste de saut d'obstacles"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira ko imbere hari ikiraro gishobora kuzamurwa ngo amato atambuke, bityo umushoferi yitegure guhagarara.",
      en: "Drawbridges intermittently lift to clear maritime navigation; motorists must prepare to stop at red signals.",
      fr: "Ce signal prévient de la proximité d'un pont mobile susceptible de se lever pour le passage des bateaux."
    },
    articleRef: "Art. 67"
  },
  {
    id: 123,
    category: 'priority',
    question: {
      rw: "Iyo imodoka ya gisirikare igenda mu itsinda (Convoi militaire) ifite amatara n'amabendera y'umutekano, umushoferi asabwa iki?",
      en: "When encountering an organized military vehicle convoy (Convoi militaire) accompanied by escort markers:",
      fr: "Lorsqu'on croise un convoi militaire organisé avec fanions et escorte, que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Kubaha umuyoboro wabo, kurekeraho kugenda hagati yabo no kubaha inzira aho bishoboka hose",
        "Gucamo hagati akagenda ahagaze hagati y'amakamyo abiri ya gisirikare",
        "Kwiruka ngo arabatanga",
        "Gufata amafoto ababangamira"
      ],
      en: [
        "Respect their convoy lane, never cut in between their vehicles, and yield right-of-way safely",
        "Weave between military trucks and drive in the middle of their column",
        "Race to cut off the lead vehicle",
        "Block them to take photos"
      ],
      fr: [
        "Respecter l'intégrité du convoi, ne jamais s'intercaler entre les véhicules et céder le passage",
        "Couper la colonne militaire pour s'insérer au milieu",
        "Faire la course avec le convoi",
        "Bloquer le passage pour photographier"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko abuza umuyobozi wese gucamo igice cyangwa kwinjira hagati mu makoni y'ingabo cyangwa ibinyabiziga bigendera hamwe.",
      en: "Drivers are legally prohibited from cutting through military columns or disrupting organized convoys.",
      fr: "Il est formellement interdit de s'infiltrer dans un convoi militaire ou d'en couper la marche."
    },
    articleRef: "Art. 36"
  },
  {
    id: 124,
    category: 'parking',
    question: {
      rw: "Guhagarara akanya karekire (Guparika / Stationner) birabujijwe ahantu hangana gute mbere na nyuma y'icyapa gihagararaho bisi (Arrêt de bus)?",
      en: "Parking is strictly prohibited within how many meters before and after a designated public bus stop sign (Arrêt de bus)?",
      fr: "Le stationnement est interdit à moins de combien de mètres avant et après un panneau d'arrêt de bus?"
    },
    options: {
      rw: ["Metero 15 mbere na nyuma y'icyapa cy'aho bisi zihagarara", "Metero 2 gusa", "Metero 50", "Metero 100"],
      en: ["15 meters before and after the bus stop sign", "2 meters only", "50 meters", "100 meters"],
      fr: ["15 mètres avant et après le panneau d'arrêt d'autobus", "2 mètres seulement", "50 mètres", "100 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kugira ngo bisi zibone aho zinjirira zikanasohoka neza zidasatira umuhanda, birabujijwe guparika muri metero 15 impande z'icyapa cyazo.",
      en: "Parking is forbidden within 15 meters on either side of bus stop signs to preserve clear ingress/egress zones for public transit.",
      fr: "Il est interdit de stationner à moins de 15 mètres de part et d'autre des arrêts d'autobus pour dégager l'accès."
    },
    articleRef: "Art. 25"
  },
  {
    id: 125,
    category: 'parking',
    question: {
      rw: "Guhagarara akanya karekire (Guparika) birabujijwe muri metero zingahe uvuye ku masangano y'imihanda (Carrefour)?",
      en: "Parking is prohibited within how many meters from the edge of an intersection/crossroad (Carrefour)?",
      fr: "Le stationnement est interdit à moins de combien de mètres du bord d'un carrefour routier?"
    },
    options: {
      rw: ["Metero 5 mu nsisiro na metero 10 cyangwa 20 hanze y'insisiro", "Santimetero 10", "Metero 100", "Nta ntera ibujijwe"],
      en: ["5 meters within urban districts, and 10 to 20 meters outside built-up areas", "10 centimeters", "100 meters", "No distance restrictions"],
      fr: ["5 mètres en agglomération et 10 à 20 mètres hors agglomération", "10 centimètres", "100 mètres", "Aucune restriction"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guparika hafi y'amasangano bibuza abandi bashoferi kureba ibinyabiziga bije, bityo birabujijwe muri metero 5 mu mujyi.",
      en: "Parking near intersections blinds corner visibility for entering drivers and is restricted to at least 5m in urban areas.",
      fr: "Le stationnement à proximité immédiate d'un carrefour masque la visibilité et est interdit à moins de 5 mètres."
    },
    articleRef: "Art. 24"
  },
  {
    id: 126,
    category: 'parking',
    question: {
      rw: "Iyo umushoferi apiritse imodoka ye ku musozi umanuka (Descente), agomba gukora iki ku mapine y'imbere?",
      en: "When parking facing downhill (Descente) along a curbed street, how should the front wheels be turned?",
      fr: "Lors d'un stationnement en pente descendante le long d'un trottoir, comment orienter les roues avant?"
    },
    options: {
      rw: [
        "Kugoreka amapine agana ku mukingo w'umuhanda / ku mupaka w'inzira y'abanyamaguru (Vers le trottoir) no gushyira muri marche arrière",
        "Kugoreka amapine agana mu muhanda rwagati",
        "Kureka amapine arambuye neza nta feri ikinze",
        "Gukuramo amapine akayabika"
      ],
      en: [
        "Turn front wheels toward the curb/shoulder and engage reverse gear (Marche arrière) plus parking handbrake",
        "Turn wheels toward the center of the road",
        "Leave wheels straight without handbrake engaged",
        "Remove all wheels and store them"
      ],
      fr: [
        "Braquer les roues avant vers le trottoir, serrer le frein de stationnement et enclencher la marche arrière",
        "Braquer les roues vers le centre de la chaussée",
        "Laisser les roues droites sans frein",
        "Démonter les roues"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kugoreka amapine werekeza ku muche w'umuhanda bituma imodoka niramuka irekuye feri ikubitana n'urubavu rw'umukingo igahagarara ako kanya.",
      en: "Turning wheels into the curb ensures that if brakes slip, the tire rolls into the curb and halts vehicle motion.",
      fr: "Tourner les roues vers le trottoir permet de caler le véhicule en cas de défaillance du frein à main."
    },
    articleRef: "Art. 26"
  },
  {
    id: 127,
    category: 'parking',
    question: {
      rw: "Iyo uparitse imodoka uzamuka umusozi (Montée) ahari umukingo (Trottoir), amapine y'imbere agomba kugorekwa ate?",
      en: "When parking facing uphill (Montée) beside a curbed pavement, how should the front wheels be angled?",
      fr: "Lors d'un stationnement en côte montante le long d'un trottoir, comment orienter les roues avant?"
    },
    options: {
      rw: [
        "Kugoreka amapine y'imbere werekeza mu muhanda (ibumoso bw'umukingo) no gushyira muri vitesse ya mbere (1ère vitesse)",
        "Kugoreka amapine werekeza ku muche w'umusozi",
        "Gushyira mu ipantaro y'ubusa (Point mort) nta feri",
        "Kuzimya amatara gusa"
      ],
      en: [
        "Turn front wheels away from the curb (toward the road) and engage first forward gear (1st gear) with handbrake",
        "Turn wheels inward towards the dirt wall",
        "Leave in neutral gear without handbrake",
        "Turn off lights only"
      ],
      fr: [
        "Braquer les roues vers la chaussée (à l'opposé du trottoir) et enclencher la 1ère vitesse avec le frein à main",
        "Braquer les roues n'importe comment",
        "Mettre au point mort sans frein",
        "Éteindre les feux uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo urekeye amapine agana hanze y'umukingo uzamuka, imodoka isubiye inyuma ipine ry'iburyo ryikubita ku mukingo rikayifata.",
      en: "Angling wheels away from the curb catches the rear of the front tire against the curb if the car rolls backward.",
      fr: "L'orientation des roues vers la gauche en montée cale le pneu contre le trottoir si le véhicule recule."
    },
    articleRef: "Art. 26"
  },
  {
    id: 128,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende rw'ubururu kirimo inyuguti ya 'H' (Hôpital) gisobanura iki?",
      en: "What does a rectangular blue sign containing the letter 'H' (Hôpital) indicate?",
      fr: "Que signifie un panneau rectangulaire bleu avec la lettre majuscule 'H'?"
    },
    options: {
      rw: [
        "Ibitaro cyangwa ivuriro riri hafi; abashoferi basabwa kwirinda urusaku n'amahoni",
        "Hoteli yo kuraramo",
        "Aho gukarabira intoki",
        "Umusozi muremure cyane"
      ],
      en: [
        "Hospital or medical treatment center nearby; drivers must maintain quiet and avoid horn sounding",
        "Luxury hotel lodging",
        "Hand washing facility",
        "High mountain peak"
      ],
      fr: [
        "Hôpital ou centre de soins médicaux à proximité : interdiction de faire du bruit et de klaxonner",
        "Hôtel pour dormir",
        "Lavabo public",
        "Haute colline"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Inyuguti 'H' iranga ibitaro cyangwa ivuriro; abashoferi bagomba kugabanya urusaku n'umuvuduko muri ako gace.",
      en: "The 'H' sign indicates an active hospital zone where noise discipline and cautious driving are compulsory.",
      fr: "Ce panneau signale la présence d'un établissement hospitalier et exige le calme absolu aux abords."
    },
    articleRef: "Art. 71"
  },
  {
    id: 129,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ifoto y'itefone / telephone gisobanura iki?",
      en: "What does an information sign displaying a telephone handset symbol indicate?",
      fr: "Que signifie un panneau d'indication avec le symbole d'un combiné téléphonique?"
    },
    options: {
      rw: [
        "Iposita y'itumanaho cyangwa telefone rusange y'ubutabazi (Poste téléphonique public)",
        "Gura telefone hano",
        "Birabujijwe guhamagara",
        "Reba kuri telefone yawe"
      ],
      en: [
        "Public emergency telephone call point / roadside emergency call box",
        "Mobile phone shop",
        "Phone calls prohibited",
        "Check your phone notifications"
      ],
      fr: [
        "Poste d'appel téléphonique public ou borne d'urgence",
        "Boutique de téléphones",
        "Appels interdits",
        "Consulter son téléphone"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiranga ahari telefone rusange umushoferi ashobora kwifashisha mu gihe agize ikibazo cyangwa impanuka.",
      en: "This information sign marks roadside SOS emergency telephone call boxes.",
      fr: "Ce panneau indique un poste téléphonique accessible au public en cas de panne ou d'urgence."
    },
    articleRef: "Art. 71"
  },
  {
    id: 130,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende rw'ubururu kirimo ifoto y'agasanduku gafite ikimenyetso cy'umusaraba utukura gisobanura iki?",
      en: "What does a blue rectangular sign with a red cross on a white background indicate?",
      fr: "Que signale un panneau rectangulaire bleu affichant une croix rouge sur carré blanc?"
    },
    options: {
      rw: [
        "Ikigo cy'ubutabazi bw'ibanze bw'ubuvuzi (Poste de premiers secours)",
        "Amasangano y'inzira enye",
        "Urukiko rukuru",
        "Ahasengerwa gusa"
      ],
      en: [
        "First aid medical station (Poste de premiers secours)",
        "Four-way crossroads",
        "High courthouse",
        "Place of worship only"
      ],
      fr: [
        "Poste de secours d'urgence médicale et premiers soins",
        "Croisement à 4 voies",
        "Tribunal de justice",
        "Lieu de culte"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umusaraba utukura ugaragaza aho kubona ubufasha bw'ubuvuzi bw'ibanze igihe habaye impanuka.",
      en: "A red cross symbol marks emergency medical first aid stations for traffic crash treatment.",
      fr: "Ce signal indique un point de premiers secours et d'assistance médicale d'urgence."
    },
    articleRef: "Art. 71"
  },
  {
    id: 131,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende rw'ubururu kirimo ifoto y'ikiragi / igipande cy'amavuta (Station-service) gisobanura iki?",
      en: "What does an informational sign showing a fuel pump dispenser indicate?",
      fr: "Que signifie le panneau d'information illustrant une pompe à carburant?"
    },
    options: {
      rw: [
        "Sitasiyo yo kunyweraho amavuta ya lisansi na mazutu (Poste de distribution de carburant)",
        "Ahaturitswa amavuta",
        "Aho koza imodoka",
        "Inzu y'ibiribwa gusa"
      ],
      en: [
        "Fuel filling station ahead (Station-service / Petrol station)",
        "Explosives warehouse",
        "Car wash only",
        "Food restaurant"
      ],
      fr: [
        "Poste de distribution de carburant / station-service",
        "Dépôt d'explosifs",
        "Lavage de véhicules",
        "Restaurant"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kimenyesha abashoferi ko imbere hari sitasiyo icuruza amavuta y'ibinyabiziga.",
      en: "This service sign informs road users of the distance or location to the nearest fuel refueling station.",
      fr: "Ce panneau informe les usagers de la proximité d'une station de ravitaillement en carburant."
    },
    articleRef: "Art. 71"
  },
  {
    id: 132,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ifoto y'icyuma cya shanyari (Clé mécanique / Poste de dépannage) kimenyesha iki?",
      en: "What does a road service sign displaying an adjustable wrench (Clé mécanique) indicate?",
      fr: "Que signifie un panneau de service avec le symbole d'une clé à molette mécanique?"
    },
    options: {
      rw: [
        "Aho gukorera / kugarura ibinyabiziga byapfuye (Poste de dépannage / Garage)",
        "Uruganda rw'ibyuma",
        "Aho gupakururira imyanda",
        "Inzira y'abanyabukorikori"
      ],
      en: [
        "Vehicle mechanical breakdown repair workshop / Garage service point",
        "Metal manufacturing factory",
        "Scrap metal dump",
        "Handicraft workshop"
      ],
      fr: [
        "Poste de dépannage mécanique ou garage de réparation automobile",
        "Usine métallurgique",
        "Décharge de ferraille",
        "Atelier d'artisanat"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kimenyesha ko hafi hari igaraje cyangwa abakanishi bashobora gutabara imodoka yagize ikibazo.",
      en: "This road service sign directs broken down motorists to available mechanical repair workshops.",
      fr: "Ce signal annonce la proximité d'un garage automobile pour assistance et réparations d'urgence."
    },
    articleRef: "Art. 71"
  },
  {
    id: 133,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende rw'ubururu kirimo ifoto y'igitanda (Hôtel / Motel) kimenyesha iki?",
      en: "What does an information sign displaying a bed symbol indicate?",
      fr: "Que signifie un panneau d'information représentant un lit?"
    },
    options: {
      rw: [
        "Hoteli, motele cyangwa icumbi ryo kuraramo (Hôtel ou motel)",
        "Ibitaro by'indembe gusa",
        "Aho kugurisha ibitanda",
        "Inzira yo kuryama mu muhanda"
      ],
      en: [
        "Hotel, motel, or overnight lodging accommodation nearby",
        "Intensive hospital ward only",
        "Furniture bedding store",
        "Road sleeping path"
      ],
      fr: [
        "Hôtel, motel ou hébergement touristique pour la nuit",
        "Hôpital d'urgence seulement",
        "Magasin de literie",
        "Piste de repos sur voie"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ifoto y'igitanda ku cyapa cy'ubururu iranga ahari icumbi cyangwa hoteli abagenzi bashobora kuruhukiramo.",
      en: "A bed icon on a blue informational board indicates nearby hotel or overnight lodging accommodation.",
      fr: "Ce panneau de service indique un établissement hôtelier ou hébergement de repos pour les voyageurs."
    },
    articleRef: "Art. 71"
  },
  {
    id: 134,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende rw'ubururu kirimo ifoto y'ikanya n'icyuma (Restaurant) kimenyesha iki?",
      en: "What does a blue informational sign showing a crossed fork and spoon or knife mean?",
      fr: "Que signifie un panneau bleu avec le symbole d'une fourchette et d'un couteau/cuillère?"
    },
    options: {
      rw: [
        "Resitora cyangwa ifunguro ry'ibiribwa (Restaurant)",
        "Uruganda rw'amasahani",
        "Aho guca imboga gusa",
        "Ibitaro by'abana"
      ],
      en: [
        "Restaurant / Dining meal facility open to travelers",
        "Cutlery manufacturing plant",
        "Vegetable cutting center",
        "Children's hospital"
      ],
      fr: [
        "Restaurant ou établissement de restauration pour les usagers",
        "Usine de vaisselle",
        "Centre de découpe de légumes",
        "Hôpital pour enfants"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kimenyesha ko hari resitora itegura amafunguro ku bashoferi n'abagenzi.",
      en: "This service sign notifies drivers of available restaurants and hot meal services nearby.",
      fr: "Ce panneau indique un point de restauration et repas chauds sur l'itinéraire."
    },
    articleRef: "Art. 71"
  },
  {
    id: 135,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende rw'ubururu kirimo ifoto y'igikombe cy'ikawa cyangwa icyayi (Débit de boissons / Cafétéria) kimenyesha iki?",
      en: "What does a sign depicting a coffee cup or tea cup indicate?",
      fr: "Que signale un panneau bleu illustrant une tasse de café ou boisson chaude?"
    },
    options: {
      rw: [
        "Aho kunywera ibinyobwa bidasindisha, ikawa cyangwa icyayi (Cafétéria / Buvette)",
        "Uruganda rw'ikawa gusa",
        "Aho gusuka ibishingwe",
        "Ibuye ry'umuriro"
      ],
      en: [
        "Cafeteria / Refreshment bar serving coffee, tea, and non-alcoholic drinks",
        "Coffee processing plant only",
        "Garbage dumping pit",
        "Hot lava rock"
      ],
      fr: [
        "Cafétéria, buvette ou débit de boissons non alcoolisées pour une pause",
        "Usine de café uniquement",
        "Dépotoir à déchets",
        "Pierre volcanique"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiranga ahari cafétéria aho umuntu ashobora kunywera icyayi, ikawa cyangwa ikinyobwa gisanzwe ngo aruhuke.",
      en: "This icon indicates a refreshment stop or roadside cafe offering hot drinks and snacks.",
      fr: "Ce symbole annonce un débit de boissons ou cafétéria pour le rafraîchissement des conducteurs."
    },
    articleRef: "Art. 71"
  },
  {
    id: 136,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ikimenyetso cy'igiti n'intebe y'ameza (Emplacement pour pique-nique) kimenyesha iki?",
      en: "What does an information sign showing a picnic table under a tree indicate?",
      fr: "Que signale un panneau affichant une table de pique-nique sous un arbre?"
    },
    options: {
      rw: [
        "Ahantu ho kuruhukira no gufatira ifunguro ryo mu gasozi (Emplacement pour pique-nique)",
        "Ishyamba ry'ingagi gusa",
        "Ahasarurwa imbaho",
        "Aho gutema ibiti"
      ],
      en: [
        "Roadside picnic and rest area with tables and shade (Emplacement pour pique-nique)",
        "Gorilla national park only",
        "Timber logging yard",
        "Tree felling zone"
      ],
      fr: [
        "Emplacement aménagé pour le repos et le pique-nique en plein air",
        "Parc des gorilles uniquement",
        "Exploitation forestière",
        "Zone de bûcheronnage"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa cyerekana ahantu hagenewe kuruhukira ku bagenzi bashaka gufata ifunguro mu mutuzo.",
      en: "This sign designates an outdoor recreation and roadside rest stop fitted with picnic tables.",
      fr: "Ce panneau indique une aire de repos et de détente aménagée le long de la chaussée."
    },
    articleRef: "Art. 71"
  },
  {
    id: 137,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'urugomero rw'amazi cyangwa ikiyaga (Débouché sur un quai ou une berge) kimenyesha iki?",
      en: "What does a danger triangle showing a car falling off a riverbank or pier into water mean?",
      fr: "Que signifie un panneau triangulaire montrant un véhicule chutant d'un quai dans l'eau?"
    },
    options: {
      rw: [
        "Umuhanda werekeza ku cyambu, ku mucanga cyangwa ku nkombe y'amazi nta ruzitiro (Débouché sur un quai ou une berge)",
        "Aho koza imodoka mu kiyaga",
        "Ahasiganirwa ubwato",
        "Ikinyabiziga koga mu mazi"
      ],
      en: [
        "Road leads to an unguarded riverbank, quay, or waterfront cliff (Débouché sur un quai ou une berge)",
        "Car washing spot in lake",
        "Boat speed racing channel",
        "Amphibious car test course"
      ],
      fr: [
        "Débouché de la route sur un quai, une berge ou un plan d'eau sans barrière de retenue",
        "Lavage de véhicule dans le lac",
        "Course de bateaux rapides",
        "Piste pour voitures amphibies"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira ko umuhanda usohokera ku mazi kandi nta rukuta ruhari, bisaba umushoferi kwitonda cyane.",
      en: "This warning sign alerts that the road terminates or runs alongside deep open water with risk of vehicle submersion.",
      fr: "Ce panneau prévient que la voie aboutit sans protection au bord d'un fleuve, quai ou lac."
    },
    articleRef: "Art. 67"
  },
  {
    id: 138,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cya 'Mubazi y'ikirere / Inyoni y'indege' (Passage d'avions à basse altitude) kimenyesha iki?",
      en: "What does a danger triangle sign depicting an aircraft in flight indicate?",
      fr: "Que signale un panneau triangulaire de danger comportant la silhouette d'un avion en vol?"
    },
    options: {
      rw: [
        "Ahegereye ikibuga cy'indege aho indege zishobora kuguruka hasi cyane zigateza urusaku rutunguranye",
        "Ikibuga cy'indege cyo kugurisha amatike gusa",
        "Umuhanda ugendamo indege n'imodoka",
        "Umusozi muremure cyane"
      ],
      en: [
        "Proximity to an airfield runway where low-flying aircraft may cause sudden noise or distraction",
        "Airline ticket booking office",
        "Shared runway for planes and cars",
        "Very high mountain peak"
      ],
      fr: [
        "Proximité d'un aérodrome avec risque de passage d'avions à basse altitude et bruit soudain",
        "Agence de billetterie aérienne",
        "Piste mixte pour voitures et avions",
        "Sommet de montagne"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira ko uri hafi y'ikibuga cy'indege bityo indege zishobora kuguruka hejuru gato y'umuhanda zigateza ubwoba cyangwa umuyaga.",
      en: "Low-flying planes near runway approaches can startle motorists or generate strong air displacement.",
      fr: "Ce panneau avertit les usagers du survol fréquent à basse altitude d'aéronefs à proximité d'un aéroport."
    },
    articleRef: "Art. 67"
  },
  {
    id: 139,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cya 'Akamenyetso k'itangazo' (!) (Danger indéterminé) kimenyesha iki?",
      en: "What does a danger triangle with an exclamation mark (!) (Other danger) indicate?",
      fr: "Que signale un panneau triangulaire de danger contenant un point d'exclamation (!)"
    },
    options: {
      rw: [
        "Ibindi byago bidasobanuye ku bundi buryo (Danger indéterminé / Other danger)",
        "Hagarara ako kanya utareba",
        "Umuvuduko mwinshi wemewe",
        "Iherezo ry'ibyapa byose"
      ],
      en: [
        "Unspecified general hazard ahead (Danger indéterminé / General hazard warning)",
        "Emergency stop immediately blindfolded",
        "Maximum high speed allowed",
        "End of all road signs"
      ],
      fr: [
        "Danger général non spécifié par d'autres symboles : appel à une vigilance accrue",
        "Arrêt d'urgence les yeux fermés",
        "Vitesse maximale autorisée",
        "Fin de tous les panneaux"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Akamenyetso k'itangazo (!) kagaragaza ibyago bidasanzwe bitafite icyapa cyihariye (nk'aho inkangu ziba, ibiti byatewe, n'ibindi).",
      en: "The exclamation point triangle warns of diverse localized road hazards not covered by standard pictorial symbols.",
      fr: "Le point d'exclamation annonce un danger divers dont la nature est souvent précisée par un panonceau additionnel."
    },
    articleRef: "Art. 67"
  },
  {
    id: 140,
    category: 'signs',
    question: {
      rw: "Icyapa cy'akanyongera (Panonceau / Additional panel) gishyirwa munsi y'icyapa nyamukuru kiba kigamije iki?",
      en: "What is the function of a supplementary plate (Panonceau) mounted beneath a primary road sign?",
      fr: "Quel est le rôle d'un panonceau additionnel placé sous un panneau principal de signalisation?"
    },
    options: {
      rw: [
        "Gusobanura neza intera, igihe, cyangwa ibinyabiziga icyo cyapa kireba (Préciser la portée, la distance ou les catégories)",
        "Gushushanya gusa ngo icyapa kibe kirekire",
        "Gupfuka amakosa y'icyapa",
        "Kumurika nijoro gusa"
      ],
      en: [
        "Specify the exact applicable distance, time duration, or specific vehicle categories governed by the sign",
        "Make the road sign physically taller for decoration",
        "Cover up manufacturing printing defects",
        "Provide solar lighting only"
      ],
      fr: [
        "Préciser la distance, l'étendue, les horaires ou les catégories de véhicules concernées par le panneau",
        "Décorer le poteau pour le rendre plus haut",
        "Masquer un défaut d'impression",
        "Éclairer la nuit uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Utwapa tw'inyongera (panonceaux) dusobanura neza intera iri mbere y'ibyago (urugero: metero 200) cyangwa amoko y'ibinyabiziga birebwa n'iryo tegeko.",
      en: "Supplementary plates define the exact applicability scope, distance, or exempt vehicle types for the parent sign.",
      fr: "Les panonceaux complètent le signal principal en précisant la distance d'application ou les exceptions."
    },
    articleRef: "Art. 73"
  },
  {
    id: 141,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura kirimo ifoto y'ingorofani y'amaboko (Chariot à bras) kimenyesha iki?",
      en: "What does a circular sign with a red border containing a handcart symbol mean?",
      fr: "Que signifie un panneau rond à bord rouge avec le dessin d'une charrette à bras?"
    },
    options: {
      rw: [
        "Birabujijwe ku binyabiziga bikururwa cyangwa bisunikwa n'amaboko (Accès interdit aux véhicules à bras)",
        "Inzira y'ingorofani gusa",
        "Aho gukorera ingorofani",
        "Gura ingorofani hano"
      ],
      en: [
        "Access prohibited for handcarts, wheelbarrows, and pushcarts (Accès interdit aux véhicules à bras)",
        "Exclusive handcart lane",
        "Handcart manufacturing shop",
        "Buy handcarts here"
      ],
      fr: [
        "Accès interdit aux véhicules à traction ou poussée manuelle (chariots à bras)",
        "Piste réservée aux charrettes",
        "Atelier de fabrication de charrettes",
        "Vente de brouettes"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza ibinyabiziga bisunikwa cyangwa bikururwa n'amaboko y'abantu gukoresha uwo muhanda wihuta.",
      en: "This prohibition keeps slow hand-pushed and pulled carts off fast vehicular thoroughfares.",
      fr: "Ce panneau interdit l'accès aux voiturettes à bras et brouettes sur les routes à circulation fluide."
    },
    articleRef: "Art. 69"
  },
  {
    id: 142,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura kirimo ibiro '5.5 t' (Poids maximal autorisé) kimenyesha iki?",
      en: "What does a circular red sign with the text '5.5 t' mean?",
      fr: "Que signifie un panneau rond à bord rouge portant l'inscription '5.5 t'?"
    },
    options: {
      rw: [
        "Birabujijwe ku binyabiziga bifite uburemere burenze Toni 5 n'igice (5.5 tonnes) kwinjira muri uwo muhanda",
        "Umuvuduko wa 5.5 km/h",
        "Metero 5.5 z'ubugari",
        "Ibirometero 5.5 byo kugera mu mujyi"
      ],
      en: [
        "Access prohibited for any vehicle with total laden weight exceeding 5.5 tonnes (5.5 t)",
        "Speed limit of 5.5 km/h",
        "Width limit of 5.5 meters",
        "5.5 km remaining distance to town"
      ],
      fr: [
        "Accès interdit aux véhicules dont le poids total autorisé en charge dépasse 5,5 tonnes",
        "Vitesse de 5,5 km/h",
        "Largeur de 5,5 mètres",
        "5,5 km jusqu'à la prochaine ville"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kirinda ibiraro n'imihanda yoroheje yangizwa n'amakamyo afite uburemere burenze toni zagaragajwe.",
      en: "This weight limit protects weak bridges and light pavement surfaces from excessive heavy vehicle damage.",
      fr: "Ce panneau limite le tonnage maximal pour préserver la solidité des ponts et chaussées légères."
    },
    articleRef: "Art. 69"
  },
  {
    id: 143,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura kirimo ifoto y'umuyoboro w'ipine n'inyuguti '2 t' hejuru y'ipine (Poids maximal par essieu) kimenyesha iki?",
      en: "What does a sign displaying an axle with wheels and '2 t' indicate?",
      fr: "Que signifie un panneau rond à bord rouge représentant un essieu avec la mention '2 t'?"
    },
    options: {
      rw: [
        "Birabujijwe ku binyabiziga bifite uburemere burenze toni 2 kuri buri mutambiko w'ibiziga (Essieu / Axle limit)",
        "Ibinyabiziga byose bifite amapine 2 gusa",
        "Amasangano y'amapine 2",
        "Umuvuduko w'ipine rimwe"
      ],
      en: [
        "Access prohibited for vehicles where weight on any single axle exceeds 2 tonnes (2 t)",
        "Restricted to two-wheeled vehicles only",
        "Junction for two tires",
        "Speed for one single tire"
      ],
      fr: [
        "Accès interdit aux véhicules dont le poids pesant sur un essieu quelconque dépasse 2 tonnes",
        "Autorisé aux deux-roues uniquement",
        "Carrefour à 2 pneus",
        "Vitesse par pneu"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Uburemere kuri buri mutambiko w'ipine (essieu) bugomba kutarenga ibyapa byashyizweho kugira ngo bitangiza ibiraro by'imigano n'ibyuma.",
      en: "Axle weight limits prevent bridge structural failure and road rutting from concentrated axle loads.",
      fr: "Cette limitation vise la charge par essieu individuel pour éviter la rupture des ponts et revêtements."
    },
    articleRef: "Art. 69"
  },
  {
    id: 144,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura kirimo ibipimo by'uburebure '10 m' hagati y'imyambi ibiri (Longueur maximale) kimenyesha iki?",
      en: "What does a circular red sign showing a truck silhouette with '10 m' and flanking arrows mean?",
      fr: "Que signifie un panneau rond à bord rouge comportant la mention '10 m' entre deux flèches horizontales?"
    },
    options: {
      rw: [
        "Birabujijwe ku binyabiziga cyangwa uruhererekane rw'ibinyabiziga bifite uburebure burenga metero 10",
        "Umuvuduko wa 10 km/h",
        "Intera ya metero 10 hagati y'imodoka",
        "Ubugari bwa metero 10"
      ],
      en: [
        "Access prohibited for vehicles or vehicle combinations exceeding 10 meters in overall length",
        "Speed limit of 10 km/h",
        "10 meters distance between cars",
        "Width limit of 10 meters"
      ],
      fr: [
        "Accès interdit aux véhicules ou ensembles de véhicules d'une longueur totale supérieure à 10 mètres",
        "Vitesse de 10 km/h",
        "Distance de 10 mètres entre voitures",
        "Largeur de 10 mètres"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza imodoka ndende (nk'amakamyo manini) gukoresha imihanda ifite amakoni akabije cyane idashobora gukatiramo.",
      en: "Vehicle length restrictions prevent long articulated trucks from getting stuck on tight mountain hairpin curves.",
      fr: "Cette interdiction protège les routes aux virages très serrés infranchissables par les longs véhicules."
    },
    articleRef: "Art. 69"
  },
  {
    id: 145,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura kirimo intera ya '70 m' hagati y'imodoka ebyiri zikurikiranye gisobanura iki?",
      en: "What does a circular red sign depicting two consecutive cars with '70 m' between them mean?",
      fr: "Que signifie un panneau rond à bord rouge montrant deux voitures séparées par la mention '70 m'?"
    },
    options: {
      rw: [
        "Birabujijwe kugendera ku ntera iri munsi ya metero 70 hagati y'ikinyabiziga cyawe n'ikikuri imbere (Distance minimale de sécurité)",
        "Umuvuduko ntarengwa wa 70 km/h",
        "Ibirometero 70 byo guparika",
        "Umuhanda urangira muri metero 70"
      ],
      en: [
        "Drivers are prohibited from following the vehicle ahead at a distance less than 70 meters (Compulsory minimum interval)",
        "Maximum speed limit of 70 km/h",
        "70 km parking area",
        "Road ends in 70 meters"
      ],
      fr: [
        "Interdiction de suivre le véhicule précédent à une distance inférieure à 70 mètres (intervalle minimal obligatoire)",
        "Vitesse maximale de 70 km/h",
        "Parking sur 70 km",
        "Fin de route à 70 mètres"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa gitegeka abashoferi kugumana intera ndende y'umutekano itari munsi ya metero 70 ku misozi cyangwa mu binogo.",
      en: "This mandatory minimum safety following distance prevents catastrophic chain-reaction rear collisions in hazardous sections.",
      fr: "Ce panneau impose un intervalle de sécurité minimal obligatoire entre deux véhicules consécutifs."
    },
    articleRef: "Art. 69"
  },
  {
    id: 146,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi ageze mu masangano adafite ibyapa cyangwa amatara, agasanga ibinyabiziga biturutse mu byerekezo bine bitandukanye bihageze icyarimwe, bitambuka bite?",
      en: "At an uncontrolled four-way intersection with no signs or lights where four cars arrive simultaneously, how is precedence decided?",
      fr: "À un carrefour non réglementé où 4 véhicules arrivent simultanément de 4 directions, comment s'applique la priorité?"
    },
    options: {
      rw: [
        "Hakurikizwa ubwumvikane n'ubushishozi hagati y'abashoferi (Courtoisie / Entente), umwe akareka uwo ku buryo bwe agatangira gutambuka",
        "Imodoka nini niyo ikandagira lisansi ikica abandi",
        "Imodoka ihenze niyo itambuka mbere",
        "Bose bariruka icyarimwe bakagongana"
      ],
      en: [
        "Through mutual courtesy and eye contact understanding, one driver yields to restart the standard right-hand priority sequence",
        "The largest vehicle forces its way through recklessly",
        "The most expensive luxury vehicle takes priority",
        "All four accelerate simultaneously and collide"
      ],
      fr: [
        "Par courtoisie mutuelle et entente visuelle : un conducteur cède son passage pour débloquer la priorité à droite",
        "Le plus gros véhicule passe en force",
        "La voiture la plus luxueuse passe d'abord",
        "Tous démarrent en même temps et se percutent"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo amategeko asanzwe asaba guha inzira uw'iburyo azitiriwe n'uko bose bafite uw'iburyo, ubushishozi n'ubwumvikane nibyo biyobora gutambuka mu ituze.",
      en: "When all four branches are blocked under universal right-hand priority, visual agreement and courtesy must unblock the deadlock safely.",
      fr: "En cas d'impasse simultanée à 4 branches, la courtoisie et la communication visuelle entre conducteurs débloquent la circulation."
    },
    articleRef: "Art. 12"
  },
  {
    id: 147,
    category: 'technical',
    question: {
      rw: "Iyo itara ry'ikimenyetso ry'umutuku ririmo ifoto y'amavuta (Témoin de pression d'huile moteur) ryatse ku kintu cy'ikinyabiziga (tableau de bord) utwaye, ugomba gukora iki?",
      en: "When the red engine oil pressure warning light illuminates on your vehicle dashboard while driving, what must you do immediately?",
      fr: "Lorsque le témoin rouge de pression d'huile moteur s'allume sur le tableau de bord pendant que vous roulez, que devez-vous faire?"
    },
    options: {
      rw: [
        "Guhagarara ako kanya mu buryo bw'umutekano, kuzimya moteri no kutongera kuyatsa kuko moteri ishobora guhita ishya igapfa (Serrage moteur)",
        "Gukomeza urugendo ku muvuduko mwinshi ngo ugere aho ugiye",
        "Kongeraho umuziki mu modoka",
        "Gukandagira akazindaro kenshi"
      ],
      en: [
        "Pull over safely immediately, turn off the engine, and do not restart it to prevent catastrophic engine seizure/damage",
        "Speed up to reach your destination faster before the engine dies",
        "Turn up the music volume",
        "Honk the horn repeatedly"
      ],
      fr: [
        "S'arrêter immédiatement en sécurité, couper le moteur et ne plus redémarrer pour éviter le serrage destructeur du moteur",
        "Accélérer pour arriver plus vite",
        "Monter le volume de la radio",
        "Klaxonner sans cesse"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara ritukura ry'amavuta ya moteri risobanura ko moteri itacyisiga amavuta; kuyigumisha mu muriro bitera moteri gusenyuka burundu mu masegonda make.",
      en: "A red oil light warns of zero engine oil lubrication; continuing to run the engine will cause complete engine destruction.",
      fr: "Le voyant rouge d'huile indique une chute critique de pression; rouler entraîne la casse irréversible du moteur."
    },
    articleRef: "Art. 52"
  },
  {
    id: 148,
    category: 'technical',
    question: {
      rw: "Iyo itara ry'umutuku ririmo ifoto ya batiri (Témoin de charge de batterie / alternateur) ryatse, biba bisobanura iki?",
      en: "When the red battery charging system warning light illuminates on the instrument cluster, what does it signify?",
      fr: "Que signifie le voyant rouge de charge de batterie allumé sur le combiné d'instruments?"
    },
    options: {
      rw: [
        "Aliternateri (Alternateur) ntiyinjiza umuriro muri batiri cyangwa umukandara wayo wacitse (Problème de charge)",
        "Batiri yuzuye umuriro mwinshi cyane birenze",
        "Amatara y'imodoka yose yapfuye",
        "Imodoka igiye kuguruka"
      ],
      en: [
        "The alternator charging system is failing to charge the battery or alternator drive belt is broken",
        "Battery is overcharged and ready for racing",
        "All vehicle exterior bulbs are burned out",
        "Vehicle is about to fly"
      ],
      fr: [
        "L'alternateur ne recharge plus la batterie ou la courroie d'accessoire est rompue",
        "La batterie est surchargée d'énergie",
        "Toutes les ampoules extérieures sont grillées",
        "La voiture va décoller"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara rya batiri ryerekana ko umuriro w'ikinyabiziga uri guturuka muri batiri gusa kuko alternateur idakora, bityo imodoka ishobora kuzima vuba.",
      en: "The battery light warns of an electrical charging failure; electrical components will rapidly drain stored battery reserves.",
      fr: "Ce voyant signale un dysfonctionnement du circuit de charge (alternateur/courroie)."
    },
    articleRef: "Art. 52"
  },
  {
    id: 149,
    category: 'technical',
    question: {
      rw: "Iyo itara ry'umutuku ririmo ikimenyetso cya feri cyangwa umubare (!) (Témoin de frein / liquide de frein) ryatse mu gihe feri y'amaboko ifunguye, bisobanura iki?",
      en: "When the red brake warning light (!) remains illuminated while the handbrake is fully released, what does it indicate?",
      fr: "Lorsque le voyant rouge de freinage (!) reste allumé alors que le frein à main est desserré, que signale-t-il?"
    },
    options: {
      rw: [
        "Amavuta ya feri (Liquide de frein) yagabanutse cyane munsi y'urugero cyangwa feri zagize ikibazo gikomeye",
        "Amapine aruzuye cyane",
        "Imodoka ifite umuvuduko mwiza",
        "Urugendo rwagenze neza"
      ],
      en: [
        "Critically low brake fluid level in the reservoir or serious hydraulic brake circuit fault",
        "Tires are overinflated",
        "Car is traveling at ideal speed",
        "Trip completed successfully"
      ],
      fr: [
        "Baisse critique du niveau de liquide de frein ou défaillance majeure du circuit de freinage hydraulique",
        "Pneus surgonflés",
        "Vitesse optimale",
        "Trajet réussi"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iri tara rimenyesha ko amavuta ya feri yashize cyangwa hari ikibazo mu miyoboro ya feri, bityo umushoferi agomba guhagarara akagenzura feri.",
      en: "Low brake fluid or hydraulic leaks can lead to total brake failure; inspect immediately before driving.",
      fr: "Un manque de liquide de frein présente un danger mortel de perte totale de freinage."
    },
    articleRef: "Art. 52"
  },
  {
    id: 150,
    category: 'penalties',
    question: {
      rw: "Gukoresha ikinyabiziga kidafite ubwishingizi bw'umutekano (Assurance obligatoire) bihanishwa iki mu Rwanda?",
      en: "Operating a motor vehicle without mandatory third-party liability insurance (Assurance) in Rwanda leads to what penalty?",
      fr: "La conduite d'un véhicule sans assurance obligatoire de responsabilité civile est sanctionnée de quelle manière au Rwanda?"
    },
    options: {
      rw: [
        "Gufungirwa ikinyabiziga (Fourrière) ako kanya no gucibwa amande ateganywa n'amategeko",
        "Guhabwa ubwishingizi bw'ubuntu",
        "Gusabwa gutwara nijoro gusa",
        "Nta gihano kuko ubwishingizi ni ubushake"
      ],
      en: [
        "Immediate vehicle impoundment (Fourrière) and heavy statutory financial fines",
        "Complimentary free insurance coverage",
        "Permission to drive only at midnight",
        "No penalty since insurance is optional"
      ],
      fr: [
        "Mise en fourrière immédiate du véhicule et fortes amendes contraventionnelles et pénales",
        "Assurance gratuite offerte",
        "Autorisation de rouler la nuit seulement",
        "Aucune sanction, facultatif"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ubwishingizi bw'ikinyabiziga (Assurance) ni itegeko kuri buri kinyabiziga cyose kigenda mu muhanda nyabagendwa mu Rwanda.",
      en: "Third-party motor insurance is strictly mandatory; uninsured vehicles are confiscated on the spot.",
      fr: "L'assurance automobile est une obligation absolue; tout défaut d'assurance entraîne la saisie immédiate du véhicule."
    },
    articleRef: "Art. 85"
  }
];
