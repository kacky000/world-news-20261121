// The day's stories. Every one happened, or was first reported, on Saturday 21 November 2026 in some time zone.
// Each was checked against a dated report before it went in; "src" names who stands behind it.
// region: one of the seven in build.mjs · field: the beat · at: [longitude, latitude] for the map
// sure: CONFIRMED (two or more outlets) · OFFICIAL (the body itself) · REPORTED (one outlet) · CLAIM (one side) · FORECAST

export const DAY = { long: 'Saturday 21 November 2026', short: 'Saturday 21 November', weekday: 'Saturday' };

// The three leads: a picture, a headline, two lines of what happened.
export const LEADS = [
  {
    region: 'MIDDLE EAST', field: 'Yemen war', at: [46.7, 24.7],
    head: 'Houthis fire missiles at Riyadh after Saudi raid',
    deck: 'The coalition says it shot down three ballistic missiles; reporters heard blasts over the capital.',
    sure: 'CLAIM', src: 'COALITION · HOUTHIS · REUTERS',
    art: ['intercept', { label: 'RIYADH', label2: '3 MISSILES', tower: 0.3 }],
  },
  {
    region: 'EUROPE', field: 'Climate', at: [30.7, 36.9],
    head: 'COP31 runs into overtime with no deal on fossil fuels',
    deck: 'Nearly 200 countries stay on in Antalya past Friday’s deadline after a draft dropped every mention of fossil fuels.',
    sure: 'CONFIRMED', src: 'REUTERS · AFP · UN NEWS',
    art: ['talks', { label: 'COP31 · ANTALYA', label2: 'OVERTIME', clock: true }],
  },
  {
    region: 'N. AMERICA', field: 'Crime', at: [-107.4, 24.8],
    head: 'Mexico seizes FBI-listed cartel boss in Sinaloa',
    deck: 'Fausto Isidro Meza Flores, “El Chapo Isidro”, was caught with US intelligence help, officials said.',
    sure: 'CONFIRMED', src: 'MEXICO GOVT · AP · CBC',
    art: ['capitol', { label: 'SINALOA', bg: '#efe6d2' }],
  },
];

// Twelve cards: a small picture and a headline each.
export const CARDS = [
  {
    region: 'LATIN AMERICA', field: 'Earthquake', at: [-76.0, -10.9],
    head: 'M6.7 quake deep under Peru’s Andes; no deaths',
    sure: 'OFFICIAL', src: 'USGS · PERU',
    art: ['place', { label: 'CARHUAMAYO', big: 'M 6.7', small: '00:09 UTC', x: 0.24, land: '#d9cfae' }],
  },
  {
    region: 'ASIA', field: 'Earthquake', at: [127.5, -7.7],
    head: 'M6.8 quake off East Timor rattles Darwin',
    sure: 'OFFICIAL', src: 'USGS · ABC',
    art: ['place', { label: 'LOSPALOS', big: 'M 6.8', small: '09:42 UTC', x: 0.24, land: '#cfdcc0' }],
  },
  {
    region: 'AFRICA', field: 'Obituary', at: [28.0, -26.2],
    head: 'UN and African Union chiefs honour Mlambo-Ngcuka',
    sure: 'OFFICIAL', src: 'UN · AU',
    art: ['capitol', { label: 'PRETORIA', bg: '#e6ecdc' }],
  },
  {
    region: 'EUROPE', field: 'Ukraine war', at: [33.4, 47.9],
    head: 'Missile strike on Zelensky’s home city Kryvyi Rih',
    sure: 'OFFICIAL', src: 'OFFICIALS · AP',
    art: ['strike', { label: 'KRYVYI RIH', big: '60', small: 'HURT, 2 DEAD' }],
  },
  {
    region: 'EUROPE', field: 'Shipping', at: [27.0, 60.1],
    head: 'Drones hit Russia-bound cargo ship in Gulf of Finland',
    sure: 'OFFICIAL', src: 'FINLAND MOD',
    art: ['ship', { label: 'SPARTA II', label2: 'CREW OFF', smoke: true }],
  },
  {
    region: 'MIDDLE EAST', field: 'Shipping', at: [56.2, 26.6], nudge: [8, 4],
    head: 'Tanker hit by a projectile in the Strait of Hormuz',
    sure: 'OFFICIAL', src: 'UKMTO',
    art: ['ship', { label: 'OFF KHASAB', label2: 'STERN HIT', smoke: true }],
  },
  {
    region: 'MIDDLE EAST', field: 'Disaster', at: [47.8, 30.5], nudge: [6, 6],
    head: 'Fire at Basra power station kills at least four',
    sure: 'CONFIRMED', src: 'INA · REUTERS',
    art: ['fire', { label: 'BASRA', big: '4', small: 'DEAD, 30+ HURT' }],
  },
  {
    region: 'ASIA', field: 'Trade', at: [4.4, 50.8], nudge: [-8, -6],
    head: 'EU and Indonesia sign free-trade deal in Brussels',
    sure: 'CONFIRMED', src: 'CNA · EURONEWS',
    art: ['flags', { a: ['#003399'], b: ['#d7261e', '#fff'], label: 'BRUSSELS' }],
  },
  {
    region: 'LATIN AMERICA', field: 'Storm', at: [-53.8, -29.1],
    head: 'Supercell storm kills three in southern Brazil',
    sure: 'CONFIRMED', src: 'REUTERS',
    art: ['storm', { label: 'TUPANCIRETA', label2: '3 DEAD' }],
  },
  {
    region: 'EUROPE', field: 'Rugby', at: [-0.3, 51.5],
    head: 'England rout New Zealand 37-12, a record margin',
    sure: 'CONFIRMED', src: 'REUTERS',
    art: ['sport', { kind: 'rugby', big: '37-12', small: 'TWICKENHAM', label: 'ENG v NZ' }],
  },
  {
    region: 'OCEANIA', field: 'Cricket', at: [174.8, -41.3],
    head: 'Rahul 136, Gill 98: India lead NZ by 118 in Wellington',
    sure: 'CONFIRMED', src: 'REUTERS',
    art: ['sport', { kind: 'cricket', big: '486-4', small: 'INDIA, DAY 3', label: 'NZ v INDIA' }],
  },
  {
    region: 'OCEANIA', field: 'Cyclone', at: [-161.0, -10.0],
    head: 'Cook Islands ready relief ship as Cyclone Xavier weakens',
    sure: 'OFFICIAL', src: 'RNZ',
    art: ['cyclone', { label: 'COOK ISLANDS', label2: 'XAVIER' }],
  },
];

