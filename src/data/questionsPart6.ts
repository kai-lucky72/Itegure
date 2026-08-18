import { Question } from '../types';

export const QUESTIONS_PART6: Question[] = [
  {
    id: 251,
    category: 'priority',
    question: {
      rw: "Ku masangano adafite icyapa na kimwe, nta n'itara cyangwa umupolisi, ni irihe tegeko rusange rigomba gukurikizwa?",
      en: "At an uncontrolled intersection with no signs, signals, or police officer, which general rule applies?",
      fr: "À un carrefour sans aucune signalisation, feu ou agent, quelle règle générale de priorité s'applique?"
    },
    options: {
      rw: [
        "Guha inzira ibinyabiziga biturutse mu ruhande rw'iburyo (Priorité à droite)",
        "Guha inzira ibinyabiziga binini gusa",
        "Kuvuduka cyane ugatambuka mbere",
        "Guha inzira ibituruka ibumoso gusa"
      ],
      en: [
        "Yield right-of-way to vehicles approaching from the right (Priority to the right)",
        "Yield exclusively to the heaviest trucks",
        "Accelerate rapidly to cross first",
        "Yield to left-approaching traffic only"
      ],
      fr: [
        "Céder le passage aux véhicules venant de droite (Priorité à droite)",
        "Céder le passage uniquement aux gros camions",
        "Accélérer pour passer en premier",
        "Céder le passage à gauche uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itegeko fatizo mu Rwanda no mu bihugu byinshi rigenga amasangano adafite ibyapa ni ukureka uje aturutse iburyo bwawe agahita mbere.",
      en: "The standard default priority at uncontrolled intersections is the right-hand priority rule (Priorité à droite).",
      fr: "En l'absence de signalisation spécifique, la priorité à droite s'applique obligatoirement à tout carrefour."
    },
    articleRef: "Art. 12"
  },
  {
    id: 252,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Inzira y'abanyamaguru' (Trottoir / Sidewalk) risobanura iki mu mategeko y'umuhanda?",
      en: "What is the legal definition of a pedestrian sidewalk (Trottoir)?",
      fr: "Quelle est la définition légale d'un trottoir (Trottoir)?"
    },
    options: {
      rw: [
        "Igice cy'inzira nyabagendwa kiri hejuru cyangwa gitandukanyijwe n'umuhanda kigenewe gusa kugendwamo n'abanyamaguru",
        "Umuhanda w'imodoka zihuta",
        "Inzira yagenewe guparika amakamyo",
        "Akayira k'amashanyarazi"
      ],
      en: [
        "The elevated or separated border section of a public road reserved exclusively for pedestrian travel",
        "A fast expressway lane for cars",
        "A designated truck parking lot",
        "An electrical cable corridor"
      ],
      fr: [
        "La partie surélevée ou séparée de la voie publique réservée exclusivement à la circulation des piétons",
        "Une voie rapide pour voitures",
        "Une zone de stationnement pour camions",
        "Une tranchée technique"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Trottoir ni inzira y'abanyamaguru yubatse ku mpande z'umuhanda kugira ngo bagende batekanye batavangwa n'imodoka.",
      en: "Sidewalks are pedestrian-dedicated walkways situated adjacent to roadways to protect foot traffic.",
      fr: "Le trottoir est l'espace réservé aux piétons longeant la chaussée pour leur sécurité."
    },
    articleRef: "Art. 2"
  },
  {
    id: 253,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende gifite ubuso bw'ubururu kirimo igishushanyo cy'igitanda n'umusaraba utukura gisobanura iki?",
      en: "What does a blue rectangular service information sign showing a hospital bed and red cross indicate?",
      fr: "Que signifie un panneau rectangulaire bleu illustrant un lit d'hôpital et une croix rouge?"
    },
    options: {
      rw: [
        "Ibitaro cyangwa ahari ubutabazi bw'ibanze n'ubuvuzi bwihuse (Hôpital / Poste de secours)",
        "Hoteli yo kuryamamo",
        "Isoko ry'imiti",
        "Irimbi ryo gushyinguramo"
      ],
      en: [
        "Hospital or medical emergency treatment facility (Hôpital)",
        "Tourist hotel accommodation",
        "Pharmaceutical trading depot",
        "Cemetery ground"
      ],
      fr: [
        "Établissement hospitalier ou poste de secours d'urgence",
        "Hôtel de repos",
        "Marché de médicaments",
        "Cimetière"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa cyerekana ko mu gace kegereye hari ibitaro cyangwa ubutabazi bityo abashoferi bakaba basabwa kwirinda gusakuza no kuvuza amahoni.",
      en: "This service signboard informs drivers of a nearby hospital, requesting minimal noise and strict horn silence.",
      fr: "Ce panneau d'indication signale la proximité d'un hôpital où le silence et le calme sont requis."
    },
    articleRef: "Art. 71"
  },
  {
    id: 254,
    category: 'lights',
    question: {
      rw: "Itara ry'imbere ry'umweru rishingiye ku ipikipiki cyangwa velomoteri rigomba kumurika intera ingana iki byibura nijoro?",
      en: "What minimum forward road illumination distance is legally required for the front headlight of a motorcycle at night?",
      fr: "Quelle est la distance minimale d'éclairage réglementaire pour le phare avant d'une motocyclette la nuit?"
    },
    options: {
      rw: [
        "Byibura metero 100 ku itara rirerire na metero 40 ku itara rigufi",
        "Metero 5 gusa",
        "Metero 500",
        "Nta rugero rutegetswe ku mapikipiki"
      ],
      en: [
        "At least 100m for high beam and 40m for dipped beam",
        "5 meters only",
        "500 meters",
        "No lighting requirements apply to motorbikes"
      ],
      fr: [
        "Au moins 100 m en feu de route et 40 m en feu de croisement",
        "5 mètres seulement",
        "500 mètres",
        "Aucune distance réglementaire"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara y'ipikipiki agomba gushobora kumurika metero 100 iyo ari maremare na metero 40 iyo ari magufi kugira ngo umushoferi abone imbere neza.",
      en: "Motorcycle headlights must meet full vehicular lighting visibility benchmarks (100m high beam, 40m low beam).",
      fr: "Les phares de moto doivent éclairer à au moins 100 mètres en feux de route et 40 mètres en feux de croisement."
    },
    articleRef: "Art. 31"
  },
  {
    id: 255,
    category: 'speed',
    question: {
      rw: "Ni iki umushoferi agomba gukora iyo ageze ahari icyapa cy'umuvuduko ntarengwa wa 30 km/h mu gace k'ishuri?",
      en: "What must a driver do when reaching a 30 km/h speed limit zone posted near a school?",
      fr: "Que doit faire le conducteur en abordant une zone scolaire limitée à 30 km/h?"
    },
    options: {
      rw: [
        "Kugabanya umuvuduko akageza munsi ya 30 km/h kandi akitegura guhagarara akanya ako ariko kose abana batambutse",
        "Gukomeza kuri 60 km/h niba nta mwana abona ku muhanda",
        "Kuvuza ihoni cyane ngo abana bose batinye basohoke mu muhanda",
        "Kurenzaho umuvuduko kuko ari mu gitondo"
      ],
      en: [
        "Reduce speed to at or below 30 km/h and be prepared to stop instantly if any child crosses",
        "Maintain 60 km/h if no children are currently visible",
        "Honk continuously to intimidate pedestrians off the asphalt",
        "Exceed speed since it is early morning"
      ],
      fr: [
        "Ralentir en dessous de 30 km/h et être prêt à s'arrêter immédiatement en cas de traversée d'enfants",
        "Garder 60 km/h si aucun enfant n'est visible",
        "Klaxonner pour effrayer les piétons",
        "Accélérer"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Aho ibyapa by'umuvuduko muto biri mu duce tw'amashuri bitegeka kugabanya umuvuduko no kuba maso kuko abana bashobora kwiruka batitegereje.",
      en: "School speed zones require disciplined compliance with reduced speed limits to safeguard unpredictable child pedestrian movements.",
      fr: "Les zones scolaires imposent un respect strict de la vitesse réduite pour prévenir tout risque lié à la traversée d'enfants."
    },
    articleRef: "Art. 18"
  },
  {
    id: 256,
    category: 'towing',
    question: {
      rw: "Iyo ikinyabiziga gikurura ikindi gikoresheje umugozi woroheje (Câble souple / Rope), umuvuduko ntarengwa ntugomba kurenza iki?",
      en: "When towing a disabled vehicle using a flexible cable or towing rope, what is the maximum permissible towing speed?",
      fr: "Lors du remorquage d'un véhicule à l'aide d'un câble souple ou d'une corde, quelle vitesse maximale ne doit pas être dépassée?"
    },
    options: {
      rw: ["25 km/h", "60 km/h", "80 km/h", "10 km/h"],
      en: ["25 km/h", "60 km/h", "80 km/h", "10 km/h"],
      fr: ["25 km/h", "60 km/h", "80 km/h", "10 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gukurura ikinyabiziga gishingiye ku mugozi cyangwa ikiziriko cyoroheje bisaba umuvuduko muto cyane utarenza 25 km/h kugira ngo hatabaho kugongana.",
      en: "Flexible cable towing requires extreme caution and speed capped at 25 km/h to prevent rear-end impact during braking.",
      fr: "Le remorquage avec liaison souple exige une vitesse très prudente limitée à 25 km/h."
    },
    articleRef: "Art. 42"
  },
  {
    id: 257,
    category: 'technical',
    question: {
      rw: "Ni ikihe gikoresho cy'ubutabazi cyo kuzimya umuriro (Extincteur / Fire extinguisher) gitegetswe mu binyabiziga bitwara abagenzi mu Rwanda?",
      en: "What type of fire extinguishing apparatus is legally mandatory in all commercial passenger transport vehicles in Rwanda?",
      fr: "Quel équipement d'extinction d'incendie est obligatoire dans les véhicules de transport de personnes au Rwanda?"
    },
    options: {
      rw: [
        "Akazindaro kazimya umuriro gakora neza kandi gafite icyemezo cy'uko katararangiza igihe (Extincteur valide)",
        "Indobo y'amazi yo mu rugo",
        "Igitambaro cy'amazi",
        "Umuzingo w'umucanga gusa"
      ],
      en: [
        "A certified, fully charged, and non-expired operational automotive fire extinguisher",
        "A household water bucket",
        "A wet towel",
        "A sand bag only"
      ],
      fr: [
        "Un extincteur homologué, en état de marche et non périmé adapté aux feux d'hydrocarbures",
        "Un seau d'eau domestique",
        "Un chiffon humide",
        "Un sac de sable"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Imodoka zose zitwara abagenzi n'amakamyo agomba guhorana kizimyamuriro ikora neza kandi ifite umusego w'ubugenzuzi.",
      en: "Commercial passenger and transport vehicles must carry certified automotive dry powder fire extinguishers.",
      fr: "Les véhicules de transport rémunéré doivent être équipés d'un extincteur en parfait état de fonctionnement."
    },
    articleRef: "Art. 59"
  },
  {
    id: 258,
    category: 'penalties',
    question: {
      rw: "Gusinda inzoga ku kigero kirenze igipimo cyemewe cy'amategeko (Conduite en état d'ivresse / Drunk driving) bihanishwa iki?",
      en: "Driving under the influence of alcohol exceeding the legal statutory threshold is punishable by:",
      fr: "La conduite en état d'ivresse au-delà du taux légal autorisé est punie par:"
    },
    options: {
      rw: [
        "Gufungwa mu nzu y'imbohe, amande y'amafaranga menshi, no guhagarikirwa uruhushya rwo gutwara",
        "Guhabwa ikaze mu kigo cy'abapolisi",
        "Kugabanyirizwa umusoro w'imodoka",
        "Nta gihano kuko ari uburenganzira bw'umuntu"
      ],
      en: [
        "Detention, severe criminal fines, vehicle impoundment, and revocation/suspension of driving license",
        "A welcome reception at police headquarters",
        "A discount on vehicle registration fees",
        "No penalty as drinking is a personal freedom"
      ],
      fr: [
        "Détention policière, lourdes amendes pénales, mise en fourrière et suspension/retrait du permis",
        "Des encouragements",
        "Une réduction de taxe",
        "Aucune sanction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gutwara wasinze ni icyaha gikomeye kibangamiye umutekano w'igihugu, gihanishwa gufungwa, amande ndetse no kwamburwa perimi.",
      en: "Drunk driving is a major criminal traffic violation carrying mandatory jail terms, steep fines, and license suspension.",
      fr: "La conduite en état d'ébriété constitue un délit sévèrement réprimé par la détention, amende et retrait de permis."
    },
    articleRef: "Art. 80"
  },
  {
    id: 259,
    category: 'parking',
    question: {
      rw: "Umurongo w'umuhondo ucagaguye ushushanyije ku nkombe y'umuhanda cyangwa ku rubavu rwa trottoir usobanura iki?",
      en: "What does a broken yellow line painted on the roadway curb or along the pavement edge mean?",
      fr: "Que signifie une ligne jaune discontinue peinte sur le bord du trottoir ou de la chaussée?"
    },
    options: {
      rw: [
        "Guhagarara akanya gato biremewe ariko guparika akanya karekire birabujijwe (Stationnement interdit, arrêt autorisé)",
        "Guparika birahageze ku binyabiziga byose",
        "Inzira y'abanyamaguru gusa",
        "Aho gukinira umupira"
      ],
      en: [
        "Brief stopping is permitted for loading/passengers, but extended parking is prohibited (Stationnement interdit)",
        "Free parking permitted for all vehicles indefinitely",
        "Exclusive pedestrian path",
        "Sports field area"
      ],
      fr: [
        "Arrêt autorisé pour chargement/dépose, mais stationnement prolongé interdit",
        "Stationnement libre pour tous les véhicules",
        "Passage piéton",
        "Zone de jeu"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umurongo w'umuhondo ucagaguye wemerera ikinyabiziga guhagarara akanya gato cyinjiza abantu ariko ukabuza guparika igihe kirekire.",
      en: "A broken yellow curb marking prohibits long-term parking while permitting momentary passenger pick-up/drop-off.",
      fr: "La ligne jaune discontinue au sol interdit le stationnement mais autorise l'arrêt temporaire."
    },
    articleRef: "Art. 74"
  },
  {
    id: 260,
    category: 'signs',
    question: {
      rw: "Umurongo w'umuhondo udacagaguye (Ligne continue jaune) ushushanyije ku rubavu rw'umuhanda usobanura iki?",
      en: "What does a solid continuous yellow line along the edge of the roadway or curb mean?",
      fr: "Que signifie une ligne jaune continue tracée le long de la bordure du trottoir ou de la chaussée?"
    },
    options: {
      rw: [
        "Guhagarara akanya gato no guparika akanya karekire byose birabujijwe burundu (Arrêt et stationnement interdits)",
        "Guparika byemewe ku modoka zose",
        "Inzira y'imodoka z'ubwoko bwa Toyota gusa",
        "Ahantu ho gucururiza ibinyobwa"
      ],
      en: [
        "Both stopping and parking are strictly prohibited at all times (Arrêt et stationnement interdits)",
        "Free parking permitted for all motorcars",
        "Lane reserved for specific car brands",
        "Commercial refreshment stall zone"
      ],
      fr: [
        "L'arrêt et le stationnement sont formellement interdits en tout temps",
        "Stationnement gratuit autorisé",
        "Voie réservée à certaines marques",
        "Zone marchande"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umurongo w'umuhondo udacagaguye ubuza ikinyabiziga icyo aricyo cyose guhagarara akanya gato cyangwa guparika.",
      en: "A solid unbroken yellow curb marking strictly forbids both momentary stopping and extended parking.",
      fr: "La ligne jaune continue peinte sur le trottoir marque l'interdiction absolue de l'arrêt et du stationnement."
    },
    articleRef: "Art. 74"
  },
  {
    id: 261,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Uburemere bwa ngombwa bw'ikinyabiziga' (Tare / Tare weight / Poids à vide) bisobanura iki?",
      en: "What does the term 'Tare weight' (Tare / Poids à vide) mean in vehicle regulations?",
      fr: "Que signifie le terme 'Tare' (Poids à vide) dans la réglementation des véhicules?"
    },
    options: {
      rw: [
        "Uburemere bw'ikinyabiziga kidafite abagenzi cyangwa umutwaro, ariko gifite amavuta, lisansi n'ibikoresho byacyo bya ngombwa",
        "Uburemere bw'abagenzi n'imizigo byose hamwe",
        "Uburemere bwa shaseri gusa idafite ibiziga",
        "Uburemere bw'amapine ane gusa"
      ],
      en: [
        "The unladen weight of the vehicle with full fluids, fuel, and standard tools, but without passengers or payload",
        "The gross combined weight of full passenger load and cargo",
        "The weight of the raw bare metal chassis without tires",
        "The total weight of the four tires only"
      ],
      fr: [
        "Le poids du véhicule en ordre de marche avec plein de carburant et outillage, sans passagers ni fret",
        "Le poids total des passagers et du chargement",
        "Le poids du châssis nu",
        "Le poids des quatre roues"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Tare ni uburemere bw'imodoka igihe ifite ibikoresho byose byo kugenda nka essence n'amavuta ariko itarashyirwamo abantu n'imizigo.",
      en: "Tare weight represents the complete vehicle curb weight ready for operation without occupants or commercial payload.",
      fr: "La tare est la masse du véhicule à vide en ordre de marche avec ses équipements réglementaires."
    },
    articleRef: "Art. 2"
  },
  {
    id: 262,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi asatira inzira y'abanyamaguru (Passage pour piétons) maze akabona umunyamaguru watangiye kwambuka, agomba gukora iki?",
      en: "When approaching a pedestrian zebra crossing and seeing a pedestrian beginning to cross, what must the driver do?",
      fr: "En approchant d'un passage pour piétons alors qu'un piéton s'est engagé, que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Guhagarara agaha inzira umunyamaguru kugeza arangije kwambuka mu mutekano",
        "Kuvuza ihoni ngo yiruke ahunge",
        "Kongera umuvuduko ngo atambuke mbere ye",
        "Kumuzengurukaho amukikiye mu buryo bwa hafi cyane"
      ],
      en: [
        "Come to a full stop and grant right-of-way until the pedestrian crosses safely",
        "Honk aggressively to frighten them into sprinting across",
        "Accelerate quickly to pass before they step into the lane",
        "Swerve tightly around them without slowing down"
      ],
      fr: [
        "S'arrêter pour céder le passage au piéton jusqu'à sa traversée complète en sécurité",
        "Klaxonner pour le faire courir",
        "Accélérer pour passer avant lui",
        "Le contourner de très près"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Abanyamaguru bari ku murongo w'abanyamaguru bafite uburenganzira busesuye bwo gutambuka; umushoferi agomba guhagarara akabaha inzira.",
      en: "Pedestrians on designated pedestrian crossings have absolute statutory priority; drivers must stop completely.",
      fr: "Les piétons engagés sur un passage zébré bénéficient d'une priorité absolue de traversée."
    },
    articleRef: "Art. 40"
  },
  {
    id: 263,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo igishushanyo cy'imodoka n'ipikipiki bisobanura iki?",
      en: "What does a circular sign with a red border depicting both a motorcar and a motorcycle indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge illustrant une automobile et une motocyclette?"
    },
    options: {
      rw: [
        "Inzira ibujijwe ibinyabiziga byose bifite moteri (Accès interdit à tous véhicules à moteur)",
        "Inzira y'imodoka za siporo gusa",
        "Aho kugurira ibinyabiziga",
        "Amasangano y'imodoka na moto"
      ],
      en: [
        "Access prohibited to all motorized vehicles (Accès interdit à tous véhicules à moteur)",
        "Sports car expressway only",
        "Motor vehicle dealership",
        "Car and motorcycle junction"
      ],
      fr: [
        "Accès interdit à tous les véhicules à moteur (automobiles et deux-roues motorisés)",
        "Voie de compétition automobile",
        "Concessionnaire automobile",
        "Carrefour voitures et motos"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kibuza ibinyabiziga byose bifite moteri kwinjira muri uwo muhanda; hagendamo gusa abanyamaguru cyangwa amagare adafite moteri.",
      en: "This prohibition sign bars all combustion or electric motorized vehicles from entering the roadway.",
      fr: "Ce panneau d'interdiction interdit l'accès à l'ensemble des véhicules munis d'un moteur."
    },
    articleRef: "Art. 68"
  },
  {
    id: 264,
    category: 'lights',
    question: {
      rw: "Amatara ndangambere (Feux de position / Sidelights) agomba kugaragara mu ntera ingana iki mu ijoro?",
      en: "At what minimum visibility distance must front position lights (Sidelights) be distinguishable at night in clear weather?",
      fr: "À quelle distance minimale les feux de position avant doivent-ils être visibles la nuit par temps clair?"
    },
    options: {
      rw: ["Nibura metero 150 (Au moins 150m)", "Metero 20 gusa", "Metero 500", "Metero 10"],
      en: ["At least 150 meters (Min 150m)", "20 meters only", "500 meters", "10 meters"],
      fr: ["Au moins 150 mètres (Min 150m)", "20 mètres seulement", "500 mètres", "10 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara ndangambere agomba kugaragarira abandi mu ntera itari munsi ya metero 150 kugira ngo bamenye ko hari ikinyabiziga.",
      en: "Front parking position lights must be clearly visible to oncoming observers from at least 150 meters away.",
      fr: "Les feux de position avant doivent être visibles la nuit par temps clair à une distance d'au moins 150 mètres."
    },
    articleRef: "Art. 32"
  },
  {
    id: 265,
    category: 'overtaking',
    question: {
      rw: "Kuki bibujijwe kunyuranaho mu ikorosi ribi ritabona imbere (Virage sans visibilité)?",
      en: "Why is overtaking strictly prohibited inside sharp blind bends with obscured forward visibility?",
      fr: "Pourquoi le dépassement est-il formellement interdit dans un virage sans visibilité?"
    },
    options: {
      rw: [
        "Kubera ko umushoferi atabona ibinyabiziga biturutse imbere bikaba byateza impanuka ikomeye yo kugongana imbonankubone (Collision frontale)",
        "Kugira ngo amapine atangirika",
        "Kugira ngo igihe kidapfa ubusa",
        "Nta cyaha kirimo iyo uvuza ihoni"
      ],
      en: [
        "Because oncoming traffic cannot be seen, creating an extreme risk of a catastrophic head-on collision",
        "To protect tire treads from lateral wear",
        "To save passenger travel time",
        "It is legally allowed as long as continuous honking is performed"
      ],
      fr: [
        "Car l'absence de visibilité empêche de voir les véhicules arrivant en sens inverse, risquant un choc frontal mortel",
        "Pour éviter l'usure des pneus",
        "Pour gagner du temps",
        "C'est autorisé en klaxonnant"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kunyuranaho mu makorosi atabona imbere birabujijwe cyane kuko udashobora kumenya niba hari ikindi kinyabiziga kije kiguteganye.",
      en: "Overtaking in blind corners is unlawful due to the lethal hazard of head-on collisions with invisible oncoming vehicles.",
      fr: "Dépasser dans un virage masqué est interdit en raison du danger mortel de collision frontale."
    },
    articleRef: "Art. 22"
  },
  {
    id: 266,
    category: 'technical',
    question: {
      rw: "Ihembe ry'imodoka (Avertisseur sonore / Horn) rigomba kumvikana mu ntera ingana iki byibura ku muhanda ugororotse?",
      en: "What minimum acoustic hearing distance must a vehicle warning horn produce on a straight road under normal conditions?",
      fr: "À quelle distance minimale l'avertisseur sonore (klaxon) d'un véhicule doit-il être distinctement audible?"
    },
    options: {
      rw: ["Nibura metero 100 (Au moins 100m)", "Metero 10 gusa", "Metero 1000 (1 km)", "Metero 5"],
      en: ["At least 100 meters (Min 100m)", "10 meters only", "1000 meters (1 km)", "5 meters"],
      fr: ["Au moins 100 mètres (Min 100m)", "10 mètres seulement", "1000 mètres (1 km)", "5 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ihembe ry'imodoka rigomba kuba rifite ijwi ryumvikana mu ntera itari munsi ya metero 100 ariko ritabangamiye abantu cyangwa ngo riteze ubwoba.",
      en: "Vehicle audible warning devices must be clearly audible at a distance of at least 100 meters on a level roadway.",
      fr: "L'avertisseur sonore doit être audible à une distance minimale de 100 mètres sans émettre de sons stridents."
    },
    articleRef: "Art. 55"
  },
  {
    id: 267,
    category: 'penalties',
    question: {
      rw: "Iyo umushoferi yanze guhagarara ku kimenyetso cy'umupolisi uri ku kazi (Refus d'obtempérer), ahanishwa iki?",
      en: "What penalties apply to a driver who refuses to stop upon lawful signal by a police officer (Refus d'obtempérer)?",
      fr: "Quelles sanctions s'appliquent au conducteur qui refuse d'obtempérer à la sommation d'arrêt d'un agent de police?"
    },
    options: {
      rw: [
        "Gufungwa, amande akomeye, gufatirwa ikinyabiziga no gukurikiranwa mu mategeko y'ubugizi bwa nabi",
        "Guterwa ibipfunsi n'abagenzi gusa",
        "Kwandikirwa urwandiko rwo gushima",
        "Nta cyaha kuko afite uburenganzira bwo kwikomereza urugendo"
      ],
      en: [
        "Imprisonment, heavy penal fines, vehicle impoundment, and criminal prosecution for defying lawful authority",
        "Verbal complaint from passengers only",
        "Issued a certificate of driving merit",
        "No sanction since drivers have right of continuous travel"
      ],
      fr: [
        "Peine d'emprisonnement, fortes amendes, mise en fourrière du véhicule et poursuites judiciaires",
        "Une simple remontrance des passagers",
        "Une médaille de civisme",
        "Aucune infraction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kwangira umupolisi uhagarika ikinyabiziga ni icyaha gikomeye kibangamira amategeko n'umutekano w'igihugu.",
      en: "Refusing to obey an officer's stop order is a major criminal offense subject to arrest, impoundment, and judicial trial.",
      fr: "Le refus d'obtempérer à une sommation d'arrêt légale est un délit grave puni d'emprisonnement et d'amende."
    },
    articleRef: "Art. 8"
  },
  {
    id: 268,
    category: 'parking',
    question: {
      rw: "Intera ntarengwa yo guhagarara mbere y'amasangano y'umuhanda mu mujyi idashobora kurengwa ni iyihe?",
      en: "What minimum clearance distance from an urban street intersection must be respected when parking?",
      fr: "Quelle distance minimale par rapport à une intersection urbaine doit être respectée pour stationner?"
    },
    options: {
      rw: ["Metero 5 (5 mètres)", "Santimetero 10", "Metero 100", "Metero 0 (guhagarara mu masangano rwagati)"],
      en: ["5 meters (5m)", "10 centimeters", "100 meters", "0 meters (parking inside junction)"],
      fr: ["5 mètres (5m)", "10 centimètres", "100 mètres", "0 mètre (au milieu du carrefour)"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Birabujijwe guhagarara mu ntera iri munsi ya metero 5 mbere y'amasangano kugira ngo udakingiriza abandi bashoferi kureba neza ibituruka mu zindi nzira.",
      en: "Parking within 5 meters of an intersection corner is prohibited to preserve sight triangles and turning space.",
      fr: "Le stationnement est interdit à moins de 5 mètres d'une intersection pour garantir la visibilité."
    },
    articleRef: "Art. 28"
  },
  {
    id: 269,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Ikinyabiziga kidasanzwe' (Véhicule spécial / Exceptional convoy) risobanura iki?",
      en: "What constitutes a 'Special or exceptional vehicle' (Véhicule spécial / Convoi exceptionnel)?",
      fr: "Que constitue un 'Véhicule spécial' (Convoi exceptionnel) selon le code de la route?"
    },
    options: {
      rw: [
        "Ikinyabiziga kirengeje uburebure, ubugari cyangwa uburemere busanzwe bwemewe n'amategeko gisaba uruhushya rwihariye",
        "Imodoka itukura ifite intebe ebyiri",
        "Igare rishya ritaragenda mu muhanda",
        "Imodoka itwara umuryango gusa"
      ],
      en: [
        "A vehicle whose length, width, or total gross weight exceeds standard statutory maximums, requiring special routing permits",
        "A red two-seater passenger sports car",
        "A brand new bicycle that has never touched the road",
        "A vehicle carrying a single family"
      ],
      fr: [
        "Un véhicule dont les dimensions ou le poids dépassent les limites réglementaires ordinaires, exigeant une autorisation spéciale",
        "Une voiture de sport rouge",
        "Une bicyclette neuve",
        "Un véhicule familial ordinaire"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga birenza metero 2.50 z'ubugari cyangwa 4.30m z'ubuhagarike bisaba uruhushya rwihariye rwa Minisiteri no guherekezwa.",
      en: "Over-dimension loads exceeding standard statutory size limits require exceptional transit authorization and escorts.",
      fr: "Les transports exceptionnels dépassant les gabarits réglementaires doivent faire l'objet d'une autorisation spéciale."
    },
    articleRef: "Art. 46"
  },
  {
    id: 270,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho ya mpandeshatu ifite umuzenguruko utukura kirimo igishushanyo cy'ingorofani ya gari ya moshi idafite inkingi zifunga gisobanura iki?",
      en: "What does a triangular warning sign with a red border showing a steam locomotive train without barrier gates indicate?",
      fr: "Que signifie un panneau triangulaire à bordure rouge illustrant une locomotive à vapeur sans barrières?"
    },
    options: {
      rw: [
        "Amasangano y'inzira ya gari ya moshi idafite inkingi zifunga (Passage à niveau sans barrières)",
        "Amasangano ya gari ya moshi afite inkingi zifunga",
        "Inzu ndangamurage ya gari ya moshi",
        "Gari ya moshi yapfuye iri ku muhanda"
      ],
      en: [
        "Unguarded railway level crossing without safety barriers (Passage à niveau sans barrières)",
        "Guarded railway level crossing with automatic gates",
        "Railway history museum",
        "Disabled train blocking roadway"
      ],
      fr: [
        "Passage à niveau non gardé sans barrières de sécurité",
        "Passage à niveau gardé avec barrières automatiques",
        "Musée ferroviaire",
        "Train en panne"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira ko imbere hari amasangano ya gari ya moshi adafite ibyuma biyifunga bityo umushoferi agomba guhagarara akitegereza impande zombi mbere yo kwambuka.",
      en: "This warning sign alerts to an unguarded rail crossing requiring full driver surveillance before traversing tracks.",
      fr: "Ce panneau signale un passage à niveau sans barrières exigeant un arrêt et un contrôle visuel absolu."
    },
    articleRef: "Art. 65"
  },
  {
    id: 271,
    category: 'speed',
    question: {
      rw: "Ku muhanda w'igitaka (Route en terre) hanze y'insisiro, umuvuduko ntarengwa wemewe n'amategeko ni uwuhe?",
      en: "On unpaved dirt/gravel roads (Route en terre) outside built-up areas, what is the maximum legal speed limit?",
      fr: "Sur une route en terre hors agglomération, quelle est la vitesse maximale légale autorisée?"
    },
    options: {
      rw: ["60 km/h", "100 km/h", "80 km/h", "40 km/h"],
      en: ["60 km/h", "100 km/h", "80 km/h", "40 km/h"],
      fr: ["60 km/h", "100 km/h", "80 km/h", "40 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ku mihanda y'igitaka idafite kaburimbo hanze y'insisiro, umuvuduko ntarengwa ni 60 km/h kubera ko umuhanda ushobora kunyerera cyangwa kugira umukungugu mwinshi.",
      en: "On unpaved rural dirt/gravel roads, maximum legal speed is 60 km/h due to loose traction and dust conditions.",
      fr: "Sur route en terre hors agglomération, la vitesse est limitée à 60 km/h pour des raisons d'adhérence et de sécurité."
    },
    articleRef: "Art. 18"
  },
  {
    id: 272,
    category: 'lights',
    question: {
      rw: "Amatara y'icyerekezo (Clignotants) agomba kuba afite irihe bara imbere n'inyuma?",
      en: "What color must turn indicator direction signals emit at the front and rear of the vehicle?",
      fr: "De quelle couleur doivent être les feux indicateurs de direction (clignotants) à l'avant et à l'arrière?"
    },
    options: {
      rw: [
        "Umuhondo w'icunga (Orange / Jaune auto) cyangwa umweru imbere n'umutuku/umuhondo inyuma",
        "Ubururu gusa",
        "Icyatsi kibisi gusa",
        "Umukara gusa"
      ],
      en: [
        "Amber / Orange (Jaune auto) or white at front, and red or amber at rear",
        "Blue only",
        "Bright green only",
        "Black only"
      ],
      fr: [
        "Orange (jaune auto) ou blanc à l'avant, et rouge ou orange à l'arrière",
        "Bleu uniquement",
        "Vert éclatant uniquement",
        "Noir uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara y'icyerekezo agomba kuba ari umuhondo w'icunga ubona neza kumanywa na nijoro.",
      en: "Direction indicators must emit flashing amber/orange light to clearly signal turning intent in all lighting conditions.",
      fr: "Les clignotants doivent émettre une lumière clignotante jaune auto bien visible de jour comme de nuit."
    },
    articleRef: "Art. 34"
  },
  {
    id: 273,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi agiye gukatira ibumoso mu masangano, agomba guha inzira bande?",
      en: "When executing a left turn at an intersection, to whom must the driver yield right-of-way?",
      fr: "Lorsqu'un conducteur tourne à gauche dans un carrefour, à qui doit-il céder le passage?"
    },
    options: {
      rw: [
        "Ibinyabiziga biturutse imbere ye bimanuka bikomeza imbere cyangwa bikata iburyo, n'abanyamaguru bambuka",
        "Nta muntu n'umwe agomba guha inzira kuko ukatira ibumoso afite priorité",
        "Ibinyabiziga biri inyuma ye gusa",
        "Amakamyo aturutse mu yindi mijyi gusa"
      ],
      en: [
        "Oncoming vehicles proceeding straight or turning right, as well as crossing pedestrians",
        "Nobody, since left-turning vehicles hold absolute priority",
        "Vehicles following behind only",
        "Intercity heavy freight trucks only"
      ],
      fr: [
        "Aux usagers venant en face continuant tout droit ou tournant à droite, ainsi qu'aux piétons",
        "À personne car le virage à gauche est prioritaire",
        "Uniquement aux véhicules qui le suivent",
        "Aux camions interurbains uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ugakata ibumoso asatira umurongo ugabanya umuhanda kandi agomba kureka ibinyabiziga bimuteganye bikabanza gutambuka.",
      en: "Left-turning vehicles cross oncoming traffic lines and must therefore yield to all oncoming straight-line and right-turning traffic.",
      fr: "Tout conducteur tournant à gauche coupe la trajectoire adverse et doit céder le passage aux usagers venant en face."
    },
    articleRef: "Art. 14"
  },
  {
    id: 274,
    category: 'towing',
    question: {
      rw: "Umutwaro wikorewe ku kinyabiziga ushobora kurenzwa imbere y'ikinyabiziga ku ntera ingana iki?",
      en: "By how much distance may cargo legally overhang beyond the front bumper of a vehicle?",
      fr: "De quelle distance un chargement peut-il légalement dépasser l'avant d'un véhicule?"
    },
    options: {
      rw: [
        "Nta na rimwe umutwaro wemerewe kurenza umutwe w'imbere w'ikinyabiziga (Depassement avant interdit)",
        "Metero 3 (3 mètres)",
        "Metero 1 (1 mètre)",
        "Metero 5 (5 mètres)"
      ],
      en: [
        "Cargo must NEVER overhang beyond the foremost point of the front bumper",
        "Up to 3 meters",
        "Up to 1 meter",
        "Up to 5 meters"
      ],
      fr: [
        "Le chargement ne doit JAMAIS dépasser l'aplomb avant du véhicule",
        "Jusqu'à 3 mètres",
        "Jusqu'à 1 mètre",
        "Jusqu'à 5 mètres"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko abuza burundu kurenza umutwaro imbere y'ikinyabiziga. Inyuma gusa naho ntarenze metero 3.",
      en: "Front load overhang beyond the front bumper is strictly prohibited under Rwandan traffic statutes.",
      fr: "Tout dépassement du chargement vers l'avant au-delà de l'aplomb du véhicule est formellement interdit."
    },
    articleRef: "Art. 45"
  },
  {
    id: 275,
    category: 'technical',
    question: {
      rw: "Kuki ikinyabiziga kigomba kugira icyapa kiranga nimero (Plaque d'immatriculation / Number plate) gitamuye kandi gisomeka neza?",
      en: "Why must vehicle registration number plates be clean, unobstructed, and clearly illuminated at night?",
      fr: "Pourquoi les plaques d'immatriculation doivent-elles être propres, visibles et éclairées la nuit?"
    },
    options: {
      rw: [
        "Kugira ngo ikinyabiziga kirangwe neza n'ubuyobozi bwa Polisi n'abandi mu gukurikirana umutekano n'amategeko",
        "Kugira ngo kigaragare neza ku mafoto gusa",
        "Kugira ngo kigurishe vuba",
        "Nta cyo bimaze keretse iyo kigiye mu mahanga"
      ],
      en: [
        "To enable clear vehicle identification by police authorities and law enforcement for safety and accountability",
        "Solely for photographic aesthetics",
        "To accelerate vehicle resale",
        "Only relevant when travelling abroad"
      ],
      fr: [
        "Pour permettre l'identification immédiate du véhicule par les forces de l'ordre pour la sécurité publique",
        "Pour faire joli en photo",
        "Pour faciliter la vente",
        "Uniquement pour les voyages internationaux"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Paki iranga imodoka igomba kuba igaragara neza nijoro no kumanywa; kuyihisha cyangwa kuyanduza ni icyaha.",
      en: "Registration license plates must remain clean, legible, and illuminated at night to ensure full vehicular accountability.",
      fr: "Les plaques d'immatriculation doivent être parfaitement lisibles et éclairées la nuit sans aucune altération."
    },
    articleRef: "Art. 56"
  },
  {
    id: 276,
    category: 'penalties',
    question: {
      rw: "Iyo umuntu atwaye ikinyabiziga yanyoye ibiyobyabwenge (Conduite sous l'emprise de stupéfiants / Narcotics), ahanishwa iki?",
      en: "Operating a motor vehicle under the influence of illegal narcotics/drugs is punished by:",
      fr: "La conduite d'un véhicule sous l'emprise de substances stupéfiantes ou drogues est punie par:"
    },
    options: {
      rw: [
        "Gufungwa, amande akomeye, kwamburwa perimi burundu no gufatirwa ikinyabiziga",
        "Gusabwa kuryama mu modoka gusa",
        "Kwishyura amande y'amafaranga igihumbi",
        "Nta cyaha iyo nta mpanuka ikozwe"
      ],
      en: [
        "Severe imprisonment, heavy penal fines, permanent license revocation, and vehicle seizure",
        "Requested to take a short nap in the vehicle",
        "A nominal one thousand franc fine",
        "No violation unless a collision occurred"
      ],
      fr: [
        "Emprisonnement ferme, lourdes amendes pénales, annulation du permis et confiscation du véhicule",
        "Une simple sieste dans le véhicule",
        "Une amende de mille francs",
        "Aucune infraction sans accident"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibiyobyabwenge byangiza ubushobozi bwo gutekereza no gutwara neza bityo bikaba icyaha cy'ubugome gihanishwa ibihano biremereye cyane.",
      en: "Drug-impaired driving is an egregious penal offense carrying severe incarceration, confiscation, and disqualification.",
      fr: "La conduite sous stupéfiants entraîne des peines d'emprisonnement sévères et l'annulation immédiate du permis."
    },
    articleRef: "Art. 80"
  },
  {
    id: 277,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho y'uruziga rufite umuzenguruko utukura kirimo amagambo 'DOUANE / FORODHA' gisobanura iki?",
      en: "What does a circular sign with a red border containing the word 'DOUANE' (Customs) mean?",
      fr: "Que signifie un panneau circulaire à bordure rouge portant la mention 'DOUANE'?"
    },
    options: {
      rw: [
        "Guhagarara ku biro bya gasutamo (Poste de douane - Arrêt obligatoire)",
        "Kugurisha ibicuruzwa ku buntu",
        "Inzira y'imodoka za gasutamo gusa",
        "Umuhanda wishyurwa"
      ],
      en: [
        "Mandatory stop at the customs checkpoint post (Poste de douane)",
        "Duty-free market area",
        "Customs vehicles exclusive lane",
        "Toll roadway"
      ],
      fr: [
        "Arrêt obligatoire au poste de douane frontalière",
        "Boutique hors taxes",
        "Voie réservée à la douane",
        "Péage"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa gitegeka umushoferi wese guhagarara ku biro bya gasutamo akitegura kugenzurwa mbere yo gukomeza urugendo.",
      en: "This regulatory sign orders all passing vehicles to come to a mandatory halt at border customs inspection.",
      fr: "Ce panneau impose un arrêt obligatoire pour contrôle au poste de douane avant toute poursuite du trajet."
    },
    articleRef: "Art. 68"
  },
  {
    id: 278,
    category: 'parking',
    question: {
      rw: "Ni ryari bitemewe guhagarara akanya gato cyangwa karekire mu muhanda ufite ibisate byinshi (Chaussée à plusieurs voies)?",
      en: "When is stopping or parking strictly prohibited on a multi-lane dual carriageway?",
      fr: "Quand est-il strictement interdit de s'arrêter ou de stationner sur une chaussée à plusieurs voies?"
    },
    options: {
      rw: [
        "Mu gisate cyo hagati cyangwa icy'ibumoso (Voies de circulation actives / File de gauche)",
        "Ku ruhande rw'iburyo ahabugenewe",
        "Mu mwanya wagenewe guparika",
        "Mu nzu y'imodoka"
      ],
      en: [
        "In active middle or leftmost travel lanes (Blocking running traffic)",
        "In the designated right-hand parking shoulder",
        "In marked parking bays",
        "Inside an off-street parking garage"
      ],
      fr: [
        "Sur les voies médianes ou sur la voie de gauche réservées à la circulation active",
        "Sur l'accotement de droite aménagé",
        "Sur les emplacements marqués",
        "Dans un garage"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guhagarara mu gisate kigendwamo cyo hagati cyangwa cy'ibumoso birabujijwe kuko biba bifunze umuhanda bikateza impanuka zikomeye.",
      en: "Stopping in running lanes or left lanes of a multi-lane highway constitutes illegal obstruction and severe hazard.",
      fr: "Il est formellement interdit de s'arrêter sur les voies de circulation actives ou la voie rapide de gauche."
    },
    articleRef: "Art. 27"
  },
  {
    id: 279,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Ikinyabiziga gitwara abagenzi mu buryo rusange' (Véhicule de transport en commun) risobanura iki?",
      en: "What defines a 'Public mass transport passenger vehicle' (Véhicule de transport en commun)?",
      fr: "Que désigne un 'Véhicule de transport en commun de personnes'?"
    },
    options: {
      rw: [
        "Ikinyabiziga gifite imyanya irenze umunani (8) yo kwicaramo itabariwemo umwanya w'umushoferi gigenewe gutwara abantu benshi",
        "Imodoka nto y'umuntu ku giti cye ifite imyanya ibiri",
        "Igare ririho intebe ebyiri",
        "Ikamyo itwara amabuye gusa"
      ],
      en: [
        "A motor vehicle constructed with more than 8 passenger seats excluding the driver seat, intended for collective passenger carriage",
        "A small private two-seater car",
        "A tandem bicycle",
        "A quarry dump truck"
      ],
      fr: [
        "Un véhicule automobile comportant plus de 8 places assises outre le siège du conducteur destiné au transport collectif",
        "Une voiturette privée à deux places",
        "Un tandem",
        "Un camion benne"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Bisi n'imodoka zose zifite imyanya irenze 8 yo kwicaramo itabariwemo umushoferi zifatwa nk'ibinyabiziga bitwara abagenzi mu buryo rusange.",
      en: "Vehicles with passenger seating capacity exceeding 8 seats plus driver are legally designated as public passenger transport.",
      fr: "Tout véhicule aménagé pour transporter plus de 8 passagers est classé comme transport en commun."
    },
    articleRef: "Art. 2"
  },
  {
    id: 280,
    category: 'priority',
    question: {
      rw: "Ku masangano yo mu bwoko bwa 'T' (Jonction en T) idafite ibyapa, ikinyabiziga kigiye kwinjira mu muhanda ugororotse kigomba gukora iki?",
      en: "At an uncontrolled T-junction with no signs, what must a vehicle approaching from the terminating side branch do?",
      fr: "À une intersection en T non signalisée, que doit faire le véhicule débouchant de la voie qui se termine?"
    },
    options: {
      rw: [
        "Kubaha amategeko yo mu ruhande rw'iburyo (Priorité à droite) no kureka ibinyabiziga biturutse mu ruhande rw'iburyo bigatambuka",
        "Guhita yinjira ku muvuduko mwinshi",
        "Kuvuza ihoni gusa akitambutsiriza",
        "Gutegeka umuhanda wose guhagarara"
      ],
      en: [
        "Observe the default right-hand priority rule (Priorité à droite), yielding to any traffic coming from its right",
        "Accelerate directly into the junction without looking",
        "Honk loudly and charge through",
        "Order all intersecting traffic to yield"
      ],
      fr: [
        "Appliquer la règle de la priorité à droite et céder le passage aux usagers venant de sa droite",
        "S'engager à vive allure",
        "Klaxonner et forcer le passage",
        "Exiger l'arrêt de tous"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kuri buri masangano yose adafite ibyapa by'umwihariko, itegeko ry'iburyo niryo rigenga uko ibinyabiziga bitambuka.",
      en: "Unless signed otherwise, right-hand priority governs traffic flow at all roadway junctions including T-junctions.",
      fr: "Sauf signalisation contraire, la priorité à droite s'impose à toutes les intersections même en T."
    },
    articleRef: "Art. 12"
  },
  {
    id: 281,
    category: 'speed',
    question: {
      rw: "Umuvuduko ntarengwa w'ikinyabiziga cyose gihetse abantu mu gice cy'inyuma cy'ikamyo (Transport de personnes sur plateau) niba byahawe uburenganzira ni uwuhe?",
      en: "What is the maximum legal speed limit for an open-bed utility truck carrying authorized personnel on its flatbed?",
      fr: "Quelle est la vitesse maximale pour un camion transportant exceptionnellement des ouvriers sur son plateau?"
    },
    options: {
      rw: ["40 km/h", "80 km/h", "100 km/h", "60 km/h"],
      en: ["40 km/h", "80 km/h", "100 km/h", "60 km/h"],
      fr: ["40 km/h", "80 km/h", "100 km/h", "60 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Gutwara abantu ku gakoresho k'inyuma k'ikamyo bisaba umutekano uhambaye bityo umuvuduko ntushobora kurenza 40 km/h.",
      en: "Carrying workers on a truck flatbed requires maximum safety precautions and speed capped at 40 km/h.",
      fr: "Le transport exceptionnel d'ouvriers sur plateau impose une vitesse strictement limitée à 40 km/h."
    },
    articleRef: "Art. 18"
  },
  {
    id: 282,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho ya mpandeshatu ifite umuzenguruko utukura kirimo igishushanyo cy'ingurube cyangwa inyamaswa z'ishyamba gisobanura iki?",
      en: "What does a triangular warning sign with a red border depicting wild deer/animals indicate?",
      fr: "Que signifie un panneau triangulaire de danger illustrant un cerf ou des animaux sauvages?"
    },
    options: {
      rw: [
        "Kwegera agace gakunze kwambukirwamo n'inyamaswa z'ishyamba (Passage d'animaux sauvages)",
        "Isoko ryo kugurisha inyama",
        "Ikibuga cy'imikino ya siporo",
        "Aho guhinga imboga"
      ],
      en: [
        "Approaching a wildlife crossing area where wild animals frequently cross the roadway (Passage d'animaux sauvages)",
        "Butchery meat market",
        "Outdoor sports field",
        "Vegetable farmland"
      ],
      fr: [
        "Zone de passage fréquent d'animaux sauvages sur la chaussée",
        "Boucherie",
        "Terrain de sport",
        "Zone maraîchère"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira abashoferi cyane cyane hafi ya pariki n'amashyamba ko inyamaswa zishobora gusimbukira mu muhanda bityo bagomba kugabanya umuvuduko.",
      en: "This warning sign alerts drivers to potential wild game jumping onto roadways near national parks and forests.",
      fr: "Ce panneau avertit du risque de traversée soudaine d'animaux sauvages à proximité des forêts et parcs."
    },
    articleRef: "Art. 65"
  },
  {
    id: 283,
    category: 'lights',
    question: {
      rw: "Amatara y'igihu y'imbere (Feux de brouillard avant) agomba kuba afite irihe bara?",
      en: "What authorized color may front fog lights (Feux de brouillard avant) emit?",
      fr: "De quelle couleur réglementaire doivent être les feux antibrouillard avant?"
    },
    options: {
      rw: [
        "Umweru (Blanc) cyangwa umuhondo (Jaune)",
        "Umutuku gusa",
        "Ubururu gusa",
        "Icyatsi kibisi gusa"
      ],
      en: [
        "White (Blanc) or selective yellow (Jaune)",
        "Red only",
        "Blue only",
        "Green only"
      ],
      fr: [
        "Blanc ou jaune sélectif",
        "Rouge uniquement",
        "Bleu uniquement",
        "Vert uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara y'igihu yo ku mutwe w'imbere ashobora kuba umweru cyangwa umuhondo; ay'inyuma yo agomba kuba umutuku gusa.",
      en: "Front fog lights may emit white or selective yellow light; rear fog lights must always be red.",
      fr: "Les feux antibrouillard avant peuvent émettre une lumière blanche ou jaune, tandis que les feux arrière doivent être rouges."
    },
    articleRef: "Art. 36"
  },
  {
    id: 284,
    category: 'overtaking',
    question: {
      rw: "Iyo umushoferi anyura ku banyamaguru, amagare cyangwa inyamaswa ku rubavu rw'umuhanda, agomba gusiga intera ingana iki byibura?",
      en: "When passing pedestrians, cyclists, or livestock walking along the roadside, what minimum lateral clearance distance must be maintained?",
      fr: "Lors du dépassement de piétons, cyclistes ou animaux longeant la route, quelle distance latérale minimale de sécurité doit être laissée?"
    },
    options: {
      rw: ["Nibura metero 1 (Au moins 1 mètre)", "Santimetero 10", "Metero 5", "Santimetero 2"],
      en: ["At least 1 meter (Min 1m)", "10 centimeters", "5 meters", "2 centimeters"],
      fr: ["Au moins 1 mètre (Min 1m)", "10 centimètres", "5 mètres", "2 centimètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umushoferi agomba gusiga intera ya metero imwe (1m) byibura hagati y'ikinyabiziga cye n'abanyamaguru cyangwa amagare kugira ngo atabahutaza.",
      en: "A lateral buffer margin of at least 1 meter must be preserved when passing cyclists or pedestrians along the verge.",
      fr: "Le conducteur doit réserver un espace latéral de sécurité d'au moins 1 mètre lors du dépassement d'un piéton ou cycliste."
    },
    articleRef: "Art. 20"
  },
  {
    id: 285,
    category: 'technical',
    question: {
      rw: "Umuyobozi w'ikinyabiziga agomba kugenzura iki mbere yo guhaguruka ku rugendo?",
      en: "What pre-trip inspection items should a driver systematically verify before setting out on a journey?",
      fr: "Quels éléments essentiels de sécurité le conducteur doit-il vérifier avant de prendre la route?"
    },
    options: {
      rw: [
        "Feri, amapine n'umwuka wayo, amatara yose, indorerwamo, n'urwego rw'amavuta n'amazi ya moteri",
        "Gusa niba radiyo ifite umuziki mwiza",
        "Gusa niba intebe zisa neza",
        "Nta na kimwe agomba kureba"
      ],
      en: [
        "Brake response, tire pressure and tread, all lights, mirrors, and engine fluid/oil levels",
        "Only that the radio has pleasant music",
        "Only seat fabric cleanliness",
        "Nothing needs checking"
      ],
      fr: [
        "Freins, état et pression des pneus, feux, rétroviseurs et niveaux d'huile/liquides moteur",
        "Uniquement la musique à la radio",
        "La propreté des sièges seulement",
        "Rien du tout"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kugenzura ubuzima bw'ikinyabiziga mbere yo gutangira urugendo birinda impanuka ziterwa na tekiniki mbi nko kubura feri cyangwa guturika kw'ipine.",
      en: "Daily pre-drive visual inspections of brakes, tires, lights, and fluids safeguard against catastrophic mechanical breakdowns.",
      fr: "Le contrôle préventif des freins, pneumatiques et feux est une obligation élémentaire pour prévenir les pannes et accidents."
    },
    articleRef: "Art. 49"
  },
  {
    id: 286,
    category: 'penalties',
    question: {
      rw: "Kugenda mu gisate cy'ibumoso mu muhanda urombeje utarimo kunyuranaho cyangwa utegereje gukata (Non-respect de la voie de droite) bihanishwa iki?",
      en: "Failing to drive on the right side of the roadway without justification (Hogging the left lane) constitutes what infraction?",
      fr: "Le défaut de maintien à droite sur la chaussée sans motif légitime constitue quelle infraction?"
    },
    options: {
      rw: [
        "Amande y'icyiciro cya kabiri (Contravention de 2ème classe)",
        "Gushimirwa",
        "Nta cyaha kirimo kuko ari uburenganzira bw'umushoferi",
        "Gutegekwa gusohoka mu gihugu"
      ],
      en: [
        "A Second Class traffic violation fine (Contravention de 2ème classe)",
        "Commendation by police",
        "No penalty as lane choice is completely unrestricted",
        "Expulsion from the country"
      ],
      fr: [
        "Une contravention de 2ème classe sanctionnée d'une amende",
        "Des compliments",
        "Aucune infraction",
        "Expulsion"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko ategeka abashoferi bose kugendera ku ruhande rw'iburyo bw'umuhanda; kuguma ibumoso bibangamira abashaka kunyuranaho.",
      en: "Drivers must keep to the right roadway edge under normal conditions; unjustified left-lane cruising is penalized.",
      fr: "Tout conducteur doit maintenir son véhicule près du bord droit de la chaussée; le non-respect est sanctionné."
    },
    articleRef: "Art. 9"
  },
  {
    id: 287,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo ikimenyetso cya feri y'imodoka itera ibyotsi n'amabuye bisobanura iki?",
      en: "What does a circular sign with a red border showing gravel flying from vehicle tires indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge illustrant des projections de gravillons sous un pneu?"
    },
    options: {
      rw: [
        "Inzira iburira ko hari amabuye n'urusyo bishobora gutaruka (Projections de gravillons)",
        "Aho gucukura amabuye gusa",
        "Isoko ry'amabuye y'agaciro",
        "Inzira y'imifuka y'isima"
      ],
      en: [
        "Warning of loose gravel and stone projection hazards from vehicle tires (Projections de gravillons)",
        "Quarry stone extraction zone",
        "Precious gemstone marketplace",
        "Cement bag warehouse"
      ],
      fr: [
        "Risque de projections de gravillons et pierres sous les pneus",
        "Carrière de pierres",
        "Marché de pierres précieuses",
        "Dépôt de ciment"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kimenyesha ko ku muhanda hari amabuye mato ashobora gutarukira ku bindi binyabiziga akamena ibirahure bityo hagomba kugabanywa umuvuduko.",
      en: "Loose chip surfaces propel stone missiles that shatter windshields, requiring increased following distance and reduced speeds.",
      fr: "Ce panneau prévient de gravillons non fixés pouvant être projetés; il convient de ralentir et d'augmenter la distance de sécurité."
    },
    articleRef: "Art. 65"
  },
  {
    id: 288,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Amasangano y'inzira ya gari ya moshi' (Passage à niveau / Railway level crossing) risobanura iki?",
      en: "What is a 'Railway level crossing' (Passage à niveau)?",
      fr: "Que désigne un 'Passage à niveau' (Passage à niveau)?"
    },
    options: {
      rw: [
        "Amasangano aho umuhanda nyabagendwa uhurira n'inzira ya gari ya moshi ku butaka bumwe bungana",
        "Ikiraro cya gari ya moshi kinyura mu kirere",
        "Umuhanda munsi y'ubutaka",
        "Icyambu cy'amato"
      ],
      en: [
        "An intersection where a public road and a railway track cross each other at the same ground elevation level",
        "An elevated overhead railway bridge",
        "An underground subterranean tunnel",
        "A boat maritime seaport"
      ],
      fr: [
        "Le croisement à niveau d'une voie publique et d'une ligne de chemin de fer",
        "Un pont supérieur ferroviaire",
        "Un tunnel souterrain",
        "Un port maritime"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Passage à niveau ni aho imodoka n'amagari ya moshi bisangira ubutaka bumwe buhuza inzira zombi.",
      en: "Level crossings are direct grade-level intersections between road arteries and railway track systems.",
      fr: "Le passage à niveau est une intersection directe à même hauteur entre une route et des voies ferrées."
    },
    articleRef: "Art. 2"
  },
  {
    id: 289,
    category: 'priority',
    question: {
      rw: "Ku masangano ayobowe n'amatara, iyo itara ry'umuhondo rikimara gucana, umushoferi agomba gukora iki?",
      en: "At a signalized junction, when the solid yellow light illuminates, what must the driver do?",
      fr: "À un feu tricolore, lorsque le feu jaune fixe s'allume, que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Guhagarara mbere y'umurongo w'amasangano keretse iyo kurega feri byateza impanuka ikomeye kubera kuba yageze hafi cyane",
        "Kongera umuvuduko akirukanka",
        "Gusubira inyuma vuba",
        "Kuzimya amatara y'imodoka ye"
      ],
      en: [
        "Come to a halt before the stop line, unless so close that abrupt hard braking would create a severe rear-end collision hazard",
        "Accelerate aggressively to beat the red light",
        "Reverse backwards immediately",
        "Extinguish vehicle headlights"
      ],
      fr: [
        "S'arrêter avant la ligne d'arrêt, sauf si l'arrêt ne peut se faire dans des conditions de sécurité suffisantes",
        "Accélérer brutalement",
        "Reculer rapidement",
        "Éteindre ses phares"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara ry'umuhondo rishyirirwaho kumenyesha ko umutuku ugiye kuza bityo abashoferi bakitegura guhagarara mu mutekano.",
      en: "Solid yellow indicates the imminent arrival of red, ordering drivers to stop safely unless already crossing the line.",
      fr: "Le feu jaune fixe impose l'arrêt sauf s'il est impossible de s'arrêter en toute sécurité avant la ligne."
    },
    articleRef: "Art. 62"
  },
  {
    id: 290,
    category: 'speed',
    question: {
      rw: "Kuki umushoferi agomba kugabanya umuvuduko iyo anyuze ahari imirimo yo gusana umuhanda (Chantier routier)?",
      en: "Why must a driver significantly reduce speed when passing through active roadworks construction zones (Chantier)?",
      fr: "Pourquoi le conducteur doit-il ralentir considérablement aux abords d'un chantier routier?"
    },
    options: {
      rw: [
        "Kurinda ubuzima bw'abakozi bakora mu muhanda, kwirinda amabuye n'imashini, no kubahiriza inzira ifunganye",
        "Kugira ngo arebe uko abakozi bambaye",
        "Kugira ngo asuhuze abakozi",
        "Nta mpamvu kuko amategeko atabitegeka"
      ],
      en: [
        "To protect workers' lives, avoid construction machinery and loose debris, and safely negotiate narrowed lanes",
        "To inspect workers' clothing uniforms",
        "To wave greetings to workers",
        "No reason since the law does not mandate it"
      ],
      fr: [
        "Pour protéger la vie des ouvriers, éviter les engins/débris et franchir la zone rétrécie en sécurité",
        "Pour regarder les tenues des ouvriers",
        "Pour saluer les équipes",
        "Aucune obligation légale"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ahari imirimo yo gusana umuhanda haba hari abakozi n'imashini; umushoferi agomba kugenda yitonze ku muvuduko muto cyane.",
      en: "Roadwork zones combine active human crews, heavy plant machinery, and lane shifts, requiring strict speed moderation.",
      fr: "Les zones de chantiers comportent du personnel à pied et des chaussées rétrécies imposant une vitesse très réduite."
    },
    articleRef: "Art. 18"
  },
  {
    id: 291,
    category: 'towing',
    question: {
      rw: "Ni ibihe binyabiziga bibujijwe burundu gukurura ibindi binyabiziga bifite moteri mu muhanda?",
      en: "Which vehicles are strictly prohibited from towing other motorized vehicles on public roads?",
      fr: "Quels véhicules ont l'interdiction formelle de remorquer d'autres véhicules à moteur sur la voie publique?"
    },
    options: {
      rw: [
        "Amapikipiki n'amagare (Ibinyabiziga by'ibiziga bibiri bidafite akanyabiziga kometseho ku ruhande)",
        "Amakamyo manini y'ingufu",
        "Imodoka zitabara z'ubutabazi (Dépanneuses)",
        "Tarakiteri z'ubuhinzi zifite ingoyi ikomeye"
      ],
      en: [
        "Two-wheeled motorcycles and pedal bicycles without a rigid sidecar attachment",
        "Heavy high-torque industrial tow trucks",
        "Certified breakdown recovery wreckers (Dépanneuses)",
        "Agricultural tractors with rigid tow couplings"
      ],
      fr: [
        "Les motocyclettes à deux roues sans side-car et les bicyclettes",
        "Les camions lourds",
        "Les dépanneuses agréées",
        "Les tracteurs agricoles avec timon"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga by'ibiziga bibiri nka moto n'amagare ntibishobora gukurura indi modoka ifite moteri kubera ibibazo byo kutagira uburinganire (Équilibre).",
      en: "Two-wheeled vehicles lack structural stability and are legally barred from towing disabled automobiles.",
      fr: "Les deux-roues manquent de stabilité intrinsèque et ne peuvent en aucun cas tracter un véhicule en panne."
    },
    articleRef: "Art. 42"
  },
  {
    id: 292,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo amagambo 'STOP' cyangwa icyapa cy'impande umunani (Octogone) gisobanura iki?",
      en: "What does an octagonal red 'STOP' sign obligate every driver to do?",
      fr: "Que prescrit obligatoirement le panneau octogonal rouge 'STOP' à tout conducteur?"
    },
    options: {
      rw: [
        "Guhagarara burundu (Arrêt absolu) ku murongo wa Stop no guha inzira ibinyabiziga byose n'abanyamaguru bari mu wundi muhanda mbere yo gukomeza",
        "Kugabanya umuvuduko gake ugakomeza udagaze niba nta wundi ubonye",
        "Kuvuza ihoni ugakomeza wiruka",
        "Gukata iburyo gusa udagaze"
      ],
      en: [
        "Come to a full, complete halt at the stop line and yield priority to all ongoing cross traffic and pedestrians before proceeding",
        "Slow down gently and roll through without stopping if the road looks clear",
        "Honk loudly and blast through",
        "Execute an unstopped rolling right turn"
      ],
      fr: [
        "Marquer un arrêt absolu et complet à la ligne et céder le passage à tous les usagers avant de repartir",
        "Ralentir simplement et passer sans s'arrêter si la voie paraît libre",
        "Klaxonner et foncer",
        "Tourner à droite sans s'arrêter"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa cya STOP kigomba kubahirizwa n'amapine agahagarara burundu; guhagarara igice (Rolling stop) ntabwo byemewe mu mategeko.",
      en: "A STOP sign demands a complete wheel stop at the stop line, followed by visual clearance before proceeding.",
      fr: "Le panneau STOP impose l'immobilisation totale du véhicule à la limite de la chaussée abordée avant de s'engager."
    },
    articleRef: "Art. 66"
  },
  {
    id: 293,
    category: 'lights',
    question: {
      rw: "Amatara ndanganyuma (Feux rouges arrière / Tail lights) agomba kugaragara mu ntera ingana iki nijoro ku muhanda ugororotse?",
      en: "What minimum visibility distance must rear red tail position lights achieve at night in clear weather?",
      fr: "À quelle distance minimale les feux rouges arrière doivent-ils être nettement visibles la nuit par temps clair?"
    },
    options: {
      rw: ["Nibura metero 150 (Au moins 150m)", "Metero 10 gusa", "Metero 500", "Metero 20"],
      en: ["At least 150 meters (Min 150m)", "10 meters only", "500 meters", "20 meters"],
      fr: ["Au moins 150 mètres (Min 150m)", "10 mètres seulement", "500 mètres", "20 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara atukura yo mu mugongo w'imodoka agomba kugaragarira abari inyuma mu ntera itari munsi ya metero 150.",
      en: "Rear position lights must emit an unobstructed red glow visible from a distance of at least 150 meters.",
      fr: "Les feux arrière rouges doivent être visibles la nuit par temps clair à une distance d'au moins 150 mètres."
    },
    articleRef: "Art. 33"
  },
  {
    id: 294,
    category: 'parking',
    question: {
      rw: "Guparika ku nzira y'abanyamaguru (Trottoir / Passage piéton) bihanishwa iki?",
      en: "Parking on a pedestrian sidewalk or marked pedestrian crossing is penalized as:",
      fr: "Le stationnement sur un trottoir ou sur un passage pour piétons est sanctionné comme:"
    },
    options: {
      rw: [
        "Amande y'amategeko no gufatira ikinyabiziga gikururwa kikajyanwa muri furiye (Fourrière)",
        "Gushimirwa kuko wasize umuhanda w'imodoka ufunguye",
        "Nta cyaha kirimo",
        "Guhabwa ikaze muri polisi"
      ],
      en: [
        "Statutory traffic fine and vehicle towing to police impoundment (Fourrière)",
        "Commended for keeping vehicular travel lanes clear",
        "Completely legal with no fine",
        "A formal award from authorities"
      ],
      fr: [
        "Contravention avec amende et mise en fourrière immédiate du véhicule",
        "Félicitations pour avoir libéré la route",
        "Aucune infraction",
        "Une récompense civique"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guparika kuri trottoir cyangwa ku murongo w'abanyamaguru bibuza abanyamaguru aho bagenda bikabashyira mu kaga ko kujya mu modoka, bityo imodoka igahita itwarwa muri furiye.",
      en: "Sidewalk parking forces pedestrians into hazardous roadway traffic and triggers immediate towing to impound.",
      fr: "Stationner sur les trottoirs met en péril les piétons et entraîne l'enlèvement direct en fourrière."
    },
    articleRef: "Art. 28"
  },
  {
    id: 295,
    category: 'technical',
    question: {
      rw: "Kuki amapine y'ikinyabiziga agomba kugira umwuka uhagije (Pression des pneus) ukurikije ibipimo by'uruganda?",
      en: "Why must vehicle tires maintain proper tire pressure according to manufacturer specifications?",
      fr: "Pourquoi les pneus doivent-ils être gonflés à la pression exacte préconisée par le constructeur?"
    },
    options: {
      rw: [
        "Bituma imodoka ifata neza ku muhanda, igabanya intera ya feri, irinda amapine guturika no gukoresha lisansi nyinshi",
        "Kugira ngo imodoka ibe ndende cyane",
        "Kugira ngo amapine atange urusaku rwinshi",
        "Nta kamaro k'umwuka kuko ipine y'icyuma ikora neza"
      ],
      en: [
        "Ensures optimal road grip, shortens braking distance, prevents blowouts, and optimizes fuel economy",
        "To make the vehicle taller",
        "To generate louder tire squeal",
        "Pressure is irrelevant as rubber works at any pressure"
      ],
      fr: [
        "Garantit une tenue de route optimale, réduit les distances de freinage, évite l'éclatement et la surconsommation",
        "Pour rendre la voiture plus haute",
        "Pour faire crisser les pneus",
        "La pression n'a aucune importance"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umwuka uboneye mu mapine urinda impanuka ziterwa no guturika kw'amapine kandi ugatuma feri zifata neza.",
      en: "Proper tire inflation pressures are vital to tire structural integrity, effective braking friction, and vehicle directional control.",
      fr: "Un gonflage adéquat prévient les risques d'éclatement à haute vitesse et assure l'efficacité maximale du freinage."
    },
    articleRef: "Art. 52"
  },
  {
    id: 296,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Umuhanda w'icyerekezo kimwe' (Route à sens unique / One-way street) risobanura iki?",
      en: "What defines a 'One-way street' (Route à sens unique)?",
      fr: "Que définit une 'Route à sens unique' (Chaussée à sens unique)?"
    },
    options: {
      rw: [
        "Umuhanda wose ugenderwamo mu cyerekezo kimwe gusa ku binyabiziga byose",
        "Umuhanda ufunganye cyane unyurwamo n'amagare gusa",
        "Umuhanda urimo amakorosi menshi",
        "Inzira y'abanyamaguru yonyine"
      ],
      en: [
        "A roadway where vehicular traffic is legally permitted to travel in one direction only",
        "A narrow trail reserved exclusively for bicycles",
        "A winding mountain serpentine road",
        "A pedestrian-only walking street"
      ],
      fr: [
        "Une chaussée sur laquelle la circulation des véhicules s'effectue dans un seul sens obligatoire",
        "Un sentier réservé aux bicyclettes",
        "Une route sinueuse",
        "Une rue piétonne"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mu muhanda w'icyerekezo kimwe, ibinyabiziga byose bigenda byerekeza hamwe; birabujijwe gusubira inyuma cyangwa kuwinjiramo mu cyerekezo kinyuranye.",
      en: "One-way roads permit vehicular circulation in a single authorized vector; counter-directional entry is prohibited.",
      fr: "Sur une route à sens unique, tous les véhicules circulent dans la même direction; tout contresens est formellement interdit."
    },
    articleRef: "Art. 2"
  },
  {
    id: 297,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi asatira ikiraro gifunganye (Pont étroit) kirimo ikinyabiziga giturutse imbere ye gifite icyapa cy'akambi k'umweru n'akambi gatukura, agomba gukora iki?",
      en: "When approaching a narrow bridge bottleneck facing a circular sign with a red border containing a black forward arrow and red opposing arrow, what must the driver do?",
      fr: "Devant un passage étroit régi par un panneau rond à bord rouge avec flèche noire et flèche rouge en sens inverse, que doit faire le conducteur?"
    },
    options: {
      rw: [
        "Guhagarara akabanza kureka ikinyabiziga giturutse imbere kikarangiza gutambuka ikiraro (Céder le passage à la circulation venant en sens inverse)",
        "Kuvuduka cyane akitambutsiriza ku ngufu",
        "Kuvuza ihoni ngo uwo bahuye asubire inyuma",
        "Gufunga amatara yose"
      ],
      en: [
        "Halt and yield right-of-way to oncoming traffic through the bottleneck (Yield to oncoming vehicles)",
        "Accelerate aggressively to force entry onto the bridge",
        "Honk loudly demanding oncoming traffic reverse",
        "Turn off all headlights"
      ],
      fr: [
        "S'arrêter et céder le passage aux usagers venant en sens inverse dans le passage étroit",
        "Forcer le passage à grande vitesse",
        "Klaxonner pour forcer l'autre à reculer",
        "Éteindre ses phares"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa cy'uruziga rufite akambi gatukura gakomeza n'ak'umukara gaturuka imbere gitegeka guha inzira abaturuka mu cyerekezo kiguteganye.",
      en: "This priority sign assigns right-of-way to opposing traffic, ordering drivers to yield before entering narrow bottleneck bridges.",
      fr: "Ce panneau d'interdiction oblige à céder la priorité aux véhicules circulant en sens inverse sur le passage étroit."
    },
    articleRef: "Art. 68"
  },
  {
    id: 298,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende gifite ubuso bw'ubururu kirimo igishushanyo cy'amazi n'akato (Bac / Ferry boat) gisobanura iki?",
      en: "What does a blue rectangular information sign showing a ferry boat on water indicate?",
      fr: "Que signifie un panneau rectangulaire bleu illustrant un bac (Ferry) sur l'eau?"
    },
    options: {
      rw: [
        "Aho gufatira ubwato bwambuka amazi butwaye ibinyabiziga (Embarcadère de bac)",
        "Inyanja ifite imiraba mibi",
        "Isoko ry'amafi gusa",
        "Aho koga no kuroba"
      ],
      en: [
        "Vehicle ferry boat boarding pier / crossing landing point (Bac / Ferry terminal)",
        "Rough sea wave zone",
        "Fish market only",
        "Public swimming and fishing dock"
      ],
      fr: [
        "Embarcadère pour bac traversier assurant le passage des véhicules sur un cours d'eau",
        "Mer houleuse",
        "Marché aux poissons",
        "Zone de baignade"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kimenyesha abashoferi ko umuhanda urangirira ku cyambu cy'ubwato (Bac) bwo kwambutsa imodoka ku rundi ruhande rw'ikiyaga cyangwa uruzi.",
      en: "This service sign alerts drivers of a vehicle ferry slipway where roads terminate into marine river transport.",
      fr: "Ce panneau signale un point d'embarquement sur un bac permettant la traversée d'un plan d'eau."
    },
    articleRef: "Art. 71"
  },
  {
    id: 299,
    category: 'overtaking',
    question: {
      rw: "Kuki bibujijwe kunyuranaho ku kinyabiziga cyahagaze gitwaye abana b'ishuri (Bus scolaire) kirimo kuburiza amatara yacyo y'amakuba?",
      en: "Why is it strictly prohibited to recklessly overtake a school bus that has stopped with hazard flashers operating?",
      fr: "Pourquoi est-il interdit de dépasser sans précaution extrême un bus de transport scolaire arrêté feux clignotants activés?"
    },
    options: {
      rw: [
        "Kubera ko abana b'amashuri bashobora gusohoka bakiruka bakambuka umuhanda batitegereje",
        "Kugira ngo abana badasakuza",
        "Kugira ngo bisi idasaza",
        "Nta kibazo kirimo kuko bisi yapfuye"
      ],
      en: [
        "Because school children may be disembarking and suddenly dashing across the road without checking traffic",
        "To keep children from making noise",
        "To prevent bus wear and tear",
        "No reason since the bus is broken"
      ],
      fr: [
        "Parce que des écoliers peuvent descendre et traverser brusquement la chaussée sans regarder",
        "Pour éviter le bruit des enfants",
        "Pour protéger le bus",
        "Aucune raison valable"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Hafi ya bisi z'abanyeshuri zihagaze, abashoferi basabwa kugabanya umuvuduko cyane no guhagarara kuko abana bakunze kwiruka mu muhanda batitonze.",
      en: "School transport stops carry high child pedestrian hazards; passing drivers must exhibit heightened vigilance.",
      fr: "La descente d'écoliers présente un risque élevé de traversée imprévisible imposant une vigilance extrême."
    },
    articleRef: "Art. 41"
  },
  {
    id: 300,
    category: 'penalties',
    question: {
      rw: "Gutwara ikinyabiziga gisasagaza ibyotsi byinshi by'umukara bibangamiye ibidukikije (Émission excessive de fumée) bihanishwa iki?",
      en: "Operating a motor vehicle producing excessive noxious black exhaust smoke polluting the atmosphere is penalized by:",
      fr: "La circulation d'un véhicule émettant des fumées noires excessives et polluantes est punie par:"
    },
    options: {
      rw: [
        "Guhagarikwa, amande y'amategeko no gutegekwa kujyana ikinyabiziga mu bugenzuzi bwa tekiniki (Contrôle technique)",
        "Gushimirwa kuko moteri irimo gukora",
        "Kugabanyirizwa ibiciro bya lisansi",
        "Nta gihano kuko ibyotsi bidashobora kwirindwa"
      ],
      en: [
        "Traffic citation, statutory fines, and mandatory directive to undergo official vehicle technical re-inspection",
        "Praise for engine combustion",
        "Fuel subsidy vouchers",
        "No penalty as smoke is unavoidable"
      ],
      fr: [
        "Verbalisation avec amende et obligation de soumettre le véhicule à une contre-visite technique",
        "Félicitations pour le moteur",
        "Bons de réduction carburant",
        "Aucune sanction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga bisohora ibyotsi byangiza ikirere n'amahaha y'abantu bitemewe mu muhanda; bisabwa gusanwa no kongera gukorerwa contrôle technique.",
      en: "Vehicles with defective exhaust systems causing gross environmental pollution are cited and directed to mandatory technical inspection.",
      fr: "Les émissions excessives de fumées polluantes enfreignent les normes environnementales et entraînent une mise en conformité obligatoire."
    },
    articleRef: "Art. 57"
  }
];
