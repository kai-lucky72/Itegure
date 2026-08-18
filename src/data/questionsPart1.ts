import { Question } from '../types';

export const QUESTIONS_PART1: Question[] = [
  {
    id: 1,
    category: 'definitions',
    question: {
      rw: "Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira iki?",
      en: "Every moving vehicle or group of vehicles must have what?",
      fr: "Tout véhicule ou ensemble de véhicules en mouvement doit avoir quoi?"
    },
    options: {
      rw: ["Umuyobozi ubifitiye ubushobozi", "Umuherekeza", "Umutwaro gusa", "Nta gisubizo cy'ukuri"],
      en: ["A qualified driver", "A guide", "Only cargo", "None of the above"],
      fr: ["Un conducteur qualifié", "Un convoyeur", "Du chargement uniquement", "Aucune des réponses"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iteka rya Perezida N° 85/01 riteganya ko ikinyabiziga cyose kigenda mu nzira nyabagendwa kigomba kugira umuyobozi.",
      en: "Presidential Order N° 85/01 stipulates that every vehicle moving on public roads must have a driver.",
      fr: "L'arrêté présidentiel N° 85/01 stipule que tout véhicule en mouvement sur la voie publique doit avoir un conducteur."
    },
    articleRef: "Art. 4"
  },
  {
    id: 2,
    category: 'definitions',
    question: {
      rw: "Ijambo 'Akayira' mu mategeko y'umuhanda mu Rwanda bisobanura iki?",
      en: "What does the term 'Akayira' (Path / Sentier) mean in Rwandan traffic law?",
      fr: "Que signifie le terme 'Akayira' (Sentier) dans le code de la route rwandais?"
    },
    options: {
      rw: [
        "Inzira nyabagendwa ifunganye yagenewe gusa abanyamaguru n'ibinyabiziga bigendera ku biziga bibiri",
        "Umuhanda w'amakamyo gusa",
        "Inzira y'imodoka z'umuvuduko mwinshi",
        "Aho guhagarara imodoka"
      ],
      en: [
        "A narrow public way intended only for pedestrians and two-wheeled vehicles",
        "A road reserved exclusively for heavy trucks",
        "A high-speed motorway",
        "A parking lot"
      ],
      fr: [
        "Une voie publique étroite réservée uniquement aux piétons et véhicules à deux roues",
        "Une route réservée aux camions lourds",
        "Une autoroute à grande vitesse",
        "Un espace de stationnement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Akayira ni inzira ifunganye idashobora kwakira ibinyabiziga binini, yakorewe abanyamaguru cyangwa amagare n'amapikipiki.",
      en: "A path is a narrow public way meant only for pedestrians and two-wheeled vehicles.",
      fr: "Le sentier est une voie étroite réservée aux piétons et aux deux-roues."
    },
    articleRef: "Art. 2"
  },
  {
    id: 3,
    category: 'definitions',
    question: {
      rw: "Amategeko y'umuhanda yerekeye bande mu buryo bw'ibanze?",
      en: "To whom do road traffic rules primarily apply?",
      fr: "À qui s'appliquent principalement les règles de la circulation routière?"
    },
    options: {
      rw: [
        "Abayobozi b'ibinyabiziga, abanyamaguru, n'abayobora inyamaswa mu nzira nyabagendwa",
        "Abafite imodoka zihenze gusa",
        "Abapolisi gusa",
        "Abamotari n'abashoferi b'amakamyo gusa"
      ],
      en: [
        "Vehicle drivers, pedestrians, and persons herding/leading animals on public roads",
        "Only owners of luxury cars",
        "Only police officers",
        "Only motorcyclists and truck drivers"
      ],
      fr: [
        "Conducteurs de véhicules, piétons et personnes guidant des animaux sur la voie publique",
        "Uniquement les propriétaires de voitures de luxe",
        "Uniquement les policiers",
        "Uniquement les motocyclistes et chauffeurs de poids lourds"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko y'umuhanda agenga abakoresha bose inzira nyabagendwa harimo ibinyabiziga, abanyamaguru, n'amatungo cyangwa inyamaswa.",
      en: "Traffic laws apply to all users of public thoroughfares including drivers, pedestrians, and animal handlers.",
      fr: "Le code de la route concerne l'ensemble des usagers de la voie publique."
    },
    articleRef: "Art. 1"
  },
  {
    id: 4,
    category: 'definitions',
    question: {
      rw: "Ni iki cyitwa 'Inzira nyabagendwa' (Public Road)?",
      en: "What is defined as a 'Public Road' (Inzira nyabagendwa)?",
      fr: "Qu'est-ce qui est défini comme 'Voie publique'?"
    },
    options: {
      rw: [
        "Umuhanda wose, ibiraro, amakoni n'inkengero bigenewe kugendwamo na rubanda",
        "Irembo ry'urugo rw'umuturage gusa",
        "Urubuga rw'ikompanyi yigenga",
        "Aharorerwa amatungo gusa"
      ],
      en: [
        "The entire road, bridges, shoulders and borders open to public traffic",
        "A private house compound only",
        "A private company's internal driveway",
        "A livestock pen only"
      ],
      fr: [
        "Toute la chaussée, ponts, accotements et dépendances ouverts à la circulation publique",
        "L'enceinte d'une propriété privée uniquement",
        "Le parking privé d'une entreprise",
        "Un enclos pour animaux"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Inzira nyabagendwa igizwe n'umuhanda wose n'inkengero zawo bigenewe urujya n'uruza rwa rubanda.",
      en: "A public road encompasses the entire carriageway, shoulders and borders used for public movement.",
      fr: "La voie publique comprend toute la chaussée et ses accotements accessibles à tous."
    },
    articleRef: "Art. 2"
  },
  {
    id: 5,
    category: 'definitions',
    question: {
      rw: "Ni uwuhe mwanya umuyobozi w'ikinyabiziga agomba kugenderamo mu muhanda mu Rwanda?",
      en: "On which side of the road must a driver drive in Rwanda?",
      fr: "De quel côté de la chaussée le conducteur doit-il circuler au Rwanda?"
    },
    options: {
      rw: [
        "Iburyo bw'umuhanda uko bishoboka kose",
        "Ibumoso bw'umuhanda",
        "Hagati neza mu muhanda",
        "Aho ashatse hose bitewe n'umuvuduko"
      ],
      en: [
        "As close as safely possible to the right-hand edge of the roadway",
        "On the left-hand side of the road",
        "Directly in the center of the road",
        "Wherever he wants depending on speed"
      ],
      fr: [
        "Le plus près possible du bord droit de la chaussée",
        "Du côté gauche de la chaussée",
        "Au milieu exact de la chaussée",
        "Où il veut selon sa vitesse"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mu Rwanda amategeko ategeka kugendera mu ruhande rw'iburyo uko bishoboka kose.",
      en: "In Rwanda, traffic rules mandate driving on the right-hand side of the carriageway.",
      fr: "Au Rwanda, la circulation s'effectue obligatoirement à droite."
    },
    articleRef: "Art. 9"
  },
  {
    id: 6,
    category: 'priority',
    question: {
      rw: "Mu masangano y'inzira zifite uburenganzira bungana (nta cyapa kiharangwa), ni nde ufite uburenganzira bwo gutambuka mbere?",
      en: "At an intersection of roads with equal priority (uncontrolled junction), who has the right of way?",
      fr: "À un carrefour de voies d'égale importance (sans panneau), qui a la priorité de passage?"
    },
    options: {
      rw: [
        "Ikinyabiziga giturutse iburyo",
        "Ikinyabiziga giturutse ibumoso",
        "Ikinyabiziga kinini kurusha ibindi",
        "Ikinyabiziga cyihuta cyane"
      ],
      en: [
        "The vehicle coming from the right",
        "The vehicle coming from the left",
        "The largest vehicle",
        "The fastest moving vehicle"
      ],
      fr: [
        "Le véhicule venant de la droite (priorité à droite)",
        "Le véhicule venant de la gauche",
        "Le véhicule le plus lourd/volumineux",
        "Le véhicule le plus rapide"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itegeko rusange ry'amasangano ateganya ko uretse aho amategeko yihariye abiteganya, umuyobozi wese agomba guha inzira ikinyabiziga giturutse iburyo bwe (Priorité à droite).",
      en: "The standard default priority rule states that drivers must yield to vehicles approaching from their right side.",
      fr: "La règle générale à défaut de signalisation est la priorité à droite."
    },
    articleRef: "Art. 15"
  },
  {
    id: 7,
    category: 'priority',
    question: {
      rw: "Iyo winjiye mu masangano azenguruka (Rond-point / Roundabout), ni nde ufite uburenganzira bwo gutambuka mbere mu Rwanda?",
      en: "When approaching a roundabout (Rond-point) in Rwanda, who has priority?",
      fr: "À l'approche d'un rond-point au Rwanda, qui a la priorité de passage?"
    },
    options: {
      rw: [
        "Ibinyabiziga bisanzwe bizenguruka muri rond-point (biturutse ibumoso bwawe)",
        "Ibinyabiziga bishya byinjiramo biturutse hanze",
        "Ibinyabiziga bitwaye imizigo gusa",
        "Ibinyabiziga binini gusa"
      ],
      en: [
        "Vehicles already circulating inside the roundabout (coming from your left)",
        "Vehicles entering the roundabout from outside",
        "Only vehicles carrying goods",
        "Only large buses and trucks"
      ],
      fr: [
        "Les véhicules déjà engagés dans le rond-point (venant de votre gauche)",
        "Les véhicules qui s'apprêtent à entrer",
        "Uniquement les véhicules de marchandises",
        "Uniquement les gros autobus"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Muri rond-point, ibinyabiziga bimaze kwinjiramo biri mu kazunguruko bifite uburenganzira imbere y'ibishaka kwinjiramo.",
      en: "Vehicles already navigating inside the roundabout possess priority over vehicles trying to enter.",
      fr: "Les véhicules circulant sur l'anneau du rond-point ont la priorité sur ceux qui s'y engagent."
    },
    articleRef: "Art. 15"
  },
  {
    id: 8,
    category: 'priority',
    question: {
      rw: "Ni ibihe binyabiziga bifite uburenganzira bwo gutambuka mbere no kutubahiriza amategeko amwe y'umuvuduko igihe biri mu butumwa bwihuse?",
      en: "Which vehicles have special right-of-way and speed exemptions when on an urgent emergency mission?",
      fr: "Quels véhicules bénéficient d'une priorité absolue lorsqu'ils sont en mission urgente?"
    },
    options: {
      rw: [
        "Imbangukiragutabara (Ambulance), Kizimyamoto, n'ibya Polisi bivuga inzogera cyangwa bifite itara ry'ubururu ryaka",
        "Amotari yose yihuta",
        "Imodoka zitwara abanyacyubahiro zitari mu butumwa",
        "Amakamyo yikoreye ibiribwa"
      ],
      en: [
        "Ambulances, Fire Engines, and Police vehicles using acoustic sirens or flashing blue lights",
        "All speeding motorcycle taxis",
        "VIP private vehicles not in emergency",
        "Trucks transporting perishable food"
      ],
      fr: [
        "Ambulances, pompiers et véhicules de police utilisant un avertisseur sonore spécial ou gyrophare bleu",
        "Toutes les motos de transport",
        "Véhicules VIP privés sans urgence",
        "Camions de denrées périssables"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibinyabiziga bitabara (Police, Kizimyamoto, Ambulance) birangajwe n'inzogera idasanzwe cyangwa amatara y'ubururu bifite ubutumwa bwihuse bigomba guhabwa inzira n'abandi bose.",
      en: "Priority emergency vehicles with active sirens/flashing blue lights must be yielded to by all road users.",
      fr: "Les véhicules d'urgence prioritaires munis de sirènes et gyrophares ont priorité sur tous les usagers."
    },
    articleRef: "Art. 35"
  },
  {
    id: 9,
    category: 'priority',
    question: {
      rw: "Iyo umuyobozi agiye gukata ibumoso mu masangano, agomba guha inzira bande?",
      en: "When a driver intends to turn left at an intersection, whom must they yield to?",
      fr: "Lorsqu'un conducteur s'apprête à tourner à gauche à une intersection, à qui doit-il céder le passage?"
    },
    options: {
      rw: [
        "Ibinyabiziga biturutse imbere ye bikomeza cyangwa bikata iburyo",
        "Ibinyabiziga biri inyuma ye gusa",
        "Nta muntu n'umwe agomba guha inzira",
        "Abanyamaguru bari inyuma gusa"
      ],
      en: [
        "Oncoming vehicles continuing straight or turning right",
        "Only vehicles directly behind him",
        "No one; left turn has absolute priority",
        "Only pedestrians far behind"
      ],
      fr: [
        "Aux véhicules venant en sens inverse qui continuent tout droit ou tournent à droite",
        "Uniquement aux véhicules qui le suivent",
        "À personne, le virage à gauche est prioritaire",
        "Uniquement aux piétons derrière lui"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umuyobozi ukata ibumoso agomba kureka ibinyabiziga biturutse imbere ye bikabanza gutambuka.",
      en: "Drivers turning left must yield to incoming opposing traffic moving straight ahead or turning right.",
      fr: "Le conducteur virant à gauche doit céder la priorité aux véhicules venant d'en face."
    },
    articleRef: "Art. 15"
  },
  {
    id: 10,
    category: 'priority',
    question: {
      rw: "Icyapa gifite ishusho ya mpandeshatu yubitse umutwe hasi ifite umuzenguruko utukura gisobanura iki?",
      en: "What does an inverted triangle road sign with a red border mean?",
      fr: "Que signifie un panneau triangulaire inversé (pointe en bas) bordé de rouge?"
    },
    options: {
      rw: [
        "Tanga inzira (Cédez le passage / Give way)",
        "Hagarara burundu (Stop)",
        "Umuhanda w'umuvuduko mwinshi",
        "Ufite uburenganzira bwo gutambuka mbere"
      ],
      en: [
        "Give way / Yield (Tanga inzira)",
        "Mandatory complete stop (Stop)",
        "High-speed expressway",
        "You have absolute priority"
      ],
      fr: [
        "Cédez le passage",
        "Arrêt obligatoire (Stop)",
        "Route prioritaire",
        "Sens interdit"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iki cyapa kimenyesha umuyobozi ko agomba gutanga inzira ku binyabiziga biri mu muhanda agiye kwinjiramo.",
      en: "The inverted red-bordered triangle instructs drivers to give way to oncoming traffic on the major road.",
      fr: "Le panneau triangle inversé impose de céder le passage aux usagers de la voie abordée."
    },
    articleRef: "Art. 68"
  },
  {
    id: 11,
    category: 'speed',
    question: {
      rw: "Mu nsisiro (agace gatuwe cyangwa mu mujyi), umuvuduko ntarengwa ku binyabiziga byose ni uwuhe mu gihe nta cyapa cyihariye?",
      en: "In built-up/urban areas (mu nsisiro), what is the default maximum speed limit unless posted otherwise?",
      fr: "En agglomération / zone urbaine, quelle est la vitesse maximale autorisée par défaut?"
    },
    options: {
      rw: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
      en: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
      fr: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mu nsisiro (agace k'umujyi cyangwa gatuwe n'abantu benshi), umuvuduko ntarengwa wemewe ni 40 km/h.",
      en: "In built-up areas throughout Rwanda, the statutory maximum speed limit is 40 km/h.",
      fr: "En agglomération au Rwanda, la vitesse maximale autorisée est de 40 km/h."
    },
    articleRef: "Art. 22"
  },
  {
    id: 12,
    category: 'speed',
    question: {
      rw: "Ahasanzwe hanze y'insisiro ku mihanda ya kaburimbo, umuvuduko ntarengwa ku binyabiziga bito ni uwuhe?",
      en: "Outside built-up areas on standard paved open roads, what is the default speed limit for light vehicles?",
      fr: "Hors agglomération sur route goudronnée standard, quelle est la vitesse limite pour les véhicules légers?"
    },
    options: {
      rw: ["80 km/h (cyangwa 60 km/h ahandi hateganyijwe)", "120 km/h", "150 km/h", "40 km/h"],
      en: ["80 km/h (or 60 km/h as designated by signage)", "120 km/h", "150 km/h", "40 km/h"],
      fr: ["80 km/h (ou 60 km/h selon signalisation)", "120 km/h", "150 km/h", "40 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Hanze y'insisiro umuvuduko ntarengwa muri rusange ni 80 km/h ku modoka nto, naho ku mihanda y'igitaka cyangwa ibinyabiziga bikurura bikaba 60 km/h.",
      en: "Outside towns, the general maximum speed limit is 80 km/h for passenger cars, while heavier or unpaved routes default to 60 km/h.",
      fr: "Hors agglomération, la limite générale est de 80 km/h pour les véhicules légers."
    },
    articleRef: "Art. 22"
  },
  {
    id: 13,
    category: 'speed',
    question: {
      rw: "Igihe ikinyabiziga gikuruye ikindi gifite ubumuga (dépannage), umuvuduko ntarengwa ntugomba kurenza iki?",
      en: "When towing a disabled vehicle (dépannage), what is the absolute maximum speed allowed?",
      fr: "En cas de remorquage d'un véhicule en panne (dépannage), quelle est la vitesse maximale?"
    },
    options: {
      rw: ["20 km/h", "40 km/h", "50 km/h", "60 km/h"],
      en: ["20 km/h", "40 km/h", "50 km/h", "60 km/h"],
      fr: ["20 km/h", "40 km/h", "50 km/h", "60 km/h"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo ikinyabiziga gikuruye ikindi cyagize ikibazo, umuvuduko ntarengwa ntugomba kurenga 20 km/h ku mpamvu z'umutekano.",
      en: "When towing a broken-down vehicle, the maximum speed must not exceed 20 km/h.",
      fr: "La vitesse d'un véhicule effectuant un remorquage ne doit jamais excéder 20 km/h."
    },
    articleRef: "Art. 48"
  },
  {
    id: 14,
    category: 'speed',
    question: {
      rw: "Ese umuyobozi yemerewe kugendera ku muvuduko muke cyane udasanzwe ubangamira abandi?",
      en: "Is a driver allowed to drive at an abnormally slow speed that impedes the normal flow of traffic?",
      fr: "Un conducteur peut-il rouler à une vitesse anormalement lente entravant la circulation?"
    },
    options: {
      rw: [
        "Oya, birabujijwe kugendera ku muvuduko muke cyane udasanzwe utari ngombwa ubangamira abandi",
        "Yego, buri wese agendera ku muvuduko ashaka",
        "Yego, niba afite imodoka nshya",
        "Yego, gusa nijoro"
      ],
      en: [
        "No, it is strictly forbidden to drive at an abnormally slow speed without valid reason that obstructs other road users",
        "Yes, anyone can drive as slowly as they want",
        "Yes, if they drive a new car",
        "Yes, only at night"
      ],
      fr: [
        "Non, il est interdit de rouler à une vitesse anormalement réduite sans raison valable entravant les autres usagers",
        "Oui, chacun choisit sa vitesse librement",
        "Oui, si la voiture est neuve",
        "Oui, seulement la nuit"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amategeko abuza umuyobozi kubangamira urujya n'uruza rw'ibinyabiziga akoresheje umuvuduko muke cyane bidasanzwe nta mpamvu yumvikana.",
      en: "Drivers may not impede normal traffic flow by driving at an unjustifiably low speed.",
      fr: "Il est interdit de gêner la marche normale des autres véhicules par une lenteur anormale."
    },
    articleRef: "Art. 21"
  },
  {
    id: 15,
    category: 'speed',
    question: {
      rw: "Intera y'umutekano (distance de sécurité) hagati y'ibinyabiziga bibiri bikurikirana igomba kuba ingana iki?",
      en: "What should be the safe following distance between two consecutive moving vehicles?",
      fr: "Quelle doit être la distance de sécurité entre deux véhicules qui se suivent?"
    },
    options: {
      rw: [
        "Intera ihagije ituma umuyobozi ashobora guhagarara nta mpanuka igihe ikinyabiziga kimuri imbere gihagaze gitunguranye",
        "Metero 1 gusa",
        "Santimetero 50",
        "Nta ntera ikenewe"
      ],
      en: [
        "A sufficient distance allowing the driver to stop safely if the front vehicle brakes suddenly",
        "Just 1 meter",
        "50 centimeters",
        "No distance required"
      ],
      fr: [
        "Une distance suffisante permettant d'éviter une collision en cas de freinage brusque du véhicule qui précède",
        "1 mètre seulement",
        "50 centimètres",
        "Aucune distance requise"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umuyobozi agomba gusiga intera ihagije imbere ye kugira ngo ashobore guhagarara neza igihe imodoka y'imbere ifashe feri igitaraganya.",
      en: "A driver must always maintain an adequate safety buffer to react and stop without colliding if the lead vehicle stops abruptly.",
      fr: "Le conducteur doit maintenir une distance de sécurité suffisante pour éviter une collision arrière."
    },
    articleRef: "Art. 20"
  },
  {
    id: 16,
    category: 'signs',
    question: {
      rw: "Ibyapa bifite ishusho y'uruziga ifite umuzenguruko utukura bishyirwa mu kihe cyiciro?",
      en: "Circular road signs with a red outer border belong to which category?",
      fr: "Les panneaux routiers circulaires à bordure rouge appartiennent à quelle catégorie?"
    },
    options: {
      rw: [
        "Ibyapa bibuza (Prohibitory signs)",
        "Ibyapa biburira (Warning signs)",
        "Ibyapa bitegeka (Mandatory signs)",
        "Ibyapa ndanga (Informative signs)"
      ],
      en: [
        "Prohibition / Restrictive signs (Ibibuza)",
        "Danger / Warning signs (Ibiburira)",
        "Mandatory instruction signs (Ibitegeka)",
        "Information / Directional signs (Indanga)"
      ],
      fr: [
        "Panneaux d'interdiction",
        "Panneaux de danger / avertissement",
        "Panneaux d'obligation",
        "Panneaux d'indication / information"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibyapa by'uruziga bifite umuzenguruko utukura biba bibuza (interdiction) igikorwa runaka, nk'umuvuduko, kunyuranaho, cyangwa gukata.",
      en: "Circular signs with red borders indicate prohibitions or restrictions.",
      fr: "Les panneaux ronds à bord rouge signalent une interdiction."
    },
    articleRef: "Art. 69"
  },
  {
    id: 17,
    category: 'signs',
    question: {
      rw: "Ibyapa by'uruziga bifite ubuso bw'ubururu bishyirwa mu kihe cyiciro?",
      en: "Circular road signs with a solid blue background belong to which category?",
      fr: "Les panneaux circulaires à fond bleu appartiennent à quelle catégorie?"
    },
    options: {
      rw: [
        "Ibyapa bitegeka (Mandatory signs)",
        "Ibyapa bibuza (Prohibitory signs)",
        "Ibyapa by'amakuba (Warning signs)",
        "Ibyapa by'agateganyo"
      ],
      en: [
        "Mandatory signs (Ibitegeka)",
        "Prohibition signs (Ibibuza)",
        "Danger warning signs",
        "Temporary works signs"
      ],
      fr: [
        "Panneaux d'obligation",
        "Panneaux d'interdiction",
        "Panneaux de danger",
        "Panneaux temporaires"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibyapa by'uruziga by'ubururu birategeka (obligation), nk'icyerekezo kigomba gukurikizwa cyangwa umuvuduko muto utagomba kujya munsi yawo.",
      en: "Circular blue signs are mandatory signs requiring drivers to obey specific directions or obligations.",
      fr: "Les panneaux ronds à fond bleu indiquent une obligation."
    },
    articleRef: "Art. 70"
  },
  {
    id: 18,
    category: 'signs',
    question: {
      rw: "Ibyapa bifite ishusho ya mpandeshatu yubitse umutwe hejuru ifite umuzenguruko utukura bimenyesha iki?",
      en: "What do triangular signs pointing upwards with a red border indicate?",
      fr: "Que signalent les panneaux triangulaires pointant vers le haut à bordure rouge?"
    },
    options: {
      rw: [
        "Ibyapa biburira amakuba cyangwa ibyago biri imbere (Warning of hazards)",
        "Ibyapa bitegeka",
        "Ibyapa biyobora amazina y'imijyi",
        "Ibyapa byo guhagarara akanya gato"
      ],
      en: [
        "Danger / Warning of upcoming hazards ahead",
        "Mandatory requirements",
        "Town directional information",
        "Short parking zones"
      ],
      fr: [
        "Panneaux de danger / avertissement d'un danger imminent",
        "Panneaux d'obligation",
        "Panneaux de localisation",
        "Panneaux d'arrêt court"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mpandeshatu itukura yubitse hejuru iraburira (danger/avertissement), ikabwira umushoferi kwitwararika no kugabanya umuvuduko.",
      en: "Upward-pointing triangular signs with red borders warn road users of hazards ahead.",
      fr: "Les panneaux triangulaires pointe en haut à bord rouge avertissent d'un danger."
    },
    articleRef: "Art. 67"
  },
  {
    id: 19,
    category: 'signs',
    question: {
      rw: "Icyapa cy'amapande ane (Rectangulaire/Carre) gifite ubuso bw'ubururu kimenyesha iki?",
      en: "What does a rectangular or square road sign with a blue background indicate?",
      fr: "Que signale un panneau rectangulaire ou carré à fond bleu?"
    },
    options: {
      rw: [
        "Icyapa ndanga cyangwa kiyobora (Informative / Indication)",
        "Icyapa kiburira impanuka",
        "Icyapa kibuzanya burundu",
        "Icyapa gitegeka umuvuduko mwinshi"
      ],
      en: [
        "Informative or guidance sign (Indanga / Biyobora)",
        "Imminent hazard warning",
        "Absolute prohibition",
        "High-speed enforcement"
      ],
      fr: [
        "Panneau d'indication ou d'information utile",
        "Avertissement de danger grave",
        "Interdiction absolue",
        "Obligation de vitesse élevée"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibyapa by'urukiramende cyangwa kare by'ubururu bitanga amakuru ngenderwaho (indications utiles, inzira y'icyerekezo, amavuriro, parikingi).",
      en: "Rectangular blue signs provide helpful information, service facilities, or guidance.",
      fr: "Les panneaux rectangulaires à fond bleu fournissent des indications et informations utiles."
    },
    articleRef: "Art. 71"
  },
  {
    id: 20,
    category: 'signs',
    question: {
      rw: "Umurongo wera udacitse (Ligne continue) unyereye hagati mu muhanda usobanura iki?",
      en: "What does a continuous solid white line (Umurongo udacitse) in the center of the road mean?",
      fr: "Que signifie une ligne blanche continue au milieu de la chaussée?"
    },
    options: {
      rw: [
        "Birabujijwe rwose kuwurenga cyangwa kuwukandagira ngo unyure ku wundi",
        "Biremewe kuwurenga igihe cyose wihuta",
        "Ugaragaza ko nta modoka zituruka imbere",
        "Ugaragaza inzira y'abanyamaguru"
      ],
      en: [
        "It is strictly forbidden to cross or straddle this line to overtake",
        "You are allowed to cross it anytime you are in a rush",
        "It indicates there is no oncoming traffic",
        "It designates a pedestrian crossing"
      ],
      fr: [
        "Il est formellement interdit de franchir ou de chevaucher cette ligne pour dépasser",
        "Il est permis de la franchir en cas d'urgence",
        "Elle indique l'absence de circulation inverse",
        "Elle délimite un passage piéton"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umurongo udacitse ni ikimenyetso cyo kubuza (interdiction absolue): birabujijwe kuwukandagira cyangwa kuwurenga.",
      en: "A continuous solid line strictly prohibits crossing or straddling for overtaking or changing lanes.",
      fr: "Une ligne continue ne doit jamais être franchie ni chevauchée."
    },
    articleRef: "Art. 75"
  },
  {
    id: 21,
    category: 'signs',
    question: {
      rw: "Umurongo wera ucagaguye (Ligne discontinue) hagati mu muhanda wemerera umushoferi iki?",
      en: "What does a broken/dotted white line (Umurongo ucagaguye) allow a driver to do?",
      fr: "Qu'autorise une ligne discontinue blanche au milieu de la chaussée?"
    },
    options: {
      rw: [
        "Kuwurenga unyura ku wundi mu gihe nta nkomyi cyangwa ikindi kinyabiziga giturutse imbere",
        "Guhagarara hagati mu muhanda amasaha menshi",
        "Kwiruka ku muvuduko urenze 150 km/h",
        "Kunyura mu ruhande rw'ibumoso nta kureba"
      ],
      en: [
        "To cross it to overtake when safe and clear of oncoming traffic",
        "To park in the center of the road for hours",
        "To drive at excessive speed over 150 km/h",
        "To drive permanently on the left lane"
      ],
      fr: [
        "De la franchir pour dépasser si la manœuvre peut s'effectuer en toute sécurité",
        "De stationner au milieu de la route",
        "De dépasser les vitesses limites",
        "De rouler à gauche en permanence"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umurongo ucagaguye wemerera umuyobozi kuwurenga igihe anyura ku kindi kinyabiziga, ariko amaze kubona ko nta kaga biteye.",
      en: "A broken center line permits overtaking when visibility and clearance allow safe maneuvering.",
      fr: "Une ligne discontinue peut être franchie pour un dépassement sous réserve de sécurité."
    },
    articleRef: "Art. 75"
  },
  {
    id: 22,
    category: 'signs',
    question: {
      rw: "Iyo mu muhanda hari umurongo ucagaguye ufatanye n'umurongo udacitse (Ligne mixte), umushoferi agendera ku wuhe murongo?",
      en: "When there is a combination of a solid line and a broken line (Ligne mixte), which line governs the driver?",
      fr: "En présence d'une ligne mixte (continue et discontinue accolées), quelle ligne le conducteur doit-il respecter?"
    },
    options: {
      rw: [
        "Umurongo uri mu ruhande rwe yegereye",
        "Umurongo udacitse igihe cyose",
        "Umurongo ucagaguye igihe cyose",
        "Nta n'umwe agenderaho"
      ],
      en: [
        "The line closest to his side of the road",
        "Always the solid line regardless of position",
        "Always the broken line regardless of position",
        "Neither line"
      ],
      fr: [
        "La ligne située de son côté de circulation",
        "Toujours la ligne continue",
        "Toujours la ligne discontinue",
        "Aucune des deux"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ku murongo w'impanga (Ligne mixte), umuyobozi yubahiriza umurongo uri mu ruhande rwe: niba wegereye ucagaguye ashobora kuwurenga, niba wegereye udacitse ntashobora kuwurenga.",
      en: "On composite lines, the driver must obey the line nearest to their side of the lane.",
      fr: "Le conducteur ne doit tenir compte que de la ligne qui se trouve de son côté."
    },
    articleRef: "Art. 75"
  },
  {
    id: 23,
    category: 'signs',
    question: {
      rw: "Icyapa cya STOP gifite mpande zingahe (forme octogonale) n'ibara ki?",
      en: "How many sides does a STOP sign have (octagonal shape) and what is its color?",
      fr: "Combien de côtés comporte le panneau STOP (forme octogonale) et quelle est sa couleur?"
    },
    options: {
      rw: [
        "Mpande 8 (Octogone) ifite ubuso butukura n'inyuguti zera",
        "Mpande 3 ifite ubuso bw'umweru",
        "Mpande 4 ifite ubuso bw'umuhondo",
        "Mpande 6 ifite ubuso bw'ubururu"
      ],
      en: [
        "8 sides (Octagon) with a red background and white lettering",
        "3 sides with white background",
        "4 sides with yellow background",
        "6 sides with blue background"
      ],
      fr: [
        "8 côtés (Octogone) à fond rouge et lettres blanches",
        "3 côtés à fond blanc",
        "4 côtés à fond jaune",
        "6 côtés à fond bleu"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Icyapa cya STOP gifite impande 8 n'ubuso butukura. Gitegeka umuyobozi guhagarara burundu mbere y'umurongo wo guhagarara no gutanga inzira ku banyamaguru n'ibinyabiziga byose.",
      en: "The STOP sign is an octagonal 8-sided red sign mandating a complete standstill and yielding to all traffic.",
      fr: "Le panneau STOP est de forme octogonale (8 côtés) rouge et impose un arrêt absolu."
    },
    articleRef: "Art. 68"
  },
  {
    id: 24,
    category: 'signs',
    question: {
      rw: "Ibyapa by'agateganyo (Signalisation temporaire) biranga imirimo yo mu muhanda biba bifite ubuhe buso?",
      en: "What background color characterizes temporary road work signage (Ibyapa by'agateganyo)?",
      fr: "Quelle est la couleur de fond des panneaux de signalisation temporaire de travaux?"
    },
    options: {
      rw: [
        "Ubuso bw'umuhondo cyangwa oranje",
        "Ubuso bw'icyatsi kibisi",
        "Ubuso bw'umukara",
        "Ubuso bw'umutuku gusa"
      ],
      en: [
        "Yellow or orange background",
        "Green background",
        "Black background",
        "Solid red only"
      ],
      fr: [
        "Fond jaune ou orangé",
        "Fond vert",
        "Fond noir",
        "Fond rouge uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ibyapa by'agateganyo bishyirwaho igihe hari imirimo yo gukora umuhanda cyangwa impanuka bigira ubuso bw'umuhondo/oranje.",
      en: "Temporary warning signs for road construction or maintenance feature a distinctive yellow/orange background.",
      fr: "Les panneaux de signalisation temporaire de chantier ont un fond jaune ou orangé."
    },
    articleRef: "Art. 72"
  },
  {
    id: 25,
    category: 'signs',
    question: {
      rw: "Icyapa kiranga 'Umusaraba wa Mutagatifu Andereya' (Croix de Saint-André) kimenyesha iki?",
      en: "What does Saint Andrew's Cross (Umusaraba wa Mutagatifu Andereya) sign indicate?",
      fr: "Que signale le panneau en Croix de Saint-André?"
    },
    options: {
      rw: [
        "Amasangano y'inzira ya gari ya moshi idafite inkingi zizitira (Passage à niveau sans barrières)",
        "Ibitaro bikuru",
        "Urusengero ruri hafi",
        "Amasangano y'inzira enye zifite uburenganzira bungana"
      ],
      en: [
        "An unguarded railway level crossing without barriers",
        "A major hospital",
        "A nearby church",
        "A four-way equal intersection"
      ],
      fr: [
        "Un passage à niveau sans barrières",
        "Un grand hôpital",
        "Une église",
        "Un carrefour à 4 branches égales"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Umusaraba wa Mutagatifu Andereya uranga aho umuhanda uhurira n'inzira ya gari ya moshi idafite inkingi cyangwa uruzitiro.",
      en: "Saint Andrew's cross denotes an open railway crossing without gates or barriers.",
      fr: "La croix de Saint-André signale le franchissement direct d'une voie ferrée non gardée."
    },
    articleRef: "Art. 67"
  },
  {
    id: 26,
    category: 'lights',
    question: {
      rw: "Amatara maremare y'ikinyabiziga (Amatara y'urugendo / Feux de route) agomba kumurika nibura intera ingana iki nijoro?",
      en: "How far must high beam headlights (Feux de route / Amatara maremare) illuminate the road at night?",
      fr: "À quelle distance minimale les feux de route (phares) doivent-ils éclairer la nuit?"
    },
    options: {
      rw: ["Nibura metero 100 imbere", "Metero 20 gusa", "Metero 50 gusa", "Metero 500"],
      en: ["At least 100 meters ahead", "Only 20 meters", "Only 50 meters", "500 meters"],
      fr: ["Au moins 100 mètres vers l'avant", "20 mètres seulement", "50 mètres seulement", "500 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara maremare (y'urugendo) agomba kumurika inzira neza nijoro nibura muri metero 100 imbere y'ikinyabiziga mu gihe ikirere gisanzwe.",
      en: "High beam headlights must illuminate the road ahead for a minimum distance of 100 meters under normal atmospheric conditions.",
      fr: "Les feux de route doivent éclairer efficacement la chaussée la nuit sur une distance d'au moins 100 mètres."
    },
    articleRef: "Art. 28"
  },
  {
    id: 27,
    category: 'lights',
    question: {
      rw: "Amatara magufi (Amatara yo kubisikana / Feux de croisement) agomba kumurika intera ingana iki adahumye abandi?",
      en: "How far must low beam headlights (Feux de croisement / Amatara yo kubisikana) illuminate without dazzling oncoming traffic?",
      fr: "À quelle distance minimale les feux de croisement (codes) doivent-ils éclairer sans éblouir?"
    },
    options: {
      rw: ["Nibura metero 40 imbere", "Metero 10 gusa", "Metero 200", "Metero 5 gusa"],
      en: ["At least 40 meters ahead", "Only 10 meters", "200 meters", "Only 5 meters"],
      fr: ["Au moins 40 mètres vers l'avant", "10 mètres seulement", "200 mètres", "5 mètres seulement"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara magufi (yo kubisikana) agomba kumurika nibura muri metero 40 imbere y'ikinyabiziga adahumye amaso y'abandi bashoferi babisikana.",
      en: "Low beam (dipped) headlights must illuminate at least 40 meters ahead without blinding oncoming drivers.",
      fr: "Les feux de croisement doivent éclairer la chaussée sur une distance d'au moins 40 mètres sans éblouir."
    },
    articleRef: "Art. 28"
  },
  {
    id: 28,
    category: 'lights',
    question: {
      rw: "Amatara ndangambere (Feux de position avant) n'amatara ndanganyuma (Feux de position arrière) agomba kugaragara muri intera ingana iki?",
      en: "From what minimum distance must front and rear position lights (Veilleuses) be visible at night?",
      fr: "À quelle distance minimale les feux de position avant et arrière doivent-ils être visibles la nuit?"
    },
    options: {
      rw: [
        "Nibura metero 150 (cyangwa 100m ku binyabiziga bimwe)",
        "Metero 10 gusa",
        "Metero 30 gusa",
        "Metero 500"
      ],
      en: [
        "At least 150 meters (or 100m for certain vehicle types)",
        "Only 10 meters",
        "Only 30 meters",
        "500 meters"
      ],
      fr: [
        "Au moins 150 mètres (ou 100m selon la catégorie)",
        "10 mètres seulement",
        "30 mètres seulement",
        "500 mètres"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara ndangambere (yera cyangwa y'umuhondo) n'andandanganyuma (atukura) agaragaza ubugari bw'ikinyabiziga agomba kugaragara nijoro nibura muri metero 150 mu kirere gicuye.",
      en: "Front and rear position marker lights must be distinctly visible from at least 150 meters away in clear weather.",
      fr: "Les feux de position doivent être visibles de nuit par temps clair à une distance d'au moins 150 mètres."
    },
    articleRef: "Art. 28"
  },
  {
    id: 29,
    category: 'lights',
    question: {
      rw: "Ni ryari umuyobozi agomba kuzimya amatara maremare agacana amatara magufi (yo kubisikana)?",
      en: "When must a driver switch from high beams to low beams (dipped headlights)?",
      fr: "Quand le conducteur doit-il éteindre les feux de route pour passer en feux de croisement?"
    },
    options: {
      rw: [
        "Iyo abisikana n'ikindi kinyabiziga, cyangwa akurikiye ikindi kinyabiziga hafi",
        "Iyo ageze mu muhanda uriho amatara yaka ahagije",
        "A na B ni ibisubizo by'ukuri",
        "Nta na rimwe azimya amatara maremare"
      ],
      en: [
        "When encountering oncoming traffic or following closely behind another vehicle",
        "When driving on a roadway sufficiently illuminated by street lighting",
        "Both A and B are correct",
        "Never switch off high beams"
      ],
      fr: [
        "Lorsqu'il croise un autre véhicule ou le suit à courte distance",
        "Lorsque la chaussée est éclairée de façon continue et suffisante",
        "A et B sont toutes les deux vraies",
        "Jamais éteindre les feux de route"
      ]
    },
    correctIndex: 2,
    explanation: {
      rw: "Umuyobozi agomba gukoresha amatara yo kubisikana igihe ahuye n'undi, igihe amukurikiye hafi, cyangwa aho umuhanda umurikiwe n'amatara ya komini.",
      en: "High beams must be switched to low beams when meeting oncoming vehicles, following closely behind another car, or on well-lit urban roads.",
      fr: "Les feux de croisement doivent remplacer les feux de route en croisement, suivi rapproché ou voie éclairée."
    },
    articleRef: "Art. 29"
  },
  {
    id: 30,
    category: 'lights',
    question: {
      rw: "Itara ryo guhagarara (Feu stop) ry'ikinyabiziga rigomba kuba rifite irihe bara?",
      en: "What color must vehicle brake stop lights (Feu stop) emit?",
      fr: "De quelle couleur doivent être les feux stop à l'arrière d'un véhicule?"
    },
    options: {
      rw: ["Umutuku", "Ubururu", "Icyatsi kibisi", "Umweru"],
      en: ["Red", "Blue", "Green", "White"],
      fr: ["Rouge", "Bleu", "Vert", "Blanc"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara yo guhagarara (stop) agomba kuba atukura kandi akaka igihe cyose umushoferi akandagiye feri y'urugendo.",
      en: "Brake stop lights must always be red and illuminate whenever the foot brake is engaged.",
      fr: "Les feux de stop arrière doivent obligatoirement être de couleur rouge."
    },
    articleRef: "Art. 30"
  },
  {
    id: 31,
    category: 'lights',
    question: {
      rw: "Itara risubira inyuma (Feu de recul) rigomba kuba rifite irihe bara?",
      en: "What color must the reversing light (Feu de recul) emit?",
      fr: "De quelle couleur doit être le feu de marche arrière?"
    },
    options: {
      rw: ["Umweru cyangwa umuhondo utamurika cyane", "Umutuku gusa", "Icyatsi", "Ubururu"],
      en: ["White or non-dazzling light yellow", "Red only", "Green", "Blue"],
      fr: ["Blanc ou jaune non éblouissant", "Rouge uniquement", "Vert", "Bleu"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Itara risubira inyuma riba ryera cyangwa ry'umuhondo, rikaka gusa iyo ikinyabiziga gishyizwe muri marche arrière.",
      en: "Reversing lights must emit a white or non-glaring yellow light when reverse gear is engaged.",
      fr: "Le feu de marche arrière émet une lumière blanche ou jaune non éblouissante."
    },
    articleRef: "Art. 30"
  },
  {
    id: 32,
    category: 'lights',
    question: {
      rw: "Amatara kamena-bihu (Feux de brouillard) yemerewe gukoreshwa ryari?",
      en: "When are fog lights (Feux de brouillard) permitted to be used?",
      fr: "Quand l'utilisation des feux de brouillard est-elle autorisée?"
    },
    options: {
      rw: [
        "Igihe hari igihu cyinshi, imvura ikabije cyangwa umukungugu utuma hatarebwa muri metero ziri munsi ya 100",
        "Ku zuba ryinshi ku manywa",
        "Muri parikingi gusa",
        "Igihe cyose umushoferi ashaka kugaragara"
      ],
      en: [
        "In dense fog, heavy rainfall, or thick dust when visibility falls below 100 meters",
        "On bright sunny afternoons",
        "Only when parked",
        "Anytime for decorative look"
      ],
      fr: [
        "En cas de brouillard épais, fortes pluies ou poussière réduisant la visibilité à moins de 100 mètres",
        "En plein soleil l'après-midi",
        "Uniquement au parking",
        "À tout moment pour le style"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amatara kamena-bihu akoreshwa gusa iyo hatabona neza muri metero munsi ya 100 kubera igihu, imvura nyinshi cyangwa umukungugu.",
      en: "Fog lights may only be operated during poor atmospheric visibility below 100 meters.",
      fr: "Les feux de brouillard ne doivent être allumés qu'en cas de visibilité inférieure à 100 mètres."
    },
    articleRef: "Art. 31"
  },
  {
    id: 33,
    category: 'lights',
    question: {
      rw: "Amapikipiki n'ibinyabiziga bigendera ku biziga bibiri bifite moteri bigomba gucana iki mu gihe bigenda ku manywa na nijoro?",
      en: "What light must motorcycles and motorized two-wheelers keep turned on both day and night while in motion?",
      fr: "Quel éclairage les motos et deux-roues motorisés doivent-ils allumer de jour comme de nuit en circulation?"
    },
    options: {
      rw: [
        "Itara ryo kubisikana (Feu de croisement / Code) igihe cyose bagenda",
        "Itara ry'umutuku imbere",
        "Amatara y'ubutabazi gusa",
        "Nta tara bakeneye ku manywa"
      ],
      en: [
        "Low beam dipped headlight (Feu de croisement) at all times when riding",
        "A red front headlight",
        "Hazard warning lights only",
        "No lights needed during daytime"
      ],
      fr: [
        "Le feu de croisement en permanence pendant la marche de jour comme de nuit",
        "Un phare rouge à l'avant",
        "Les feux de détresse uniquement",
        "Aucun éclairage le jour"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amapikipiki n'amavelomoteri agomba kugendana itara ryo kubisikana ryaka igihe cyose ari mu rugendo, haba ku manywa cyangwa nijoro.",
      en: "Motorcycles must have their low beam headlights switched on at all times while moving, daytime and nighttime.",
      fr: "Les motocycles doivent obligatoirement circuler avec le feu de croisement allumé le jour comme la nuit."
    },
    articleRef: "Art. 32"
  },
  {
    id: 34,
    category: 'overtaking',
    question: {
      rw: "Muri rusange, kunyura ku kindi kinyabiziga (dépassement) bikorerwa mu wuhe ruhande mu Rwanda?",
      en: "As a general rule in Rwanda, on which side must a driver overtake another vehicle?",
      fr: "En règle générale au Rwanda, de quel côté doit s'effectuer le dépassement d'un autre véhicule?"
    },
    options: {
      rw: [
        "Ibumoso bw'icyo kinyabiziga",
        "Iburyo bw'icyo kinyabiziga",
        "Mu nkengero y'umuhanda gusa",
        "Aho ubonyeyo umwanya hose"
      ],
      en: [
        "On the left-hand side of that vehicle",
        "On the right-hand side of that vehicle",
        "Along the road shoulder only",
        "Any side where there is space"
      ],
      fr: [
        "Par la gauche du véhicule dépassé",
        "Par la droite du véhicule dépassé",
        "Sur le bas-côté uniquement",
        "Du côté où il y a de l'espace"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kunyuranaho bikorerwa ibumoso bw'ikinyabiziga ushaka kunyuraho, uretse igihe ikinyabiziga cy'imbere cyagaragaje ko kigiye gukata ibumoso.",
      en: "Overtaking must normally be performed on the left, unless the vehicle ahead signals a left turn.",
      fr: "Le dépassement s'effectue par la gauche, sauf si le conducteur précédent a signalé son intention de tourner à gauche."
    },
    articleRef: "Art. 17"
  },
  {
    id: 35,
    category: 'overtaking',
    question: {
      rw: "Ni ryari byemewe kunyura ku kinyabiziga mu ruhande rw'iburyo?",
      en: "When is overtaking on the right-hand side legally permitted?",
      fr: "Quand est-il permis de dépasser un véhicule par la droite?"
    },
    options: {
      rw: [
        "Iyo umuyobozi w'imbere yagaragaje ko agiye gukata ibumoso kandi akaba yegereye umurongo ugabanya umuhanda",
        "Iyo umuhanda wose wuzuye",
        "Iyo ugenda ku muvuduko mwinshi",
        "Nta na rimwe byemewe"
      ],
      en: [
        "When the driver ahead has signaled an intention to turn left and moved to the center",
        "Whenever the road is crowded",
        "Whenever driving at high speed",
        "Never allowed under any circumstances"
      ],
      fr: [
        "Lorsque le conducteur qui précède a signalé son intention de tourner à gauche et s'est déporté vers l'axe",
        "Dès qu'il y a un embouteillage",
        "En roulant à grande vitesse",
        "Jamais autorisé"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kunyura iburyo byemewe gusa iyo ikinyabiziga cy'imbere cyamaze gushyira ikimenyetso cyo gukata ibumoso kandi kikaba cyegereye ibumoso bwawe.",
      en: "Passing on the right is only permitted when the lead vehicle is turning left and has left room on its right.",
      fr: "Le dépassement par la droite est exceptionnellement autorisé lorsque le véhicule dépassé tourne à gauche."
    },
    articleRef: "Art. 17"
  },
  {
    id: 36,
    category: 'overtaking',
    question: {
      rw: "Ni ibihe bintu bibujijwe gukorerwaho ikigikorwa cyo kunyuranaho?",
      en: "In which of the following locations is overtaking strictly prohibited?",
      fr: "Dans lequel de ces endroits le dépassement est-il formellement interdit?"
    },
    options: {
      rw: [
        "Mu makoni abuza kureba imbere, hejuru y'umusozi utabona imbere, no ku mirongo idacitse",
        "Mu muhanda ugororotse ufite umurongo ucagaguye",
        "Mu muhanda w'ibisate byinshi bihuje icyerekezo",
        "Ku manywa ku zuba ryinshi"
      ],
      en: [
        "In blind corners, crests of hills with limited view, and across continuous solid lines",
        "On straight roads with broken dotted lines",
        "On multi-lane one-way dual carriageways",
        "On bright sunny days"
      ],
      fr: [
        "Dans les virages sans visibilité, aux sommets de côtes et en présence d'une ligne continue",
        "En ligne droite avec ligne discontinue",
        "Sur chaussée à plusieurs voies à sens unique",
        "En plein jour ensoleillé"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Birabujijwe kunyuranaho ahantu hose hatagaragara neza imbere (amakoni, udusozi) no ku mirongo idacitse.",
      en: "Overtaking is forbidden where forward visibility is obstructed (curves, hilltops) or solid lines exist.",
      fr: "Il est interdit de dépasser là où la visibilité vers l'avant est insuffisante ou bordée d'une ligne continue."
    },
    articleRef: "Art. 18"
  },
  {
    id: 37,
    category: 'overtaking',
    question: {
      rw: "Iyo undi muyobozi atangiye kukunyuraho, ni iki utegetswe gukora?",
      en: "When another driver begins overtaking you, what are you obligated to do?",
      fr: "Lorsqu'un autre conducteur commence à vous dépasser, que devez-vous faire?"
    },
    options: {
      rw: [
        "Kwegera iburyo bwawe no kudakomeza kongera umuvuduko",
        "Kongera umuvuduko kugira ngo atagucaho",
        "Gufata feri igitaraganya",
        "Gucana amatara maremare yo kumuhuma"
      ],
      en: [
        "Keep to the right and refrain from accelerating",
        "Accelerate quickly to prevent him from overtaking",
        "Slam the brakes abruptly",
        "Flash high beams to blind him"
      ],
      fr: [
        "Serrer à droite et ne pas accélérer sa vitesse",
        "Accélérer pour l'empêcher de passer",
        "Freiner brusquement",
        "Mettre les pleins phares pour l'éblouir"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Iyo umuntu agucaho, ugomba kumuha umwanya wegereye iburyo kandi ntugomba kwongera umuvuduko.",
      en: "When being overtaken, keep right and maintain or reduce speed without accelerating.",
      fr: "Le conducteur en train d'être dépassé doit serrer à droite sans accélérer."
    },
    articleRef: "Art. 19"
  },
  {
    id: 38,
    category: 'overtaking',
    question: {
      rw: "Guhagarara akanya gato (Arrêt) bitandukaniye he no guhagarara akanya karekire (Stationnement)?",
      en: "How does stopping (Arrêt) differ from parking (Stationnement)?",
      fr: "Quelle est la différence entre l'arrêt et le stationnement?"
    },
    options: {
      rw: [
        "Guhagarara akanya gato ni igihe cyo kwinjiza/gusohora abantu cyangwa gupakurura imizigo umushoferi agumye hafi; guhagarara akanya karekire ni igihe ikinyabiziga gihagaze birenze icyo gihe",
        "Ni kimwe nta tandukaniro na rito",
        "Guhagarara akanya gato bikorwa nijoro gusa",
        "Guhagarara akanya karekire bikorerwa mu muhanda hagati gusa"
      ],
      en: [
        "Stopping is the brief immobilization to load/unload passengers or goods while the driver remains present; parking is immobilization beyond that duration",
        "They are completely identical with no legal distinction",
        "Stopping is only done at night",
        "Parking is done directly in the center of the road"
      ],
      fr: [
        "L'arrêt est l'immobilisation temporaire pour la montée/descente ou chargement avec conducteur à proximité; le stationnement dépasse cette durée",
        "C'est exactement la même chose",
        "L'arrêt se fait uniquement la nuit",
        "Le stationnement se fait au milieu de la route"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Arrêt ni igihe gito cyo gushyiramo cyangwa gukuramo abantu/imizigo umushoferi ari hafi y'ikinyabiziga. Stationnement ni ukugisiga kigahama hamwe.",
      en: "An 'arrêt' (stopping) lasts only for immediate loading/unloading with driver available; 'stationnement' (parking) extends beyond that.",
      fr: "L'arrêt est strictement limité au temps nécessaire pour faire monter/descendre des passagers ou charger/décharger."
    },
    articleRef: "Art. 2"
  },
  {
    id: 39,
    category: 'technical',
    question: {
      rw: "Ubugari ntarengwa bwemewe bw'ikinyabiziga gisanzwe (hatabariwemo indorerwamo) ni ubuhe mu Rwanda?",
      en: "What is the maximum permissible overall width of a standard vehicle (excluding side mirrors) in Rwanda?",
      fr: "Quelle est la largeur maximale autorisée pour un véhicule standard (hors rétroviseurs) au Rwanda?"
    },
    options: {
      rw: ["Metero 2.50 (2.50 m)", "Metero 3.50", "Metero 4.00", "Metero 1.80"],
      en: ["2.50 meters (2.50 m)", "3.50 meters", "4.00 meters", "1.80 meters"],
      fr: ["2,50 mètres (2.50 m)", "3,50 mètres", "4,00 mètres", "1,80 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ubugari ntarengwa bw'ikinyabiziga cyose hamwe n'ibyo cyikoreye ntibugomba kurenga metero 2.50 (kuri za frigo biba 2.60m cyangwa 2.65m).",
      en: "The standard statutory maximum vehicle width is 2.50 meters (2.60m/2.65m for refrigerated conditioned bodies).",
      fr: "La largeur maximale d'un véhicule standard ne peut excéder 2,50 mètres (2,60m pour les véhicules frigorifiques)."
    },
    articleRef: "Art. 39"
  },
  {
    id: 40,
    category: 'technical',
    question: {
      rw: "Ubuhagarike (uburebure bwo guhagarara / Hauteur) ntarengwa bw'ikinyabiziga n'ibyo cyikoreye ntibugomba kurenga iki?",
      en: "What is the maximum overall height (Hauteur) of a loaded vehicle allowed on public roads?",
      fr: "Quelle est la hauteur maximale autorisée d'un véhicule chargé sur la voie publique?"
    },
    options: {
      rw: ["Metero 4.00 (4.00 m) cyangwa 4.20m", "Metero 6.00", "Metero 2.00", "Metero 8.00"],
      en: ["4.00 meters (4.00 m) to 4.20m", "6.00 meters", "2.00 meters", "8.00 meters"],
      fr: ["4,00 mètres (4.00 m) à 4.20m", "6,00 mètres", "2,00 mètres", "8,00 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Ubuhagarike ntarengwa bw'ikinyabiziga n'imizigo cyikoreye ntibugomba kurenga metero 4.00 ku mihanda isanzwe kugira ngo bidakoma ku nsinga z'amashanyarazi n'ibiraro.",
      en: "Maximum vehicle height must not exceed 4.00 meters to safely clear overhead power lines and bridges.",
      fr: "La hauteur totale maximale d'un véhicule et de son chargement est fixée à 4,00 mètres."
    },
    articleRef: "Art. 40"
  },
  {
    id: 41,
    category: 'technical',
    question: {
      rw: "Uburebure ntarengwa bw'imodoka imwe itagira romoruki (véhicule isolé) ni ubuhe?",
      en: "What is the maximum legal length of a single rigid vehicle without trailer?",
      fr: "Quelle est la longueur maximale autorisée pour un véhicule isolé sans remorque?"
    },
    options: {
      rw: ["Metero 12 (12 m)", "Metero 25", "Metero 8", "Metero 30"],
      en: ["12 meters (12 m)", "25 meters", "8 meters", "30 meters"],
      fr: ["12 mètres (12 m)", "25 mètres", "8 mètres", "30 mètres"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Uburebure bw'ikinyabiziga kimwe kitagira romoruki ntibugomba kurenga metero 12.",
      en: "A single rigid vehicle without a trailer cannot exceed 12 meters in overall length.",
      fr: "La longueur d'un véhicule isolé à moteur ne doit pas dépasser 12 mètres."
    },
    articleRef: "Art. 41"
  },
  {
    id: 42,
    category: 'technical',
    question: {
      rw: "Ubujyakuzimu (profondeur des sculptures) bw'inzira z'ipine y'ikinyabiziga ntibugomba kuba munsi ya:",
      en: "What is the minimum legal tire tread depth (ubujyakuzimu bw'ipine) on vehicles?",
      fr: "Quelle est la profondeur minimale légale des rainures d'un pneumatique?"
    },
    options: {
      rw: [
        "Milimetero 1 (1.0 mm) kugeza kuri 1.6 mm",
        "Milimetero 10",
        "Santimetero 5",
        "Nta rugero rutegetswe"
      ],
      en: [
        "1.0 mm (up to 1.6 mm for standard passenger tires)",
        "10 millimeters",
        "5 centimeters",
        "No minimum requirement"
      ],
      fr: [
        "1,0 mm (jusqu'à 1,6 mm pour les voitures particulières)",
        "10 millimètres",
        "5 centimètres",
        "Aucune exigence"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Amapine agomba kuba afite imirongo ifite ubujyakuzimu bwa nibura 1mm (cyangwa 1.6mm ku binyabiziga bito) kugira ngo afate neza ku muhanda.",
      en: "Tire tread depth must be at least 1.0mm to 1.6mm across the entire tread pattern to ensure adequate road grip.",
      fr: "La profondeur des rainures de la bande de roulement des pneus ne doit pas être inférieure à 1 mm / 1,6 mm."
    },
    articleRef: "Art. 44"
  },
  {
    id: 43,
    category: 'technical',
    question: {
      rw: "Buri modoka igomba kuba ifite ubuhe bwoko bwa feri (freins)?",
      en: "Every motor vehicle must be equipped with which types of braking systems?",
      fr: "Tout véhicule automobile doit être équipé de quels systèmes de freinage?"
    },
    options: {
      rw: [
        "Feri y'urugendo (frein de service), feri yo gutabara (frein de secours), na feri yo guhagarara akanya karekire (frein de stationnement)",
        "Feri yo guhagarara gusa",
        "Feri y'urugendo gusa",
        "Feri y'amapine y'imbere gusa"
      ],
      en: [
        "Service brake (foot brake), emergency/secondary brake, and parking brake (handbrake)",
        "Parking brake only",
        "Service foot brake only",
        "Front wheel brake only"
      ],
      fr: [
        "Frein de service, frein de secours et frein de stationnement (frein à main)",
        "Frein de stationnement uniquement",
        "Frein de service uniquement",
        "Frein avant uniquement"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Imodoka igomba kugira feri y'urugendo ifata ibiziga byose, feri yo gutabara igihe feri y'urugendo ipfuye, na feri yo guhagarara akanya karekire ifata ibiziga bihagaze.",
      en: "Motor vehicles must have service brakes, emergency backup braking capability, and a mechanical parking brake.",
      fr: "Les véhicules automobiles doivent obligatoirement posséder un frein de service, un frein de secours et un frein de stationnement."
    },
    articleRef: "Art. 43"
  },
  {
    id: 44,
    category: 'towing',
    question: {
      rw: "Iyo ikinyabiziga gikuruye ikindi gikoresheje ikiziriko cyangwa umugozi (remorquage souple), uburebure bw'uwo mugozi ntibugomba kurenga iki?",
      en: "When towing a vehicle with a flexible rope/cable, what is the maximum permissible length of that towline?",
      fr: "Lors du remorquage avec une attache souple (câble/corde), quelle est la longueur maximale de l'attache?"
    },
    options: {
      rw: ["Metero 5 (5 m)", "Metero 15", "Metero 20", "Metero 1"],
      en: ["5 meters (5 m)", "15 meters", "20 meters", "1 meter"],
      fr: ["5 mètres (5 m)", "15 mètres", "20 mètres", "1 mètre"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Igihe cyo gukurura ikinyabiziga, ikiziriko ntikigomba kurenga metero 5. Iyo kirenze metero 3, kigomba gushyirwaho agatambaro gitukura cyangwa ikimenyetso kigaragara.",
      en: "The towline length cannot exceed 5 meters. If it exceeds 3 meters, it must be visibly marked with a red flag or reflector.",
      fr: "La distance entre véhicules remorqués ne doit pas excéder 5 mètres. Si elle dépasse 3 mètres, elle doit être signalée par un fanion rouge."
    },
    articleRef: "Art. 48"
  },
  {
    id: 45,
    category: 'towing',
    question: {
      rw: "Iyo ikinyabiziga kigize ubumuga cyangwa impanuka kigahagarara mu muhanda, impandeshatu z'amakuba (Triangles de pré-signalisation) zigomba gushyirwa ku yihe ntera?",
      en: "At what distance must reflective warning triangles (Mpandeshatu z'amakuba) be placed when a vehicle breaks down on the road?",
      fr: "À quelle distance les triangles de présignalisation doivent-ils être placés en cas de panne sur la chaussée?"
    },
    options: {
      rw: [
        "Nibura muri metero 30 cyangwa 50 inyuma n'imbere mu nsisiro (no muri metero 100 hanze y'insisiro)",
        "Ku kinyabiziga hejuru gusa",
        "Santimetero 10 gusa",
        "Nta na hamwe bakeneye kuyishyira"
      ],
      en: [
        "At least 30 to 50 meters behind and ahead in urban zones (and up to 100 meters on high-speed rural highways)",
        "Only directly on the vehicle roof",
        "10 centimeters away",
        "Triangles are never needed"
      ],
      fr: [
        "À au moins 30 à 50 mètres à l'avant/arrière en agglomération (et jusqu'à 100 m sur route rapide)",
        "Sur le toit du véhicule uniquement",
        "À 10 centimètres",
        "Les triangles ne sont pas obligatoires"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mpandeshatu y'amakuba igomba gushyirwa aho abandi bashoferi bayibonera kure bihagije (metero 30 kugeza 100) kugira ngo babashe gufata feri batagonganye.",
      en: "Warning triangles must be placed at a distance (30-100m) that gives approaching drivers sufficient time and distance to stop safely.",
      fr: "Le triangle de danger doit être placé à une distance suffisante (30 à 100 m) pour être visible à temps par les usagers arrivant."
    },
    articleRef: "Art. 49"
  },
  {
    id: 46,
    category: 'towing',
    question: {
      rw: "Buri kinyabiziga kigendeshwa na moteri kigomba kugira impandeshatu z'amakuba zingahe?",
      en: "How many reflective emergency warning triangles must every motor vehicle carry?",
      fr: "Combien de triangles de présignalisation chaque véhicule automobile doit-il obligatoirement avoir à bord?"
    },
    options: {
      rw: [
        "Mpandeshatu 2 (bibiri)",
        "Mpandeshatu 1 gusa",
        "Mpandeshatu 5",
        "Nta na rimwe ritegetswe"
      ],
      en: [
        "2 warning triangles",
        "Only 1 triangle",
        "5 triangles",
        "None required"
      ],
      fr: [
        "2 triangles de présignalisation",
        "1 seul triangle",
        "5 triangles",
        "Aucun"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Buri modoka igomba kugira impandeshatu ebyiri (2) z'amakuba ziteganyijwe gukoreshwa igihe igize impanuka cyangwa ubumuga.",
      en: "Vehicles are legally mandated to carry two (2) reflective emergency triangles at all times.",
      fr: "Tout véhicule automobile doit être muni d'au moins deux (2) triangles de présignalisation."
    },
    articleRef: "Art. 49"
  },
  {
    id: 47,
    category: 'penalties',
    question: {
      rw: "Uruhushya rw'agateganyo rwo gutwara ibinyabiziga (Permis Provisoire) mu Rwanda rumara igihe kingana iki?",
      en: "How long is the Rwanda Provisional Driving License (Permis Provisoire) valid for?",
      fr: "Quelle est la durée de validité du permis provisoire de conduire au Rwanda?"
    },
    options: {
      rw: ["Amezi 6 (Amezi atandatu)", "Umwaka 1", "Imyaka 5", "Amezi 3"],
      en: ["6 months", "1 year", "5 years", "3 months"],
      fr: ["6 mois", "1 an", "5 ans", "3 mois"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Uruhushya rw'agateganyo (Permis provisoire) rumara amezi atandatu (6) ashobora kongerwa igihe bikenewe.",
      en: "The provisional driving license in Rwanda is valid for a period of six (6) months.",
      fr: "Le permis de conduire provisoire au Rwanda est valable pour une durée de 6 mois."
    },
    articleRef: "Art. 80"
  },
  {
    id: 48,
    category: 'penalties',
    question: {
      rw: "Imyaka y'amavuko fatizo yo guhabwa uruhushya rwo gutwara ibinyabiziga byo mu cyiciro cya B ni iyihe mu Rwanda?",
      en: "What is the legal minimum age to obtain a Category B driving license in Rwanda?",
      fr: "Quel est l'âge légal minimal pour obtenir le permis de conduire de catégorie B au Rwanda?"
    },
    options: {
      rw: ["Imyaka 18", "Imyaka 16", "Imyaka 21", "Imyaka 25"],
      en: ["18 years old", "16 years old", "21 years old", "25 years old"],
      fr: ["18 ans", "16 ans", "21 ans", "25 ans"]
    },
    correctIndex: 0,
    explanation: {
      rw: "Mu Rwanda, imyaka fatizo yo kubona uruhushya rwo gutwara ikinyabiziga cyo mu cyiciro cya A na B ni imyaka 18 y'amavuko.",
      en: "The statutory minimum age for Category A (motorcycle) and B (light automobile) driving licenses in Rwanda is 18 years.",
      fr: "L'âge minimum légal pour solliciter le permis de catégorie A et B au Rwanda est de 18 ans révolus."
    },
    articleRef: "Art. 82"
  },
  {
    id: 49,
    category: 'penalties',
    question: {
      rw: "Gutwara ikinyabiziga wasinze (Alcool au volant / Drunk driving) bihanishwa iki mu Rwanda?",
      en: "How is driving under the influence of alcohol (Drunk driving) penalized in Rwanda?",
      fr: "Comment la conduite en état d'ébriété (Alcool au volant) est-elle sanctionnée au Rwanda?"
    },
    options: {
      rw: [
        "Amande y'amafaranga (150,000 RWF cyangwa arenga), gufungwa by'agateganyo, no guhagarikirwa uruhushya",
        "Kubabarirwa ako kanya",
        "Kugabanyirizwa umuvuduko gusa",
        "Nta gihano giteganyijwe"
      ],
      en: [
        "Heavy financial fine (150,000+ RWF), temporary detention, and suspension/revocation of driving license",
        "Immediate verbal forgiveness",
        "Advice to drive slower",
        "No penalty stipulated"
      ],
      fr: [
        "Forte amende (150 000 RWF ou plus), garde à vue temporaire et suspension/retrait du permis",
        "Simple pardon verbal",
        "Conseil de ralentir",
        "Aucune sanction"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kunywa ibisindisha ugatwara ikinyabiziga ni icyaha gikomeye giteza amande aremereye, gufungirwa kugeza ubushobozi bugarutse, no gufatirwa imodoka n'uruhushya.",
      en: "Drunk driving incurs strict penalties including 150,000 RWF fines, vehicle impoundment, detention, and license suspension.",
      fr: "La conduite en état d'ivresse entraîne de lourdes amendes financières, la mise en fourrière et la suspension du permis."
    },
    articleRef: "Art. 85"
  },
  {
    id: 50,
    category: 'penalties',
    question: {
      rw: "Kugenda mu modoka utambaye umukandara wo kurinda umutekano (Ceinture de sécurité) bihanishwa iki?",
      en: "Driving without wearing a safety seatbelt (Ceinture de sécurité) is subject to what penalty?",
      fr: "La conduite sans port de la ceinture de sécurité est passible de quelle sanction?"
    },
    options: {
      rw: [
        "Amande y'amafaranga yo mu rwego rw'amategeko y'umuhanda (10,000 RWF - 25,000 RWF)",
        "Gufungwa ubuzima bwose",
        "Kugurisha imodoka yawe",
        "Guterwa ibuye"
      ],
      en: [
        "Statutory traffic violation fine (10,000 RWF - 25,000 RWF)",
        "Life imprisonment",
        "Mandatory sale of vehicle",
        "No penalty"
      ],
      fr: [
        "Une amende forfaitaire contraventionnelle (10 000 - 25 000 RWF)",
        "La prison à perpétuité",
        "La vente forcée de la voiture",
        "Aucune amende"
      ]
    },
    correctIndex: 0,
    explanation: {
      rw: "Kutambara umukandara w'umutekano ku mushoferi n'umugenzi w'imbere (ndetse n'ab'inyuma aho biteganyijwe) bihanishwa amande y'amande y'amande y'amande.",
      en: "Failure to buckle up seatbelts for driver and passengers results in traffic infringement fines.",
      fr: "Le non-port de la ceinture de sécurité est puni d'une amende contraventionnelle."
    },
    articleRef: "Art. 52"
  }
];
