export interface TrafficSign {
  id: string;
  name: { rw: string; en: string; fr: string };
  category: 'danger' | 'prohibition' | 'obligation' | 'indication' | 'priority';
  shape: 'triangle' | 'circle_red' | 'circle_blue' | 'square_blue' | 'diamond' | 'octagon';
  symbol: string; // descriptive text or icon identifier
  description: { rw: string; en: string; fr: string };
}

export const TRAFFIC_SIGNS_DATA: TrafficSign[] = [
  {
    id: 'sign-stop',
    name: { rw: 'Hagarara (STOP)', en: 'Stop Sign', fr: 'Arrêt obligatoire (STOP)' },
    category: 'priority',
    shape: 'octagon',
    symbol: 'STOP',
    description: {
      rw: 'Guhagarara burundu ku murongo w\'amasangano no guha inzira ibinyabiziga byose',
      en: 'Complete stop at the line and yield to all cross-traffic before proceeding',
      fr: 'Arrêt absolu obligatoire à la ligne et priorité à tous les usagers'
    }
  },
  {
    id: 'sign-give-way',
    name: { rw: 'Tanga Inzira (Cédez le passage)', en: 'Give Way / Yield', fr: 'Cédez le passage' },
    category: 'priority',
    shape: 'triangle',
    symbol: '▽',
    description: {
      rw: 'Kugabanya umuvuduko no guha inzira ibinyabiziga biri mu muhanda ukomeye',
      en: 'Slow down and yield right of way to vehicles on the priority road',
      fr: 'Ralentir et céder le passage aux usagers circulant sur la voie prioritaire'
    }
  },
  {
    id: 'sign-priority-road',
    name: { rw: 'Umuhanda Ufite Uburenganzira', en: 'Priority Road', fr: 'Route à priorité' },
    category: 'priority',
    shape: 'diamond',
    symbol: '◆',
    description: {
      rw: 'Ufite uburenganzira bwo gutambuka mbere mu masangano yose ari imbere',
      en: 'You have continuous right of way through upcoming intersections',
      fr: 'Priorité de passage accordée à toutes les intersections suivantes'
    }
  },
  {
    id: 'sign-speed-40',
    name: { rw: 'Umuvuduko Ntarengwa 40', en: 'Speed Limit 40 km/h', fr: 'Vitesse maximale 40' },
    category: 'prohibition',
    shape: 'circle_red',
    symbol: '40',
    description: {
      rw: 'Umuvuduko ntarengwa wemewe mu mujyi cyangwa mu nsisiro',
      en: 'Maximum permissible speed of 40 km/h in urban zone',
      fr: 'Vitesse maximale autorisée de 40 km/h en agglomération'
    }
  },
  {
    id: 'sign-speed-60',
    name: { rw: 'Umuvuduko Ntarengwa 60', en: 'Speed Limit 60 km/h', fr: 'Vitesse maximale 60' },
    category: 'prohibition',
    shape: 'circle_red',
    symbol: '60',
    description: {
      rw: 'Umuvuduko ntarengwa wemewe ku binyabiziga bitwara abagenzi',
      en: 'Maximum speed limit of 60 km/h for public transport vehicles',
      fr: 'Vitesse maximale de 60 km/h pour véhicules de transport'
    }
  },
  {
    id: 'sign-speed-80',
    name: { rw: 'Umuvuduko Ntarengwa 80', en: 'Speed Limit 80 km/h', fr: 'Vitesse maximale 80' },
    category: 'prohibition',
    shape: 'circle_red',
    symbol: '80',
    description: {
      rw: 'Umuvuduko ntarengwa ku modoka nto hanze y\'insisiro',
      en: 'Maximum speed limit of 80 km/h for cars outside built-up areas',
      fr: 'Vitesse maximale de 80 km/h pour voitures hors agglomération'
    }
  },
  {
    id: 'sign-no-entry',
    name: { rw: 'Sens Interdit / Nta Kwinjira', en: 'No Entry', fr: 'Sens interdit' },
    category: 'prohibition',
    shape: 'circle_red',
    symbol: '⛔',
    description: {
      rw: 'Birabujijwe kwinjira muri uyu muhanda ku baturuka muri iki cyerekezo',
      en: 'Prohibited to enter from this direction (One-way opposing traffic)',
      fr: 'Interdiction formelle d\'accéder à la chaussée dans ce sens'
    }
  },
  {
    id: 'sign-no-overtaking',
    name: { rw: 'Birabujijwe Kunyuranaho', en: 'No Overtaking', fr: 'Interdiction de dépasser' },
    category: 'prohibition',
    shape: 'circle_red',
    symbol: '🚗🚗',
    description: {
      rw: 'Birabujijwe ku binyabiziga bya moteri kunyurana ku bindi bifite ibiziga birenze 2',
      en: 'No motor vehicle may pass or overtake four-wheeled vehicles',
      fr: 'Interdiction de dépasser les véhicules à moteur à plus de deux roues'
    }
  },
  {
    id: 'sign-no-parking',
    name: { rw: 'Birabujijwe Guparika', en: 'No Parking', fr: 'Stationnement interdit' },
    category: 'prohibition',
    shape: 'circle_red',
    symbol: '⊘ P',
    description: {
      rw: 'Birabujijwe guhagarara akanya karekire (guparika), ariko guhagarara gato byemewe',
      en: 'Extended parking is prohibited; brief stopping for passenger drop-off is allowed',
      fr: 'Stationnement interdit; arrêt court toléré pour chargement'
    }
  },
  {
    id: 'sign-no-stopping',
    name: { rw: 'Birabujijwe Guhagarara Hose', en: 'No Stopping & No Parking', fr: 'Arrêt et stationnement interdits' },
    category: 'prohibition',
    shape: 'circle_red',
    symbol: '✕',
    description: {
      rw: 'Birabujijwe guhagarara akanya gato n\'akanya karekire',
      en: 'Both stopping and parking are strictly forbidden at all times',
      fr: 'Arrêt et stationnement strictement interdits en tout temps'
    }
  },
  {
    id: 'sign-roundabout',
    name: { rw: 'Amasangano Azenguruka (Rond-point)', en: 'Mandatory Roundabout', fr: 'Sens giratoire obligatoire' },
    category: 'obligation',
    shape: 'circle_blue',
    symbol: '🔄',
    description: {
      rw: 'Gukurikiza icyerekezo cy\'amasangano azenguruka; guha inzira abari muri rond-point',
      en: 'Mandatory circular flow; yield right of way to vehicles inside the roundabout',
      fr: 'Sens giratoire obligatoire avec priorité aux usagers engagés'
    }
  },
  {
    id: 'sign-pedestrian-crossing',
    name: { rw: 'Inzira y\'Abanyamaguru', en: 'Pedestrian Crossing', fr: 'Passage pour piétons' },
    category: 'indication',
    shape: 'square_blue',
    symbol: '🚶',
    description: {
      rw: 'Aho abanyamaguru bambukira bafite uburenganzira busesuye bwo gutambuka',
      en: 'Designated zebra crossing where pedestrians have absolute priority',
      fr: 'Passage piétons protégé avec priorité absolue aux personnes engagées'
    }
  }
];
