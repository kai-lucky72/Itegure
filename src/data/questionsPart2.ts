import { Question } from '../types';

export const QUESTIONS_PART2: Question[] = [
  {
    id: 51,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Romoruki' (Remorque) bisobanura iki mu mategeko y'umuhanda?",
      en: "What is the legal definition of a 'Trailer' (Remorque)?",
      fr: "Que signifie le terme 'Remorque' selon le code de la route?"
    },
    options: {
      rw: [
        "Ikinyabiziga cyagenewe gukururwa n'ikindi kinyabiziga",
        "Ikinyabiziga gifite moteri y'ingufu nyinshi",
        "Akanyabiziga k'abanyamaguru",
        "Imodoka yikurura ubwayo"
      ],
      en: [
        "A vehicle designed to be towed/pulled by another motorized vehicle",
        "A high horsepower motorized vehicle",
        "A pedestrian wheelbarrow",
        "An autonomous vehicle"
      ],
      fr: [
        "Tout véhicule destiné à être tracté par un autre véhicule à moteur",
        "Un véhicule à moteur surpuissant",
        "Une brouette pour piétons",
        "Un véhicule autonome"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Romoruki ni ikinyabiziga cyose kidafite moteri cyakorewe gukururwa n'ikindi kinyabiziga gitegetswe.",
      en: "A trailer is defined as any vehicle built to be pulled by another motorized vehicle.",
      fr: "La remorque est tout véhicule conçu pour être tracté par un véhicule à moteur."
    },
    articleRef: "Art. 2"
  },
  {
    id: 52,
    category: 'definitions',
    question: {
      rw: "Igice cy'inzira nyabagendwa kigenewe kugendwamo n'ibinyabiziga cyitwa iki?",
      en: "The portion of a public road specifically designed for the movement of vehicles is called what?",
      fr: "La partie de la voie publique réservée à la circulation des véhicules est appelée comment?"
    },
    options: {
      rw: [
        "Umuhanda (Chaussée / Carriageway)",
        "Inzira y'abanyamaguru (Trottoir)",
        "Inkengero y'umuhanda (Accotement)",
        "Akayira k'amaguru"
      ],
      en: [
        "Carriageway / Roadway (Umuhanda / Chaussée)",
        "Sidewalk / Pavement (Trottoir)",
        "Shoulder (Accotement)",
        "Footpath"
      ],
      fr: [
        "La chaussée",
        "Le trottoir",
        "L'accotement",
        "Le sentier piétonnier"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umuhanda (Chaussée) ni igice cy'inzira nyabagendwa cyagenewe urujya n'uruza rw'ibinyabiziga.",
      en: "The carriageway (chaussée) is the part of the public road reserved for vehicular traffic.",
      fr: "La chaussée est la partie de la voie publique spécialement aménagée pour la circulation des véhicules."
    },
    articleRef: "Art. 2"
  },
  {
    id: 53,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Igisate cy'umuhanda' (Voie de circulation / Lane) risobanura iki?",
      en: "What does the term 'Traffic Lane' (Igisate cy'umuhanda) designate?",
      fr: "Que désigne le terme 'Voie de circulation' (Igisate cy'umuhanda)?"
    },
    options: {
      rw: [
        "Igice cy'umuhanda kirebana n'ubugari gishobora kugendwamo n'umurongo umwe w'ibinyabiziga bifite ibiziga birenze bibiri",
        "Inzira y'amapikipiki gusa",
        "Aho guparika imodoka zose",
        "Agace k'amasangano gusa"
      ],
      en: [
        "A longitudinal strip of roadway wide enough for a single line of four-wheeled vehicles to travel safely",
        "A motorcycle-only track",
        "A permanent public parking strip",
        "The junction zone only"
      ],
      fr: [
        "Toute subdivision longitudinale de la chaussée ayant une largeur suffisante pour une file de voitures",
        "Une piste exclusive pour motos",
        "Une zone de stationnement",
        "Le carrefour uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Igisate cy'umuhanda (Lane) ni igice kigabanyije umuhanda gifite ubugari buhagije bwo kugendwamo n'umurongo umwe w'ibinyabiziga.",
      en: "A lane is a longitudinal subdivision of the roadway wide enough for one column of moving motor vehicles.",
      fr: "Une voie de circulation est une bande longitudinale de la chaussée matérialisée ou non pour une file de véhicules."
    },
    articleRef: "Art. 2"
  },
  {
    id: 54,
    category: 'definitions',
    question: {
      rw: "Ni ryari umugenzi ku ipikipiki cyangwa velomoteri ategetswe kwambara ingofero yabugenewe (Kasike / Casque)?",
      en: "When are motorcyclists and motorcycle passengers required to wear approved safety helmets (Kasike / Casque)?",
      fr: "Quand le conducteur et le passager d'une moto doivent-ils porter un casque de protection homologué?"
    },
    options: {
      rw: [
        "Igihe cyose bari ku ipikipiki igenda mu nzira nyabagendwa",
        "Nijoro gusa",
        "Iyo hari umupolisi gusa",
        "Iyo bari ku muvuduko urenze 80 km/h gusa"
      ],
      en: [
        "At all times when traveling on a motorcycle on public roads",
        "Only at night",
        "Only when a police officer is in sight",
        "Only when exceeding 80 km/h"
      ],
      fr: [
        "En permanence dès qu'ils circulent sur une moto sur la voie publique",
        "Uniquement la nuit",
        "Uniquement en présence d'un policier",
        "Uniquement au-delà de 80 km/h"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umuyobozi n'umugenzi wese uri ku ipikipiki bagomba kwambara kasike yabugenewe iziritse neza igihe cyose.",
      en: "Both the motorcycle driver and passenger must always wear a fastened approved crash helmet.",
      fr: "Le port du casque homologué et attaché est obligatoire en tout temps pour le motocycliste et son passager."
    },
    articleRef: "Art. 53"
  },
  {
    id: 55,
    category: 'definitions',
    question: {
      rw: "Uburemere ntarengwa bwemewe (Poids Total Autorisé en Charge - PTAC) bwa romoruki yoroheje idakeneye feri yihariye ni ubuhe?",
      en: "What is the maximum laden weight (PTAC) of a light trailer that does not require an independent braking system?",
      fr: "Quel est le poids total autorisé en charge (PTAC) d'une remorque légère sans freinage indépendant?"
    },
    options: {
      rw: ["Ibiro 750 (750 kg)", "Ibiro 2000 (2000 kg)", "Ibiro 3500 (3500 kg)", "Ibiro 100 (100 kg)"],
      en: ["750 kg", "2000 kg", "3500 kg", "100 kg"],
      fr: ["750 kg", "2000 kg", "3500 kg", "100 kg"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Romoruki yoroheje idarengeje ibiro 750 ntiyishyirwaho feri yihariye niba itarengeje kimwe cya kabiri cy'uburemere bw'ikinyabiziga kiyikurura.",
      en: "Trailers under 750 kg gross vehicle weight rating are classified as light trailers and may not require separate service brakes if within towing capacity.",
      fr: "Une remorque de moins de 750 kg de PTAC est dite remorque légère."
    },
    articleRef: "Art. 43"
  },
  {
    id: 56,
    category: 'priority',
    question: {
      rw: "Iyo uhuye n'ikimenyetso cy'itara ry'umuhondo rimyatsa (Feu jaune clignotant), ugomba kwitwara ute?",
      en: "How should you react when encountering a flashing yellow traffic light (Feu jaune clignotant)?",
      fr: "Comment devez-vous réagir face à un feu jaune clignotant?"
    },
    options: {
      rw: [
        "Kugabanya umuvuduko no gutambuka witonze ukurikiza amategeko yo gutambuka mbere",
        "Guhagarara burundu ugategereza itara ry'icyatsi",
        "Kongera umuvuduko ukihuta cyane",
        "Gusubira inyuma"
      ],
      en: [
        "Slow down and proceed with caution following standard right-of-way rules",
        "Stop completely and wait for a green light",
        "Accelerate as fast as possible",
        "Make an immediate U-turn"
      ],
      fr: [
        "Ralentir et franchir le carrefour avec grande prudence en appliquant les règles de priorité",
        "S'arrêter absolument et attendre le feu vert",
        "Accélérer immédiatement",
        "Faire demi-tour"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara ry'umuhondo rimyatsa risobanura ko amatara asanzwe adakora; umushoferi agomba kugabanya umuvuduko akareba iburyo n'ibumoso.",
      en: "A flashing yellow light warns drivers that standard signals are out of cycle; proceed slowly with caution yielding to priority traffic.",
      fr: "Le feu jaune clignotant invite à la prudence et au respect des règles de priorité applicables."
    },
    articleRef: "Art. 64"
  },
  {
    id: 57,
    category: 'priority',
    question: {
      rw: "Iyo umupolisi ushinzwe umutekano mu muhanda arambuye amaboko yombi cyangwa ukuboko kumwe mu buryo bw'umusaraba, asobanura iki ku bamureba imbere n'inyuma?",
      en: "When a traffic police officer extends their arms horizontally across traffic, what does it command to road users facing the front or back?",
      fr: "Quand un agent de police de la circulation étend les bras horizontalement, que cela signifie-t-il pour les usagers arrivant de face ou de dos?"
    },
    options: {
      rw: [
        "Guhagarara (Stop) ku baturuka imbere n'inyuma ye",
        "Kutambuka ku muvuduko mwinshi",
        "Gukata ibumoso gusa",
        "Guhindukira"
      ],
      en: [
        "Mandatory stop for drivers approaching from his front and back",
        "Permission to speed through",
        "Turn left immediately",
        "Reverse vehicle"
      ],
      fr: [
        "Arrêt obligatoire pour tous les usagers venant de face et de dos",
        "Autorisation d'accélérer",
        "Tourner à gauche seulement",
        "Reculer"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amaboko y'umupolisi arambuye ku mpande ategeka guhagarara ku baturuka imbere ye n'abaturuka inyuma ye; abategetswe gutambuka ni abari ku mpande z'amaboko ye.",
      en: "An officer with outstretched arms signals a full stop for oncoming front and rear traffic; traffic on his sides may move.",
      fr: "Les bras tendus de l'agent indiquent l'arrêt pour les usagers arrivant de face ou de dos."
    },
    articleRef: "Art. 60"
  },
  {
    id: 58,
    category: 'priority',
    question: {
      rw: "Iyo ibimenyetso by'umupolisi ubifitiye ububasha bivuguruzanya n'ibyapa cyangwa amatara yo mu muhanda, ni ibihe bikurikizwa?",
      en: "When instructions from a traffic police officer contradict road signs or traffic lights, which takes precedence?",
      fr: "En cas de contradiction entre les signaux d'un agent qualifié et la signalisation lumineuse ou routière, que doit-on respecter?"
    },
    options: {
      rw: [
        "Ibimenyetso by'umupolisi nibyo bikurikizwa mbere ya byose",
        "Amatara yo mu muhanda niyo akurikizwa mbere",
        "Ibyapa byo mu muhanda nibyo bikurikizwa mbere",
        "Buri mushoferi yihitiramo icyo akurikiza"
      ],
      en: [
        "The traffic officer's orders always take top precedence over everything else",
        "Traffic lights always overrule police officers",
        "Road signs overrule police officers",
        "Each driver chooses freely"
      ],
      fr: [
        "Les injonctions de l'agent de police prévalent sur toutes les autres signalisations",
        "Les feux tricolores l'emportent toujours",
        "Les panneaux routiers l'emportent",
        "Le conducteur choisit librement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko ateganya ko amategeko n'ibimenyetso bitanzwe n'abapolisi bayobora umuhanda bisumbya agaciro amatara, ibyapa, n'amarangi yo mu muhanda.",
      en: "Orders of authorized traffic officers supersede all traffic lights, road signs, and road markings.",
      fr: "Les signaux faits par les agents qualifiés prévalent sur les signaux lumineux et les panneaux routiers."
    },
    articleRef: "Art. 59"
  },
  {
    id: 59,
    category: 'priority',
    question: {
      rw: "Icyapa cy'urukiramende gifite umwambi w'umukara uzamuka n'umwambi w'umutuku umanuka bisobanura iki?",
      en: "What does a sign with a black upward arrow and a red downward arrow mean?",
      fr: "Que signifie le panneau rectangulaire avec une flèche noire montante et une flèche rouge descendante?"
    },
    options: {
      rw: [
        "Ufite uburenganzira bwo gutambuka mbere y'ibinyabiziga biturutse imbere mu gace gafunganye",
        "Ugomba guha inzira abaturuka imbere",
        "Birabujijwe kuzamuka",
        "Umuhanda urafunze burundu"
      ],
      en: [
        "You have priority over oncoming traffic in this narrow section",
        "You must give way to oncoming traffic",
        "Uphill driving is prohibited",
        "Road is completely closed"
      ],
      fr: [
        "Vous avez la priorité sur les véhicules venant en sens inverse dans le passage étroit",
        "Vous devez céder le passage",
        "Montée interdite",
        "Route fermée"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa cy'ubururu gifite umwambi wera/umukara munini uzamuka n'umutuku muto umanuka kigaragaza ko ufite uburenganzira bwo gutambuka mbere mu muhanda ufunganye.",
      en: "The square blue sign with a large white/black upward arrow and red downward arrow grants right of way over oncoming vehicles in narrow passages.",
      fr: "Ce panneau indique que vous avez la priorité de passage par rapport aux véhicules circulant en sens inverse."
    },
    articleRef: "Art. 68"
  },
  {
    id: 60,
    category: 'priority',
    question: {
      rw: "Icyapa cy'uruziga gifite umuzenguruko utukura kirimo umwambi w'umutuku uzamuka n'umwambi w'umukara umanuka gisobanura iki?",
      en: "What does a circular sign with a red border containing a red upward arrow and a black downward arrow mean?",
      fr: "Que signifie le panneau rond à bord rouge avec une flèche rouge montante et une flèche noire descendante?"
    },
    options: {
      rw: [
        "Ugomba guha inzira ibinyabiziga biturutse imbere mu mwanya ufunganye",
        "Ufite uburenganzira bwo gutambuka mbere",
        "Umuhanda ugendwamo mu cyerekezo kimwe",
        "Umuvuduko ntarengwa"
      ],
      en: [
        "You must give way to oncoming vehicles in the narrow passage",
        "You have priority over all oncoming traffic",
        "One-way road ahead",
        "Minimum speed limit"
      ],
      fr: [
        "Vous devez céder le passage aux véhicules venant en sens inverse dans le rétrécissement",
        "Vous êtes prioritaire sur tous les véhicules",
        "Voie à sens unique",
        "Vitesse minimale"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kirabuza (interdiction): kigutegeka guhagarara no kureka ibinyabiziga biturutse imbere bikabanza gutambuka.",
      en: "This circular prohibition sign obliges you to yield to oncoming traffic in the constricted passage.",
      fr: "Ce panneau d'interdiction vous impose de céder le passage aux usagers circulant en sens inverse."
    },
    articleRef: "Art. 69"
  },
  {
    id: 61,
    category: 'speed',
    question: {
      rw: "Ni uwuhe muvuduko ntarengwa wemewe ku kanyabiziga k'ibiziga bitatu (Tricycle / Bajaj) mu nsisiro?",
      en: "What is the maximum speed limit for a motorized tricycle (Bajaj / Tricycle) in built-up areas?",
      fr: "Quelle est la vitesse maximale autorisée pour un tricycle à moteur (Bajaj) en agglomération?"
    },
    options: {
      rw: ["30 km/h kugeza kuri 40 km/h", "70 km/h", "90 km/h", "100 km/h"],
      en: ["30 km/h to 40 km/h", "70 km/h", "90 km/h", "100 km/h"],
      fr: ["30 km/h à 40 km/h", "70 km/h", "90 km/h", "100 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga by'ibiziga bitatu n'amapikipiki mato bigendera ku muvuduko ugenwe uri munsi ya 40 km/h mu nsisiro.",
      en: "Tricycles and light motor vehicles are restricted to 30-40 km/h within urban districts.",
      fr: "Les tricycles à moteur sont soumis à une vitesse maximale de 30-40 km/h en ville."
    },
    articleRef: "Art. 22"
  },
  {
    id: 62,
    category: 'speed',
    question: {
      rw: "Iyo imvura igwa ari nyinshi cyangwa ikirere kimeze nabi, umushoferi agomba gukora iki ku muvuduko we?",
      en: "During severe heavy rain or bad weather, what should a driver do regarding their speed?",
      fr: "En cas de forte pluie ou intempéries dégradant la chaussée, que doit faire le conducteur concernant sa vitesse?"
    },
    options: {
      rw: [
        "Kugabanya umuvuduko ukajya munsi y'umuvuduko usanzwe wemewe kugira ngo yirinde kunyerera",
        "Kugumana umuvuduko ntarengwa w'uburenganzira",
        "Kongera umuvuduko kugira ngo imvura itamunyagira",
        "Gufunga amaso akagenda buhoro"
      ],
      en: [
        "Reduce speed significantly below the posted limit to prevent aquaplaning and skidding",
        "Maintain maximum posted speed limit at all costs",
        "Accelerate to get out of the rain quickly",
        "Close eyes and drive slowly"
      ],
      fr: [
        "Réduire sa vitesse en dessous de la vitesse maximale autorisée pour éviter l'aquaplanage et les dérapages",
        "Maintenir la vitesse maximale autorisée coûte que coûte",
        "Accélérer pour fuir la pluie",
        "Fermer les yeux et rouler au pas"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umuyobozi agomba kuringaniza umuvuduko we bitewe n'uko umuhanda unyerera, imiterere y'ikirere, n'uburyo abona imbere.",
      en: "Drivers must adapt speed to wet conditions and reduced visibility to prevent loss of control.",
      fr: "Le conducteur doit adapter et réduire sa vitesse en fonction de l'état de la chaussée et de la météo."
    },
    articleRef: "Art. 21"
  },
  {
    id: 63,
    category: 'speed',
    question: {
      rw: "Umuvuduko ntarengwa ku makamyo aremereye (Poids lourds) hanze y'insisiro ku muhanda ufunguye ni uwuhe?",
      en: "What is the statutory speed limit for heavy trucks (Poids lourds) on open roads outside towns?",
      fr: "Quelle est la vitesse maximale autorisée pour les poids lourds hors agglomération sur route ouverte?"
    },
    options: {
      rw: ["60 km/h", "100 km/h", "120 km/h", "30 km/h"],
      en: ["60 km/h", "100 km/h", "120 km/h", "30 km/h"],
      fr: ["60 km/h", "100 km/h", "120 km/h", "30 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amakamyo n'ibinyabiziga biremereye bifite umuvuduko ntarengwa wa 60 km/h hanze y'insisiro.",
      en: "Heavy goods vehicles and commercial trucks are limited to 60 km/h on open rural roads.",
      fr: "Les véhicules de transport de marchandises et poids lourds sont limités à 60 km/h hors agglomération."
    },
    articleRef: "Art. 22"
  },
  {
    id: 64,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga gifite umuzenguruko utukura kirimo umubare '50' gisobanura iki?",
      en: "What does a circular sign with a red border and the number '50' inside mean?",
      fr: "Que signifie un panneau rond à bord rouge contenant le chiffre '50'?"
    },
    options: {
      rw: [
        "Umuvuduko ntarengwa ntugomba kurenga 50 km/h (Vitesse maximale 50 km/h)",
        "Umuvuduko muto utagomba kujya munsi ya 50 km/h",
        "Hagasigaye metero 50 kugira ngo ugere mu mujyi",
        "Ibiro 50 by'imizigo"
      ],
      en: [
        "Maximum speed limit of 50 km/h (Do not exceed 50 km/h)",
        "Minimum compulsory speed of 50 km/h",
        "50 meters remaining to next town",
        "50 kg weight limit"
      ],
      fr: [
        "Vitesse maximale autorisée limitée à 50 km/h (interdiction de dépasser 50 km/h)",
        "Vitesse minimale obligatoire de 50 km/h",
        "Distance de 50 mètres restante",
        "Charge maximale de 50 kg"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki ni icyapa kibuza: kiburira umuyobozi ko atagomba kurenza umuvuduko wa 50 km/h muri ako gace.",
      en: "This prohibition sign sets a strict speed ceiling of 50 km/h.",
      fr: "Ce panneau d'interdiction fixe la vitesse maximale à 50 km/h."
    },
    articleRef: "Art. 69"
  },
  {
    id: 65,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rw'ubururu kirimo umubare '30' gisobanura iki?",
      en: "What does a circular blue sign containing the number '30' mean?",
      fr: "Que signifie un panneau rond bleu contenant le chiffre '30'?"
    },
    options: {
      rw: [
        "Umuvuduko muto utegetswe utagomba kujya munsi ya 30 km/h (Vitesse minimale obligatoire)",
        "Umuvuduko ntarengwa wa 30 km/h",
        "Metero 30 z'uburebure",
        "Inzira y'abanyamaguru 30"
      ],
      en: [
        "Mandatory minimum speed limit: drivers must not travel slower than 30 km/h",
        "Maximum speed limit of 30 km/h",
        "Length restriction of 30 meters",
        "Pedestrian group of 30"
      ],
      fr: [
        "Vitesse minimale obligatoire : interdiction de rouler à moins de 30 km/h",
        "Vitesse maximale autorisée de 30 km/h",
        "Longueur limitée à 30 mètres",
        "Passage de 30 piétons"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Uruziga rw'ubururu rurimo imibare rwerekana umuvuduko muto utagomba kujya munsi yawo (Vitesse minimale obligatoire).",
      en: "A blue circular sign with numbers specifies a compulsory minimum speed limit.",
      fr: "Le panneau rond à fond bleu comportant un chiffre indique une vitesse minimale obligatoire."
    },
    articleRef: "Art. 70"
  },
  {
    id: 66,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rw'umweru rucagaguwemo umurongo w'umukara uciyemo ubusamo gisobanura iki?",
      en: "What does a white circular sign with oblique black diagonal cancellation stripes indicate?",
      fr: "Que signifie un panneau rond blanc barré de traits diagonaux noirs?"
    },
    options: {
      rw: [
        "Iherezo ry'ibibuzwa byose byatanzwe mbere ku binyabiziga bigenda (Fin de toutes les interdictions)",
        "Iherezo ry'umuhanda",
        "Umuhanda urasenyutse",
        "Ahasoresherezwa"
      ],
      en: [
        "End of all previously posted local prohibitions and restrictions for moving vehicles",
        "End of the roadway",
        "Damaged road bridge",
        "Toll booth station"
      ],
      fr: [
        "Fin de toutes les interdictions précédemment signalées aux véhicules en mouvement",
        "Fin de la route",
        "Route endommagée",
        "Poste de péage"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa cy'iherezo ry'ibibuzwa kimenyesha ko ibibuzwa byose byari byashyizweho (umuvuduko, kunyuranaho) birangiye.",
      en: "This sign signals the lifting and cancellation of all previous local driving restrictions.",
      fr: "Ce panneau indique la fin de toutes les interdictions précédemment notifiées."
    },
    articleRef: "Art. 69"
  },
  {
    id: 67,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ikimenyetso cya 'Kizindaro yaciyemo umurongo utukura' (Klaxon barré) gisobanura iki?",
      en: "What does a sign showing a horn crossed with a red slash indicate?",
      fr: "Que signifie le panneau représentant un avertisseur sonore barré d'un trait rouge?"
    },
    options: {
      rw: [
        "Birabujijwe gukoresha ihoni / akazindaro (Interdiction de klaxonner)",
        "Birategetswe kuvuza ihoni",
        "Ahagurishirizwa amahoni",
        "Iherezo ry'ibitaro"
      ],
      en: [
        "Use of horn / acoustic warning is strictly prohibited (except to avert immediate danger)",
        "Mandatory continuous horn sounding",
        "Horn shop nearby",
        "End of hospital zone"
      ],
      fr: [
        "Interdiction de faire usage d'avertisseurs sonores (sauf danger imminent)",
        "Obligation d'actionner le klaxon",
        "Magasin d'avertisseurs",
        "Fin de zone hospitalière"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuzanya kuvuza ihoni mu gace k'ibitaro cyangwa insisiro uretse mu gihe cyo gukumira impanuka igitaraganya.",
      en: "Sounding horns is strictly forbidden in designated quiet zones unless necessary to avert an imminent accident.",
      fr: "L'usage de l'avertisseur sonore est interdit dans la zone concernée sauf cas d'urgence absolue."
    },
    articleRef: "Art. 69"
  },
  {
    id: 68,
    category: 'signs',
    question: {
      rw: "Umurongo w'umuhondo udacitse ku nkengero y'umuhanda cyangwa ku muhanda ubwawo usobanura iki?",
      en: "What does a solid continuous yellow line along the curb/road edge mean?",
      fr: "Que signifie une ligne jaune continue tracée le long de la bordure du trottoir ou de la chaussée?"
    },
    options: {
      rw: [
        "Birabujijwe guhagarara akanya gato n'akanya karekire (Arrêt et stationnement interdits)",
        "Biremewe guparika amasaha menshi",
        "Inzira y'amapikipiki gusa",
        "Aho gutegerereza abagenzi gusa"
      ],
      en: [
        "Both stopping and parking are strictly prohibited (Arrêt et stationnement interdits)",
        "Unlimited parking permitted",
        "Exclusive motorcycle lane",
        "Public bus passenger stop only"
      ],
      fr: [
        "Arrêt et stationnement formellement interdits le long de cette ligne",
        "Stationnement illimité autorisé",
        "Voie réservée aux motos",
        "Arrêt de bus exclusivement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umurongo w'umuhondo udacitse ubuza guhagarara akanya gato (arrêt) no guhagarara akanya karekire (stationnement).",
      en: "A continuous yellow line signifies that both stopping and parking are strictly barred.",
      fr: "Une ligne jaune continue interdit tout arrêt ainsi que tout stationnement."
    },
    articleRef: "Art. 76"
  },
  {
    id: 69,
    category: 'signs',
    question: {
      rw: "Umurongo w'umuhondo ucagaguye ku nkengero y'umuhanda usobanura iki?",
      en: "What does a broken/dashed yellow line on the road edge mean?",
      fr: "Que signifie une ligne jaune discontinue le long de la bordure du trottoir?"
    },
    options: {
      rw: [
        "Birabujijwe guhagarara akanya karekire (Stationnement interdit), ariko guhagarara akanya gato gusa biremewe",
        "Birabujijwe guhagarara akanya gato",
        "Umuhanda urafunze",
        "Aho kunyuranaho gusa"
      ],
      en: [
        "Parking is prohibited (Stationnement interdit), but brief stopping to drop off/pick up is permitted",
        "Stopping is prohibited",
        "Road is closed",
        "Overtaking zone only"
      ],
      fr: [
        "Stationnement interdit, mais l'arrêt court pour chargement/dépose reste autorisé",
        "Arrêt interdit",
        "Route barrée",
        "Voie de dépassement uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umurongo w'umuhondo ucagaguye ubuza guparika akanya karekire ariko wemerera guhagarara akanya gato ko gushyiramo/gukuramo abantu cyangwa ibintu.",
      en: "A dashed yellow curb line prohibits parking while allowing brief stopping for loading or boarding.",
      fr: "La ligne jaune discontinue interdit le stationnement mais tolère l'arrêt minute."
    },
    articleRef: "Art. 76"
  },
  {
    id: 70,
    category: 'signs',
    question: {
      rw: "Icyapa kiranga 'Zebra Crossing' (Inzira y'abanyamaguru) gitegeka umushoferi iki?",
      en: "What does a pedestrian crossing sign / Zebra crossing oblige drivers to do?",
      fr: "Que prescrit le passage pour piétons (Zebra crossing) aux conducteurs?"
    },
    options: {
      rw: [
        "Kugabanya umuvuduko no guhagarara igihe cyose hari umunyamaguru watangiye cyangwa witegura kwambuka",
        "Kuvuza ihoni ngo bose biruke",
        "Kongera umuvuduko ngo utambuke mbere yabo",
        "Kutita ku banyamaguru"
      ],
      en: [
        "Slow down and stop to yield precedence whenever a pedestrian is crossing or waiting to cross",
        "Sound horn aggressively to disperse pedestrians",
        "Accelerate to beat pedestrians across",
        "Ignore pedestrian rights"
      ],
      fr: [
        "Ralentir et s'arrêter pour céder la priorité dès qu'un piéton est engagé ou s'apprête à traverser",
        "Klaxonner pour faire fuir les piétons",
        "Accélérer pour passer avant eux",
        "Ignorer les piétons"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Abanyamaguru bari mu nzira yabagenewe (Zebra crossing) bafite uburenganzira budasubirwaho bwo gutambuka; umuyobozi wese agomba kubareka bakambuka.",
      en: "Pedestrians on zebra crosswalks have absolute priority; motorists must stop to let them safely cross.",
      fr: "Les piétons engagés sur un passage piéton ont une priorité absolue; le conducteur doit s'arrêter."
    },
    articleRef: "Art. 38"
  },
  {
    id: 71,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'umwana n'umuntu mukuru bagendana gisobanura iki?",
      en: "What does a danger triangle sign depicting an adult and child walking indicate?",
      fr: "Que signale un panneau triangulaire de danger représentant un adulte et un enfant à pied?"
    },
    options: {
      rw: [
        "Ahegereye ikigo cy'amashuri cyangwa aho abana bakunze kwambuka umuhanda",
        "Inzira y'abanyamaguru yonyine",
        "Parike y'abana",
        "Aho gutemberera gusa"
      ],
      en: [
        "Proximity to a school, playground, or frequent children crossing zone",
        "Exclusive pedestrian path",
        "Amusement park only",
        "Leisure walking lane"
      ],
      fr: [
        "Endroit fréquenté par des enfants (école, terrain de jeux)",
        "Piste piétonne obligatoire",
        "Parc d'attraction",
        "Zone touristique piétonne"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kimenyesha ko hafi hari ishuri cyangwa ikibuga cy'abana, bityo umuyobozi agomba kugabanya cyane umuvuduko.",
      en: "This warning sign alerts drivers to school zones or playing areas where children frequently cross.",
      fr: "Ce panneau de danger avertit de la présence d'enfants près des écoles et impose un ralentissement immédiat."
    },
    articleRef: "Art. 67"
  },
  {
    id: 72,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga gifite umuzenguruko utukura kirimo ifoto y'igare gisobanura iki?",
      en: "What does a circular sign with a red border depicting a bicycle mean?",
      fr: "Que signifie un panneau rond à bord rouge représentant une bicyclette?"
    },
    options: {
      rw: [
        "Birabujijwe ku magare kugendera muri uwo muhanda (Accès interdit aux cycles)",
        "Inzira y'amagare gusa",
        "Aho gukodeshereza amagare",
        "Umuvuduko w'amagare"
      ],
      en: [
        "Access prohibited for bicycles / cyclists (Accès interdit aux cycles)",
        "Mandatory bicycle path",
        "Bicycle rental shop",
        "Bicycle speed track"
      ],
      fr: [
        "Accès interdit aux bicyclettes et cyclistes",
        "Piste obligatoire pour bicyclettes",
        "Location de vélos",
        "Piste rapide pour cyclistes"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Uruziga rutukura rurimo igare rubuza amagare kwinjira cyangwa kugendera muri uwo muhanda.",
      en: "A red circular sign with a bike symbol strictly bans bicycles from entering that road segment.",
      fr: "Le panneau rond à bordure rouge avec symbole vélo interdit l'accès aux cycles."
    },
    articleRef: "Art. 69"
  },
  {
    id: 73,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rw'ubururu kirimo ifoto y'igare gisobanura iki?",
      en: "What does a circular blue sign depicting a bicycle mean?",
      fr: "Que signifie un panneau rond bleu avec le symbole d'une bicyclette?"
    },
    options: {
      rw: [
        "Inzira itegetswe kugendwamo n'amagare gusa (Piste cyclable obligatoire)",
        "Birabujijwe amagare",
        "Aho guparika amagare",
        "Isiganwa ry'amagare"
      ],
      en: [
        "Mandatory path reserved exclusively for bicycles (Piste cyclable obligatoire)",
        "Bicycles strictly forbidden",
        "Bicycle parking stand",
        "Cycle race circuit"
      ],
      fr: [
        "Piste cyclable obligatoire réservée aux bicyclettes",
        "Interdiction aux vélos",
        "Parking à vélos",
        "Course cycliste"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Uruziga rw'ubururu rurimo igare rutegeka abanyonzi b'amagare gukoresha iyo nzira yabagenewe.",
      en: "The circular blue sign commands cyclists to use the dedicated bike track.",
      fr: "Le panneau rond bleu rend obligatoire l'utilisation de la piste cyclable par les cyclistes."
    },
    articleRef: "Art. 70"
  },
  {
    id: 74,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rutukura rurimo ifoto y'imodoka n'ipikipiki bisobanura iki?",
      en: "What does a circular red-bordered sign showing a car and a motorcycle mean?",
      fr: "Que signifie un panneau rond à bord rouge contenant une voiture et une moto?"
    },
    options: {
      rw: [
        "Birabujijwe ku binyabiziga byose bikoresha moteri (Accès interdit à tous véhicules à moteur)",
        "Biremewe ku modoka gusa",
        "Biremewe ku mapikipiki gusa",
        "Amasangano y'imodoka n'amapikipiki"
      ],
      en: [
        "Access prohibited to all motor vehicles (Accès interdit à tous véhicules à moteur)",
        "Only cars permitted",
        "Only motorcycles permitted",
        "Junction for cars and bikes"
      ],
      fr: [
        "Accès interdit à tous les véhicules à moteur",
        "Autorisé aux voitures seulement",
        "Autorisé aux motos seulement",
        "Jonction voitures et motos"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza ibinyabiziga byose bigendeshwa na moteri (imodoka, amakamyo, moto) kwinjira muri uwo muhanda.",
      en: "This prohibition sign restricts entry for all motorized vehicles, including cars and motorbikes.",
      fr: "Ce panneau interdit la circulation à tous les véhicules pourvus d'un moteur de propulsion."
    },
    articleRef: "Art. 69"
  },
  {
    id: 75,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga gifite umuzenguruko utukura kirimo ifoto y'ikamyoneti cyangwa ikamyo gisobanura iki?",
      en: "What does a circular red-bordered sign with a truck symbol indicate?",
      fr: "Que signifie un panneau rond à bord rouge avec le dessin d'un camion?"
    },
    options: {
      rw: [
        "Birabujijwe ku binyabiziga bitwara imizigo / amakamyo (Accès interdit aux véhicules de transport de marchandises)",
        "Amakamyo ategetswe gutambuka mbere",
        "Aho gukarabiriza amakamyo",
        "Amakamyo afite umuvuduko mwinshi"
      ],
      en: [
        "Access prohibited for goods transport vehicles and trucks",
        "Trucks have exclusive priority",
        "Truck washing bay",
        "High-speed truck lane"
      ],
      fr: [
        "Accès interdit aux véhicules destinés au transport de marchandises (camions)",
        "Priorité absolue aux camions",
        "Station de lavage poids lourds",
        "Voie rapide poids lourds"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza amakamyo n'ibinyabiziga byagenewe gutwara imizigo gukoresha uwo muhanda.",
      en: "This sign bars trucks and heavy commercial goods transport vehicles from traveling along this road.",
      fr: "Ce panneau interdit la voie aux véhicules de transport de fret et camions."
    },
    articleRef: "Art. 69"
  },
  {
    id: 76,
    category: 'overtaking',
    question: {
      rw: "Ese umuyobozi yemerewe gukata cyangwa guhindukira (Demi-tour) mu muhanda aho hari umurongo udacitse?",
      en: "Is a driver permitted to make a U-turn (Demi-tour) across a solid continuous white center line?",
      fr: "Un conducteur est-il autorisé à faire demi-tour sur une chaussée traversée par une ligne blanche continue?"
    },
    options: {
      rw: [
        "Oya, birabujijwe rwose gukora demi-tour ukandagiye cyangwa urenze umurongo udacitse",
        "Yego, niba nta mupolisi uhari",
        "Yego, niba nta modoka zituruka inyuma",
        "Yego, ku manywa gusa"
      ],
      en: [
        "No, it is strictly illegal to make a U-turn across or straddling a continuous solid line",
        "Yes, if there is no police officer present",
        "Yes, if no car is approaching from behind",
        "Yes, only during daytime"
      ],
      fr: [
        "Non, il est formellement interdit de faire demi-tour en franchissant une ligne continue",
        "Oui, en l'absence de policier",
        "Oui, si aucun véhicule n'arrive derrière",
        "Oui, de jour uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umurongo udacitse ntugomba kurengwa cyangwa gukandagirwa na gato, bityo guhindukira (demi-tour) birabujijwe bikomeye.",
      en: "Solid continuous lines must never be crossed; executing a U-turn over a solid line is a serious infraction.",
      fr: "La ligne continue ne pouvant être franchie, le demi-tour y est strictement prohibited."
    },
    articleRef: "Art. 17"
  },
  {
    id: 77,
    category: 'overtaking',
    question: {
      rw: "Iyo umushoferi ashatse guhagarara ku ruhande rw'umuhanda, agomba gukora iki mbere yo gufata icyemezo?",
      en: "Before pulling over to stop or park on the road shoulder, what must a driver do first?",
      fr: "Avant de se ranger pour s'arrêter sur le bas-côté, que doit impérativement faire le conducteur?"
    },
    options: {
      rw: [
        "Kureba mu ndorerwamo no gucana itara ry'ikimenyetso (clignotant) cy'icyerekezo aganamo",
        "Gukandagira feri y'urugendo igitaraganya",
        "Kuvuza ihoni inshuro eshatu",
        "Gucana amatara maremare"
      ],
      en: [
        "Check rear-view mirrors and activate the turn indicator (clignotant) in advance",
        "Slam the foot brake abruptly",
        "Sound horn three times",
        "Switch on high beam headlights"
      ],
      fr: [
        "Contrôler les rétroviseurs et actionner le clignotant bien à l'avance",
        "Freiner brutalement",
        "Klaxonner trois fois",
        "Mettre les feux de route"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mbere yo gukora maneuver iyo ari yo yose, umuyobozi agomba kureba mu ndorerwamo z'ikinyabiziga no kumenyesha abandi akoresheje itara ry'icyerekezo (clignotant).",
      en: "Always check mirrors and signal intentions using direction indicators well before moving toward the curb.",
      fr: "Tout changement de direction ou arrêt nécessite un contrôle des rétroviseurs et le signalement par clignotant."
    },
    articleRef: "Art. 14"
  },
  {
    id: 78,
    category: 'technical',
    question: {
      rw: "Indorerwamo (Rétroviseurs) z'ikinyabiziga ziba zigamije iki?",
      en: "What is the primary safety purpose of vehicle rear-view mirrors (Indorerwamo / Rétroviseurs)?",
      fr: "Quel est l'objectif principal des rétroviseurs sur un véhicule?"
    },
    options: {
      rw: [
        "Gufasha umushoferi kureba ibiri inyuma no ku mpande z'ikinyabiziga adahindukije umutwe wose",
        "Kwitegereza isura ye gusa",
        "Kumurika nijoro",
        "Kwirinda izuba"
      ],
      en: [
        "Allow the driver to observe traffic behind and to the sides without turning their head away from the road",
        "Check driver's personal appearance only",
        "Provide illumination at night",
        "Block direct sunlight"
      ],
      fr: [
        "Permettre au conducteur de surveiller l'arrière et les côtés du véhicule sans tourner la tête",
        "Se regarder uniquement",
        "Éclairer la nuit",
        "Protéger du soleil"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Indorerwamo zituma umushoferi ahora azi ibinyabiziga bimuri inyuma n'ibiri kumunyuraho kugira ngo akore igenzura ry'umutekano.",
      en: "Rearview mirrors provide critical situational awareness of surrounding traffic for safe driving.",
      fr: "Les rétroviseurs sont essentiels pour contrôler en permanence l'environnement arrière et latéral."
    },
    articleRef: "Art. 42"
  },
  {
    id: 79,
    category: 'technical',
    question: {
      rw: "Akazindaro (Ihoni / Avertisseur sonore) k'ikinyabiziga kagomba kuba kumeze gute mu Rwanda?",
      en: "What acoustic characteristic must vehicle horns (Akazindaro / Klaxon) have in Rwanda?",
      fr: "Quelle caractéristique acoustique l'avertisseur sonore (klaxon) doit-il présenter au Rwanda?"
    },
    options: {
      rw: [
        "Kagomba gutanga ijwi rimwe rituje ridahindagurika kandi ryumvikana muri metero 100",
        "Kagomba kuvuga imiziki n'indirimbo",
        "Kagomba gutanga amajwi atandukanye nk'ay'inyoni",
        "Kagomba kuvuga nk'inzogera ya polisi"
      ],
      en: [
        "It must produce a single steady, continuous, non-melodic tone audible from 100 meters away",
        "It must play songs and musical melodies",
        "It must mimic fluctuating siren or bird sounds",
        "It must sound like a police emergency siren"
      ],
      fr: [
        "Il doit émettre un son continu, uniforme et non strident, audible à 100 mètres",
        "Il doit diffuser des mélodies musicales",
        "Il doit imiter des cris d'animaux",
        "Il doit sonner comme une sirène de police"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ihoni ry'ikinyabiziga gisanzwe rigomba gutanga ijwi rimwe ridasakuza cyane kandi ritari umuziki cyangwa inzogera z'ubutabazi.",
      en: "Standard vehicle horns must be single-toned and non-musical; multi-tone sirens are reserved for emergency services.",
      fr: "L'avertisseur sonore doit être à son unique et continu; les sirènes polyphoniques sont réservées aux véhicules prioritaires."
    },
    articleRef: "Art. 45"
  },
  {
    id: 80,
    category: 'technical',
    question: {
      rw: "Ibyuma bihanagura ibirahure by'imbere (Essuie-glaces) bigomba gukora bite?",
      en: "How must windshield wipers (Ibyuma bihanagura ibirahure / Essuie-glaces) function?",
      fr: "Comment les essuie-glaces du pare-brise avant doivent-ils fonctionner?"
    },
    options: {
      rw: [
        "Bigomba gukora byikoresha (automatique) ku buryo bisukura neza ikirahure mu mvura n'umukungugu",
        "Bikoreshwa n'intoki n'umugenzi gusa",
        "Ntibikenewe ku manywa",
        "Gusa iyo ikinyabiziga gihagaze"
      ],
      en: [
        "They must operate automatically and effectively clean the driver's forward field of view during rain and dust",
        "They must be manually pulled with a string by a passenger",
        "They are not required during daylight",
        "Only needed when the car is parked"
      ],
      fr: [
        "Ils doivent fonctionner de manière automatique et continue pour nettoyer la zone de vision du conducteur",
        "Ils doivent être actionnés manuellement à la main",
        "Ils sont inutiles le jour",
        "Uniquement nécessaires à l'arrêt"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga bifite ikirahure cy'imbere bigomba kugira ibyuma bibihanagura bikora neza ku buryo bituma umushoferi abona neza imbere mu gihe cy'imvura.",
      en: "Motor vehicles with windshields must have powered, functioning windshield wipers to preserve clear driving visibility.",
      fr: "Tout véhicule muni d'un pare-brise doit être équipé d'au moins un essuie-glace automatique en parfait état."
    },
    articleRef: "Art. 46"
  },
  {
    id: 81,
    category: 'towing',
    question: {
      rw: "Igihe ikinyabiziga gikurura ikindi gikoresheje icyuma kigometse kidafunguka (Barre de remorquage), kigomba kuba kimeze gute?",
      en: "When towing with a rigid tow bar (Barre de remorquage), what is its key safety advantage over a rope?",
      fr: "Lors d'un remorquage avec une barre rigide, quel est le principal avantage de sécurité par rapport à un câble?"
    },
    options: {
      rw: [
        "Icyuma kibuza ibinyabiziga byombi kugongana igihe ikinyabiziga cy'imbere gifashe feri",
        "Kigenda ku muvuduko wa 150 km/h",
        "Ntigisaba umushoferi mu modoka ikuruwe",
        "Kigomba kuba kirengeje metero 20"
      ],
      en: [
        "The rigid bar prevents the towed vehicle from colliding into the tow vehicle when braking",
        "Allows driving at 150 km/h",
        "Requires no driver in the towed vehicle at all",
        "Must be over 20 meters long"
      ],
      fr: [
        "La barre rigide empêche tout risque de collision arrière en cas de freinage du véhicule tracteur",
        "Permet de rouler à 150 km/h",
        "Dispense de conducteur dans le véhicule tracté",
        "Doit mesurer plus de 20 mètres"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyuma gikurura (barre de remorquage) gituma ikinyabiziga kigumana intera ihoraho kandi ntikigonge icy'imbere igihe gifashe feri.",
      en: "A rigid tow bar maintains a fixed safe distance and prevents rear-end collisions during deceleration.",
      fr: "L'attache rigide assure le maintien de la distance et freine le véhicule remorqué lors des décélérations."
    },
    articleRef: "Art. 48"
  },
  {
    id: 82,
    category: 'penalties',
    question: {
      rw: "Iyo umuyobozi agize impanuka mu muhanda ikagira abo ikomeretsa cyangwa ihitana, agomba gukora iki?",
      en: "When a driver is involved in a road traffic accident resulting in injuries or fatalities, what is their immediate legal duty?",
      fr: "En cas d'accident de la circulation entraînant des blessures ou un décès, quelle est l'obligation immédiate du conducteur?"
    },
    options: {
      rw: [
        "Guhagarara ako kanya, gutabara inkomere, no kumenyesha Polisi y'u Rwanda cyangwa urwego rw'ubutabazi vuba na bwangu",
        "Guhunga vuba vuba ngo atafatwa",
        "Guhisha imodoka ye mu gihuru",
        "Kuryama agategereza ko abantu babona impanuka"
      ],
      en: [
        "Stop immediately, render first aid to casualties, and alert Rwanda National Police / Emergency services promptly",
        "Flee the scene immediately to avoid arrest (hit and run)",
        "Hide the vehicle in bushes",
        "Go home and sleep"
      ],
      fr: [
        "S'arrêter sur le champ, porter secours aux blessés et prévenir sans délai la Police Nationale / secours",
        "Prendre la fuite immédiatement (délit de fuite)",
        "Cacher le véhicule",
        "Rentrer dormir chez soi"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guhunga nyuma yo gukora impanuka (Délit de fuite) ni icyaha gikomeye cyane cy'ubugome gihanwa n'amategeko ahana ibyaha.",
      en: "Fleeing the scene of an accident (hit and run) is a severe criminal offense carrying severe imprisonment and fines.",
      fr: "Le délit de fuite après un accident est un crime grave puni par le code pénal et le retrait définitif du permis."
    },
    articleRef: "Art. 86"
  },
  {
    id: 83,
    category: 'penalties',
    question: {
      rw: "Kunyuranaho mu buryo bunyuranyije n'amategeko (Dépassement dangereux) bihanishwa amande ateganywa n'amategeko mu Rwanda?",
      en: "Dangerous or unlawful overtaking (Kunyuranaho nabi) is subject to what statutory penalty in Rwanda?",
      fr: "Un dépassement dangereux ou irrégulier est sanctionné de quelle amende au Rwanda?"
    },
    options: {
      rw: [
        "Amande yo mu rwego rwo hejuru (kuva ku 25,000 RWF kugeza ku 50,000 RWF) n'ikurikiranwa ry'uruhushya",
        "Guhabwa igihembo",
        "Kubwirwa ngo yihute kurushaho",
        "Nta gihano na kimwe"
      ],
      en: [
        "Classified traffic violation fine (25,000 RWF to 50,000 RWF) and potential penalty points/suspension",
        "A prize reward",
        "Encouragement to drive faster",
        "No fine"
      ],
      fr: [
        "Amende contraventionnelle majeure (25 000 à 50 000 RWF) et sanctions administratives",
        "Une récompense",
        "Une invitation à accélérer",
        "Aucune sanction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kunyurana mu buryo butemewe cyangwa buteza akaga bishyira mu kaga ubuzima bw'abandi kandi bihanishwa amande aremereye.",
      en: "Dangerous overtaking poses extreme hazard to other road users and carries heavy fines and enforcement actions.",
      fr: "Le dépassement dangereux constitue une infraction grave passible de lourdes amendes."
    },
    articleRef: "Art. 84"
  },
  {
    id: 84,
    category: 'priority',
    question: {
      rw: "Iyo ikinyabiziga gisohotse mu rugo rw'umuturage, muri parikingi cyangwa mu gasozi kinjira mu muhanda nyabagendwa, kigomba guha inzira bande?",
      en: "When a vehicle exits a private driveway, parking lot, or unpaved track onto a public road, whom must it yield to?",
      fr: "Lorsqu'un véhicule sort d'une propriété privée, d'un parking ou d'un chemin de terre pour entrer sur la voie publique, à qui doit-il céder le passage?"
    },
    options: {
      rw: [
        "Ibinyabiziga byose n'abanyamaguru bari mu nzira nyabagendwa",
        "Ibinyabiziga biturutse ibumoso gusa",
        "Nta muntu n'umwe, kuko gisohotse gifite imbaraga",
        "Abamotari gusa"
      ],
      en: [
        "All vehicles, cyclists, and pedestrians already traveling on the public roadway",
        "Only vehicles coming from the left",
        "Nobody, exiting vehicle has priority",
        "Motorcyclists only"
      ],
      fr: [
        "Tous les véhicules, cyclistes et piétons circulant déjà sur la voie publique",
        "Uniquement aux véhicules venant de gauche",
        "À personne",
        "Aux motards uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ikinyabiziga kinjira mu muhanda nyabagendwa giturutse mu kibanza cy'umuntu cyangwa akayira k'igitaka kigomba kubanza kureka ibinyabiziga byose n'abanyamaguru bigatambuka.",
      en: "Any vehicle entering a public highway from private land or dirt paths must yield to all through-traffic.",
      fr: "Tout conducteur débouchant sur une voie publique depuis un accès privé doit céder le passage à tous les usagers."
    },
    articleRef: "Art. 15"
  },
  {
    id: 85,
    category: 'definitions',
    question: {
      rw: "Ikinyabiziga cy'ubutabazi bwihuse kigizwe n'iki mu buryo bw'amategeko?",
      en: "What defines an emergency priority vehicle in Rwandan traffic law?",
      fr: "Qu'est-ce qui définit un véhicule prioritaire d'urgence selon le code rwandais?"
    },
    options: {
      rw: [
        "Ikinyabiziga kigaragazwa n'inzogera idasanzwe (sirène) n'itara ry'ubururu rimyatsa (gyrophare bleu)",
        "Imodoka yose igenda yihuta",
        "Imodoka ifite amarangi meza",
        "Imodoka nshya itwaye abantu benshi"
      ],
      en: [
        "A vehicle signaling with a special audible siren and a revolving/flashing blue beacon light",
        "Any car speeding fast",
        "A car with colorful artwork",
        "A new large passenger bus"
      ],
      fr: [
        "Un véhicule équipé d'un avertisseur sonore spécial (sirène) et d'un feu bleu tournant ou clignotant",
        "Toute voiture roulant vite",
        "Une voiture joliment peinte",
        "Un nouvel autobus"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga by'ubutabazi bifite amatara y'ubururu n'inzogera idasanzwe byemererwa kutubahiriza amwe mu mategeko asanzwe iyo biri mu butumwa bwihuse.",
      en: "Priority emergency vehicles are officially equipped with blue rotating beacon lights and siren warning devices.",
      fr: "Les véhicules d'intervention d'urgence sont munis de signaux sonores et lumineux bleus distinctifs."
    },
    articleRef: "Art. 35"
  },
  {
    id: 86,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ikimenyetso cya 'P' ifite umurongo utukura uyiciyemo ubusamo gisobanura iki?",
      en: "What does a sign showing the letter 'P' crossed out with a diagonal red line mean?",
      fr: "Que signifie le panneau représentant la lettre 'P' barrée d'un trait diagonal rouge?"
    },
    options: {
      rw: [
        "Birabujijwe guparika / guhagarara akanya karekire (Stationnement interdit)",
        "Aho guparika byemewe",
        "Aho gutemberera",
        "Irembo ry'abapolisi"
      ],
      en: [
        "Parking prohibited (Stationnement interdit)",
        "Authorized parking zone",
        "Pedestrian walking area",
        "Police station entrance"
      ],
      fr: [
        "Stationnement interdit",
        "Parking autorisé",
        "Zone piétonne",
        "Entrée du commissariat"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Inyuguti ya 'P' yaciwemo umurongo utukura ibuzanya guhagarara akanya karekire (guparika) aho icyo cyapa kiri.",
      en: "The crossed-out 'P' sign forbids vehicle parking in the designated street zone.",
      fr: "La lettre 'P' barrée de rouge signale l'interdiction formelle de stationner."
    },
    articleRef: "Art. 69"
  },
  {
    id: 87,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ikimenyetso cy'uruziga rutukura rurimo 'X' itukura ku buso bw'ubururu gisobanura iki?",
      en: "What does a circular sign with a red border containing a red 'X' over a blue background mean?",
      fr: "Que signifie un panneau rond à bord rouge avec une croix 'X' rouge sur fond bleu?"
    },
    options: {
      rw: [
        "Birabujijwe guhagarara akanya gato n'akanya karekire (Arrêt et stationnement interdits)",
        "Biremewe guhagarara akanya gato",
        "Amasangano y'inzira ebyiri",
        "Inzira ya gari ya moshi"
      ],
      en: [
        "Both stopping and parking are strictly prohibited (Clearway / No stopping at any time)",
        "Short stopping is allowed",
        "Two-way intersection",
        "Railway track crossing"
      ],
      fr: [
        "Arrêt et stationnement formellement interdits (interdiction absolue de s'arrêter)",
        "Arrêt court autorisé",
        "Carrefour à deux voies",
        "Passage à niveau"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa gifite ikimenyetso cya X itukura ku bururu kibuza guhagarara akanya gato n'akanya karekire.",
      en: "A red 'X' on blue indicates an absolute clearway where vehicles cannot stop or park for any duration.",
      fr: "La croix rouge sur fond bleu signale l'interdiction totale d'arrêt et de stationnement."
    },
    articleRef: "Art. 69"
  },
  {
    id: 88,
    category: 'lights',
    question: {
      rw: "Iyo umuyobozi ahagaze ku nkengero y'umuhanda nijoro ahantu hatabona, ategetswe gucana ayahe matara?",
      en: "When a driver is parked on the unlit road shoulder at night, which lights must remain illuminated?",
      fr: "Lorsqu'un véhicule est immobilisé la nuit sur un bas-côté non éclairé, quels feux doivent rester allumés?"
    },
    options: {
      rw: [
        "Amatara ndangambere n'amatara ndanganyuma (Feux de position / Veilleuses)",
        "Amatara maremare (Feux de route)",
        "Nta tara na rimwe agomba gucana ngo atamara batiri",
        "Itara ryo mu nzu gusa"
      ],
      en: [
        "Front and rear position marker lights (Feux de position / Parking lights)",
        "High beam full headlights",
        "No lights at all to save battery",
        "Interior cabin dome light only"
      ],
      fr: [
        "Les feux de position avant et arrière (veilleuses)",
        "Les feux de route (pleins phares)",
        "Aucun feu pour préserver la batterie",
        "Le plafonnier intérieur uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo ikinyabiziga gihagaze ku muhanda nijoro aho amatara yo mu muhanda atamurika, kigomba gucana amatara ndangambere n'inyuma kugira ngo abandi batakigonga.",
      en: "Position parking lights must be lit when parked on unlit roads at night to prevent other motorists from crashing into the vehicle.",
      fr: "Les feux de position doivent signaler la présence d'un véhicule stationné de nuit sur chaussée non éclairée."
    },
    articleRef: "Art. 28"
  },
  {
    id: 89,
    category: 'lights',
    question: {
      rw: "Amatara y'icyerekezo (Clignotants / Indicateurs de direction) agomba kuba afite irihe bara imbere n'inyuma?",
      en: "What color must turn signal indicator lights (Clignotants) emit at the front and rear?",
      fr: "De quelle couleur doivent être les feux indicateurs de direction (clignotants) à l'avant et à l'arrière?"
    },
    options: {
      rw: [
        "Ibara ry'umuhondo cyangwa oranje (Orange / Amber)",
        "Ibara ry'icyatsi kibisi",
        "Ibara ry'ubururu",
        "Ibara ry'umukara"
      ],
      en: [
        "Amber / Orange yellow",
        "Bright green",
        "Deep blue",
        "Black"
      ],
      fr: [
        "Jaune orangé / ambre",
        "Vert vif",
        "Bleu foncé",
        "Noir"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara y'icyerekezo agomba kumyatsa mu ibara ry'oranje/umuhondo imbere n'inyuma kugira ngo bimenyeshe abandi aho umushoferi agana.",
      en: "Turn signal indicator lights must flash amber/orange at the front and rear of the vehicle.",
      fr: "Les clignotants doivent émettre une lumière clignotante de couleur jaune orangé."
    },
    articleRef: "Art. 30"
  },
  {
    id: 90,
    category: 'speed',
    question: {
      rw: "Igihe cyose umushoferi ashatse gufata feri igitaraganya cyangwa kugabanya umuvuduko mu buryo bukabije, agomba:",
      en: "Whenever a driver needs to decelerate sharply or apply emergency braking, they should:",
      fr: "Avant d'effectuer un ralentissement brusque ou un freinage appuyé, le conducteur doit:"
    },
    options: {
      rw: [
        "Kubanza kureba mu ndorerwamo ko nta kinyabiziga kimuri inyuma hafi gishobora kumugonga",
        "Gufunga amaso akarekera aho",
        "Kureka amapine akanyerera",
        "Kwiruka akavamo"
      ],
      en: [
        "Check rearview mirrors to ensure following traffic will not rear-end them, unless avoiding imminent accident",
        "Close eyes and let the car slide",
        "Lock all steering controls",
        "Jump out of the vehicle"
      ],
      fr: [
        "Vérifier dans le rétroviseur qu'aucun usager ne le suit de trop près, sauf urgence absolue pour éviter un choc",
        "Fermer les yeux",
        "Bloquer la direction",
        "Sauter en marche"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gufata feri bikabije nta mpamvu bishobora gutera impanuka z'uruhererekane; umuyobozi agomba kwirinda gufata feri gitunguranye niba bitari mu gihe cyo gukumira impanuka.",
      en: "Sudden heavy braking without danger causes pile-ups; drivers must monitor rear mirrors and brake progressively.",
      fr: "Le freinage brusque sans motif impérieux de sécurité est interdit pour prévenir les collisions arrière."
    },
    articleRef: "Art. 21"
  },
  {
    id: 91,
    category: 'definitions',
    question: {
      rw: "Ikinyabiziga cyose gikururwa n'inyamaswa kigomba kugira iki?",
      en: "Every animal-drawn vehicle on a public road must have what?",
      fr: "Tout véhicule à traction animale circulant sur la voie publique doit comporter quoi?"
    },
    options: {
      rw: [
        "Umuyobozi ugikurikirana kandi ushoboye kuyobora izo nyamaswa neza",
        "Moteri y'amashanyarazi",
        "Ibyuma bya muzika",
        "Indorerwamo enye"
      ],
      en: [
        "A capable driver/handler able to continuously guide and control the animals",
        "An electric auxiliary motor",
        "A loud sound speaker system",
        "Four exterior mirrors"
      ],
      fr: [
        "Un conducteur capable de maîtriser constamment et guider les animaux de trait",
        "Un moteur électrique d'appoint",
        "Des haut-parleurs",
        "Quatre rétroviseurs"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Inyamaswa zose zikurura ibinyabiziga mu muhanda zigomba kuyoborwa n'umuntu ushoboye kuzigumisha ku ruhande rw'iburyo no kuzifata neza.",
      en: "Animal-drawn vehicles must always be guided by an attendant capable of maintaining firm control.",
      fr: "Les attelages doivent être dirigés par un conducteur capable de maîtriser ses animaux en tout temps."
    },
    articleRef: "Art. 5"
  },
  {
    id: 92,
    category: 'priority',
    question: {
      rw: "Iyo umuhanda wagutse ugabanijwemo ibisate byinshi bigana mu cyerekezo kimwe, umushoferi agomba gukoresha ikihe gisate mu buryo busanzwe?",
      en: "On a multi-lane one-way roadway or dual carriageway, which lane should a driver use for normal cruising?",
      fr: "Sur une chaussée à plusieurs voies dans le même sens, quelle voie le conducteur doit-il emprunter en circulation normale?"
    },
    options: {
      rw: [
        "Igisate cy'iburyo busa bushoboka",
        "Igisate cy'ibumoso bwa nyuma igihe cyose",
        "Hagati y'ibisate byombi",
        "Igisate icyo ari cyo cyose atitaye ku bandi"
      ],
      en: [
        "The rightmost lane as safely possible",
        "The leftmost overtaking lane permanently",
        "Straddling between two lanes",
        "Any lane randomly"
      ],
      fr: [
        "La voie située le plus à droite possible",
        "La voie de gauche en permanence",
        "À cheval sur les voies",
        "N'importe quelle voie"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umushoferi agomba kugendera mu gisate cy'iburyo; ibindi bisate by'ibumoso bikoreshwa gusa igihe cyo kunyuranaho.",
      en: "Drivers must travel on the rightmost lane, reserving left lanes exclusively for passing maneuvers.",
      fr: "La circulation normale s'effectue sur la voie la plus à droite, les voies de gauche étant réservées au dépassement."
    },
    articleRef: "Art. 9"
  },
  {
    id: 93,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ifoto y'umuriro / ikibiriti cyangwa ikigega gitangaza amavuta kimenyesha iki?",
      en: "What does a prohibitive circular sign depicting flame or flammable tanker indicate?",
      fr: "Que signifie un panneau rond d'interdiction représentant une flamme ou une citerne inflammable?"
    },
    options: {
      rw: [
        "Birabujijwe ku binyabiziga bitwaye ibintu bishobora guturika cyangwa gufatwa n'umuriro byoroshye (Matières inflammables / explosives)",
        "Sitasiyo ya lisansi rwagati",
        "Aho gutwikira ibishingwe",
        "Aho gucana umuriro gusa"
      ],
      en: [
        "Access prohibited for vehicles carrying dangerous, explosive, or easily inflammable goods",
        "A gas station nearby",
        "Trash burning area",
        "Campfire recreation site"
      ],
      fr: [
        "Accès interdit aux véhicules transportant des matières explosives ou facilement inflammables",
        "Station d'essence proche",
        "Zone de brûlage",
        "Zone de feu de camp"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza amakamyo atwaye ibikomoka kuri peteroli cyangwa ibisasu gukoresha uwo muhanda cyangwa umuyoboro.",
      en: "This prohibition excludes hazardous flammable fuel or chemical transport from populated or vulnerable routes.",
      fr: "Ce panneau interdit l'accès aux transports de produits dangereux inflammables ou explosifs."
    },
    articleRef: "Art. 69"
  },
  {
    id: 94,
    category: 'signs',
    question: {
      rw: "Icyapa kirimo ikimenyetso cy'umutuku ku butaka bw'umweru kigaragaza 'Abanyamaguru baciwemo umurongo utukura' gisobanura iki?",
      en: "What does a sign showing pedestrians crossed out with a red diagonal line mean?",
      fr: "Que signifie le panneau représentant des piétons barrés d'un trait rouge?"
    },
    options: {
      rw: [
        "Birabujijwe ku banyamaguru kunyura muri uwo muhanda (Accès interdit aux piétons)",
        "Inzira y'abanyamaguru yonyine",
        "Aho abanyamaguru bagomba kwirukira",
        "Aho abanyamaguru bategereza tagisi"
      ],
      en: [
        "Access prohibited for pedestrians (Accès interdit aux piétons)",
        "Pedestrian-only promenade",
        "Jogging track",
        "Taxi passenger stop"
      ],
      fr: [
        "Accès interdit aux piétons",
        "Voie piétonne obligatoire",
        "Piste de course à pied",
        "Arrêt de taxi"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza abanyamaguru gukoresha uwo muhanda w'umuvuduko cyangwa inzira yihariye.",
      en: "Pedestrians are strictly forbidden from entering or walking along this roadway segment.",
      fr: "Ce panneau interdit formellement la circulation aux piétons sur la voie concernée."
    },
    articleRef: "Art. 69"
  },
  {
    id: 95,
    category: 'technical',
    question: {
      rw: "Buri kinyabiziga gitegetswe kugira ibyapa biranga numero zacyo (Plaques d'immatriculation) bimeze bite?",
      en: "How must vehicle registration license plates (Plaques d'immatriculation) be installed and maintained?",
      fr: "Comment les plaques d'immatriculation d'un véhicule doivent-elles être installées et entretenues?"
    },
    options: {
      rw: [
        "Bishyirwa imbere n'inyuma, bigomba kuba bisobanutse neza, bitariho umwanda kandi bicanirwa nijoro inyuma",
        "Bishyirwa mu modoka imbere mu kabati",
        "Bishyirwa ku ruzitiro rw'urugo",
        "Bishyirwa ku mapine"
      ],
      en: [
        "Mounted at front and rear, cleanly visible and legible, unobstructed, with rear license plate light at night",
        "Stored inside the glove compartment",
        "Mounted on home fence",
        "Attached to the tires"
      ],
      fr: [
        "Fixées à l'avant et à l'arrière, parfaitement lisibles et propres, avec éclairage nocturne de la plaque arrière",
        "Rangées dans la boîte à gants",
        "Fixées sur la clôture",
        "Accrochées aux pneus"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibyapa biranga imodoka bigomba kuba bifunze neza imbere n'inyuma, bitwikiriwe n'itara ry'umweru ryaka nijoro ku cyapa cy'inyuma.",
      en: "License plates must be securely affixed front and back, kept clean, and illuminated at night with white light.",
      fr: "Les plaques minéralogiques doivent être visibles, inamovibles, propres et la plaque arrière éclairée la nuit."
    },
    articleRef: "Art. 34"
  },
  {
    id: 96,
    category: 'penalties',
    question: {
      rw: "Gukoresha telefone igendanwa mu ntoki (Téléphone au volant) igihe utwaye ikinyabiziga bihanishwa iki mu Rwanda?",
      en: "Using a handheld mobile phone while driving (Téléphone au volant) is punished by what penalty in Rwanda?",
      fr: "L'usage d'un téléphone portable tenu en main au volant est passible de quelle sanction au Rwanda?"
    },
    options: {
      rw: [
        "Amande y'amafaranga (10,000 RWF kugeza ku 25,000 RWF) kubera guteza uburangare mu gutwara",
        "Guhabwa telefone nshya",
        "Nta kibazo kirimo niba uvugira kuri speaker",
        "Gukora imirimo y'amaboko"
      ],
      en: [
        "Statutory traffic fine (10,000 RWF to 25,000 RWF) for distracted driving violation",
        "Receiving a complimentary new phone",
        "No fine if holding it while talking",
        "Community labor"
      ],
      fr: [
        "Amende forfaitaire (10 000 à 25 000 RWF) pour conduite avec distraction au volant",
        "Attribution d'un nouveau téléphone",
        "Aucune sanction",
        "Travaux d'intérêt général"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gukoresha telefone mu ntoki utwaye bitemewe kuko birangaza umushoferi bikaba intandaro y'impanuka nyinshi zikomeye.",
      en: "Holding and using mobile phones while driving causes serious driver distraction and is penalized with immediate fines.",
      fr: "L'utilisation du téléphone en main au volant distrait le conducteur et constitue une contravention punie d'amende."
    },
    articleRef: "Art. 85"
  },
  {
    id: 97,
    category: 'speed',
    question: {
      rw: "Umuvuduko ntarengwa wemewe ku modoka zitwara abagenzi mu buryo rusange (Bus/Minibus) mu Rwanda ni uwuhe hanze y'insisiro?",
      en: "What is the legal top speed limit for public passenger transport buses/minibuses outside urban zones in Rwanda?",
      fr: "Quelle est la vitesse maximale légale pour les autobus et minibus de transport public hors agglomération au Rwanda?"
    },
    options: {
      rw: ["60 km/h (yubakishijwe utwuma tugabanya umuvuduko / Speed governors)", "120 km/h", "140 km/h", "40 km/h gusa"],
      en: ["60 km/h (strictly enforced via fitted electronic speed governors)", "120 km/h", "140 km/h", "40 km/h only"],
      fr: ["60 km/h (contrôlée par les limiteurs de vitesse obligatoires)", "120 km/h", "140 km/h", "40 km/h uniquement"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Imodoka zitwara abagenzi mu Rwanda zigomba gushyirwamo utwuma tugabanya umuvuduko (Speed governors) tutazemerera kurenza 60 km/h.",
      en: "Public passenger buses in Rwanda are legally fitted with electronic speed governors calibrated not to exceed 60 km/h.",
      fr: "Les véhicules de transport collectif au Rwanda sont équipés de limiteurs bridant la vitesse à 60 km/h."
    },
    articleRef: "Art. 22"
  },
  {
    id: 98,
    category: 'priority',
    question: {
      rw: "Iyo uhuye n'umurongo w'abasirikare, abanyeshuri cyangwa igitambo k'abantu bagendera kuri gahunda (Cortege / Colonne), umushoferi agomba:",
      en: "When encountering a procession of marching troops, funeral cortege, or school column on the road, a driver must:",
      fr: "Face à un cortège d'élèves, une colonne militaire ou un convoi funèbre défilant en ordre, le conducteur doit:"
    },
    options: {
      rw: [
        "Kwirinda gucamo hagati cyangwa kubangamira urwo rugendo",
        "Kwinjiza imodoka hagati yabo ngo abatanyemo ibice",
        "Kuvuza ihoni cyane ngo basandare",
        "Kongera umuvuduko ngo abiceho vuba"
      ],
      en: [
        "Refrain from cutting through or disrupting the organized procession",
        "Drive right through their midst to split them up",
        "Honk loudly to scatter the column",
        "Speed quickly through them"
      ],
      fr: [
        "S'abstenir de couper ou de perturber le défilé du cortège en marche",
        "Traverser au milieu pour couper la colonne",
        "Klaxonner pour disperser",
        "Accélérer au milieu"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Birabujijwe guca mu ngabo z'abantu ziri ku murongo cyangwa amakoni y'abantu bitabiriye ibirori cyangwa amashyingura.",
      en: "Drivers are legally prohibited from cutting through organized processions or marching groups.",
      fr: "Il est interdit aux conducteurs de couper les colonnes de troupes, cortèges et groupes organisés en marche."
    },
    articleRef: "Art. 36"
  },
  {
    id: 99,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'amabuye amanuka (Chute de pierres) kimenyesha iki?",
      en: "What does a danger triangle sign depicting falling rocks (Chute de pierres) warn of?",
      fr: "Que signale un panneau triangulaire d'avertissement illustrant des chutes de pierres?"
    },
    options: {
      rw: [
        "Amakuba y'amabuye ashobora kumanuka ku musozi cyangwa amabuye ari mu muhanda",
        "Ikariyeri y'amabuye gusa",
        "Aho gupakururira umusenyi",
        "Umuhanda mushya w'amabuye"
      ],
      en: [
        "Hazard of falling rocks from mountainsides and rocks obstructing the roadway ahead",
        "A commercial stone quarry only",
        "Sand dumping area",
        "A cobblestone paved street"
      ],
      fr: [
        "Risque de chutes de pierres de la montagne ou présence de rochers sur la chaussée",
        "Carrière de pierres",
        "Dépôt de sable",
        "Route pavée"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira ko mu misozi yegereye umuhanda hashobora kumanuka amabuye bityo umushoferi akaba maso.",
      en: "This warning sign alerts drivers to possible rockfalls and debris on mountainous roadways.",
      fr: "Ce panneau met en garde contre les éboulements rocheux et les débris sur la chaussée en zone montagneuse."
    },
    articleRef: "Art. 67"
  },
  {
    id: 100,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu irimo ikimenyetso cy'umuhanda unyerera (Chaussée glissante) kimenyesha iki?",
      en: "What does a danger triangle sign showing a car skidding with wavy tire tracks mean?",
      fr: "Que signifie le panneau triangulaire de danger montrant une voiture en dérapage?"
    },
    options: {
      rw: [
        "Umuhanda ushobora kunyerera cyane igihe cy'imvura cyangwa icyondo (Chaussée glissante)",
        "Ahasiganirwa imodoka zikora drift",
        "Umuhanda uzamuka cyane",
        "Aho koza imodoka"
      ],
      en: [
        "Slippery roadway ahead especially during rain or mud (Chaussée glissante)",
        "Drifting racing circuit",
        "Steep uphill climb",
        "Car wash station"
      ],
      fr: [
        "Chaussée particulièrement glissante, notamment en cas de pluie ou de boue",
        "Circuit de drift",
        "Forte côte",
        "Lavage automobile"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kigira inama umushoferi yo kugabanya umuvuduko kuko umuhanda unyerera byoroshye.",
      en: "This warning sign advises immediate deceleration due to reduced tire adhesion and slippery surface ahead.",
      fr: "Ce panneau de danger indique une perte d'adhérence et impose de modérer sa vitesse."
    },
    articleRef: "Art. 67"
  }
];
