import { Question } from '../types';

export const QUESTIONS_PART8: Question[] = [
  {
    id: 351,
    category: 'definitions',
    question: {
      rw: "Uruhushya rwo gutwara ibinyabiziga rw'icyiciro 'B' (Permis de conduire Catégorie B) rwemerera gutwara iki?",
      en: "What vehicle category is authorized under a standard Category B Driving License (Permis B)?",
      fr: "Quelle catégorie de véhicules est autorisée avec un permis de conduire de Catégorie B?"
    },
    options: {
      rw: [
        "Ibinyabiziga bifite uburemere butarenze ibiro 3,500 (3.5T) n'imyanya y'abagenzi itarenze umunani (8) itabariwemo umushoferi",
        "Amakamyo manini ya semi-remorque gusa",
        "Amapikipiki y'amapine abiri yonyine",
        "Indege n'amato yo mu mazi"
      ],
      en: [
        "Motor vehicles with Gross Vehicle Weight not exceeding 3,500 kg and seating up to 8 passengers excluding the driver",
        "Heavy articulated semi-trailers exclusively",
        "Two-wheeled motorcycles only",
        "Airplanes and maritime vessels"
      ],
      fr: [
        "Véhicules automobiles ayant un PTAC maximal de 3 500 kg et au maximum 8 places assises outre le conducteur",
        "Poids lourds articulés uniquement",
        "Motocyclettes à deux roues uniquement",
        "Aéronefs et bateaux"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyiciro cya B gitwara ibinyabiziga bisanzwe bitarenza toni 3.5 n'imyanya 8 y'abagenzi itabariwemo umushoferi.",
      en: "Category B permits driving passenger cars and light utility vehicles up to 3.5 tonnes GVW with up to 8 passenger seats.",
      fr: "Le permis B autorise la conduite des voitures particulières et camionnettes de moins de 3,5 tonnes et 8 passagers max."
    },
    articleRef: "Art. 76"
  },
  {
    id: 352,
    category: 'definitions',
    question: {
      rw: "Uruhushya rwo gutwara ibinyabiziga rw'icyiciro 'A' (Permis Catégorie A) rwemerera gutwara iki?",
      en: "What vehicle class does a Category A Driving License (Permis A) authorize?",
      fr: "Quels véhicules le permis de conduire de Catégorie A autorise-t-il à conduire?"
    },
    options: {
      rw: [
        "Amapikipiki afite cyangwa adafite akanyabiziga kometseho ku ruhande (Motocyclettes avec ou sans side-car)",
        "Bisi zitwara abagenzi benshi",
        "Amakamyo atwara Peteroli",
        "Tarakiteri z'ubuhinzi gusa"
      ],
      en: [
        "Motorcycles with or without a sidecar attachment (Motocyclettes)",
        "Large passenger mass transit buses",
        "Petroleum tanker trucks",
        "Agricultural farm tractors only"
      ],
      fr: [
        "Les motocyclettes avec ou sans side-car et tricycles motorisés",
        "Les autobus de transport en commun",
        "Les camions citernes",
        "Les tracteurs agricoles uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyiciro cya A ni uruhushya rwo gutwara amapikipiki y'ubwoko bwose mu muhanda nyabagendwa.",
      en: "Category A designates full motorcycle driving privileges on all public road networks.",
      fr: "Le permis de catégorie A confère le droit de conduire toutes les motocyclettes sur la voie publique."
    },
    articleRef: "Art. 76"
  },
  {
    id: 353,
    category: 'definitions',
    question: {
      rw: "Uruhushya rwo gutwara ibinyabiziga rw'icyiciro 'C' (Permis Catégorie C) rwemerera gutwara iki?",
      en: "What vehicle class does a Category C Driving License (Permis C) authorize?",
      fr: "Quels véhicules le permis de conduire de Catégorie C autorise-t-il à conduire?"
    },
    options: {
      rw: [
        "Ibinyabiziga bikora umurimo wo gutwara imizigo bifite uburemere burenze ibiro 3,500 (Camions de transport de marchandises > 3.5T)",
        "Amagare asanzwe gusa",
        "Imodoka nto zitwara umuryango gusa",
        "Amapikipiki ya siporo gusa"
      ],
      en: [
        "Goods freight transport vehicles whose Gross Vehicle Weight exceeds 3,500 kg (Heavy trucks > 3.5t)",
        "Ordinary pedal bicycles only",
        "Small private family saloons only",
        "Racing sports motorbikes only"
      ],
      fr: [
        "Véhicules affectés au transport de marchandises dont le PTAC excède 3 500 kg (Poids lourds)",
        "Bicyclettes uniquement",
        "Voitures de tourisme uniquement",
        "Motos de course"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyiciro cya C kigenewe amakamyo atwara imizigo arenza uburemere bwa toni 3.5.",
      en: "Category C covers heavy commercial freight vehicles and rigid trucks exceeding 3.5 tonnes GVW.",
      fr: "Le permis C est exigé pour la conduite des poids lourds de transport de fret d'un PTAC supérieur à 3,5 tonnes."
    },
    articleRef: "Art. 76"
  },
  {
    id: 354,
    category: 'definitions',
    question: {
      rw: "Uruhushya rwo gutwara ibinyabiziga rw'icyiciro 'D' (Permis Catégorie D) rwemerera gutwara iki?",
      en: "What vehicle class does a Category D Driving License (Permis D) authorize?",
      fr: "Quels véhicules le permis de conduire de Catégorie D autorise-t-il à conduire?"
    },
    options: {
      rw: [
        "Ibinyabiziga bitwara abagenzi bifite imyanya irenze umunani (8) yo kwicaramo itabariwemo umushoferi (Autobus / Autocars)",
        "Amakamyo apakurura amabuye gusa",
        "Imodoka z'amapikipiki gusa",
        "Amato yo mu biyaga"
      ],
      en: [
        "Passenger transport vehicles constructed with more than 8 passenger seats excluding driver (Buses & Coaches)",
        "Quarry dump trucks only",
        "Motorcycle sidecars only",
        "Lake passenger boats"
      ],
      fr: [
        "Véhicules affectés au transport de personnes comportant plus de 8 places assises outre le conducteur (Autobus/Autocars)",
        "Camions bennes uniquement",
        "Side-cars uniquement",
        "Bateaux de passagers"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyiciro cya D cyemerera gutwara bisi n'imodoka zose zitwara abagenzi benshi barenze abantu 8.",
      en: "Category D authorizes mass passenger transport vehicles including coaches, urban buses, and large minibuses.",
      fr: "Le permis D autorise la conduite des véhicules de transport collectif de plus de 8 passagers assis."
    },
    articleRef: "Art. 76"
  },
  {
    id: 355,
    category: 'definitions',
    question: {
      rw: "Uruhushya rw'icyiciro 'E' (Permis Catégorie E) rutangwa ku biki?",
      en: "What vehicle combinations require a Category E Driving License endorsement (Permis E)?",
      fr: "Quels ensembles de véhicules nécessitent l'obtention du permis de Catégorie E?"
    },
    options: {
      rw: [
        "Gukurura remorque ifite uburemere burenze ibiro 750 (750 kg) ku binyabiziga byo mu cyiciro B, C, cyangwa D",
        "Gutwara igare ririho umutwaro w'ibitoki",
        "Gutwara imodoka ifite amapine atanu",
        "Gutwara imodoka itagira moteri"
      ],
      en: [
        "Coupling and towing trailers exceeding 750 kg gross weight attached to category B, C, or D tractor vehicles",
        "Riding a bicycle carrying bananas",
        "Driving a 5-wheeled car",
        "Operating an engineless soapbox vehicle"
      ],
      fr: [
        "Ensembles de véhicules couplés à une remorque de plus de 750 kg tractée par un véhicule tracteur B, C ou D",
        "Bicyclette chargée",
        "Voiture à cinq roues",
        "Véhicule sans moteur"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyiciro cya E cyunganira ibindi byiciro (B, C, D) kigaha uburenganzira bwo gukurura remorque ziremereye zirengeje ibiro 750.",
      en: "Category E supplements parent vehicle licenses (BE, CE, DE) to authorize heavy trailers over 750 kg.",
      fr: "Le permis E est une extension permettant de tracter des remorques lourdes de plus de 750 kg."
    },
    articleRef: "Art. 76"
  },
  {
    id: 356,
    category: 'priority',
    question: {
      rw: "Kuri rond-point (Carrefour à sens giratoire), ni ibihe binyabiziga bifite uburenganzira bwa mbere bwo gutambuka?",
      en: "At a modern roundabout (Sens giratoire), which vehicles hold right-of-way priority?",
      fr: "Sur un carrefour à sens giratoire (Rond-point), qui a la priorité de passage?"
    },
    options: {
      rw: [
        "Ibinyabiziga byamaze kwinjira mu ruziga rwa rond-point (Véhicules déjà engagés sur l'anneau)",
        "Ibinyabiziga biturutse hanze bishaka kwinjira ku muvuduko mwinshi",
        "Ikinyabiziga kiremereye kurusha ibindi",
        "Ikinyabiziga kije giturutse mu ruhande rw'iburyo hanze"
      ],
      en: [
        "Vehicles already circulating inside the roundabout ring (Priorité à l'anneau)",
        "Entering vehicles trying to merge at high speed",
        "The heaviest truck regardless of location",
        "Any external vehicle approaching from the right outside"
      ],
      fr: [
        "Les véhicules circulant déjà sur l'anneau du rond-point",
        "Les véhicules entrants voulant forcer le passage",
        "Le camion le plus lourd",
        "Tout véhicule venant de droite à l'extérieur"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kuri rond-point, abasanzwe mu ruziga nibo bafite priorité; uwinjira agomba guhagarara akabaha inzira bose.",
      en: "Vehicles already engaged inside the roundabout ring hold priority over all approaching entering vehicles.",
      fr: "Sur les ronds-points giratoires, la priorité appartient impérativement aux usagers déjà engagés sur l'anneau."
    },
    articleRef: "Art. 13"
  },
  {
    id: 357,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende gifite ubuso bw'ubururu kigaragaza umuhanda ugabanijwemo ibisate byinshi bifite uduce tw'imyambi yerekana icyerekezo (Flèches de sélection) gisobanura iki?",
      en: "What do blue directional overhead lane assignment signs with lane arrows (Flèches d'assignation de voies) indicate?",
      fr: "Que signifient les panneaux bleus d'affectation de voies avec flèches directionnelles au-dessus des voies?"
    },
    options: {
      rw: [
        "Icyerekezo gitegetswe gukurikizwa kuri buri gisate cy'umuhanda mbere y'amasangano (Présélection des voies)",
        "Umuhanda wo kwirukiramo nta nkomyi",
        "Aho guparika ibinyabiziga",
        "Aho gucururiza amatara"
      ],
      en: [
        "Mandatory lane pre-selection indicating which driving lane must be used for each intended travel direction at upcoming junction",
        "Unrestricted high-speed racing corridor",
        "Designated vehicle parking area",
        "Headlight commercial outlet"
      ],
      fr: [
        "Présélection et assignation obligatoire des voies de circulation selon les directions aux prochains carrefours",
        "Piste de vitesse libre",
        "Zone de stationnement",
        "Magasin de phares"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibi byapa bifasha abashoferi gufata igisate kiboneye hakiri kare bitewe n'aho bashaka kwerekeza (iburyo, ibumoso, cyangwa imbere).",
      en: "Lane pre-selection overhead signage directs drivers into appropriate lanes matching their planned junction maneuvers.",
      fr: "Ces panneaux indiquent à l'avance la voie que le conducteur doit emprunter selon sa direction envisagée."
    },
    articleRef: "Art. 70"
  },
  {
    id: 358,
    category: 'lights',
    question: {
      rw: "Itara ry'umutuku rirabagirana (Feu rouge clignotant) rishyirwa ku masangano ya gari ya moshi cyangwa ibiraro bisobanura iki?",
      en: "What does a flashing red signal light (Feu rouge clignotant) at a railway crossing or movable bridge mean?",
      fr: "Que signifie un feu rouge clignotant à un passage à niveau ou un pont mobile?"
    },
    options: {
      rw: [
        "Guhagarara burundu (Arrêt absolu) nta kurenga umurongo w'amasangano kuko gari ya moshi igiye gutambuka",
        "Kuvuduka cyane ngo wambuke mbere y'uko ifunga",
        "Kunyuranaho ku zindi modoka zihagaze",
        "Gusubira inyuma umuvuduko mwinshi"
      ],
      en: [
        "Mandatory absolute stop behind the stop line because a train is actively approaching",
        "Accelerate quickly to beat the train across the tracks",
        "Overtake the stopped waiting queue",
        "Reverse rapidly backwards"
      ],
      fr: [
        "Arrêt absolu et immédiat avant la ligne car le passage d'un train ou la fermeture du pont est imminent",
        "Accélérer pour passer avant la fermeture",
        "Dépasser la file arrêtée",
        "Faire marche arrière à vive allure"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara ry'umutuku rimyasa risobanura ko ibyuma bya gari ya moshi biri kumanuka cyangwa gari ya moshi yegereje; guhagarara birategetswe.",
      en: "Flashing red signals at rail crossings indicate immediate train arrival, commanding unconditional stopping.",
      fr: "Le feu rouge clignotant commande l'arrêt obligatoire immédiat pour prévenir les collisions avec les trains."
    },
    articleRef: "Art. 63"
  },
  {
    id: 359,
    category: 'technical',
    question: {
      rw: "Iyo ikinyabiziga kigize ikibazo cya tekiniki kigapfa rwagati mu muhanda, umushoferi agomba gukora iki byihuse?",
      en: "If a vehicle suffers an emergency breakdown in active traffic, what immediate safety sequence must the driver perform?",
      fr: "En cas de panne d'urgence sur la chaussée, quelle séquence de sécurité le conducteur doit-il exécuter?"
    },
    options: {
      rw: [
        "Gukongeza amatara y'amakuba (Feux de détresse), gushyira ikimenyetso cya mpandeshatu (Triangle) inyuma yacyo, no kugikurira ku rubavu",
        "Gusiga ikinyabiziga rwagati mu muhanda akigendera mu kabari",
        "Kwicara hejuru y'ikinyabiziga ukaririmba",
        "Kuzimya amatara yose ugasinziriramo"
      ],
      en: [
        "Activate hazard flashers, place warning triangle reflectors behind, and maneuver the vehicle safely to the shoulder",
        "Abandon vehicle in center lane and walk to a nearby bar",
        "Sit on vehicle roof and sing songs",
        "Extinguish all lights and sleep inside"
      ],
      fr: [
        "Allumer les feux de détresse, poser le triangle de présignalisation à distance et dégager le véhicule sur le bas-côté",
        "Abandonner la voiture au milieu et partir au café",
        "S'asseoir sur le toit",
        "Éteindre les feux et dormir"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gucana amatara y'amakuba no gushinga icyapa cy'impanuka birinda ko izindi modoka ziza zikagonga ikinyabiziga cyagize ikibazo.",
      en: "Warning hazard lights and safety triangle deployment immediately alert oncoming motorists to stationary hazards.",
      fr: "La mise en marche des feux de détresse et la pose du triangle évitent les suraccidents par collision arrière."
    },
    articleRef: "Art. 43"
  },
  {
    id: 360,
    category: 'penalties',
    question: {
      rw: "Gukora impanuka ukiruka ntutabare abakomeretse cyangwa ngo utange amakuru kuri Polisi (Délit de fuite / Hit and run) bihanishwa iki?",
      en: "Fleeing the scene of an accident without rendering aid to the injured or reporting to Police (Hit and run) is penalized by:",
      fr: "Le délit de fuite après avoir causé ou été impliqué dans un accident de la route est sanctionné par:"
    },
    options: {
      rw: [
        "Gufungwa imyaka myinshi mu nzu y'imbohe, amande akomeye cyane, kwamburwa burundu perimi no gukurikiranwa mu rukiko",
        "Guterwa urwenya n'abapolisi gusa",
        "Kugabanyirizwa ibiciro by'amavuta",
        "Nta cyaha kirimo niba nta wubonye icyapa cyawe"
      ],
      en: [
        "Long-term criminal imprisonment, severe penal fines, lifetime license revocation, and felony prosecution",
        "A light verbal joke from police",
        "Discounted motor oil coupons",
        "No crime if nobody recorded license plate"
      ],
      fr: [
        "Peine d'emprisonnement ferme, très lourdes amendes, annulation définitive du permis et poursuites pénales",
        "Une simple plaisanterie",
        "Des bons de carburant",
        "Aucune infraction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Délit de fuite ni icyaha cy'ubugome n'ubunyamaswa cyo guta umuntu mu kaga; gihanishwa igifungo gikomeye n'amande menshi cyane.",
      en: "Hit-and-run fleeing constitutes a serious criminal felony resulting in immediate arrest, prison sentences, and permanent disqualification.",
      fr: "Le délit de fuite est une infraction pénale majeure sévèrement punie de peines de prison et d'annulation de permis."
    },
    articleRef: "Art. 80"
  },
  {
    id: 361,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho ya mpandeshatu ifite umuzenguruko utukura kirimo igishushanyo cy'abana bafite ibikapu bisobanura iki?",
      en: "What does a triangular warning sign with a red border showing school children with backpacks indicate?",
      fr: "Que signifie un panneau triangulaire de danger illustrant des écoliers portant des cartables?"
    },
    options: {
      rw: [
        "Kwegera agace k'ishuri cyangwa aho abana bakunze gukinira no kwambukira (Endroit fréquenté par les enfants)",
        "Isoko ry'ibikapu by'amashuri",
        "Inzira y'abanyeshuri gusa bitemewe ku modoka",
        "Aho kugurira amakayi"
      ],
      en: [
        "Approaching a school zone or children's playground area with frequent child pedestrian crossings (Endroit fréquenté par les enfants)",
        "Backpack sales warehouse",
        "Student-only pathway barring cars",
        "Stationery notebooks shop"
      ],
      fr: [
        "Zone fréquentée par des enfants aux abords d'écoles ou terrains de jeux (Passage d'écoliers)",
        "Vente de cartables",
        "Voie réservée aux élèves",
        "Papeterie"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira umushoferi kugabanya umuvuduko cyane no kuba maso kubera ko abana b'amashuri bashobora gusimbukira mu muhanda batitonze.",
      en: "School zone warning signs demand reduced speeds and extreme caution due to impulsive child pedestrian behavior.",
      fr: "Ce panneau signale la proximité d'une école où les enfants peuvent traverser la chaussée de façon inattendue."
    },
    articleRef: "Art. 65"
  },
  {
    id: 362,
    category: 'speed',
    question: {
      rw: "Kuki umushoferi atagomba kugendera ku muvuduko muto cyane bidasanzwe mu buryo bubangamira urujya n'uruza (Vitesse anormalement réduite)?",
      en: "Why is driving at an abnormally sluggish creeping speed without valid cause prohibited on public roads?",
      fr: "Pourquoi est-il interdit de circuler à une vitesse anormalement réduite sans raison valable?"
    },
    options: {
      rw: [
        "Bituma habaho umuvundo w'ibinyabiziga (Embouteillage) bigahatira abandi kunyuranaho mu buryo bwateza impanuka",
        "Bituma moteri ishyuha cyane",
        "Bituma amapine asaza vuba",
        "Nta cyo bitwaye kuko kugenda buhoro bitica"
      ],
      en: [
        "It causes severe traffic congestion (Embouteillages) and provokes hazardous impatient overtaking by following drivers",
        "It causes engine overheating",
        "It wears out tires prematurely",
        "It is always fine because slow driving never harms anyone"
      ],
      fr: [
        "Cela crée des embouteillages monstres et incite les usagers bloqués à des dépassements dangereux",
        "Cela chauffe le moteur",
        "Cela use les pneus",
        "Aucun danger"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kugenda buhoro birenze urugero nta mpamvu ifatika biteza impanuka kubera ko bitera umuvundo n'uburakari bwo kunyuranaho nabi.",
      en: "Abnormally slow driving obstructs smooth traffic velocity and precipitates dangerous multi-vehicle overtaking collisions.",
      fr: "Rouler à une lenteur excessive sans motif constitue une entrave à la circulation et une cause fréquente d'accidents."
    },
    articleRef: "Art. 19"
  },
  {
    id: 363,
    category: 'parking',
    question: {
      rw: "Guparika ikinyabiziga mu ntera iri munsi ya metero 15 (15m) mbere cyangwa inyuma y'icyapa gihagararwamo na bisi (Arrêt de bus) bihanishwa iki?",
      en: "Parking within 15 meters before or after an official public bus stop sign is penalized because:",
      fr: "Le stationnement à moins de 15 mètres d'un arrêt d'autobus est interdit car:"
    },
    options: {
      rw: [
        "Bibangamira bisi kwinjira no gusohoka mu mwanya wazo no kwinjiza abagenzi mu mutekano",
        "Bituma abagenzi batishyura itike",
        "Bituma bisi ibura lisansi",
        "Nta kibazo kirimo kuko bisi zifite imbaraga"
      ],
      en: [
        "It prevents public transit buses from docking cleanly at the curb and safely boarding/alighting passengers",
        "It causes passengers to evade ticket fares",
        "It depletes bus fuel supplies",
        "There is no issue because buses are powerful"
      ],
      fr: [
        "Cela empêche les autobus d'accoster le trottoir pour faire monter et descendre les passagers en sécurité",
        "Pour les tickets de bus",
        "Pour le carburant du bus",
        "Aucun problème"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Metero 15 mbere n'inyuma y'icyapa cya bisi zigomba guhora zifunguye kugira ngo bisi zitange umutekano ku bagenzi binjira n'abasohoka.",
      en: "A 15-meter clearance zone around bus stops ensures transit buses can pull completely flush with passenger sidewalk platforms.",
      fr: "La zone de 15 mètres autour des arrêts de bus doit être libre pour permettre l'accostage sécurisé des transports publics."
    },
    articleRef: "Art. 28"
  },
  {
    id: 364,
    category: 'technical',
    question: {
      rw: "Kuki ikinyabiziga kigomba kugira indorerwamo zireba inyuma (Rétroviseurs) zifunguye kandi ziteguye neza?",
      en: "Why must vehicle rearview and side mirrors (Rétroviseurs) remain properly aligned and functional at all times?",
      fr: "Pourquoi les rétroviseurs intérieur et extérieurs doivent-ils être parfaitement réglés et propres?"
    },
    options: {
      rw: [
        "Kugira ngo umushoferi arebe ibiri inyuma n'ibiri mu mbavu z'ikinyabiziga mbere yo gukata, kunyuranaho cyangwa guhagarara",
        "Kugira ngo umushoferi arebe uko umusatsi we umeze",
        "Kugira ngo imodoka igire uburebure buhagije",
        "Nta cyo bimaze iyo ufite ikirahure cy'imbere"
      ],
      en: [
        "To allow the driver to monitor rearward and lateral surrounding traffic before turning, overtaking, or stopping",
        "To allow the driver to inspect facial grooming",
        "To increase overall vehicle length",
        "Mirrors are useless if front windshield exists"
      ],
      fr: [
        "Pour permettre au conducteur de surveiller l'environnement arrière et latéral avant tout virage ou dépassement",
        "Pour se recoiffer",
        "Pour allonger le véhicule",
        "Inutile avec le pare-brise"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Indorerwamo zituma umushoferi abona ibinyabiziga bimuri inyuma n'ibiri mu nguni zihishe (Angles morts) bityo zikabuza impanuka.",
      en: "Rearview mirrors provide critical situational awareness and mitigate blind-spot hazards during lane changes and maneuvers.",
      fr: "Les rétroviseurs assurent le contrôle rétrovisuel obligatoire pour éliminer les angles morts avant toute manœuvre."
    },
    articleRef: "Art. 53"
  },
  {
    id: 365,
    category: 'priority',
    question: {
      rw: "Ku masangano aho amatara yose y'umuhanda apfuye akaba arimo kumyasa umuhondo (Feu jaune clignotant), ni irihe tegeko rihita rikurikizwa?",
      en: "At an intersection where traffic signals are malfunctioning and flashing yellow, which priority rule takes effect?",
      fr: "À un carrefour où tous les feux sont en panne et clignotent au jaune, quelle règle de priorité s'applique?"
    },
    options: {
      rw: [
        "Kubahiriza ibyapa biri ku nkingi z'amatara cyangwa gukurikiza itegeko ry'iburyo (Priorité à droite) niba nta cyapa gihari",
        "Kuvuduka ku muvuduko mwinshi ngo utambuke mbere",
        "Guhagarara iminota mirongo itatu",
        "Guha inzira imodoka yose y'umukara gusa"
      ],
      en: [
        "Obey attached road signposts, or default to the standard right-hand priority rule (Priorité à droite) if unsigned",
        "Accelerate heavily to beat others across",
        "Wait motionless for thirty minutes",
        "Yield solely to black vehicles"
      ],
      fr: [
        "Respecter les panneaux fixés sous les feux ou appliquer la priorité à droite en l'absence de signalisation",
        "Accélérer pour passer en premier",
        "Attendre trente minutes",
        "Céder aux voitures noires"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara ry'umuhondo rimyasa rivuga ko amatara adakora; abashoferi basabwa kwitonda no gukurikiza ibyapa cyangwa itegeko ry'iburyo.",
      en: "Flashing yellow signals indicate deactivated signal control; drivers apply attached signs or default right-hand priority.",
      fr: "Le feu jaune clignotant signale des feux hors service; la priorité est déterminée par les panneaux ou la règle de droite."
    },
    articleRef: "Art. 62"
  },
  {
    id: 366,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo amagambo 'NO PARKING' cyangwa inyuguti ya 'P' yaciwemo umurongo utukura bisobanura iki?",
      en: "What does a circular sign with a red border containing the letter 'P' crossed by a red diagonal bar indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge avec la lettre 'P' barrée d'un trait oblique rouge?"
    },
    options: {
      rw: [
        "Guparika birabujijwe (Stationnement interdit)",
        "Guhagarara akanya gato birabujijwe gusa",
        "Aho guparika ku buntu",
        "Inzira y'abanyamaguru"
      ],
      en: [
        "Parking is prohibited (Stationnement interdit)",
        "Brief stopping is prohibited only",
        "Free unlimited parking zone",
        "Pedestrian walking sidewalk"
      ],
      fr: [
        "Stationnement interdit pour tous les véhicules",
        "Arrêt minute interdit seulement",
        "Parking gratuit illimité",
        "Trottoir pour piétons"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa cya P yaciwemo umurongo kibuza guparika ikinyabiziga aho hantu, ariko kikitubuza guhagarara akanya gato ushyiramo abantu.",
      en: "The crossed 'P' sign forbids extended parking while permitting brief momentary stopping for passenger boarding.",
      fr: "Le panneau 'P barré' interdit le stationnement prolongé mais autorise l'arrêt temporaire de chargement."
    },
    articleRef: "Art. 68"
  },
  {
    id: 367,
    category: 'speed',
    question: {
      rw: "Iyo imvura y'amahindu iguye umuhanda ukuzura amazi (Aquaplanage / Hydroplaning), umushoferi agomba gukora iki?",
      en: "When torrential rain causes water to pool on the asphalt, inducing dynamic hydroplaning (Aquaplanage), what should the driver do?",
      fr: "En cas d'aquaplaning (hydroplanage) sur chaussée inondée par de fortes pluies, que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Kureka gukandagira gaze, kudakandagira feri ku ngufu, no kugumana vola igororotse kugeza amapine yongeye gufata ku butaka",
        "Gukandagira feri yose icyarimwe ukanazunguza vola cyane",
        "Kongera umuvuduko ngo imodoka iguruke amazi",
        "Gufunga amaso ugasenga"
      ],
      en: [
        "Ease off the accelerator, avoid abrupt hard braking, and maintain steering straight until tires regain road traction",
        "Slam the brake pedal to the floor and yank the steering wheel violently",
        "Accelerate heavily to glide across the water surface",
        "Close eyes and pray"
      ],
      fr: [
        "Relâcher l'accélérateur sans freiner brusquement et maintenir le volant droit jusqu'à reprise d'adhérence des pneus",
        "Piler sur le frein et braquer brutalement",
        "Accélérer à fond pour planer",
        "Fermer les yeux"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mu gihe amapine agendera hejuru y'amazi, gukandagira feri bituma imodoka ibirinduka; ugomba kurekura gaze imodoka ikigenza kugeza ifashe.",
      en: "Hydroplaning lifts tires off pavement; easing off throttle without hard braking restores frictional tire contact safely.",
      fr: "L'aquaplaning supprime le contact pneu-sol; il faut relâcher doucement les gaz sans freiner pour rétablir l'adhérence."
    },
    articleRef: "Art. 18"
  },
  {
    id: 368,
    category: 'penalties',
    question: {
      rw: "Kurenza ubushobozi bw'abagenzi bemerewe gutwarwa mu kinyabiziga (Surcharge de passagers / Overloading passengers) bihanishwa iki?",
      en: "Carrying passengers in excess of a vehicle's certified seating capacity (Overloading passengers) is penalized by:",
      fr: "La surcharge de passagers au-delà du nombre de places autorisées sur la carte grise est punie par:"
    },
    options: {
      rw: [
        "Amande y'amategeko kuri buri mugenzi w'umurengera no guhagarika ikinyabiziga kugeza abarengereye bavuyemo",
        "Gushimirwa kuko watabaye abantu benshi",
        "Kugabanyirizwa umusoro ku nyungu",
        "Nta cyaha kirimo niba bose bishimye"
      ],
      en: [
        "Statutory traffic fines per excess passenger and mandatory grounding until surplus occupants are safely discharged",
        "Praise for providing community mobility assistance",
        "Corporate income tax discounts",
        "No violation if all passengers are cheerful"
      ],
      fr: [
        "Amende par passager en surnombre et immobilisation du véhicule jusqu'à débarquement des passagers excédentaires",
        "Félicitations pour le secours",
        "Réduction d'impôts",
        "Aucune infraction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gutwara abagenzi barenze umubare wagenwe bishyira mu kaga ubuzima bwabo kuko haba nta mikandara ihagije kandi imodoka igatakaza feri.",
      en: "Passenger overloading compromises braking efficiency and emergency restraint capacity, triggering mandatory fines and de-boarding.",
      fr: "Le surnombre de passagers compromet la sécurité et la capacité de freinage, entraînant verbalisation et débarquement immédiat."
    },
    articleRef: "Art. 85"
  },
  {
    id: 369,
    category: 'technical',
    question: {
      rw: "Ubugari ntarengwa bw'ikinyabiziga cyose gifite imitwaro cyangwa kidafite (Largeur maximale) ntibugomba kurenza iki mu Rwanda?",
      en: "What is the absolute maximum statutory width (Largeur maximale) allowed for standard motor vehicles on Rwandan roads?",
      fr: "Quelle est la largeur maximale réglementaire autorisée pour tout véhicule standard circulant sur les routes du Rwanda?"
    },
    options: {
      rw: ["Metero 2 na santimetero 50 (2.50 mètres)", "Metero 5 (5m)", "Metero 1 na santimetero 20", "Metero 10"],
      en: ["2.50 meters (2.50m)", "5.0 meters (5m)", "1.20 meters", "10.0 meters"],
      fr: ["2,50 mètres (2,50m)", "5,0 mètres (5m)", "1,20 mètre", "10,0 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ubugari ntarengwa bw'ikinyabiziga mu mategeko y'u Rwanda ni metero 2.50 (kuri frigo bishobora kugera kuri 2.60m).",
      en: "Standard vehicle width is capped at 2.50 meters (2.60m for temperature-controlled refrigerated bodies).",
      fr: "La largeur maximale réglementaire des véhicules ordinaires ne doit pas dépasser 2,50 mètres (2,60 m pour les isothermes)."
    },
    articleRef: "Art. 45"
  },
  {
    id: 370,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo igishushanyo cy'imodoka itwara abagenzi (Basi) gisobanura iki?",
      en: "What does a circular sign with a red border containing an omnibus bus silhouette indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge illustrant un autobus?"
    },
    options: {
      rw: [
        "Inzira ibujijwe amabisi n'imodoka nini zitwara abagenzi (Accès interdit aux autobus)",
        "Inzira yategetswe amabisi gusa",
        "Aho gufatira bisi",
        "Igaraji rya bisi"
      ],
      en: [
        "Access prohibited to passenger buses and coaches (Accès interdit aux autobus)",
        "Mandatory dedicated bus lane",
        "Public bus terminal boarding point",
        "Bus mechanical repair shop"
      ],
      fr: [
        "Accès interdit aux autobus et autocars de transport de personnes",
        "Voie réservée obligatoire pour autobus",
        "Gare routière pour bus",
        "Garage pour bus"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza amabisi kwinjira muri uwo muhanda wenda kubera ko ari muto cyangwa amateme adakomeye.",
      en: "This regulatory sign prohibits passenger buses and coaches from entering the specified roadway.",
      fr: "Ce panneau d'interdiction interdit l'accès de la voie aux véhicules de transport en commun de type autobus."
    },
    articleRef: "Art. 68"
  },
  {
    id: 371,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi asohoka muri parikingi y'inzu ye yinjira mu muhanda nyabagendwa, agomba gukora iki?",
      en: "When exiting a private driveway or off-street garage onto a public street, what priority rule applies?",
      fr: "En sortant d'une propriété privée ou d'un garage pour s'engager sur la voie publique, quelle est la règle?"
    },
    options: {
      rw: [
        "Guhagarara agaha inzira ibinyabiziga byose n'abanyamaguru bari mu muhanda nyabagendwa (Céder le passage à tous les usagers)",
        "Kuvuduka cyane ngo yinjire mbere y'uko abandi bahagera",
        "Kuvuza ihoni gusa agahita yinjira ku ngufu",
        "Gutegeka umuhanda nyabagendwa wose guhagarara"
      ],
      en: [
        "Stop and yield right-of-way to all ongoing vehicles, cyclists, and pedestrians on the public road",
        "Accelerate heavily to beat oncoming traffic",
        "Sound the horn loudly and force entry into traffic",
        "Order all public street traffic to halt"
      ],
      fr: [
        "Marquer l'arrêt et céder la priorité absolue à tous les véhicules, cyclistes et piétons de la voie publique",
        "Accélérer pour s'insérer en force",
        "Klaxonner et passer",
        "Exiger l'arrêt de toute la circulation"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Uva mu rugo cyangwa muri parikingi yigenga nta na rimwe afite priorité; agomba kubanza kureka abakoresha bose umuhanda nyabagendwa bagatambuka.",
      en: "Exiting private property carries zero priority; drivers must yield unconditionally to all public traffic.",
      fr: "Tout conducteur débouchant d'un chemin privé ou garage doit obligatoirement céder le passage à tous les usagers."
    },
    articleRef: "Art. 14"
  },
  {
    id: 372,
    category: 'lights',
    question: {
      rw: "Ni ryari bitemewe gukoresha amatara y'umurabyo (Appels de phares / Flashing headlights) mu muhanda?",
      en: "When is flashing vehicle headlights (Appels de phares) unlawful or dangerous?",
      fr: "Quand l'utilisation des appels de phares est-elle abusive ou dangereuse?"
    },
    options: {
      rw: [
        "Igihe bikozwe mu buryo bwo guhuma amaso abandi bashoferi cyangwa kubakangisha mu buryo buteje impanuka",
        "Igihe uburira umuntu mu ikorosi ribi",
        "Igihe uburira ibinyabiziga ko hari inkangu imbere",
        "Igihe ushaka kwerekana ko wegereye amasangano nijoro"
      ],
      en: [
        "When used to aggressively intimidate, harass, or deliberately dazzle oncoming drivers into losing vision",
        "When signaling blind corner approach at night",
        "When warning of a sudden road landslide ahead",
        "When signaling approach to unlit intersections at night"
      ],
      fr: [
        "Lorsqu'ils sont utilisés pour intimider, agresser ou éblouir volontairement les autres usagers",
        "Pour avertir dans un virage la nuit",
        "Pour prévenir d'un éboulement",
        "À l'approche d'un carrefour non éclairé la nuit"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gukoresha amatara mu buryo bwo guhuma cyangwa gutera ubwoba abandi bashoferi birabujijwe; akoreshwa gusa mu gutanga integuza z'umutekano.",
      en: "Headlight flashing must only serve brief safety warnings; using high beams aggressively to dazzle or intimidate is unlawful.",
      fr: "Les appels de phares ne doivent servir que d'avertissement de sécurité et jamais à éblouir ou agresser d'autres conducteurs."
    },
    articleRef: "Art. 35"
  },
  {
    id: 373,
    category: 'speed',
    question: {
      rw: "Ni uwuhe muvuduko ntarengwa w'ikinyabiziga kigendera ku mapine y'ibiziga by'ibyuma (Véhicule à bandages métalliques) niba cyemerewe?",
      en: "What is the maximum permissible speed for heavy metal-banded non-pneumatic wheeled machines?",
      fr: "Quelle est la vitesse maximale autorisée pour un engin à bandages métalliques rigides?"
    },
    options: {
      rw: ["10 km/h", "40 km/h", "60 km/h", "25 km/h"],
      en: ["10 km/h", "40 km/h", "60 km/h", "25 km/h"],
      fr: ["10 km/h", "40 km/h", "60 km/h", "25 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga bifite amapine y'ibyuma bidafite umwuka bishobora kwangiza kaburimbo bityo umuvuduko wabyo ntushobora kurenza 10 km/h.",
      en: "Steel-wheeled machinery inflicts heavy structural damage to road pavements, restricting maximum speed to 10 km/h.",
      fr: "Les véhicules à bandages métalliques détériorent la chaussée et ne peuvent dépasser 10 km/h."
    },
    articleRef: "Art. 18"
  },
  {
    id: 374,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Ikorosi ribi cyane' (Virage dangereux / Hazardous curve) rirangwa n'iki?",
      en: "What characterizes a hazardous sharp bend (Virage dangereux)?",
      fr: "Qu'est-ce qui caractérise un virage dangereux (Virage dangereux)?"
    },
    options: {
      rw: [
        "Ikorosi rifite igipimo kigoramye cyane gituma umushoferi adashobora kubona imbere no kugendera ku muvuduko usanzwe mu mutekano",
        "Umuhanda ugororotse neza nk'urushinge",
        "Ikiraro kinyura hejuru y'amazi",
        "Amasangano ya gari ya moshi"
      ],
      en: [
        "A sharp road curve with obscured forward visibility requiring mandatory deceleration to avoid lateral centrifugal skidding",
        "A perfectly straight arrow highway",
        "An elevated water bridge viaduct",
        "A railway level crossing"
      ],
      fr: [
        "Une courbe serrée masquant la visibilité vers l'avant et imposant un ralentissement pour éviter la sortie de route",
        "Une ligne droite parfaite",
        "Un viaduc",
        "Un passage à niveau"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amakorosi mabi asaba kugabanya umuvuduko cyane mbere yo kuyageramo kugira ngo ingufu za santarifige (Force centrifuge) zitagutera hanze y'umuhanda.",
      en: "Hazardous bends present sharp radii and blind spots, requiring deceleration before steering input to prevent rollover.",
      fr: "Les virages dangereux imposent une réduction préalable de la vitesse pour contrer la force centrifuge."
    },
    articleRef: "Art. 2"
  },
  {
    id: 375,
    category: 'penalties',
    question: {
      rw: "Kurenza ubuhagarike ntarengwa bw'ikinyabiziga cya metero 4.30 (Hauteur maximale de 4.30m) utabifitiye uruhushya bihanishwa iki?",
      en: "Exceeding the legal maximum vehicle vehicle height limit of 4.30 meters without exceptional convoy authorization is penalized by:",
      fr: "Le dépassement de la hauteur maximale légale de 4,30 mètres sans autorisation spéciale de convoi exceptionnel est puni par:"
    },
    options: {
      rw: [
        "Guhagarikirwa ikinyabiziga, amande y'amategeko no gutegekwa gupakurura umutwaro w'umurengera ako kanya",
        "Gushimirwa kubera kwikorera ibintu byinshi",
        "Nta cyaha kirimo",
        "Kugabanyirizwa ibiciro by'amateme"
      ],
      en: [
        "Vehicle immobilization, heavy statutory fines, and mandatory on-the-spot unloading of surplus cargo",
        "Praise for high cargo volumetric capacity",
        "No violation",
        "Bridge toll fee reductions"
      ],
      fr: [
        "Immobilisation du véhicule, forte amende et obligation de décharger immédiatement l'excédent de hauteur",
        "Félicitations pour le volume",
        "Aucune sanction",
        "Réduction de péage"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ubuhagarike burenze metero 4.30 bushobora gucagagura insinga z'amashanyarazi no kugonga ibiraro bityo bishyirwa ku ruhande bigahanirwa bikomeye.",
      en: "Overheight vehicles tear down electrical utility wires and collide with highway bridge spans, requiring immediate impoundment.",
      fr: "Les chargements de plus de 4,30 m arrachent les câbles et heurtent les ponts; ils font l'objet d'immobilisation et amende."
    },
    articleRef: "Art. 45"
  },
  {
    id: 376,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende gifite ubuso bw'umukara kirimo amagambo 'ROUTE BARRÉE / DEVIATION' gisobanura iki?",
      en: "What does an orange/yellow rectangular construction sign reading 'ROUTE BARRÉE / DÉVIATION' mean?",
      fr: "Que signifie un panneau rectangulaire temporaire portant l'inscription 'ROUTE BARRÉE / DÉVIATION'?"
    },
    options: {
      rw: [
        "Umuhanda wafunzwe burundu kubera imirimo cyangwa ibyago, ibinyabiziga bikaba bigomba guca mu yindi nzira (Déviation)",
        "Umuhanda mushya w'imodoka zihuta gusa",
        "Isoko ry'imyenda",
        "Aho guhagarara kureba televiziyo"
      ],
      en: [
        "Roadway closed to traffic due to construction or hazards; all vehicles must follow the temporary detour route (Déviation)",
        "New expressway for high-speed driving only",
        "Apparel clothing marketplace",
        "Outdoor television cinema park"
      ],
      fr: [
        "Chaussée fermée à la circulation pour travaux ou accident; obligation de suivre l'itinéraire de déviation",
        "Nouvelle voie rapide",
        "Marché de vêtements",
        "Cinéma en plein air"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kimenyesha ko umuhanda w'imbere utari kugendwamo bityo abashoferi bakaba basabwa gukurikiza amakerekezo y'inzira y'inzibacyuho (Déviation).",
      en: "Road closure and detour signs inform motorists that travel ahead is barred, requiring adherence to detour route markings.",
      fr: "Ce panneau signale la fermeture de la voie normale et guide les conducteurs vers l'itinéraire de contournement."
    },
    articleRef: "Art. 72"
  },
  {
    id: 377,
    category: 'priority',
    question: {
      rw: "Iyo umupolisi ari mu masangano ahagaze akureba imbonankubone cyangwa akureba umugongo (De face ou de dos), icyo kimenyetso gisobanura iki?",
      en: "When a traffic police officer stands facing you directly front-on or back-on (De face ou de dos), what does this signal mean?",
      fr: "Lorsqu'un agent de la circulation vous fait face ou vous tourne le dos (De face ou de dos), que signifie cette position?"
    },
    options: {
      rw: [
        "Guhagarara burundu (Arrêt obligatoire pour tous les usagers concernés)",
        "Gutambuka ku muvuduko mwinshi",
        "Gukata iburyo gusa",
        "Kuvuza ihoni kuri polisi"
      ],
      en: [
        "Mandatory complete stop for all approaching road users facing the officer's front or back",
        "Pass through at elevated speed",
        "Turn right only",
        "Sound horn at police officer"
      ],
      fr: [
        "Arrêt obligatoire pour tous les usagers vers lesquels l'agent est tourné de face ou de dos",
        "Passer rapidement",
        "Tourner à droite uniquement",
        "Klaxonner l'agent"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo umupolisi aguhagaze imbere akureba cyangwa aguteye umugongo bisobanura 'STOP'; iyo ahagaze yambitse amaboko areba ku mpande, abo mu mpande nibo batambuka.",
      en: "Facing an officer's chest or back equals a solid RED stop light; facing an officer's profile flanks indicates authorization to proceed.",
      fr: "La position de face ou de dos d'un agent de circulation commande l'arrêt absolu, équivalent au feu rouge."
    },
    articleRef: "Art. 7"
  },
  {
    id: 378,
    category: 'parking',
    question: {
      rw: "Kuki bibujijwe guparika ikinyabiziga mu masangano y'inzira ya gari ya moshi (Passage à niveau)?",
      en: "Why is parking on or within railway level crossings (Passage à niveau) strictly prohibited?",
      fr: "Pourquoi le stationnement est-il formellement interdit sur les voies et abords des passages à niveau?"
    },
    options: {
      rw: [
        "Bishyira mu kaga gakomeye ubuzima bw'abantu n'ikinyabiziga kugongwa na gari ya moshi idashobora guhagarara vuba",
        "Kugira ngo amabuye ya gari ya moshi adakendera",
        "Kugira ngo gari ya moshi idasaza",
        "Nta cyaha kirimo niba gari ya moshi itaraza"
      ],
      en: [
        "It creates catastrophic hazards of train-car collisions because heavy trains cannot stop rapidly",
        "To preserve railway ballast stones",
        "To prevent train wear and tear",
        "No crime if no train is currently approaching"
      ],
      fr: [
        "Cela expose à un risque mortel de collision ferroviaire majeure, les trains ne pouvant s'arrêter rapidement",
        "Pour préserver le ballast",
        "Pour le train",
        "Aucune infraction sans train"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gari ya moshi ikenera intera ya kilometero imwe cyangwa zirenga kugira ngo ihagarare; guparika ku nzira yayo ni urupfu rubi.",
      en: "Trains require exceptional distances to brake to a halt; blocking railroad tracks invites fatal structural impacts.",
      fr: "L'inertie d'un train exige plusieurs centaines de mètres pour s'arrêter; bloquer les voies est un acte extrêmement dangereux."
    },
    articleRef: "Art. 28"
  },
  {
    id: 379,
    category: 'lights',
    question: {
      rw: "Kuki ikinyabiziga kigomba kugira itara rimurika icyapa kiranga numero zacyo inyuma (Éclairage de plaque d'immatriculation)?",
      en: "Why must vehicles be equipped with a functional rear registration license plate light?",
      fr: "Pourquoi le dispositif d'éclairage de la plaque d'immatriculation arrière est-il obligatoire?"
    },
    options: {
      rw: [
        "Kugira ngo numero za plaki zigaragare neza nijoro mu ntera itari munsi ya metero 20 (20m)",
        "Kugira ngo plaki itazana ingese",
        "Kugira ngo ikinyabiziga kigire amatara menshi y'umuriro",
        "Nta tegeko ribisaba mu Rwanda"
      ],
      en: [
        "To ensure the license plate number is clearly legible at night from a distance of at least 20 meters",
        "To prevent plate rust corrosion",
        "To illuminate excess vehicle styling glow",
        "No legal mandate exists in Rwanda"
      ],
      fr: [
        "Pour que la plaque minéralogique arrière soit parfaitement lisible la nuit à une distance d'au moins 20 mètres",
        "Pour éviter la rouille",
        "Pour décorer le véhicule",
        "Aucune obligation légale"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara rya plaki rigomba gutuma inomero z'imodoka zisomeka neza nijoro muri metero 20 kuri polisi n'abandi.",
      en: "Rear registration illumination ensures night-time vehicle legibility from at least 20 meters away under traffic statutes.",
      fr: "L'éclairage de plaque arrière doit rendre les caractères lisibles la nuit à une distance minimale de 20 mètres."
    },
    articleRef: "Art. 33"
  },
  {
    id: 380,
    category: 'speed',
    question: {
      rw: "Iyo umushoferi anyura ku banyamaguru bari ku mazi, mu byondo cyangwa ibinogo birimo amazi (Flaques d'eau), agomba gukora iki?",
      en: "When driving past pedestrians along roads covered with standing rainwater puddles or mud, what must the driver do?",
      fr: "En passant près de piétons le long de chaussées comportant des flaques d'eau ou de boue, que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Kugabanya umuvuduko cyane kugira ngo atabateraho ibyondo n'amazi mabi bibangamiye ubumuntu",
        "Kongera umuvuduko cyane ngo abamenereho amazi yose",
        "Kuvuza ihoni ryinshi ngo bahunge bishwe n'ubwoba",
        "Gufunga amadirishya ye gusa akitambutsiriza"
      ],
      en: [
        "Substantially decelerate to avoid splashing mud and dirty water onto pedestrians",
        "Accelerate heavily to douse pedestrians in water plumes",
        "Honk aggressively to intimidate pedestrians into fleeing",
        "Close personal windows and drive through heedlessly"
      ],
      fr: [
        "Ralentir considérablement pour éviter d'éclabousser les piétons avec de l'eau sale ou de la boue",
        "Accélérer pour arroser les piétons",
        "Klaxonner pour les effrayer",
        "Fermer ses vitres et accélérer"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kumenaho abanyamaguru amazi n'ibyondo ni ikosa rihanirwa mu mategeko y'imyitwarire myiza mu muhanda kandi bitera impanuka.",
      en: "Splashing dirty standing puddle water onto pedestrians violates statutory highway etiquette and safety regulations.",
      fr: "Éclabousser délibérément les piétons avec l'eau de la chaussée constitue une infraction d'incivilité routière sanctionnée."
    },
    articleRef: "Art. 6"
  },
  {
    id: 381,
    category: 'technical',
    question: {
      rw: "Ni ikihe gipimo ntarengwa cy'amavuta yo mu maraso yemewe ku mushoferi utwara ikinyabiziga gitwara abagenzi mu buryo bwa kinyamwuga (Taux d'alcoolémie professionnel)?",
      en: "What is the statutory blood alcohol concentration limit for professional commercial passenger drivers in Rwanda?",
      fr: "Quelle est la limite légale de taux d'alcoolémie pour les chauffeurs professionnels de transport public au Rwanda?"
    },
    options: {
      rw: [
        "Zeroke (0.00 g/l) - Nta n'igitonyanga cy'inzoga cyemewe ku bashoferi b'umwuga (Tolérance zéro)",
        "Garama 5 kuri litiro y'amaraso",
        "Ibirahure bitanu bya byeri",
        "Nta rugero rutegetswe"
      ],
      en: [
        "Strict Zero (0.00 g/l) - Absolute zero alcohol tolerance for professional commercial passenger drivers",
        "5 grams per liter of blood",
        "Up to five pints of beer",
        "No legal limit exists"
      ],
      fr: [
        "Zéro absolu (0,00 g/l) - Tolérance zéro pour tous les conducteurs professionnels de transport de personnes",
        "5 grammes par litre",
        "Cinq verres de bière",
        "Aucune limite légale"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Abashoferi b'umwuga batwara abagenzi n'amakamyo bategetswe kugira 0.00% y'inzoga mu maraso; kunywa agatonyanga kamwe birabujijwe.",
      en: "Commercial public transport operators are held to absolute zero-tolerance alcohol thresholds (0.00 g/l) for public protection.",
      fr: "Les chauffeurs professionnels de transport en commun sont soumis à une politique stricte de tolérance zéro alcool."
    },
    articleRef: "Art. 80"
  },
  {
    id: 382,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende gifite ubuso bw'umukara cyangwa ubururu kigaragaza inyuguti ya 'SOS' na telefone gisobanura iki?",
      en: "What does an emergency service sign depicting a telephone handset and the letters 'SOS' indicate?",
      fr: "Que signifie un panneau de service illustrant un combiné téléphonique et la mention 'SOS'?"
    },
    options: {
      rw: [
        "Aho guhamagarira ubutabazi bwihuse bw'impanuka (Poste d'appel d'urgence / Borne SOS)",
        "Aho kugurira amakarita yo guhamagara",
        "Inzu yo kureberamo televiziyo",
        "Aho kubariza amakuru y'isoko"
      ],
      en: [
        "Emergency roadside telephone call box for reporting accidents and breakdowns (Poste d'appel d'urgence / Borne SOS)",
        "Airtime calling scratchcard kiosk",
        "Public television broadcast center",
        "Agricultural crop commodity market"
      ],
      fr: [
        "Poste d'appel d'urgence (Borne SOS) pour alerter directement les secours en cas d'accident ou panne",
        "Kiosque de cartes téléphoniques",
        "Centre de télévision",
        "Bourse agricole"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa cyerekana aho telefone y'ubutabazi ya SOS iri ku muhanda ifasha guhita uhamagara Polisi n'imbangukiragutabara ku buntu.",
      en: "SOS telephone call points provide direct toll-free emergency links to police dispatch and medical rescue services.",
      fr: "Les bornes d'appel d'urgence SOS permettent la liaison directe et gratuite avec les services de secours routiers."
    },
    articleRef: "Art. 71"
  },
  {
    id: 383,
    category: 'priority',
    question: {
      rw: "Iyo ikinyabiziga cyinjira mu muhanda urombeje kiva mu gasozi k'amabuye cyangwa mu murima w'ubuhinzi (Chemin de terre ou exploitation agricole), kigomba gukora iki?",
      en: "When a vehicle emerges from an unpaved farm track or agricultural field onto a paved highway, what priority rule applies?",
      fr: "Lorsqu'un véhicule débouche d'un chemin de terre ou d'une exploitation agricole sur une route goudronnée, que doit-il faire?"
    },
    options: {
      rw: [
        "Guhagarara agaha inzira ibinyabiziga byose biri ku muhanda wa kaburimbo (Céder le passage)",
        "Guhita yinjira ku muvuduko kuko aturutse iburyo",
        "Kuvuza ihoni gusa akitambutsiriza",
        "Guhagarika umuhanda wose"
      ],
      en: [
        "Halt and yield right-of-way to all vehicles traveling on the paved public highway",
        "Drive right in relying on right-hand priority",
        "Sound the horn and charge through",
        "Halt the entire arterial highway"
      ],
      fr: [
        "Marquer l'arrêt et céder le passage à tous les véhicules circulant sur la route principale goudronnée",
        "Passer en invoquant la priorité à droite",
        "Klaxonner et passer",
        "Bloquer la route"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Uruhande rw'iburyo ntirukora ku binyabiziga bituruka mu mayira y'igitaka cyangwa mu mirima byinjira muri kaburimbo; bagomba kubanza guha inzira abari kuri kaburimbo bose.",
      en: "Right-hand priority does NOT apply to vehicles joining paved highways from dirt tracks or private agricultural lanes.",
      fr: "La priorité à droite ne s'applique pas aux véhicules débouchant d'un chemin de terre ou d'une propriété sur une voie asphaltée."
    },
    articleRef: "Art. 14"
  },
  {
    id: 384,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Ikinyabiziga kigendeshwa n'ingufu z'umubiri' (Véhicule à propulsion humaine) risobanura iki?",
      en: "What defines a 'Human-powered vehicle' (Véhicule à propulsion humaine)?",
      fr: "Que désigne un 'Véhicule à propulsion humaine'?"
    },
    options: {
      rw: [
        "Ikinyabiziga kigendeshwa n'imbaraga z'imitsi y'umuntu ugikoresha nk'igare cyangwa akanyabiziga k'abamugaye gasunurwa n'amaboko",
        "Imodoka ya lisansi ifite ingufu nyinshi",
        "Ikamyo ya mazutu",
        "Indege ifite moteri ebyiri"
      ],
      en: [
        "A vehicle propelled exclusively by the muscular effort of the rider, such as a bicycle or manual wheelchair",
        "A high-horsepower gasoline sedan",
        "A heavy diesel cargo truck",
        "A twin-engine aircraft"
      ],
      fr: [
        "Un véhicule propulsé exclusivement par l'énergie musculaire de son utilisateur, tel qu'une bicyclette ou fauteuil roulant",
        "Une berline à essence puissante",
        "Un camion diesel",
        "Un avion bimoteur"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amagare n'ingorofani bisunikwa n'imbaraga z'abantu bifatwa nk'ibinyabiziga bidafite moteri kandi bigomba kubahiriza amategeko yabyo.",
      en: "Pedal bicycles and muscle-driven carriages constitute human-powered vehicles subject to applicable road traffic statutes.",
      fr: "Les cycles et engins actionnés par la force humaine sont des véhicules non motorisés régis par le code de la route."
    },
    articleRef: "Art. 2"
  },
  {
    id: 385,
    category: 'parking',
    question: {
      rw: "Ni gute umushoferi agomba guparika ikinyabiziga mu muhanda uhanamye umanuka (Pente descendante)?",
      en: "How must a driver park a vehicle facing downhill on a steep gradient road slope?",
      fr: "Comment le conducteur doit-il stationner son véhicule sur une forte pente descendante?"
    },
    options: {
      rw: [
        "Gufata feri y'intoki, gushyira vitesse mu gusubira inyuma (Marche arrière), no guhindura amapine areba ku nkombe y'umuhanda (Trottoir)",
        "Gusiga ikinyabiziga muri 'Point mort' idafite feri",
        "Kureba amapine mu kirere",
        "Gushyira ibuye munsi y'intebe y'umushoferi"
      ],
      en: [
        "Engage handbrake, select reverse gear (Marche arrière), and turn front wheels towards the roadside curb",
        "Leave gearbox in neutral (Point mort) without handbrake",
        "Turn wheels towards the sky",
        "Place a stone under the driver's seat"
      ],
      fr: [
        "Serrer le frein à main, engager la marche arrière et braquer les roues avant vers la bordure du trottoir",
        "Laisser au point mort sans frein",
        "Braquer vers le ciel",
        "Poser une pierre sous son siège"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo uhagaze mu musozi umanuka, guhindura amapine areba ku nkombe no gushyira muri marche arrière bituma imodoka idashobora kwiruka igihe feri zadohotse.",
      en: "Downhill parking requires curb-angled wheels and reverse gear locking to prevent catastrophic runaway rollback.",
      fr: "Sur pente descendante, braquer les roues vers le trottoir et enclencher la marche arrière bloque mécaniquement le véhicule."
    },
    articleRef: "Art. 29"
  },
  {
    id: 386,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho ya mpandeshatu ifite umuzenguruko utukura kirimo igishushanyo cy'igitare kinini kigwa mu muhanda gisobanura iki?",
      en: "What does a triangular warning sign with a red border depicting falling boulders indicate?",
      fr: "Que signifie un panneau triangulaire de danger illustrant des chutes de pierres et blocs de roche?"
    },
    options: {
      rw: [
        "Kwegera agace karangwamo inkangu no kugwa kw'amabuye mu muhanda (Risque d'éboulement ou de chutes de pierres)",
        "Aho kugurira amabuye yo kubakisha",
        "Isoko ry'amabuye y'agaciro",
        "Aho gucururiza amakara"
      ],
      en: [
        "Approaching a mountainous zone with severe landslide and falling rock hazard (Chutes de pierres / Éboulement)",
        "Construction masonry stone depot",
        "Gemstone mineral trading market",
        "Charcoal distribution center"
      ],
      fr: [
        "Zone montagneuse exposée à des risques d'éboulements, glissements de terrain et chutes de pierres",
        "Dépôt de pierres à bâtir",
        "Marché de pierres précieuses",
        "Vente de charbon"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira cyane mu misozi y'u Rwanda ko amabuye n'igitaka bishobora kugwa mu muhanda bityo umushoferi akaba agomba kugenda yitonze cyane.",
      en: "Falling rock hazard signs warn drivers through mountain cuts of boulder hazards and blocked roadway sections.",
      fr: "Ce panneau met en garde contre la présence possible de rochers tombés sur la chaussée en région montagneuse."
    },
    articleRef: "Art. 65"
  },
  {
    id: 387,
    category: 'speed',
    question: {
      rw: "Kuki umushoferi agomba guhora yiteguye kugabanya umuvuduko igihe abonye amatungo cyangwa inyamaswa zikikiye umuhanda?",
      en: "Why must a driver immediately decelerate upon seeing livestock herds or animals grazing along the road verge?",
      fr: "Pourquoi le conducteur doit-il immédiatement ralentir à la vue d'animaux ou troupeaux longeant la route?"
    },
    options: {
      rw: [
        "Kubera ko inyamaswa n'amatungo bitagira ubwenge bwo gutinya imodoka kandi bishobora gusimbukira mu muhanda bitunguranye",
        "Kugira ngo asuhuze umushumba",
        "Kugira ngo agure inka",
        "Nta mpamvu kuko inka zifite amategeko yazo"
      ],
      en: [
        "Because livestock lack human traffic judgment and can abruptly dart across the roadway in panic",
        "To greet the cattle herdsman",
        "To negotiate purchasing livestock",
        "No reason since cattle have their own traffic rules"
      ],
      fr: [
        "Car les animaux ont des réactions imprévisibles et peuvent faire irruption sur la chaussée sous l'effet de la panique",
        "Pour saluer le berger",
        "Pour acheter une vache",
        "Aucune raison"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatungo ntiyakwitegereza niba imodoka ije; kuyagendera hafi ku muvuduko mwinshi biteza impanuka zikomeye zo kuyagonga.",
      en: "Animals react unpredictably to engine noise; slow cautious speeds prevent disastrous livestock collisions.",
      fr: "Les troupeaux d'animaux sont imprévisibles; l'approche prudente à vitesse très réduite est une obligation stricte."
    },
    articleRef: "Art. 18"
  },
  {
    id: 388,
    category: 'technical',
    question: {
      rw: "Umuyobozi w'ikinyabiziga agomba kugira ikihe cyangombwa cyemeza ko yishyuye ubwishingizi bw'impanuka (Assurance automobile obligatoire)?",
      en: "What legal insurance documentation must a driver carry to prove statutory third-party liability insurance coverage?",
      fr: "Quel document officiel obligatoire atteste de la souscription de l'assurance responsabilité civile automobile?"
    },
    options: {
      rw: [
        "Icyemezo cy'ubwishingizi gifite agaciro kiriho ikirango gishyirwa ku kirahure cy'imbere (Attestation et vignette d'assurance valide)",
        "Inyemezabwishyu yo kugura imyenda",
        "Ibaruwa y'umuyobozi w'umudugudu gusa",
        "Ifoto y'imodoka yafashwe na telefone"
      ],
      en: [
        "A valid official vehicle insurance certificate and visible insurance windshield vignette sticker",
        "Clothing retail purchase receipt",
        "Local village leader handwritten note",
        "Smartphone photo snapshot of the car"
      ],
      fr: [
        "L'attestation et la vignette d'assurance automobile obligatoire en cours de validité apposée sur le pare-brise",
        "Un reçu d'achat de vêtements",
        "Une lettre du chef de village",
        "Une photo sur smartphone"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kugendera mu muhanda nta bwishingizi bwa 'Responsabilité civile' bufite agaciro ni icyaha gihanishwa gufatirwa imodoka n'amande akomeye.",
      en: "Operating a motor vehicle without mandatory third-party liability insurance leads to instant impoundment and penal prosecution.",
      fr: "Le défaut d'assurance automobile obligatoire entraîne la mise en fourrière immédiate du véhicule et de lourdes poursuites."
    },
    articleRef: "Art. 85"
  },
  {
    id: 389,
    category: 'penalties',
    question: {
      rw: "Gukoresha ikirango cyangwa plaque y'immodoka y'undi (Usurpation de plaque d'immatriculation / Fraudulent plates) bihanishwa iki?",
      en: "Affixing false or forged registration license plates to a motor vehicle is punished by:",
      fr: "L'usage de fausses plaques d'immatriculation ou plaques usurpées sur un véhicule est sanctionné par:"
    },
    options: {
      rw: [
        "Gufungwa imyaka mu nzu y'imbohe, amande y'ubugizi bwa nabi, no gufatirwa ikinyabiziga burundu",
        "Guterwa urwenya na Polisi",
        "Kugabanyirizwa umusoro ku bicuruzwa",
        "Nta cyaha kirimo niba imodoka igenda neza"
      ],
      en: [
        "Multi-year criminal prison sentences, heavy criminal fines, and permanent vehicle confiscation",
        "A light joke from police officers",
        "Merchandise sales tax reduction",
        "No crime if the car drives properly"
      ],
      fr: [
        "Peine d'emprisonnement ferme de plusieurs années, lourdes amendes pénales et confiscation du véhicule",
        "Une simple plaisanterie",
        "Une réduction fiscale",
        "Aucune infraction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guhimba no gukoresha plaque y'ubujura ni icyaha cy'ubugizi bwa nabi gishingiye ku guhisha umwirondoro w'ikinyabiziga no gukora ibyaha.",
      en: "Number plate fraud is a severe criminal forgery felony punishable by prison sentences and complete vehicle forfeiture.",
      fr: "L'usage de fausses plaques constitue un délit pénal de faux et usage de faux puni de prison ferme et confiscation."
    },
    articleRef: "Art. 80"
  },
  {
    id: 390,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo igishushanyo cy'ingorofani n'umunyamaguru uyisunika (Brouette / Charrette à bras) gisobanura iki?",
      en: "What does a circular sign with a red border depicting a hand-pushed handcart or wheelbarrow indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge illustrant une charrette à bras ou brouette?"
    },
    options: {
      rw: [
        "Inzira ibujijwe ingorofani n'udufaranga bisunikwa n'amaboko (Accès interdit aux charrettes à bras)",
        "Isoko ryo kugurisha ingorofani",
        "Inzira yategetswe ingorofani gusa",
        "Aho gupakururira imifuka y'isima"
      ],
      en: [
        "Access prohibited to hand-pushed handcarts and wheelbarrows (Accès interdit aux charrettes à bras)",
        "Wheelbarrow retail sales market",
        "Dedicated handcart highway only",
        "Cement bag transshipment dock"
      ],
      fr: [
        "Accès interdit aux charrettes à bras, diables et brouettes manuelles",
        "Vente de brouettes",
        "Piste réservée aux charrettes",
        "Quai de déchargement de ciment"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza ingorofani z'amaboko kwinjira mu mihanda migari kubera ko ziba zigenda buhoro cyane zigateza akavuyo n'impanuka.",
      en: "Prohibits slow manual handcarts and wheelbarrows from congesting and endangering high-speed express arterial corridors.",
      fr: "Ce panneau interdit l'accès des charrettes à bras sur les axes rapides pour prévenir ralentissements et accidents."
    },
    articleRef: "Art. 68"
  },
  {
    id: 391,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi agiye kwinjira mu muhanda urombeje aturutse mu gipangu cy'ishuri cyangwa cy'ibitaro, agomba gukora iki?",
      en: "When pulling out of a school or hospital compound into the public street, what priority rule applies?",
      fr: "En sortant de l'enceinte d'une école ou d'un hôpital pour s'engager sur la route, que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Guhagarara agaha inzira ibinyabiziga byose n'abanyamaguru bari mu muhanda mbere yo kwinjira (Céder le passage absolu)",
        "Kuvuduka cyane ngo atambuke mbere",
        "Kuvuza ihoni gusa akigendera ku ngufu",
        "Gutegeka umuhanda wose guhagarara"
      ],
      en: [
        "Stop and yield absolute priority to all vehicles and pedestrians on the roadway before joining traffic",
        "Accelerate heavily to beat oncoming traffic",
        "Honk loudly and push aggressively into the street",
        "Order all oncoming traffic to stop"
      ],
      fr: [
        "S'arrêter et céder la priorité absolue à tous les usagers de la voie publique avant de s'insérer",
        "Accélérer pour passer en force",
        "Klaxonner et forcer le passage",
        "Exiger l'arrêt de tous les véhicules"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ukinjira mu muhanda avuye mu kigo cyangwa mu nzu ntagira na rimwe uburenganzira bwo gutambuka mbere y'abasanzwe mu muhanda.",
      en: "Vehicles emerging from institutional facilities into public streets possess zero priority and must yield unconditionally.",
      fr: "Tout véhicule quittant une enceinte privée ou publique doit céder le passage à l'ensemble du trafic routier."
    },
    articleRef: "Art. 14"
  },
  {
    id: 392,
    category: 'lights',
    question: {
      rw: "Itara ry'icyatsi kibisi riri ku kimenyetso cy'amatara y'umuhanda ryemerera umushoferi gukora iki?",
      en: "What authorization does a solid green traffic light signal grant to approaching motorists?",
      fr: "Quelle autorisation le feu vert fixe confère-t-il au conducteur à une intersection?"
    },
    options: {
      rw: [
        "Gutambuka agakomeza imbere, akaba yakata iburyo cyangwa ibumoso igihe nta cyapa kibibuza kandi umuhanda uri imbere ukinguye",
        "Guhagarara umwanya munini agasinzira",
        "Guhita asubira inyuma umuvuduko mwinshi",
        "Gutegeka abanyamaguru bose kwiruka"
      ],
      en: [
        "Proceed straight, or turn right/left unless prohibited by signs, provided the junction exit path is clear",
        "Stop for an extended nap",
        "Immediately shift into high-speed reverse",
        "Order all pedestrians to sprint"
      ],
      fr: [
        "Passer tout droit ou tourner à droite/gauche sous réserve que le carrefour soit dégagé et sans interdiction",
        "S'arrêter pour dormir",
        "Reculer rapidement",
        "Obliger les piétons à courir"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara ry'icyatsi ryemerera gutambuka ariko umushoferi ntakwiye kwinjira mu masangano niba abona ko umuhanda imbere wafunze (Embouteillage).",
      en: "Green lights permit passage provided the intersection exit is unobstructed, avoiding gridlock blockades.",
      fr: "Le feu vert autorise le franchissement du carrefour à condition que la sortie soit suffisamment dégagée pour ne pas bloquer l'intersection."
    },
    articleRef: "Art. 62"
  },
  {
    id: 393,
    category: 'parking',
    question: {
      rw: "Kuki bibujijwe guparika ikinyabiziga ahantu hari umurongo w'umuzenguruko w'ibara ry'umuhondo rishyushye (Zone zébrée / Îlot directionnel)?",
      en: "Why is driving or parking on hatched chevron painted traffic islands (Marquage en zébrures) strictly illegal?",
      fr: "Pourquoi le franchissement et le stationnement sur les îlots directionnels zébrés au sol sont-ils formellement interdits?"
    },
    options: {
      rw: [
        "Kuko ibyo bice byashyiriweho kuyobora inzira z'ibinyabiziga no gutandukanya imihanda, guparika bikaba byateza impanuka ikomeye",
        "Kugira ngo irangi ry'umuhondo ridafutuka",
        "Kugira ngo amapine atagira ibara ry'umuhondo",
        "Nta cyaha kirimo kuko ari umwanya mwiza wo guparika"
      ],
      en: [
        "Because painted hatched chevron islands physically channel traffic streams; stopping on them provokes serious collisions",
        "To prevent yellow paint wear",
        "To prevent yellow staining on tires",
        "No crime because it provides convenient parking space"
      ],
      fr: [
        "Car les zébrures canalisent les flux de circulation et séparent les voies; y stationner crée un danger d'accident majeur",
        "Pour ne pas effacer la peinture",
        "Pour les pneus",
        "Aucune infraction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ahari ibishushanyo by'imirongo y'inzibacyuho (Zèbres) nta kinyabiziga cyemerewe kurenga cyangwa kuhaparika kuko harinda amasangano.",
      en: "Chevron hatched markings define protected channelization buffer zones; crossing or parking on them is strictly banned.",
      fr: "Les zones de zébrures sont des îlots virtuels infranchissables réservés au guidage géométrique de la circulation."
    },
    articleRef: "Art. 74"
  },
  {
    id: 394,
    category: 'speed',
    question: {
      rw: "Kuki umushoferi agomba kugabanya umuvuduko igihe abonye amatara yo ku nzu y'abaturage cyangwa akabari yaka ku ruhande rw'umuhanda nijoro?",
      en: "Why must drivers reduce speed when passing vibrant commercial storefronts or night entertainment venues?",
      fr: "Pourquoi le conducteur doit-il ralentir en longeant des zones commerciales ou établissements nocturnes animés?"
    },
    options: {
      rw: [
        "Kubera ko abantu bashobora gusohoka basindye cyangwa barangaye bakiruka mu muhanda batitonze",
        "Kugira ngo yumve umuziki ucurangwa",
        "Kugira ngo arebe abakobwa n'abahungu bariyo",
        "Nta mpamvu y'amategeko"
      ],
      en: [
        "Because impaired or distracted patrons may unexpectedly stumble or step into active traffic lanes",
        "To enjoy the background music",
        "To watch social patrons outside",
        "No statutory reason exists"
      ],
      fr: [
        "Car des clients distraits ou alcoolisés peuvent brusquement déboucher sur la chaussée sans précaution",
        "Pour écouter la musique",
        "Pour observer les gens",
        "Aucune raison"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Hafi y'utubari n'amaduka nijoro haba hari abanyamaguru benshi bashobora kwinjira mu muhanda batarebye bityo kugabanya umuvuduko birinda impanuka.",
      en: "Nightlife zones present high pedestrian unpredictability and intoxication risks, necessitating cautious speed reduction.",
      fr: "La proximité de lieux de vie nocturne présente un danger élevé de piétons titubants exigeant une vitesse très prudente."
    },
    articleRef: "Art. 18"
  },
  {
    id: 395,
    category: 'technical',
    question: {
      rw: "Kuki umushoferi w'ikamyo cyangwa bisi agomba kugira akuma ko gupima umuvuduko n'amasaha y'akazi (Tachygraphe / Chronotachygraphe / Speed governor)?",
      en: "Why are heavy commercial trucks and passenger buses required to be fitted with speed limiters and tachographs?",
      fr: "Pourquoi les poids lourds et autocars doivent-ils obligatoirement être équipés d'un limiteur de vitesse et d'un chronotachygraphe?"
    },
    options: {
      rw: [
        "Kugenzura no kuburizamo umuvuduko ukabije no gukurikirana amasaha umushoferi amaze atwara ngo hatabaho umunaniro ukabije",
        "Kugira ngo imodoka yiruke cyane bidasanzwe",
        "Kugira ngo umushoferi yumve amaradiyo yo hanze",
        "Nta kamaro kabyo kuko byangiza moteri"
      ],
      en: [
        "To electronically enforce statutory speed ceilings and monitor driving/rest hours to prevent driver fatigue crashes",
        "To boost maximum engine horsepower",
        "To receive international radio stations",
        "They are useless engine-damaging add-ons"
      ],
      fr: [
        "Pour brider la vitesse aux normes légales et enregistrer les temps de conduite et de repos évitant l'endormissement",
        "Pour augmenter la puissance",
        "Pour la radio",
        "Inutile"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Akuma ka 'Speed governor' na tachographe bifasha kurinda impanuka ziterwa n'umuvuduko mwinshi n'umunaniro w'abashoferi b'amakamyo na bisi.",
      en: "Speed limiters and tachographs strictly control maximum speeds and prevent catastrophic driver fatigue collisions.",
      fr: "Le limiteur de vitesse et le tachygraphe sont des instruments capitaux de prévention contre les excès de vitesse et l'assoupissement."
    },
    articleRef: "Art. 59"
  },
  {
    id: 396,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo igishushanyo cy'ingurube n'imashini y'ubuhinzi (Tracteur agricole) gisobanura iki?",
      en: "What does a circular sign with a red border depicting a farm tractor indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge illustrant un tracteur agricole?"
    },
    options: {
      rw: [
        "Inzira ibujijwe tarakiteri n'imashini z'ubuhinzi (Accès interdit aux tracteurs agricoles)",
        "Inzira yategetswe tarakiteri gusa",
        "Isoko ryo kugurisha imbuto z'ibihingwa",
        "Aho guhinga imirima ya Leta"
      ],
      en: [
        "Access prohibited to agricultural farm tractors and slow farm machinery (Accès interdit aux tracteurs)",
        "Mandatory farm tractor expressway lane",
        "Agricultural crop seed market",
        "State farming concession territory"
      ],
      fr: [
        "Accès interdit aux tracteurs agricoles et engins automoteurs agricoles lents",
        "Voie réservée aux tracteurs",
        "Marché de semences",
        "Terres domaniales"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza imashini z'ubuhinzi zikurura ibintu kwinjira mu mihanda yihuta kubera ko ziba zigenda buhoro zigateza umuvundo.",
      en: "This prohibition sign restricts slow-moving agricultural tractors from impeding high-speed highway corridors.",
      fr: "Ce panneau interdit l'accès des tracteurs agricoles lents sur les voies à circulation rapide."
    },
    articleRef: "Art. 68"
  },
  {
    id: 397,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi ageze ku masangano ahuriyemo n'ikinyabiziga gishingiye ku mategeko agenga ibinyabiziga by'ingabo z'igihugu cyangwa polisi bigendera mu mutwe w'akarasisi (Convoi militaire / Cortège officiel), agomba gukora iki?",
      en: "When encountering an organized military convoy or official police-escorted motorcade (Convoi ou cortège), what must a driver do?",
      fr: "À l'approche d'un convoi militaire organisé ou d'un cortège officiel escorté par les forces de l'ordre, que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Kureka uwo mutwe wose ukabanza gutambuka nta kuwucamo cyangwa kuwubangamira (Ne pas couper le cortège)",
        "Gucomeka imodoka ye rwagati muri bo ngo agendere hamwe nabo",
        "Kunyuranaho kuri bo bose ku muvuduko mwinshi",
        "Kuvuza ihoni kuri bo ngo bamuharurire inzira"
      ],
      en: [
        "Allow the entire escorted convoy/motorcade to pass continuously without cutting into or disrupting the formation",
        "Cut into the middle of their ranks to drive with them",
        "Overtake the entire escorted convoy at high speed",
        "Honk at the motorcade demanding they yield to you"
      ],
      fr: [
        "Laisser passer l'ensemble du convoi/cortège en continu sans jamais couper ni entraver la formation",
        "S'insérer au milieu du cortège",
        "Dépasser le convoi à vive allure",
        "Klaxonner le cortège"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Birabujijwe burundu gucamo umutwe w'ikinyabiziga cy'akarasisi k'ingabo cyangwa k'abayobozi baherekejwe na Polisi; kigomba kurekerwa kikarangira gutambuka.",
      en: "Cutting through military convoys or officially escorted motorcades is strictly forbidden under traffic security laws.",
      fr: "Il est formellement interdit à tout usager de couper ou perturber un convoi militaire ou un cortège officiel en marche."
    },
    articleRef: "Art. 16"
  },
  {
    id: 398,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Icyerekezo cy'umuhanda w'inzira nyabagendwa' (Sens de circulation) mu Rwanda kigendera ku ruhe ruhande?",
      en: "In the Republic of Rwanda, on which side of the public road must vehicular traffic legally circulate?",
      fr: "En République du Rwanda, sur quel côté de la chaussée la circulation automobile s'effectue-t-elle légalement?"
    },
    options: {
      rw: [
        "Mu ruhande rw'iburyo (Côté droit de la chaussée)",
        "Mu ruhande rw'ibumoso gusa",
        "Rwagati mu muhanda aho umushoferi yihitiyemo",
        "Biterwa n'uko umunsi ungana"
      ],
      en: [
        "On the right-hand side of the road (Côté droit de la chaussée)",
        "On the left-hand side only",
        "Dead center of the road wherever the driver prefers",
        "Depends on the day of the week"
      ],
      fr: [
        "Du côté droit de la chaussée dans le sens de la marche",
        "Du côté gauche uniquement",
        "Au milieu de la route",
        "Selon le jour de la semaine"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itegeko rigenga umuhanda mu Rwanda ritegeka ibinyabiziga byose kugendera mu ruhande rw'iburyo; kugendera ibumoso bisaba uruhushya rwo kunyuranaho gusa.",
      en: "Rwandan traffic statutes strictly mandate right-hand drive circulation on all public roadways.",
      fr: "La législation rwandaise impose la circulation à droite pour l'ensemble des usagers de la route."
    },
    articleRef: "Art. 9"
  },
  {
    id: 399,
    category: 'parking',
    question: {
      rw: "Guparika ikinyabiziga ku buryo gifunga umuryango wo kwinjira mu nzu cyangwa igipangu cy'umuturage (Entrée charretière) bihanishwa iki?",
      en: "Parking a vehicle blocking a private residential or business garage gateway entrance (Entrée charretière) is penalized because:",
      fr: "Le stationnement obstruant une entrée carrossable ou l'accès à un garage privé (Entrée charretière) est interdit car:"
    },
    options: {
      rw: [
        "Bibangamira nyir'inzu kwinjiza cyangwa gusohora ikinyabiziga cye bikaba bihanishwa amande no gufatira ikinyabiziga muri furiye",
        "Gushimirwa kuko warinze igipangu cy'undi",
        "Nta kibazo kirimo kuko uri mu muhanda",
        "Kugabanyirizwa umusoro ku butaka"
      ],
      en: [
        "It unlawfully traps or locks out property owners, incurring statutory fines and immediate towing to police impound",
        "Praise for guarding another person's property gate",
        "No issue because you are parked on a public street",
        "Land property tax reduction"
      ],
      fr: [
        "Cela empêche l'accès ou la sortie des véhicules des riverains; l'infraction entraîne amende et mise en fourrière immédiate",
        "Félicitations pour le gardiennage",
        "Aucun problème",
        "Réduction de taxe foncière"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gufungira abantu amarembo y'inzu zabo bibuza uburenganzira bwabo bwo kugenda; imodoka igafatwa igakururwa.",
      en: "Blocking driveway gates deprives residents of vehicular egress, resulting in swift towing to police impoundment.",
      fr: "L'entrave aux entrées carrossables riveraines constitue un stationnement gênant sanctionné par enlèvement direct."
    },
    articleRef: "Art. 28"
  },
  {
    id: 400,
    category: 'technical',
    question: {
      rw: "Ni iki umushoferi agomba guhora yitwaje igihe atwaye ikinyabiziga mu muhanda nyabagendwa mu Rwanda?",
      en: "What set of mandatory official driving documents must a driver carry at all times when operating a vehicle on Rwandan roads?",
      fr: "Quels documents officiels obligatoires le conducteur doit-il détenir sur lui lors de la conduite sur les routes du Rwanda?"
    },
    options: {
      rw: [
        "Uruhushya rwo gutwara (Permis de conduire), ikarita iranga ikinyabiziga (Carte jaune / Carte grise), icyemezo cy'ubwishingizi (Assurance), n'icyemezo cy'ubugenzuzi bwa tekiniki (Contrôle technique)",
        "Ifoto y'urugo n'amakarita yo guhaha gusa",
        "Icyemezo cy'amavuko gusa",
        "Nta cyangombwa na kimwe gisabwa"
      ],
      en: [
        "Valid Driving License (Permis de conduire), Vehicle Registration Logbook (Carte jaune), Valid Insurance Certificate, and Roadworthiness Certificate (Contrôle technique)",
        "Family home photos and shopping club discount cards only",
        "Birth certificate only",
        "No documents required whatsoever"
      ],
      fr: [
        "Permis de conduire valide, Carte d'immatriculation (Carte jaune), Attestation d'assurance valide et Certificat de contrôle technique",
        "Photos de famille et cartes de fidélité uniquement",
        "Acte de naissance uniquement",
        "Aucun document"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibyangombwa bine bya ngombwa: Perimi, Karita y'ikinyabiziga, Ubwishingizi, na Contrôle technique bigomba guhorana n'umushoferi ku rugendo rwose.",
      en: "The four statutory vehicular documents (Driver's License, Vehicle Registration, Valid Insurance, and Inspection Certificate) must be produced upon demand.",
      fr: "Les quatre documents légaux obligatoires (Permis, Carte jaune, Assurance et Contrôle technique) doivent être présentés à toute réquisition des forces de l'ordre."
    },
    articleRef: "Art. 85"
  }
];
