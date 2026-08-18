import { Question } from '../types';

export const QUESTIONS_PART5: Question[] = [
  {
    id: 201,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Akayira gasanzwe' (Sentier ordinaire) mu mategeko y'umuhanda mu Rwanda risobanura iki?",
      en: "What does the term 'Ordinary path' (Sentier ordinaire) mean under Rwandan road traffic law?",
      fr: "Que signifie le terme 'Sentier ordinaire' selon le code de la route rwandais?"
    },
    options: {
      rw: [
        "Inzira nyabagendwa ifunganye yagenewe gusa abanyamaguru cyangwa ibinyabiziga bigendera ku biziga bibiri",
        "Umuhanda munini w'amakamyo gusa",
        "Akayira k'abanyamaguru kari ku mpande z'umuhanda munini gusa",
        "Inzira ifunganye idashobora kugendwamo n'amagare"
      ],
      en: [
        "A narrow public way intended exclusively for pedestrians or two-wheeled vehicles",
        "A wide highway reserved for heavy commercial trucks",
        "A pedestrian footpath strictly bordered along a primary highway",
        "A narrow path impassable by bicycles"
      ],
      fr: [
        "Une voie publique étroite destinée uniquement aux piétons ou aux véhicules à deux roues",
        "Une grande autoroute réservée aux camions de transport",
        "Un trottoir aménagé le long d'une route principale",
        "Un sentier inaccessible aux bicyclettes"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Akayira gasanzwe ni inzira ifunganye mu cyaro cyangwa mu mujyi itagenewe ibinyabiziga biruta iby'ibiziga bibiri.",
      en: "An ordinary path is a narrow public way meant only for foot travelers and two-wheeled vehicles.",
      fr: "Le sentier est une voie publique étroite aménagée pour les piétons et les deux-roues."
    },
    articleRef: "Art. 2"
  },
  {
    id: 202,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi asohoka muri komini, mu rugo, mu igaraje cyangwa mu nzira y'umwihariko agana mu muhanda nyabagendwa, agomba gukora iki?",
      en: "When a driver exits a private property, courtyard, garage, or private track onto a public road, what must they do?",
      fr: "Lorsqu'un conducteur sort d'une propriété privée, cour, garage ou sentier privé pour entrer sur la voie publique, que doit-il faire?"
    },
    options: {
      rw: [
        "Kuvuza ihoni akihutira kwinjira mbere y'abandi bose",
        "Guha inzira (Priorité) ibinyabiziga byose n'abanyamaguru bari mu muhanda nyabagendwa",
        "Gufata umwanya wo hagati mu muhanda",
        "Gutegeka abari mu muhanda bose guhagarara"
      ],
      en: [
        "Sound the horn loudly and accelerate ahead of others",
        "Yield right of way to all vehicles and pedestrians moving on the public road",
        "Immediately occupy the central lane of the roadway",
        "Order all roadway traffic to come to a full stop"
      ],
      fr: [
        "Klaxonner et s'engager en accélérant",
        "Céder le passage à tous les usagers circulant déjà sur la voie publique",
        "Prendre immédiatement la voie centrale",
        "Exiger l'arrêt de tous les usagers de la route"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Ukinjira mu nzira nyabagendwa aturutse ahantu h'umwihariko nk'urugo, igaraje cyangwa umurima agomba kureka abari mu muhanda bose bagatambuka.",
      en: "Drivers entering a public highway from any private property, garage, or non-public driveway must yield priority to all ongoing road users.",
      fr: "Tout conducteur débouchant d'une propriété privée ou voie non publique doit céder le passage à tous les usagers de la voie publique."
    },
    articleRef: "Art. 14"
  },
  {
    id: 203,
    category: 'speed',
    question: {
      rw: "Ni uwuhe muvuduko ntarengwa w'ikinyabiziga gifite moteri gitwaye abagenzi cyangwa imizigo hanze y'insisiro ku mihanda ya kaburimbo?",
      en: "What is the maximum legal speed for passenger transport or heavy goods vehicles outside built-up areas on paved roads?",
      fr: "Quelle est la vitesse maximale autorisée pour le transport de personnes ou marchandises lourdes hors agglomération?"
    },
    options: {
      rw: ["80 km/h", "60 km/h", "100 km/h", "40 km/h"],
      en: ["80 km/h", "60 km/h", "100 km/h", "40 km/h"],
      fr: ["80 km/h", "60 km/h", "100 km/h", "40 km/h"]
    },
    correctIndex: 1,
    explanation: {
      rw: "Ibinyabiziga bitwara abagenzi mu buryo rusange n'ibitwara imizigo iremereye ntibigomba kurenza umuvuduko wa 60 km/h hanze y'insisiro.",
      en: "Public transport vehicles and heavy freight trucks are restricted to a maximum speed of 60 km/h outside built-up zones.",
      fr: "Les véhicules de transport rémunéré de personnes et de marchandises lourdes sont limités à 60 km/h hors agglomération."
    },
    articleRef: "Art. 18"
  },
  {
    id: 204,
    category: 'lights',
    question: {
      rw: "Itara ry'icyerekezo (Clignotant) rigomba gucanwa igihe kingana iki mbere yo gukata cyangwa guhindura icyerekezo?",
      en: "Direction indicator lights (Turn signals) must be activated at what point before turning or changing lanes?",
      fr: "Les feux indicateurs de direction (clignotants) doivent être allumés à quel moment avant d'effectuer un changement de direction?"
    },
    options: {
      rw: [
        "Nyuma yo gukata imodoka igeze mu yindi nzira",
        "Mbere y'igihe gihagije kandi kugeza igihe imyitozo yo gukata irangiriye",
        "Igihe gusa uhuye n'umupolisi",
        "Gucana umusekonda umwe gusa mu gihe ukata"
      ],
      en: [
        "Only after already completing the turn and stabilizing",
        "Sufficiently in advance and continuously until the directional maneuver is completed",
        "Exclusively when encountering a police officer",
        "For just one brief flash during the steering motion"
      ],
      fr: [
        "Uniquement après avoir achevé la manœuvre de virage",
        "Suffisamment à l'avance et maintenu jusqu'à la fin complète de la manœuvre",
        "Seulement en présence d'un agent de police",
        "Pendant un seul éclat au moment de tourner le volant"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Umushoferi agomba kumenyesha abandi hakiri kare icyerekezo aganamo akoresheje itara ry'icyerekezo, kandi akaryazimya amaze gukata.",
      en: "Drivers must signal intent early with turn indicators and ensure the signal continues throughout the maneuver until completely finished.",
      fr: "Tout changement de direction doit être signalé suffisamment tôt par les clignotants et maintenu pendant toute la manœuvre."
    },
    articleRef: "Art. 23"
  },
  {
    id: 205,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho y'uruziga rufite umuzenguruko utukura n'ubuso bwera kirimo umubare '60' gisobanura iki?",
      en: "What does a circular sign with a red border, white background, and the number '60' indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge, fond blanc et portant le chiffre '60'?"
    },
    options: {
      rw: [
        "Umuvuduko muto usabwa wa 60 km/h",
        "Umuvuduko ntarengwa wemewe wa 60 km/h (Vitesse maximale autorisée)",
        "Intera ya metero 60 mbere y'amasangano",
        "Ikinyabiziga gifite ibiro 60"
      ],
      en: [
        "Minimum mandatory speed of 60 km/h",
        "Maximum speed limit of 60 km/h (Speed prohibition above 60)",
        "Distance of 60 meters to the next junction",
        "Gross weight limit of 60 kg"
      ],
      fr: [
        "Vitesse minimale obligatoire de 60 km/h",
        "Vitesse maximale autorisée limitée à 60 km/h",
        "Distance de 60 mètres avant le carrefour",
        "Poids maximal de 60 kg"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Iki ni icyapa kibuzwa kibuza abashoferi bose kurenza umuvuduko wa kilometero 60 mu isaha (60 km/h).",
      en: "This is a regulatory prohibition sign setting the upper speed ceiling to 60 km/h.",
      fr: "C'est un panneau d'interdiction fixant la vitesse maximale à ne pas dépasser à 60 km/h."
    },
    articleRef: "Art. 68"
  },
  {
    id: 206,
    category: 'overtaking',
    question: {
      rw: "Ni ryari byemewe kunyuranaho ku ruhande rw'iburyo?",
      en: "When is overtaking on the right legally permitted?",
      fr: "Dans quel cas est-il légalement permis de dépasser par la droite?"
    },
    options: {
      rw: [
        "Igihe cyose umuhanda w'ibumoso urimo izindi modoka",
        "Iyo ikinyabiziga kigiye kunyuranwaho cyamaze kwerekana ko kigiye gukatira ibumoso kandi kikaba cyegereye umurongo ugabanya umuhanda",
        "Igihe umuvuduko wawe uri hejuru ya 80 km/h",
        "Ku biraro no mu makorosi gusa"
      ],
      en: [
        "Whenever the left lane has too much vehicle congestion",
        "When the vehicle to be overtaken has signaled intention to turn left and moved towards the road centerline",
        "Whenever your vehicle speed exceeds 80 km/h",
        "Only across bridges and around sharp blind curves"
      ],
      fr: [
        "Chaque fois que la voie de gauche est occupée",
        "Lorsque le conducteur devant a signalé son intention de tourner à gauche et s'est déporté vers l'axe central",
        "Si votre vitesse dépasse 80 km/h",
        "Uniquement sur les ponts et dans les virages"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Kunyuranaho bikorerwa ibumoso, ariko byemewe kunyuranaho iburyo iyo ikinyabiziga cy'imbere cyerekanye ko kigiye gukata ibumoso kandi kigasiga umwanya uhagije iburyo.",
      en: "Overtaking on the right is only permitted when the vehicle in front has signaled to turn left and positioned itself along the left side of the lane.",
      fr: "Le dépassement par la droite est autorisé si le véhicule précédant a manifesté l'intention de virer à gauche et s'est placé vers le centre."
    },
    articleRef: "Art. 20"
  },
  {
    id: 207,
    category: 'towing',
    question: {
      rw: "Uburebure ntarengwa bw'ikiziriko (Câble / Towing rope) gikoreshwa mu gukurura ikinyabiziga kigenda nabi cyangwa cyangiritse ni ubuhe?",
      en: "What is the maximum permissible length for a flexible towing cable or rope used to tow a disabled vehicle?",
      fr: "Quelle est la longueur maximale autorisée pour un câble ou câble souple de remorquage?"
    },
    options: {
      rw: ["Metero 5 (5 mètres)", "Metero 10 (10 mètres)", "Metero 2 (2 mètres)", "Metero 15 (15 mètres)"],
      en: ["5 meters (5m)", "10 meters (10m)", "2 meters (2m)", "15 meters (15m)"],
      fr: ["5 mètres (5m)", "10 mètres (10m)", "2 mètres (2m)", "15 mètres (15m)"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Intera iri hagati y'ibinyabiziga bikururana ntigomba kurenza metero 5. Iyo irenze metero 3, hagomba gushyirwaho ikimenyetso kigaragara nka gatambaro gitukura cyangwa itara.",
      en: "The distance between the towing and towed vehicle must not exceed 5 meters. If it exceeds 3 meters, it must be marked with a red flag or light.",
      fr: "La distance entre le véhicule tracteur et le véhicule tracté ne doit pas dépasser 5 mètres (avec signalisation si supérieure à 3m)."
    },
    articleRef: "Art. 42"
  },
  {
    id: 208,
    category: 'technical',
    question: {
      rw: "Amapine y'ikinyabiziga agomba kugira ubujyakuzimu bw'inzira (Sculptures / Tread depth) bungana iki byibura?",
      en: "What is the minimum legal tire tread depth (Sculptures de la bande de roulement) required on vehicle tires?",
      fr: "Quelle est la profondeur minimale légale des rainures de la bande de roulement des pneumatiques?"
    },
    options: {
      rw: [
        "Milimetero 1.0 (1.0 mm) ku buso bwose bugenda ku muhanda",
        "Milimetero 5.0 (5.0 mm)",
        "Santimetero 2 (2.0 cm)",
        "Nta rugero rutegetswe"
      ],
      en: [
        "1.0 millimeter (1.0 mm) across the entire contact tread pattern",
        "5.0 millimeters (5.0 mm)",
        "2.0 centimeters (2.0 cm)",
        "No minimum legal depth requirement"
      ],
      fr: [
        "1,0 millimètre (1,0 mm) sur toute la surface de roulement",
        "5,0 millimètres (5,0 mm)",
        "2,0 centimètres (2,0 cm)",
        "Aucune profondeur minimale requise"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amapine agomba kuba afite imirongo ifite ubujyakuzimu butari munsi ya milimetero 1 kugira ngo afate neza ku muhanda udanyerera igihe cy'imvura.",
      en: "Tires must maintain at least 1.0 mm of tread depth across all grooves to ensure safe traction and prevent hydroplaning.",
      fr: "Les pneumatiques doivent présenter des sculptures d'une profondeur d'au moins 1,0 mm sur toute la surface de contact."
    },
    articleRef: "Art. 52"
  },
  {
    id: 209,
    category: 'penalties',
    question: {
      rw: "Iyo umushoferi agongeye umuntu mu muhanda agahita yiruka adatanze ubutabazi (Délit de fuite / Hit and run), ahanishwa iki?",
      en: "What legal consequences follow when a driver causes a collision involving injury and flees the scene without rendering aid (Hit-and-run / Délit de fuite)?",
      fr: "Quelles sanctions s'appliquent à un conducteur qui prend la fuite après un accident corporel sans porter secours (Délit de fuite)?"
    },
    options: {
      rw: [
        "Gushyikirizwa inkiko agahanishwa igifungo, amande akomeye no kwamburwa uruhushya rwo gutwara",
        "Gusabwa gusa gukaraba imodoka",
        "Kwishyura amafaranga ibihumbi bitanu gusa",
        "Gukomeza urugendo nta kibazo"
      ],
      en: [
        "Criminal prosecution, prison sentence, heavy fines, and mandatory revocation of driving license",
        "A formal request to wash the vehicle",
        "A minor fine of five thousand francs",
        "Permitted to proceed on journey without consequence"
      ],
      fr: [
        "Poursuites pénales, peine de prison ferme, lourdes amendes et retrait immédiat du permis de conduire",
        "Une simple obligation de nettoyer le véhicule",
        "Une contravention mineure de cinq mille francs",
        "Poursuite normale de la route sans suite"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guta uwo wagonze (Délit de fuite) ni icyaha gikomeye gihanishwa igifungo kirekire mu mategeko ahana y'u Rwanda no kwamburwa uburenganzira bwo gutwara imodoka.",
      en: "Leaving the scene of an accident with victims without offering aid is a severe penal crime carrying imprisonment and license revocation.",
      fr: "Le délit de fuite après un accident corporel entraîne des sanctions pénales sévères et l'annulation du permis."
    },
    articleRef: "Art. 84"
  },
  {
    id: 210,
    category: 'parking',
    question: {
      rw: "Ni iyihe ntera ntarengwa ikinyabiziga gihagaze kigomba gusiga hagati yacyo n'ikimenyetso cy'aho bisi zihagarara (Bus stop)?",
      en: "What minimum clearance distance must a parked vehicle maintain from a designated public bus stop sign?",
      fr: "Quelle distance minimale un véhicule en stationnement doit-il respecter par rapport à un arrêt de bus désigné?"
    },
    options: {
      rw: ["Metero 15 (15 mètres)", "Metero 2 (2 mètres)", "Metero 50 (50 mètres)", "Metero 1 (1 mètre)"],
      en: ["15 meters (15m)", "2 meters (2m)", "50 meters (50m)", "1 meter (1m)"],
      fr: ["15 mètres (15m)", "2 mètres (2m)", "50 mètres (50m)", "1 mètre (1m)"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Birabujijwe guhagarara akanya karekire cyangwa gato mu ntera iri munsi ya metero 15 mbere cyangwa nyuma y'icyapa cy'aho bisi zihagarara.",
      en: "Parking or stopping within 15 meters on either side of a public bus stop sign is strictly prohibited to ensure free bus transit.",
      fr: "Le stationnement est interdit à moins de 15 mètres de part et d'autre d'un panneau d'arrêt d'autobus."
    },
    articleRef: "Art. 28"
  },
  {
    id: 211,
    category: 'definitions',
    question: {
      rw: "Ni iki cyitwa 'Umuyoboro w'amazi' (Caniveau / Gutter) ku muhanda?",
      en: "What is the definition of a roadside gutter (Caniveau) under traffic infrastructure rules?",
      fr: "Quelle est la définition d'un caniveau le long de la voie publique?"
    },
    options: {
      rw: [
        "Inzira yakorewe gutwara amazi y'imvura n'imyanda idafatwa nk'igice cy'umuhanda kigendwamo n'ibinyabiziga",
        "Inzira y'imodoka zihuta cyane",
        "Aho guparika amagare",
        "Ahagenewe abanyamaguru gusa hagati mu muhanda"
      ],
      en: [
        "A drainage conduit built to channel rainwater and runoff, not considered part of the carriageway for vehicle circulation",
        "A high-speed fast lane",
        "A designated parking space for bicycles",
        "A pedestrian refuge in the center of the road"
      ],
      fr: [
        "Un fossé ou canalisation d'évacuation des eaux pluviales ne faisant pas partie de la chaussée carrossable",
        "Une voie rapide pour voitures",
        "Un emplacement de stationnement pour vélos",
        "Un refuge pour piétons au centre de la route"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Imiyoboro y'amazi (Caniveaux) ifasha mu kurinda umuhanda kwangizwa n'amazi kandi ntigomba kugenderwamo n'ibinyabiziga nk'umuhanda.",
      en: "Roadside gutters serve stormwater drainage purposes and are not part of the active traffic roadway.",
      fr: "Les caniveaux assurent l'écoulement des eaux et ne constituent pas une voie de circulation pour véhicules."
    },
    articleRef: "Art. 2"
  },
  {
    id: 212,
    category: 'priority',
    question: {
      rw: "Ku masangano ayobowe n'umupolisi uhagarariye umutekano, ibimenyetso by'umupolisi biruta iki?",
      en: "At an intersection directed by a traffic police officer, the officer's signals take precedence over what?",
      fr: "À un carrefour dirigé par un agent qualifié, les signaux de l'agent prévalent sur quoi?"
    },
    options: {
      rw: [
        "Amatara yo mu muhanda, ibyapa byose, n'amategeko asanzwe yo mu ruhande rw'iburyo",
        "Amatara yo mu muhanda gusa ariko ntabwo aruta ibyapa",
        "Nta kintu na kimwe biruta kuko amategeko aruta byose",
        "Ibyapa by'integuza gusa"
      ],
      en: [
        "Traffic light signals, all road signs, and standard right-of-way rules",
        "Traffic lights only, but not fixed road signs",
        "Nothing, since written law supersedes physical officer gestures",
        "Danger warning signs only"
      ],
      fr: [
        "Les feux tricolores, tous les panneaux routiers et les règles générales de priorité",
        "Les feux uniquement, mais pas les panneaux",
        "Rien du tout",
        "Uniquement les panneaux de danger"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibimenyetso by'abakozi babifitiye ububasha (nk'abapolisi) biruta amatara, ibyapa, ndetse n'amategeko asanzwe agenga inzira nyabagendwa.",
      en: "Commands and gestures of authorized traffic officers take absolute priority over road markings, signs, and automated traffic light signals.",
      fr: "Les injonctions des agents qualifiés prévalent sur les feux, les panneaux de signalisation et les règles de priorité."
    },
    articleRef: "Art. 7"
  },
  {
    id: 213,
    category: 'signs',
    question: {
      rw: "Icyapa cy'urukiramende gifite ubuso bw'ubururu kirimo inyuguti y'umweru 'P' gisobanura iki?",
      en: "What does a rectangular blue sign bearing the white capital letter 'P' indicate?",
      fr: "Que signifie un panneau rectangulaire à fond bleu portant la lettre blanche 'P'?"
    },
    options: {
      rw: [
        "Aho guparika ibinyabiziga byemewe (Parking)",
        "Ahari ikigo cya Polisi y'u Rwanda",
        "Aho guhagarika amagare gusa",
        "Inzira y'imodoka zishyura"
      ],
      en: [
        "Authorized public parking area (Parking)",
        "Rwanda National Police station ahead",
        "Bicycle stand only",
        "Toll highway entrance"
      ],
      fr: [
        "Emplacement autorisé pour le stationnement (Parking)",
        "Poste de police",
        "Parking à vélos uniquement",
        "Péage routier"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa kirimo inyuguti 'P' ni icyapa cy'ubuyobozi kigaragaza ahantu hemewe guparika ibinyabiziga.",
      en: "The letter 'P' on a blue informational signboard designates an authorized public vehicle parking zone.",
      fr: "Ce panneau d'indication signale une zone aménagée et autorisée pour le stationnement des véhicules."
    },
    articleRef: "Art. 70"
  },
  {
    id: 214,
    category: 'lights',
    question: {
      rw: "Iyo umushoferi anyuze mu gihu cyinshi (Brouillard) kumanywa, ni ayahe matara agomba gucana?",
      en: "When driving in dense daytime fog (Brouillard), which lights must the driver activate?",
      fr: "En cas de brouillard épais pendant la journée, quels feux le conducteur doit-il allumer?"
    },
    options: {
      rw: [
        "Amatara magufi (Feux de croisement) cyangwa amatara y'igihu (Feux de brouillard)",
        "Amatara maremare gusa (Feux de route)",
        "Kuzimya amatara yose kugira ngo abone neza",
        "Amatara yo gusubira inyuma gusa"
      ],
      en: [
        "Dipped headlights (Low beams) or specialized front fog lights",
        "Full high beam headlights only",
        "Turn off all lights to reduce reflection glare",
        "Reverse backing lights only"
      ],
      fr: [
        "Feux de croisement ou feux antibrouillard avant",
        "Feux de route uniquement",
        "Éteindre tous les feux",
        "Feux de recul uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mu gihe cy'igihu cyinshi, amatara maremare atera urumuri rwisubiraho rukabuza umushoferi kubona. Hagomba gucanwa amatara magufi cyangwa ay'igihu.",
      en: "In dense fog, high beams reflect back off water droplets blinding the driver; dipped low beams or fog lights must be used.",
      fr: "Par temps de brouillard, les feux de route créent un éblouissement par réflexion; il faut utiliser les feux de croisement ou antibrouillard."
    },
    articleRef: "Art. 31"
  },
  {
    id: 215,
    category: 'speed',
    question: {
      rw: "Ni uwuhe muvuduko ntarengwa w'ipikipiki itwara abagenzi mu muhanda wo mu nsisiro (Mujyi)?",
      en: "What is the maximum legal speed for a commercial passenger motorcycle within built-up urban areas?",
      fr: "Quelle est la vitesse maximale autorisée pour une motocyclette de transport en agglomération?"
    },
    options: {
      rw: ["40 km/h", "70 km/h", "90 km/h", "20 km/h"],
      en: ["40 km/h", "70 km/h", "90 km/h", "20 km/h"],
      fr: ["40 km/h", "70 km/h", "90 km/h", "20 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umuvuduko ntarengwa mu nsisiro ku binyabiziga byose harimo na moto ni 40 km/h keretse iyo hari icyapa kibitegeka ukundi.",
      en: "The standard speed limit within all urban and built-up areas is 40 km/h for all motorized vehicles including motorcycles.",
      fr: "En agglomération, la vitesse maximale autorisée pour tous les véhicules, y compris les motos, est de 40 km/h."
    },
    articleRef: "Art. 18"
  },
  {
    id: 216,
    category: 'overtaking',
    question: {
      rw: "Ni ayahe makosa abujijwe gukorwa mu gihe umushoferi abonye ko agiye kunyuranwaho n'undi?",
      en: "What is strictly prohibited when a driver realizes another vehicle is actively overtaking them?",
      fr: "Que lui est-il formellement interdit de faire lorsqu'un conducteur est sur le point d'être dépassé?"
    },
    options: {
      rw: [
        "Kongera umuvuduko no kwigira ibumoso",
        "Kugabanya umuvuduko no kwigira iburyo",
        "Gufata feri gake ngo uwihuta atambuke",
        "Kuguma mu ruhande rwe rw'iburyo"
      ],
      en: [
        "Accelerating (increasing speed) and steering further to the left",
        "Slowing down and keeping strictly to the right",
        "Decelerating gently to assist safe passage",
        "Maintaining position along the right road margin"
      ],
      fr: [
        "Accélérer et se déporter vers la gauche",
        "Réduire sa vitesse et serrer à droite",
        "Ralentir doucement pour faciliter la manœuvre",
        "Garder sa voie à droite"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo undi mushoferi agiye kukunyuraho, birabujijwe kongera umuvuduko cyangwa kumuzitira; ugomba kwigira iburyo ukamufasha gutambuka.",
      en: "When being overtaken, drivers are legally barred from increasing speed or moving left to obstruct the passing vehicle.",
      fr: "Le conducteur sur le point d'être dépassé doit serrer à droite et ne doit en aucun cas accélérer."
    },
    articleRef: "Art. 21"
  },
  {
    id: 217,
    category: 'technical',
    question: {
      rw: "Indorerwamo y'imbere ireba inyuma (Rétroviseur intérieur) igomba kuba iteye ku buryo ituma umushoferi abona intera ingana iki inyuma ye?",
      en: "The interior rearview mirror must be adjusted to allow the driver to see what minimum horizontal distance behind the vehicle on flat road?",
      fr: "Le rétroviseur intérieur doit être réglé pour permettre une visibilité sur quelle distance minimale vers l'arrière?"
    },
    options: {
      rw: ["Nibura metero 60 (Au moins 60m)", "Metero 10 gusa", "Metero 5 gusa", "Metero 500"],
      en: ["At least 60 meters (Min 60m)", "10 meters only", "5 meters only", "500 meters"],
      fr: ["Au moins 60 mètres (Min 60m)", "10 mètres seulement", "5 mètres seulement", "500 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Indorerwamo ireba inyuma igomba gutuma umushoferi areba byibura metero 60 z'umuhanda uri inyuma ye.",
      en: "Rearview mirrors must afford the driver a clear visual field of at least 60 meters along flat straight road behind.",
      fr: "Les rétroviseurs doivent assurer une visibilité d'au moins 60 mètres vers l'arrière sur route horizontale."
    },
    articleRef: "Art. 54"
  },
  {
    id: 218,
    category: 'penalties',
    question: {
      rw: "Kurenza umuvuduko wemewe ku kigero kirenze 30 km/h kugeza kuri 50 km/h bihanishwa iki?",
      en: "Exceeding the legal speed limit by between 30 km/h and 50 km/h constitutes what category of violation?",
      fr: "Le dépassement de la vitesse autorisée de 30 km/h à 50 km/h constitue quelle infraction?"
    },
    options: {
      rw: [
        "Amande y'icyiciro cya gatatu (Contravention de 3ème classe)",
        "Gushimirwa na polisi",
        "Amande y'amafaranga 100 gusa",
        "Nta cyaha kirimo"
      ],
      en: [
        "A Third Class Traffic Infraction (Contravention de 3ème classe)",
        "Commendation from traffic authorities",
        "A nominal fine of 100 RWF",
        "Not classified as an offense"
      ],
      fr: [
        "Contravention de 3ème classe avec forte amende forfaitaire",
        "Félicitations de la police",
        "Une amende de 100 francs",
        "Aucune infraction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kurenza umuvuduko ku rugero rwo hejuru ni amakosa akomeye agwa mu cyiciro cya gatatu cy'amande ateganywa n'amategeko y'u Rwanda.",
      en: "Substantial speeding violations (30-50 km/h over limit) are penalized as Class 3 major regulatory infractions under Rwandan police code.",
      fr: "Les excès de vitesse importants relèvent des contraventions de 3ème classe punies de lourdes amendes."
    },
    articleRef: "Art. 82"
  },
  {
    id: 219,
    category: 'parking',
    question: {
      rw: "Ni hehe mu hantu hakurikira habujijwe burundu guparika ikinyabiziga (Stationnement interdit)?",
      en: "In which of the following locations is parking completely prohibited at all times?",
      fr: "Dans lequel des endroits suivants le stationnement est-il formellement interdit en tout temps?"
    },
    options: {
      rw: [
        "Ku biraro, munsi y'amateme, no mu miyoboro ifunze (Tunnels)",
        "Mu igaraje ry'umuntu bwite",
        "Aho icyapa cy'uruziga rw'ubururu kirimo 'P' kiri",
        "Ku butaka bwo hanze y'umuhanda bwagenewe guparika"
      ],
      en: [
        "On bridges, under viaducts/overpasses, and inside underground tunnels",
        "Inside a private domestic garage",
        "At a designated 'P' parking bay",
        "Off-street demarcated parking lots"
      ],
      fr: [
        "Sur les ponts, sous les viaducs et dans les tunnels",
        "Dans son propre garage privé",
        "Sur un emplacement marqué du panneau 'P'",
        "Sur une aire de stationnement hors chaussée"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guhagarara no guparika bibujijwe ku biraro, munsi y'amateme no mu miyoboro kuko biteza ingorane zikomeye mu gutambuka n'umutekano.",
      en: "Parking on bridges, beneath flyovers, and within tunnels creates extreme hazards and is strictly forbidden.",
      fr: "Le stationnement sur les ponts, sous les passages supérieurs et dans les tunnels est rigoureusement interdit."
    },
    articleRef: "Art. 27"
  },
  {
    id: 220,
    category: 'definitions',
    question: {
      rw: "Iyo umuntu ayoboye inyamaswa mu muhanda nyabagendwa, afatwa nk'iki mu mategeko y'umuhanda?",
      en: "When a person herds or leads domestic animals on a public roadway, how are they legally classified?",
      fr: "Lorsqu'une personne conduit des animaux sur la voie publique, quel est son statut légal?"
    },
    options: {
      rw: [
        "Afatwa nk'umuyobozi w'ikinyabiziga / inyamaswa (Conducteur) ugomba kubahiriza amategeko y'umuhanda",
        "Afatwa nk'umunyamaguru gusa udafite icyo ashinzwe",
        "Nta tegeko na rimwe rimureba",
        "Afatwa nk'umugenzi"
      ],
      en: [
        "Classified legally as a driver/handler (Conducteur) subject to road traffic duties",
        "Treated merely as an exempt pedestrian with no traffic responsibilities",
        "Completely immune from all road traffic regulations",
        "Considered a passenger"
      ],
      fr: [
        "Considéré comme un conducteur (Conducteur) soumis aux règles du code de la route",
        "Considéré comme un simple piéton sans obligation",
        "Exempté de tout règlement",
        "Considéré comme passager"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umuntu wese uyobora inyamaswa zikurura cyangwa zitwara imitwaro, amashyo cyangwa amatungo afatwa nk'umuyobozi ugomba kuyobora neza.",
      en: "Anyone guiding or herding draft animals, livestock, or herds on public roads is legally held to the standard of a vehicle driver.",
      fr: "Toute personne menant des bêtes de trait, de charge ou des troupeaux est considérée comme un conducteur responsable."
    },
    articleRef: "Art. 4"
  },
  {
    id: 221,
    category: 'priority',
    question: {
      rw: "Ni ibihe binyabiziga bifite uburenganzira budasanzwe bwo gutambuka (Véhicules prioritaires) igihe byacanye amatara n'intangarugero zabyo?",
      en: "Which vehicles qualify as emergency priority vehicles (Véhicules prioritaires) when their audible sirens and flashing warning lights are operating?",
      fr: "Quels véhicules sont qualifiés de prioritaires lorsqu'ils utilisent leurs avertisseurs spéciaux et feux clignotants?"
    },
    options: {
      rw: [
        "Imbangukiragutabara (Ambulance), imodoka zizimya umuriro (Pompiers), n'imodoka za Polisi ziri mu butumwa bwihutirwa",
        "Amotari yose yihuta mu gitondo",
        "Amatafari n'amakamyo yikoreye ibiti",
        "Bisi zitwara abagenzi gusa"
      ],
      en: [
        "Ambulances, fire brigade engines, and police patrol units engaged in urgent emergency missions",
        "All commercial motorcyclists hurrying in the morning",
        "Brick and timber transport trucks",
        "Commercial public buses only"
      ],
      fr: [
        "Les ambulances, véhicules de lutte contre l'incendie et véhicules de police en mission urgente",
        "Toutes les motos pressées le matin",
        "Les camions transportant des matériaux",
        "Les autobus de transport uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga by'ubutabazi nka ambulances, zimya-muriro na polisi iyo byakije amahoni n'amatara yabyo byihariye bifite uburenganzira bwo gutambuka mbere y'abandi bose.",
      en: "Emergency vehicles with active optical and acoustic beacons enjoy statutory right-of-way above ordinary road users.",
      fr: "Les ambulances, pompiers et véhicules de police signalés par leurs avertisseurs spéciaux ont priorité absolue."
    },
    articleRef: "Art. 15"
  },
  {
    id: 222,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu ifite umuzenguruko utukura kirimo ikimenyetso cy'abana babiri bafite ibikapu bisobanura iki?",
      en: "What does a triangular warning sign with a red border depicting two children carrying school backpacks mean?",
      fr: "Que signifie un panneau triangulaire à bordure rouge illustrant deux enfants portant des cartables?"
    },
    options: {
      rw: [
        "Kwegera ikigo cy'ishuri cyangwa aho abana bakunze kwambukira umuhanda (Endroit fréquenté par les enfants)",
        "Aho gukinira imikino y'abana gusa",
        "Isoko ry'imyenda y'abana",
        "Kubuza abana kwinjira mu muhanda"
      ],
      en: [
        "Approaching a school zone, playground, or frequent child crossing area",
        "Restricted children playground only",
        "Children clothing market",
        "Prohibition of children entering the road"
      ],
      fr: [
        "Endroit fréquenté par les enfants ou proximité d'une école",
        "Terrain de jeux privé",
        "Marché pour enfants",
        "Interdiction aux enfants d'accéder à la route"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira umushoferi ko yegereye ishuri cyangwa ikibuga cy'abana bityo agomba kugabanya umuvuduko akaba maso cyane.",
      en: "This warning sign alerts drivers of school vicinities and areas where children frequently cross the roadway.",
      fr: "Ce panneau de danger avertit de la proximité d'écoles ou de lieux fréquentés par des enfants."
    },
    articleRef: "Art. 65"
  },
  {
    id: 223,
    category: 'lights',
    question: {
      rw: "Amatara ndangamubyimba (Feux d'encombrement / Clearance lights) ategetswe ku bihe binyabiziga mu Rwanda?",
      en: "End-outline clearance marker lights (Feux d'encombrement) are mandatory on which vehicles in Rwanda?",
      fr: "Les feux d'encombrement sont obligatoires sur quels types de véhicules au Rwanda?"
    },
    options: {
      rw: [
        "Ibinyabiziga bifite ubugari burenze metero 2.10 (Véhicules de plus de 2,10m de large)",
        "Amagare yose",
        "Imodoka nto zitwara abantu batatu",
        "Amapikipiki yose"
      ],
      en: [
        "Vehicles exceeding 2.10 meters in total vehicle width",
        "All pedal bicycles",
        "Small private passenger cars",
        "All two-wheel motorbikes"
      ],
      fr: [
        "Les véhicules dont la largeur hors-tout dépasse 2,10 mètres",
        "Toutes les bicyclettes",
        "Les voitures particulières de petite taille",
        "Toutes les motocyclettes"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga bifite ubugari burenga metero 2.10 bigomba kugira amatara yerekana ubugari bwabyo ku mpera z'imbere n'inyuma.",
      en: "Clearance marker lights are required at upper corners of any wide commercial vehicle over 2.10 meters in width.",
      fr: "Les feux d'encombrement sont obligatoires à l'avant et à l'arrière pour les véhicules d'une largeur supérieure à 2,10 m."
    },
    articleRef: "Art. 35"
  },
  {
    id: 224,
    category: 'speed',
    question: {
      rw: "Kuki umushoferi abuzwa kugenda ku muvuduko muto cyane mu buryo budasanzwe (Vitesse anormalement réduite)?",
      en: "Why is driving at an abnormally excessively slow speed prohibited without valid emergency grounds?",
      fr: "Pourquoi est-il interdit de circuler à une vitesse anormalement réduite sans motif valable?"
    },
    options: {
      rw: [
        "Biteza impanuka, bikabangamira ituze n'urujya n'uruza rw'abandi bakoresha umuhanda",
        "Bituma imodoka idakoresha lisansi",
        "Bitegetswe kugenda gahoro igihe cyose",
        "Nta cyaha kirimo kuko ari byo byiza"
      ],
      en: [
        "It obstructs smooth traffic flow and creates dangerous hazards for following vehicles",
        "It prevents the vehicle from consuming fuel",
        "Slow crawling is legally mandated at all times",
        "It is always commendable with no safety risk"
      ],
      fr: [
        "Cela gêne la fluidité de la circulation et crée un risque d'accident pour les usagers qui suivent",
        "Cela empêche la consommation de carburant",
        "Rouler très lentement est obligatoire en tout temps",
        "Aucune infraction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kugenda gahoro cyane nta mpamvu yumvikana bibangamira abandi bagenzi kandi bishobora gutera impanuka zo kugongana inyuma.",
      en: "Abnormally slow driving without hazard flashers obstructs traffic and heightens collision risk.",
      fr: "Conduire à une allure anormalement réduite sans justification entrave le trafic et constitue un danger."
    },
    articleRef: "Art. 19"
  },
  {
    id: 225,
    category: 'towing',
    question: {
      rw: "Igihe ikinyabiziga gishingiweho ingorofani (Remorque / Trailer), uruti rwo gukurura rwitwa iki?",
      en: "What is the rigid mechanical coupling device connecting a towing vehicle and trailer called?",
      fr: "Comment s'appelle la barre rigide d'attelage reliant le véhicule tracteur et la remorque?"
    },
    options: {
      rw: [
        "Akuma cyangwa ingoyi yo gukurura (Barre d'attelage / Timon)",
        "Umugozi w'ipamba",
        "Igitambaro cy'umukara",
        "Umuzingo w'amashanyarazi"
      ],
      en: [
        "Tow bar / Drawbar coupling (Barre d'attelage / Timon)",
        "Cotton string",
        "Black ribbon",
        "Electrical cable bundle"
      ],
      fr: [
        "La barre d'attelage ou timon rigide",
        "Un fil de coton",
        "Un ruban noir",
        "Un câble électrique"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kugira ngo ikinyabiziga gikurure remorque gifite umutekano, gikoresha akuma k'icyuma karemereye kandi gakomeye kazwi nka barre d'attelage.",
      en: "Rigid drawbars ensure mechanical integrity and safe braking coupling when towing trailers.",
      fr: "L'attelage de remorque doit s'effectuer à l'aide d'un timon ou d'une barre rigide homologuée."
    },
    articleRef: "Art. 43"
  },
  {
    id: 226,
    category: 'technical',
    question: {
      rw: "Kuki itegeko ritegeka ko ibinyabiziga byose bigomba kugira umukandara wo kwirinda (Ceinture de sécurité)?",
      en: "Why does the law make the wearing of safety seatbelts mandatory for vehicle occupants?",
      fr: "Pourquoi le port de la ceinture de sécurité est-il légalement obligatoire?"
    },
    options: {
      rw: [
        "Kugabanya ibikomere n'impfu igihe habaye impanuka cyangwa feri ikomeye",
        "Kugira ngo abagenzi baticara neza",
        "Kugira ngo imodoka igende buhoro",
        "Gushimisha abapolisi gusa"
      ],
      en: [
        "To drastically reduce fatalities and severe injuries in collisions or sudden hard braking",
        "To restrict passenger seating comfort",
        "To force the vehicle to travel slower",
        "Solely to satisfy police checks"
      ],
      fr: [
        "Pour réduire considérablement les risques de blessures graves ou de mort en cas de choc ou freinage brusque",
        "Pour gêner le confort des passagers",
        "Pour ralentir la voiture",
        "Uniquement pour faire plaisir aux policiers"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umukandara wo kwirinda urinda umuntu gukubitwa ku kirahure cyangwa gusohoka mu modoka igihe ikoze impanuka.",
      en: "Seatbelts restrain vehicle occupants, preventing high-impact dashboard strikes and vehicle ejection during crashes.",
      fr: "La ceinture de sécurité retient le corps et empêche l'éjection ou l'impact contre le pare-brise lors d'un accident."
    },
    articleRef: "Art. 58"
  },
  {
    id: 227,
    category: 'priority',
    question: {
      rw: "Ku masangano yo mu bwoko bwa Rond-point afite ibyapa bya 'Cedez le passage', uburenganzira bwo gutambuka buhabwa nde?",
      en: "At a roundabout controlled by yield signs (Cédez le passage), who possesses priority right-of-way?",
      fr: "Sur un carrefour à sens giratoire (rond-point) muni de panneaux 'Cédez le passage', qui a la priorité?"
    },
    options: {
      rw: [
        "Ibinyabiziga bimaze kwinjira muri rond-point (kuri rond-point hagati)",
        "Ibinyabiziga bishya birimo kwinjira muri rond-point biturutse hanze",
        "Ikinyabiziga kinini cyane gusa",
        "Ikinyabiziga kiva mu ruhande rw'iburyo gusa"
      ],
      en: [
        "Vehicles already circulating inside the roundabout ring",
        "Vehicles approaching and entering from outside roads",
        "The largest heavy truck regardless of position",
        "Only vehicles entering from the right"
      ],
      fr: [
        "Les véhicules circulant déjà sur l'anneau du rond-point",
        "Les véhicules arrivant pour s'engager sur le rond-point",
        "Le plus gros camion",
        "Uniquement les véhicules venant de droite"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo winjira muri rond-point ifite icyapa cyo guha inzira abandi, ugomba kureka ibinyabiziga biri imbere muri rond-point bikabanza gutambuka.",
      en: "Approaching vehicles must yield to traffic already circulating inside the roundabout carriageway.",
      fr: "Les usagers s'engageant sur un rond-point doivent céder le passage aux véhicules déjà engagés sur l'anneau."
    },
    articleRef: "Art. 13"
  },
  {
    id: 228,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite ubuso bw'ubururu kirimo akambi k'umweru kerekeza iburyo gisobanura iki?",
      en: "What does a circular blue sign containing a white arrow pointing right mean?",
      fr: "Que signifie un panneau circulaire à fond bleu comportant une flèche blanche pointant vers la droite?"
    },
    options: {
      rw: [
        "Itegeko ryo gukatira iburyo (Obligation de tourner à droite)",
        "Kubuza gukatira iburyo",
        "Aho guparika ku ruhande rw'iburyo",
        "Umuhanda w'amakamyo gusa"
      ],
      en: [
        "Mandatory obligation to turn right (Obligation sign)",
        "Prohibition against turning right",
        "Authorized parking on the right",
        "Right-hand truck lane"
      ],
      fr: [
        "Obligation de tourner à droite au prochain carrefour",
        "Interdiction de tourner à droite",
        "Stationnement à droite",
        "Voie réservée aux camions"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibyapa by'inziga z'ubururu bitegeka umushoferi icyo agomba gukora; aha biba bitegetswe gukata iburyo.",
      en: "Blue circular signs are mandatory instruction signs ordering drivers to execute the indicated direction.",
      fr: "Les panneaux ronds à fond bleu sont des signaux d'obligation imposant la direction indiquée par la flèche."
    },
    articleRef: "Art. 69"
  },
  {
    id: 229,
    category: 'penalties',
    question: {
      rw: "Gukoresha telefone mu ntoki mu gihe utwaye ikinyabiziga (Usage du téléphone au volant) bihanishwa iki mu Rwanda?",
      en: "Using a hand-held mobile phone while driving a vehicle is penalized by what measure in Rwanda?",
      fr: "L'utilisation d'un téléphone portable tenu en main au volant est punie de quelle sanction au Rwanda?"
    },
    options: {
      rw: [
        "Amande y'amafaranga ateganywa n'amategeko (Amende forfaitaire) no guhagarikwa na Polisi",
        "Nta cyaha kirimo niba uvugira ku ijwi rito",
        "Gushimirwa kuko wihuta mu kazi",
        "Kugabanyirizwa umusoro"
      ],
      en: [
        "Official statutory traffic fine and immediate police intervention",
        "No violation as long as speaking softly",
        "Praised for multi-tasking productivity",
        "A tax reduction voucher"
      ],
      fr: [
        "Amende forfaitaire légale et interception immédiate par la police",
        "Aucune sanction si l'on parle à voix basse",
        "Félicitations professionnelles",
        "Réduction de taxes"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kuvugira kuri telefone uyifashe mu ntoki mu gihe utwaye birabujijwe kuko bitera uburangare bukabije bugateza impanuka.",
      en: "Distracted driving via hand-held mobile communication is strictly prohibited and subject to immediate traffic fines.",
      fr: "L'usage du téléphone tenu en main au volant distrait l'attention et constitue une infraction verbalisée."
    },
    articleRef: "Art. 83"
  },
  {
    id: 230,
    category: 'parking',
    question: {
      rw: "Iyo umuntu aparitse ikinyabiziga ku munsi ku musozi cyangwa ahantu hahanamye, agomba gukora iki kugira ngo kidatemba?",
      en: "When parking on a steep incline or downhill slope, what safety precautions must the driver take?",
      fr: "Lors du stationnement sur une pente raide ou déclivité, quelles précautions indispensables le conducteur doit-il prendre?"
    },
    options: {
      rw: [
        "Gukaza feri y'urugendo (Frein de stationnement), gushyira mu vite iboneye cyangwa gushyiraho urukozwe (Cale)",
        "Gusiga imodoka mu ryanyuma (Point mort / Neutral) gusa",
        "Kureka amapine akareba mu muhanda rwagati nta feri",
        "Kuzimya amatara gusa akigendera"
      ],
      en: [
        "Engage handbrake fully, shift into gear (or Reverse if downhill), and turn steering toward curb or chock wheels",
        "Leave gearbox in Neutral with handbrake released",
        "Point wheels toward open traffic lanes with no brakes",
        "Turn off lights only and walk away"
      ],
      fr: [
        "Serrer le frein à main, engager une vitesse (ou marche arrière en descente) et caler les roues",
        "Laisser au point mort sans frein",
        "Braquer vers le milieu de la route sans frein",
        "Éteindre les feux et partir"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ku musozi, umushoferi agomba gukaza feri y'intoki, agashyira mu vite ya mbere (cyangwa marche arrière iyo ahagaze amanuka) kandi agahindura amapine areba ku nkombe.",
      en: "Securing a vehicle on slopes requires handbrake application, gear engagement, and turning wheels towards the curb.",
      fr: "En pente, il faut serrer le frein de stationnement, enclencher une vitesse et orienter les roues vers le trottoir."
    },
    articleRef: "Art. 29"
  },
  {
    id: 231,
    category: 'definitions',
    question: {
      rw: "Ni iki cyitwa 'Umuyoboro w'ibyapa' (Signalisation routière) mu mategeko y'umuhanda?",
      en: "What encompasses the overall system of road signaling (Signalisation routière)?",
      fr: "Que comprend l'ensemble du système de signalisation routière?"
    },
    options: {
      rw: [
        "Ibyapa bimanitse, ibimenyetso byo ku butaka (Marquages au sol), n'amatara biyobora urujya n'uruza",
        "Amabara y'imodoka gusa",
        "Ibyapa byo kwamamaza ubucuruzi gusa",
        "Ibiti biteye ku mpande z'umuhanda"
      ],
      en: [
        "Vertical signposts, pavement markings, and electronic traffic lights guiding and regulating traffic",
        "Vehicle paint colors only",
        "Commercial advertising billboards",
        "Trees planted along roadsides"
      ],
      fr: [
        "Les panneaux verticaux, marquages sur la chaussée et feux lumineux organisant la circulation",
        "La couleur des véhicules",
        "Les panneaux publicitaires uniquement",
        "Les arbres bordant la route"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibyapa n'ibimenyetso byo ku butaka hamwe n'amatara nibyo bigize uburyo bwose bwo kuyobora no kuburira abakoresha inzira nyabagendwa.",
      en: "Road signaling encompasses all vertical signs, horizontal ground markings, and light signals that govern roadway users.",
      fr: "La signalisation routière comprend les signaux verticaux, horizontaux et lumineux destinés à régir la circulation."
    },
    articleRef: "Art. 60"
  },
  {
    id: 232,
    category: 'priority',
    question: {
      rw: "Iyo ibinyabiziga bibiri bihuriye mu muhanda ufunganye cyane ku musozi bishaka kubisikana, ni ikihe kigomba gusubira inyuma cyangwa guha inzira?",
      en: "When two vehicles meet on a narrow mountain slope where passing is impossible, which vehicle must generally yield or reverse?",
      fr: "Sur une route de montagne étroite où le croisement est impossible, quel véhicule doit généralement reculer ou céder le passage?"
    },
    options: {
      rw: [
        "Ikinyabiziga kimanuka nicyo kigomba guhagarara no guha inzira ikizamuka (Icyoroshye gusubira inyuma)",
        "Ikinyabiziga kizamuka kigomba guhagarara ku ngufu",
        "Ikinyabiziga kinini kigomba kugonga ikito",
        "Bose bagomba kuguma aho bateranye amagambo"
      ],
      en: [
        "The descending vehicle must yield and stop or reverse to let the ascending vehicle proceed",
        "The climbing ascending vehicle must always reverse down",
        "The larger vehicle should crash through the smaller",
        "Both vehicles must stay stranded permanently"
      ],
      fr: [
        "Le véhicule descendant doit s'arrêter ou reculer pour faciliter le passage du véhicule montant",
        "Le véhicule qui monte doit obligatoirement reculer",
        "Le plus lourd doit forcer le passage",
        "Rester bloqués indéfiniment"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ku misozi ihanamye, ikinyabiziga kizamuka kiba gifite ingufu zikomeye z'urugendo; ikimanuka kiba cyoroshye guhagarara no gusubira inyuma nicyo kigomba kubahiriza kubisikana.",
      en: "On steep gradients, descending vehicles have greater restarting ease and must yield or reverse for ascending vehicles.",
      fr: "En forte pente, le véhicule descendant doit s'arrêter ou faire marche arrière pour laisser passer le véhicule montant."
    },
    articleRef: "Art. 16"
  },
  {
    id: 233,
    category: 'lights',
    question: {
      rw: "Ni ryari bitemewe gukoresha amatara maremare (Feux de route / High beam)?",
      en: "When is it illegal to use high beam headlights (Feux de route)?",
      fr: "Quand est-il interdit d'utiliser les feux de route (pleins phares)?"
    },
    options: {
      rw: [
        "Iyo uhuye n'ikindi kinyabiziga kiza kiguteganye, cyangwa ugendera hafi inyuma y'ikindi kinyabiziga, cyangwa mu nsisiro imuritswe neza",
        "Mu ijoro ry'icuraburindi mu ishyamba ririmo ubusa",
        "Iyo nta wundi muntu uri mu muhanda",
        "Iyo uhagaze mu igaraje ryawe"
      ],
      en: [
        "When approaching oncoming traffic, following closely behind another vehicle, or in well-lit urban streets",
        "On pitch-black deserted rural roads with no other users",
        "When no other traffic exists on the highway",
        "When parked in your own private driveway"
      ],
      fr: [
        "Lors du croisement d'un autre véhicule, en suivant de près un usager, ou en agglomération éclairée",
        "En pleine nuit sur route déserte non éclairée",
        "Lorsqu'aucun autre usager n'est présent",
        "À l'arrêt dans son garage"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara maremare ahuma amaso abandi bashoferi; ugomba gushyiramo amatara magufi iyo uhuye n'undi cyangwa ugendera hafi inyuma ye.",
      en: "High beams cause blinding glare; drivers must switch to dipped low beams when meeting oncoming traffic or following closely behind.",
      fr: "Les feux de route éblouissent les autres usagers; ils doivent être remplacés par les feux de croisement lors des croisements."
    },
    articleRef: "Art. 30"
  },
  {
    id: 234,
    category: 'speed',
    question: {
      rw: "Kuki umushoferi agomba kugabanya umuvuduko mu gihe cy'imvura idasanzwe (Pluie torrentielle)?",
      en: "Why must a driver significantly reduce driving speed during heavy torrential rain?",
      fr: "Pourquoi le conducteur doit-il réduire nettement sa vitesse par temps de forte pluie?"
    },
    options: {
      rw: [
        "Umuhanda uranyerera, intera yo guhagarara (Distance de freinage) yikuba kabiri, kandi amaso ntabona neza",
        "Kugira ngo imodoka idasaza vuba",
        "Kugira ngo radiyo yumvikane neza",
        "Nta mpamvu kuko amapine meza atanyerera na gato"
      ],
      en: [
        "Road surfaces become slippery, braking distance doubles, and visibility drops sharply",
        "To prevent vehicle paint from aging",
        "To allow clearer radio reception",
        "No reason since good tires never lose grip"
      ],
      fr: [
        "La chaussée devient glissante, la distance de freinage est doublée et la visibilité est fortement réduite",
        "Pour protéger la carrosserie",
        "Pour mieux écouter la radio",
        "Aucune raison"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amazi ku muhanda atuma amapine adafata neza (Aquaplaning) bityo intera yo guhagarara ikiyongera cyane.",
      en: "Wet asphalt drastically reduces friction and increases hydroplaning risks, requiring reduced speeds.",
      fr: "La pluie réduit l'adhérence et multiplie la distance d'arrêt; la réduction de vitesse est indispensable pour la sécurité."
    },
    articleRef: "Art. 18"
  },
  {
    id: 235,
    category: 'signs',
    question: {
      rw: "Icyapa gifite ishusho ya mpandeshatu ifite umuzenguruko utukura kirimo ikimenyetso cy'umuhanda ugabanuka bishingiye ku mubare w'ijanisha (Urugero: 10%) gisobanura iki?",
      en: "What does a triangular warning sign with a red border depicting a steep downhill slope with a percentage (e.g. 10%) indicate?",
      fr: "Que signifie un panneau triangulaire à bordure rouge indiquant une descente avec un pourcentage (ex. 10%)?"
    },
    options: {
      rw: [
        "Amanuka ahanamye cyane (Descente dangereuse)",
        "Umusozi uzamuka cyane",
        "Umuhanda unyerera kubera amavuta",
        "Ikigero cy'amande yiyongereyeho 10%"
      ],
      en: [
        "Dangerous steep downhill gradient ahead (Descente dangereuse)",
        "Steep uphill mountain ascent",
        "Oil spill on the roadway",
        "A 10% penalty tax increase"
      ],
      fr: [
        "Descente rapide et dangereuse",
        "Montée abrupte",
        "Chaussée glissante par hydrocarbures",
        "Majoration de 10% des amendes"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira umushoferi ko agiye kwinjira mu muhanda umanuka cyane aho feri ishobora gushyuha bityo agomba gukoresha feri ya moteri (Frein moteur).",
      en: "This warning sign alerts to severe downhill grades where engine braking must be engaged to prevent brake failure.",
      fr: "Ce panneau signale une forte descente nécessitant l'usage du frein moteur pour éviter la surchauffe des freins."
    },
    articleRef: "Art. 65"
  },
  {
    id: 236,
    category: 'overtaking',
    question: {
      rw: "Ni hehe mu hantu hakurikira habujijwe burundu kunyuranaho (Dépassement interdit)?",
      en: "In which of the following scenarios is overtaking strictly prohibited by law?",
      fr: "Dans lequel des cas suivants le dépassement est-il formellement interdit?"
    },
    options: {
      rw: [
        "Hafi y'amasangano y'inzira ya gari ya moshi idafite inkingi zifunga (Passage à niveau sans barrières)",
        "Ku muhanda ugororotse ufite umurongo w'uduce duce",
        "Mu muhanda mugari ufite ibisate bitatu byerekeza hamwe",
        "Hanze y'umudugudu ku muhanda urabagirana"
      ],
      en: [
        "Near unguarded level railway crossings without safety barrier gates",
        "On straight highways with broken white lane lines",
        "On multi-lane one-way dual carriageways",
        "On open rural motorways under broad daylight"
      ],
      fr: [
        "À proximité d'un passage à niveau non gardé sans barrières",
        "Sur une ligne droite à ligne discontinue",
        "Sur une route à plusieurs voies à sens unique",
        "En rase campagne par temps clair"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kunyuranaho bibujijwe ku masangano ya gari ya moshi adafite inkingi zifunga kuko bishobora gutuma umushoferi atabona gari ya moshi yegereje.",
      en: "Overtaking near unguarded railway crossings is outlawed due to extreme catastrophic collision risks.",
      fr: "Le dépassement est strictement interdit aux abords des passages à niveau sans barrières."
    },
    articleRef: "Art. 22"
  },
  {
    id: 237,
    category: 'technical',
    question: {
      rw: "Iyo ikinyabiziga gikoze impanuka cyangwa kikananirwa kugenda mu muhanda nijoro, umushoferi agomba gukora iki byihutirwa?",
      en: "If a vehicle breaks down or becomes disabled on the roadway at night, what immediate step must the driver take?",
      fr: "En cas de panne ou d'accident immobilisant un véhicule sur la chaussée la nuit, que doit faire le conducteur d'urgence?"
    },
    options: {
      rw: [
        "Gucana amatara y'intangarugero y'amakuba (Feux de détresse) no gushyira ikimenyetso cya mpandeshatu (Triangle de présignalisation) nibura muri metero 30 inyuma",
        "Guta imodoka mu muhanda akajya kuryama",
        "Kuzimya amatara yose ngo imodoka itaboneka",
        "Gucana radiyo ku ijwi ryo hejuru"
      ],
      en: [
        "Activate hazard warning blinkers and deploy the reflective warning triangle at least 30 meters behind",
        "Abandon the vehicle in the traffic lane and go to sleep",
        "Extinguish all lights so the vehicle stays invisible",
        "Turn the vehicle stereo to maximum volume"
      ],
      fr: [
        "Allumer les feux de détresse et placer le triangle de présignalisation à au moins 30 mètres à l'arrière",
        "Abandonner la voiture au milieu et aller dormir",
        "Éteindre tous les feux pour cacher le véhicule",
        "Mettre la radio au volume maximal"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo imodoka ihagaze kubera panne, igomba kugaragarira abandi hakoreshejwe amatara y'amakuba na mpandeshatu y'integuza iri mu ntera ya metero 30.",
      en: "Immobilized vehicles must immediately display hazard flashers and place emergency triangles at least 30m upstream.",
      fr: "Un véhicule en panne doit être signalé immédiatement par ses feux de détresse et son triangle à au moins 30m."
    },
    articleRef: "Art. 48"
  },
  {
    id: 238,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Akamenyetso k'ubutaka' (Marquage routier) risobanura iki?",
      en: "What does the term 'Road marking' (Marquage routier) designate under traffic statutes?",
      fr: "Que désigne le terme 'Marquage routier' dans la réglementation?"
    },
    options: {
      rw: [
        "Imirongo, uturanga-cyerekezo n'amabara bishushanyije ku bumenyi bw'umuhanda biyobora abawugendamo",
        "Imyobo iri mu muhanda",
        "Amavuta yamenetse ku muhanda",
        "Inyubako ziri ku ruhande rw'umuhanda"
      ],
      en: [
        "Lines, direction arrows, and symbols painted directly onto the road surface to guide road users",
        "Potholes on the road surface",
        "Oil spills on the asphalt",
        "Buildings constructed alongside the road"
      ],
      fr: [
        "Les lignes, flèches et symboles peints sur la chaussée pour guider et avertir les usagers",
        "Les nids-de-poule",
        "Les taches d'huile",
        "Les bâtiments riverains"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibimenyetso byo ku butaka ni imirongo n'uturanga-byerekezo byanditswe kuri kaburimbo bigaragaza uko abashoferi bagomba kugenda.",
      en: "Road markings provide continuous visual lane division, regulatory constraints, and guiding arrows on pavement surfaces.",
      fr: "Les marquages routiers fournissent des indications continues de guidage et de prescription sur la chaussée."
    },
    articleRef: "Art. 73"
  },
  {
    id: 239,
    category: 'penalties',
    question: {
      rw: "Gutwara ikinyabiziga nta bwirinzi bw'ubwishingizi (Assurance / Insurance) bufite agaciro bihanishwa iki?",
      en: "Operating a motor vehicle on public roads without valid third-party liability insurance is punishable by:",
      fr: "La conduite d'un véhicule sans assurance responsabilité civile valide est punie par:"
    },
    options: {
      rw: [
        "Guhagarikwa, gufatirwa ikinyabiziga (Fourrière) n'amande akomeye y'amategeko",
        "Guhabwa igihembo cy'ubutwari",
        "Gusabwa gushyira amavuta muri moteri",
        "Nta cyaha kuko ubwishingizi ari ubushake"
      ],
      en: [
        "Vehicle impoundment, formal citation, and heavy statutory fines",
        "A bravery award citation",
        "A recommendation to change engine oil",
        "No penalty as insurance is optional"
      ],
      fr: [
        "Mise en fourrière immédiate du véhicule, procès-verbal et forte amende",
        "Un diplôme de bravoure",
        "Une vidange moteur",
        "Aucune sanction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ubwishingizi ni itegeko kuri buri kinyabiziga kigenda mu muhanda. Kutabugira bituma ikinyabiziga gifatirwa muri furiye.",
      en: "Motor third-party insurance is legally mandatory; failure to hold valid cover results in vehicle impoundment and fines.",
      fr: "L'assurance automobile est obligatoire; circuler sans assurance entraîne la saisie en fourrière et des poursuites."
    },
    articleRef: "Art. 85"
  },
  {
    id: 240,
    category: 'lights',
    question: {
      rw: "Amatara yerekana guhagarara (Feux stop / Brake lights) agomba kuba afite irihe bara inyuma y'ikinyabiziga?",
      en: "What required color must vehicle stop / brake lights emit at the rear of a motor vehicle?",
      fr: "De quelle couleur réglementaire doivent être les feux stop à l'arrière d'un véhicule?"
    },
    options: {
      rw: ["Umutuku (Rouge)", "Ubururu (Bleu)", "Icyatsi (Vert)", "Umukara (Noir)"],
      en: ["Red (Rouge)", "Blue (Bleu)", "Green (Vert)", "Black (Noir)"],
      fr: ["Rouge (Rouge)", "Bleu (Bleu)", "Vert (Vert)", "Noir (Noir)"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara ya feri y'inyuma agomba kuba ari umutuku kugira ngo abari inyuma babone neza ko ikinyabiziga kirimo kugabanya umuvuduko cyangwa guhagarara.",
      en: "Brake stop lights must be red to provide an unambiguous, high-contrast deceleration signal to following traffic.",
      fr: "Les feux de freinage (stop) doivent obligatoirement émettre une lumière rouge non éblouissante vers l'arrière."
    },
    articleRef: "Art. 33"
  },
  {
    id: 241,
    category: 'speed',
    question: {
      rw: "Ni ryari umushoferi asabwa kugendera ku muvuduko uciriritse cyane (Allure très modérée)?",
      en: "When is a driver specifically required by law to proceed at a very slow and moderate pace?",
      fr: "Quand le conducteur est-il tenu de circuler à une allure particulièrement modérée?"
    },
    options: {
      rw: [
        "Igihe anyuze hafi y'ibitaro, ibigo by'amashuri, amasangano afunganye, cyangwa inyamaswa ziri mu muhanda",
        "Ku muhanda wa kaburimbo witaruye abantu bose",
        "Iyo atwaye imodoka nshya itarasaza",
        "Igihe ari ku cyumweru gusa"
      ],
      en: [
        "When passing hospitals, school facilities, narrow blind junctions, or livestock on the road",
        "On deserted straight rural motorways",
        "When operating a brand-new vehicle",
        "Exclusively on Sunday afternoons"
      ],
      fr: [
        "Aux abords des hôpitaux, écoles, carrefours sans visibilité ou en présence d'animaux",
        "Sur une autoroute déserte",
        "En conduisant une voiture neuve",
        "Uniquement le dimanche"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umushoferi agomba kugabanya umuvuduko cyane ahantu hose hari abanyantege nke nk'abana, abarwayi cyangwa amatungo.",
      en: "Drivers must adopt a reduced crawl speed around vulnerable pedestrians, hospitals, schools, and herd crossings.",
      fr: "La vitesse doit être considérablement réduite près des écoles, hôpitaux et zones à faible visibilité."
    },
    articleRef: "Art. 18"
  },
  {
    id: 242,
    category: 'priority',
    question: {
      rw: "Iyo umushoferi ahuye n'itara ry'umuhondo rimyatsa (Feu jaune clignotant), bisobanura iki?",
      en: "What is the legal meaning when encountering a flashing amber traffic light (Feu jaune clignotant)?",
      fr: "Que signifie la présence d'un feu jaune clignotant à une intersection?"
    },
    options: {
      rw: [
        "Kugabanya umuvuduko witonze kandi ukagenda witegereje amategeko asanzwe y'uburenganzira bwo gutambuka",
        "Guhagarara burundu ntugire aho ujya",
        "Kuvuduka cyane ngo uhite utambuka mbere y'uko ricana umutuku",
        "Gusubira inyuma vuba na bwangu"
      ],
      en: [
        "Proceed with heightened caution at reduced speed, yielding according to basic right-of-way rules",
        "Full permanent halt without authorization to cross",
        "Accelerate aggressively before a red phase begins",
        "Immediately shift to reverse and turn back"
      ],
      fr: [
        "Passer avec une prudence renforcée à allure réduite en respectant les règles générales de priorité",
        "Arrêt absolu et définitif",
        "Accélérer au maximum",
        "Faire demi-tour"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara ry'umuhondo rimyatsa risobanura ko amatara asanzwe adakora cyangwa ko habaye amakuba bityo umushoferi agomba gutambuka yitonze cyane.",
      en: "A flashing yellow light serves as a hazard caution signal requiring drivers to proceed carefully under default priority rules.",
      fr: "Le feu jaune clignotant autorise le passage avec une vigilance accrue et respect des règles normales de priorité."
    },
    articleRef: "Art. 62"
  },
  {
    id: 243,
    category: 'towing',
    question: {
      rw: "Ubugari ntarengwa (Largeur maximale) bw'ikinyabiziga n'imizigo cyikoreye bitagomba kurenza mu Rwanda ni ubuhe?",
      en: "What is the maximum permissible total width (Largeur maximale) including load for any vehicle in Rwanda?",
      fr: "Quelle est la largeur maximale autorisée chargement compris pour tout véhicule au Rwanda?"
    },
    options: {
      rw: ["Metero 2.50 (2,50 mètres)", "Metero 4.30 (4,30 mètres)", "Metero 1.80 (1,80 mètres)", "Metero 3.50 (3,50 mètres)"],
      en: ["2.50 meters (2.50m)", "4.30 meters (4.30m)", "1.80 meters (1.80m)", "3.50 meters (3.50m)"],
      fr: ["2,50 mètres (2,50m)", "4,30 mètres (4,30m)", "1,80 mètres (1,80m)", "3,50 mètres (3,50m)"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ubugari ntarengwa bw'ikinyabiziga icyo aricyo cyose harimo n'ibyo cyikoreye ntibushobora kurenza metero 2.50 keretse ku binyabiziga by'ubuhinzi byabiherewe uruhushya rwihariye.",
      en: "The absolute statutory maximum width for standard road vehicles and their cargo is 2.50 meters.",
      fr: "La largeur maximale réglementaire d'un véhicule chargement compris ne peut excéder 2,50 mètres."
    },
    articleRef: "Art. 45"
  },
  {
    id: 244,
    category: 'signs',
    question: {
      rw: "Icyapa cy'uruziga rufite umuzenguruko utukura kirimo igishushanyo cy'igare gisobanura iki?",
      en: "What does a circular sign with a red border containing a bicycle illustration indicate?",
      fr: "Que signifie un panneau circulaire à bordure rouge illustrant une bicyclette?"
    },
    options: {
      rw: [
        "Inzira ibujijwe amagare (Accès interdit aux cycles)",
        "Inzira yagenewe amagare gusa",
        "Aho kugurishiriza amagare",
        "Amagare agomba kugenda ku muvuduko wa 100 km/h"
      ],
      en: [
        "Access prohibited to pedal bicycles (Accès interdit aux cycles)",
        "Mandatory bicycle path only",
        "Bicycle repair and sales shop",
        "Bicycles must maintain 100 km/h speed"
      ],
      fr: [
        "Accès interdit aux bicyclettes et cycles sans moteur",
        "Piste obligatoire pour cyclistes",
        "Atelier de réparation de vélos",
        "Vitesse de 100 km/h pour vélos"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibyapa by'uruziga bifite umuzenguruko utukura birabuzwa; aha biba bibujijwe ku banyamagare kwinjira muri uwo muhanda.",
      en: "Red circular border signs are prohibition signs barring designated vehicle classes—in this case, bicycles.",
      fr: "Ce panneau rond à bord rouge est un signal d'interdiction interdisant l'accès aux cycles."
    },
    articleRef: "Art. 68"
  },
  {
    id: 245,
    category: 'overtaking',
    question: {
      rw: "Iyo umushoferi amaze kunyuranaho, ni ryari agomba kugaruka mu ruhande rw'iburyo?",
      en: "After successfully overtaking another vehicle, when must the driver safely return to the right lane?",
      fr: "Après avoir effectué un dépassement, quand le conducteur doit-il se rabattre sur la voie de droite?"
    },
    options: {
      rw: [
        "Amaze gusiga ikinyabiziga yanyuzeho intera ihagije ku buryo akibonera neza mu ndorerwamo ye y'imbere",
        "Akimara kugera imbere yacyo ako kanya nubwo haba habura santimetero nkeya",
        "Nyuma y'ibirometero icumi",
        "Ntago agomba kugaruka iburyo na rimwe"
      ],
      en: [
        "Once a safe buffer distance is established and the overtaken vehicle is clearly visible in the interior rearview mirror",
        "Instantly cutting right within inches of the overtaken bumper",
        "Only after driving 10 kilometers further ahead",
        "Never return to the right lane"
      ],
      fr: [
        "Dès qu'une distance de sécurité suffisante est acquise et que le véhicule dépassé apparaît nettement dans le rétroviseur",
        "Immédiatement en lui coupant la route à quelques centimètres",
        "Après dix kilomètres",
        "Ne jamais se rabattre"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kugaruka iburyo nyuma yo kunyuranaho bikorwa witonze udakase vuba ngo uhutaze uwo usize inyuma.",
      en: "Returning to the right lane must only occur after opening adequate distance without cutting in dangerously.",
      fr: "Le rabattement à droite doit s'effectuer progressivement sans surprendre ni serrer le véhicule dépassé."
    },
    articleRef: "Art. 20"
  },
  {
    id: 246,
    category: 'technical',
    question: {
      rw: "Fereri y'urugendo (Frein de service / Foot brake) ku kinyabiziga gifite moteri igomba gukora ku bihe biziga?",
      en: "The primary service foot brake (Frein de service) on a motor vehicle must act on which wheels?",
      fr: "Le frein de service (frein principal au pied) d'un véhicule automobile doit agir sur quelles roues?"
    },
    options: {
      rw: [
        "Ku biziga byose by'ikinyabiziga (Toutes les roues du véhicule)",
        "Ku biziga by'imbere gusa",
        "Ku biziga by'inyuma gusa",
        "Ku kiziga cy'uburyo gusa"
      ],
      en: [
        "On all wheels of the vehicle simultaneously",
        "On front axle wheels only",
        "On rear axle wheels only",
        "On the right-side wheel only"
      ],
      fr: [
        "Sur toutes les roues du véhicule simultanément",
        "Sur les roues avant uniquement",
        "Sur les roues arrière uniquement",
        "Sur une seule roue"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Feri y'urugendo igomba guhagarika ibiziga byose by'ikinyabiziga icyarimwe mu buryo bungana kandi butajegajega.",
      en: "Service brakes are required by law to apply balanced deceleration force to all vehicle road wheels simultaneously.",
      fr: "Le frein de service doit agir efficacement sur l'ensemble des roues du véhicule."
    },
    articleRef: "Art. 50"
  },
  {
    id: 247,
    category: 'penalties',
    question: {
      rw: "Kunyura ku itara ritukuru (Franchissement d'un feu rouge) bihanishwa iki mu mategeko y'u Rwanda?",
      en: "Running a red traffic light (Franchissement d'un feu rouge) constitutes what violation under Rwandan police regulations?",
      fr: "Le non-respect et franchissement d'un feu rouge est sanctionné par quoi au Rwanda?"
    },
    options: {
      rw: [
        "Amande y'icyiciro cya kane (Contravention de 4ème classe) n'ingorane zikomeye z'amategeko",
        "Gushimirwa kubera kwihuta",
        "Gutegekwa gusukura amatara",
        "Nta cyaha iyo nta mupolisi uhari"
      ],
      en: [
        "A severe Class 4 traffic infraction (Contravention de 4ème classe) with major statutory fine",
        "Commendation for speedy driving",
        "An order to wash the traffic lights",
        "No penalty if no police officer was on duty"
      ],
      fr: [
        "Une contravention grave de 4ème classe passible d'une lourde amende",
        "Félicitations pour la rapidité",
        "Obligation de nettoyer les feux",
        "Aucune infraction sans présence policière"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kurenga ku itara ritukuru biteza impanuka zikomeye mu masangano bityo bikaba icyaha gikomeye cyo mu rwego rwa 4.",
      en: "Violating red light signals creates lethal intersection collision risks and is treated as a Class 4 severe infraction.",
      fr: "Brûler un feu rouge est une infraction majeure de 4ème classe mettant directement en danger la vie d'autrui."
    },
    articleRef: "Art. 81"
  },
  {
    id: 248,
    category: 'parking',
    question: {
      rw: "Kuki bibujijwe guparika imodoka imbere y'irembo ry'urugo cyangwa ry'ubucuruzi (Entrée carrossable)?",
      en: "Why is parking strictly barred in front of private driveways, vehicle gates, or garage entrances?",
      fr: "Pourquoi est-il interdit de stationner devant une entrée carrossable ou porte de garage?"
    },
    options: {
      rw: [
        "Bizitira urujya n'uruza rw'abanyirurugo n'imodoka z'ubutabazi zishobora kwinjira cyangwa gusohoka",
        "Bituma irembo risaza vuba",
        "Kugira ngo izuba ridatwika imodoka",
        "Nta mpamvu na ntoya ibibuza"
      ],
      en: [
        "It unlawfully blocks access for property owners and prevents emergency vehicle ingress/egress",
        "It causes gate paint to peel",
        "To protect the car from sun exposure",
        "There is no legal basis"
      ],
      fr: [
        "Cela bloque l'accès des résidents et empêche l'intervention des véhicules de secours",
        "Pour protéger le portail",
        "Pour éviter le soleil",
        "Aucune raison valable"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Guparika imbere y'aho ibinyabiziga byinjirira cyangwa bisohokera mu ngo n'inzu birabujijwe kuko bibuza abantu uburenganzira bwabo bwo kugenda.",
      en: "Blocking carriage entrances prevents property access and hampers emergency services.",
      fr: "Le stationnement devant les entrées carrossables prive les occupants de l'accès à leur propriété."
    },
    articleRef: "Art. 28"
  },
  {
    id: 249,
    category: 'definitions',
    question: {
      rw: "Ni iki cyitwa 'Ibinyabiziga bikururana' (Train de véhicules / Articulated road train)?",
      en: "What defines a 'Vehicle combination' or road train (Train de véhicules) under traffic code?",
      fr: "Que désigne un 'Train de véhicules' (ensemble articulé) dans le code de la route?"
    },
    options: {
      rw: [
        "Ikinyabiziga gikurura (Tracteur) gifatanyijwe na remorque imwe cyangwa nyinshi",
        "Gari ya moshi igendera ku mirongo y'ibyuma",
        "Imodoka eshatu zihagaze mu igaraje",
        "Amapikipiki agendera hamwe mu itsinda"
      ],
      en: [
        "A motor towing unit coupled with one or more trailers moving as a unified vehicle train",
        "A rail locomotive running on steel tracks",
        "Three stationary cars parked in a private garage",
        "A motorcycle club riding in formation"
      ],
      fr: [
        "Un véhicule tracteur attelé à une ou plusieurs remorques formant un ensemble roulant",
        "Un train ferroviaire sur rails",
        "Trois voitures en stationnement",
        "Un groupe de motards"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga bikururana bigizwe n'imodoka ifite moteri ikurura indi remorque cyangwa nyinshi zifatanishijwe uburyo bwemewe n'amategeko.",
      en: "A vehicle train consists of a motorized towing tractor securely linked with one or multiple hitched trailers.",
      fr: "Un train de véhicules est un ensemble constitué d'un véhicule à moteur et d'une ou plusieurs remorques."
    },
    articleRef: "Art. 2"
  },
  {
    id: 250,
    category: 'signs',
    question: {
      rw: "Icyapa cya mpandeshatu ifite umuzenguruko utukura kirimo ikimenyetso cy'akanyamasyo (Dos d'âne / Ralentisseur) gisobanura iki?",
      en: "What does a triangular warning sign with a red border depicting a speed hump (Dos-d'âne / Ralentisseur) indicate?",
      fr: "Que signifie un panneau triangulaire de danger illustrant un dos d'âne (Ralentisseur)?"
    },
    options: {
      rw: [
        "Kwegera umugongo w'ingamiya cyangwa akazamuko gatunguranye mu muhanda (Dos-d'âne / Cassis)",
        "Aho kororera ingamiya",
        "Umuhanda urimo amabuye manini gusa",
        "Umusozi w'ibirunga"
      ],
      en: [
        "Approaching a speed hump, dip, or road unevenness requiring reduced speed (Dos-d'âne)",
        "Camel breeding sanctuary",
        "Road paved with large loose boulders",
        "Volcanic mountain path"
      ],
      fr: [
        "Approche d'un ralentisseur (dos-d'âne) ou d'un cassis/cahot sur la chaussée",
        "Élevage de chameaux",
        "Route pierreuse",
        "Sentier volcanique"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kiburira umushoferi ko agiye kugera ku kagurube/umugongo w'ingamiya (Dos d'âne) bityo agomba kugabanya umuvuduko ngo imodoka idaturika cyangwa igakora impanuka.",
      en: "This danger sign prompts drivers to brake and slow down before encountering physical speed humps or dips.",
      fr: "Ce panneau de danger prévient de la présence d'un cassis ou dos-d'âne imposant une réduction de vitesse."
    },
    articleRef: "Art. 65"
  }
];