// Numbered briefs: place, then one line.
export const BRIEFS = [
  { region: 'MIDDLE EAST', field: 'Iran war', place: 'Bahrain', text: 'Iranian strike sets factory on fire', at: [50.6, 26.1] },
  { region: 'MIDDLE EAST', field: 'Air war', place: 'Iran', text: 'IRGC says it downed a US MQ-9 drone', at: [56.3, 27.2] },
  { region: 'MIDDLE EAST', field: 'Diplomacy', place: 'Tehran', text: 'Araqchi: still open to a deal on war', at: [51.4, 35.7] },
  { region: 'MIDDLE EAST', field: 'Gaza', place: 'Gaza', text: 'strike on aid vehicle kills three', at: [34.4, 31.4] },
  { region: 'LATIN AMERICA', field: 'Health', place: 'Brasília', text: 'Bolsonaro admitted to intensive care', at: [-47.9, -15.8] },
  { region: 'LATIN AMERICA', field: 'Flood', place: 'Galápagos', text: 'flash flood kills one, hits 2,000', at: [-90.3, -0.7] },
  { region: 'N. AMERICA', field: 'Defence', place: 'Pentagon', text: 'narrows military ties with Canada', at: [-77.0, 38.9] },
  { region: 'N. AMERICA', field: 'Cyber', place: 'US', text: 'FBI and farm agency hacked, media say', at: [-77.5, 39.5] },
  { region: 'N. AMERICA', field: 'Crypto', place: 'Bitcoin', text: 'two-year low, then back over $60,000', at: [-74.0, 40.7] },
  { region: 'N. AMERICA', field: 'Motor racing', place: 'Las Vegas', text: 'Verstappen on pole after Antonelli penalty', at: [-115.1, 36.2] },
  { region: 'EUROPE', field: 'Protest', place: 'Lisbon', text: 'thousands march over living costs', at: [-9.1, 38.7] },
  { region: 'EUROPE', field: 'Protest', place: 'France', text: 'sixth weekend of cost-of-living marches', at: [2.35, 48.9] },
  { region: 'EUROPE', field: 'EU budget', place: 'Brussels', text: 'Big Tech tax; Ukraine aid kept flat', at: [4.4, 50.8] },
  { region: 'EUROPE', field: 'Arms control', place: 'Geneva', text: 'killer-robot talks: 2 more years, no ban', at: [6.1, 46.2] },
  { region: 'EUROPE', field: 'Tennis', place: 'Turin', text: 'Alcaraz beats Shelton, into final', at: [7.7, 45.1] },
  { region: 'EUROPE', field: 'Football', place: 'England', text: 'leaders Arsenal held 2-2 at Newcastle', at: [-1.6, 55.0] },
  { region: 'EUROPE', field: 'Chess', place: 'FIDE', text: 'Carlsen sent to ethics panel', at: [19.0, 47.5] },
  { region: 'EUROPE', field: 'Business', place: 'Rome', text: 'jeweller Paolo Bulgari dies at 89', at: [12.5, 41.9] },
  { region: 'EUROPE', field: 'Injury', place: 'Bayern', text: 'Kane has ankle surgery, out for months', at: [11.6, 48.1] },
  { region: 'AFRICA', field: 'Rugby', place: 'Dublin', text: 'Ireland beat S. Africa 20-17; Boks in final', at: [18.4, -33.9] },
  { region: 'AFRICA', field: 'Football', place: 'CAF', text: 'Motsepe backs Infantino for FIFA again', at: [31.2, 30.0] },
  { region: 'ASIA', field: 'Security', place: 'Pakistan', text: '15 militants killed in Mastung, state media', at: [66.8, 29.8] },
  { region: 'ASIA', field: 'Energy', place: 'Pakistan', text: 'new prices: petrol Rs322, diesel Rs357', at: [73.0, 33.7] },
  { region: 'ASIA', field: 'Tech', place: 'India', text: 'Congress clashes with police at Meta', at: [77.2, 28.6] },
  { region: 'ASIA', field: 'Weather', place: 'Bengal', text: 'Akvan fades to a low; rain into Sunday', at: [88.4, 22.6] },
  { region: 'ASIA', field: 'North Korea', place: 'Pyongyang', text: 'Kim tours school-supply plants: KCNA', at: [125.7, 39.0] },
  { region: 'ASIA', field: 'Diplomacy', place: 'Beijing', text: 'Singapore’s Wong meets Li Qiang', at: [116.4, 39.9] },
  { region: 'ASIA', field: 'Education', place: 'Seoul', text: 'essay exams open; 111 caught cheating', at: [127.0, 37.5] },
  { region: 'ASIA', field: 'Aviation', place: 'Davao', text: 'Air Niugini jet lands safely, 146 aboard', at: [125.6, 7.1] },
  { region: 'OCEANIA', field: 'Weather', place: 'Tocumwal', text: 'lightning hurts four at music festival', at: [145.6, -35.8] },
  { region: 'OCEANIA', field: 'Cricket', place: 'Australia', text: 'board unanimously backs Cummins', at: [151.2, -33.9] },
  { region: 'OCEANIA', field: 'T20', place: 'Australia', text: 'beat England in thriller to end streak', at: [153.0, -27.5] },
  { region: 'OCEANIA', field: 'AFLW', place: 'Melbourne', text: 'beat Carlton to reach grand final', at: [144.9, -37.8] },
  { region: 'OCEANIA', field: 'Consumers', place: 'Canberra', text: 'to review laws for AI shopping agents', at: [149.1, -35.3] },
];

// The day by the clock, in UTC. Only events whose time is on record.
export const CLOCK = [
  { t: '00:09', label: 'M6.7 quake, Peru', anchor: 'start', dx: -6 },
  { t: '04:13', label: 'Bitcoin at 2-year low' },
  { t: '09:42', label: 'M6.8 quake, E. Timor' },
  { t: '15:16', label: 'Bitcoin back over $60k' },
];

// Left out on purpose: big stories that broke before Saturday, with the day they belong to.
export const OLDER = [
  { what: 'Trump–Xi–Putin summit and declaration', when: 'Thu 19 Nov' },
  { what: 'ICJ rules Myanmar committed genocide', when: 'Thu 19 Nov' },
  { what: 'Russian missiles fall inside Poland', when: 'Fri 20 Nov' },
  { what: 'UK and EU sign post-Brexit reset deal', when: 'Fri 20 Nov' },
  { what: 'Nigeria funeral boat capsizes, 4 dead', when: 'Fri 20 Nov' },
  { what: 'Mlambo-Ngcuka’s death announced', when: 'Fri 20 Nov' },
];
export const NOT_YET = 'Las Vegas GP, ATP final (Sun 22).';

export const SOURCES = 'Reuters, AP, AFP, Al Jazeera, CNA, CBC, ABC, RNZ, UN, USGS';
