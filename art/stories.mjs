// The day's stories. Every one happened, or was first reported, on Saturday 21 November 2026 in some time zone.
// Each was checked against a dated report before it went in; "src" names who stands behind it.
// region: one of the seven in build.mjs · field: the beat · at: [longitude, latitude] for the map
// sure: CONFIRMED (two or more outlets) · OFFICIAL (the body itself) · REPORTED (one outlet) · CLAIM (one side) · FORECAST

export const DAY = { long: 'Saturday 21 November 2026', short: 'Saturday 21 November', weekday: 'Saturday' };

// The three leads: a picture, a headline, two lines of what happened.
export const LEADS = [
  {
    region: 'MIDDLE EAST', field: 'Yemen war', at: [46.7, 24.7],
    head: 'Saudis down three Houthi missiles over Riyadh',
    deck: 'Sirens sounded for a third night. The Saudi-led coalition says it destroyed three ballistic missiles; reporters heard blasts.',
    sure: 'CLAIM', src: 'COALITION · REUTERS, AFP',
    art: ['intercept', { label: 'RIYADH · BEFORE DAWN', label2: '3 MISSILES', tower: 0.3 }],
  },
  {
    region: 'EUROPE', field: 'Climate', at: [30.7, 36.9],
    head: 'COP31 runs into overtime with no deal on fossil fuels',
    deck: 'Nearly 200 countries stay on in Antalya past Friday’s deadline; Türkiye’s presidency promises a third draft text.',
    sure: 'CONFIRMED', src: 'REUTERS · AFP · AL JAZEERA',
    art: ['talks', { label: 'COP31 · ANTALYA', label2: 'OVERTIME', clock: true }],
  },
  {
    region: 'LATIN AMERICA', field: 'Earthquake', at: [-76.0, -11.0], nudge: [0, 0],
    head: 'Magnitude 6.9 earthquake shakes Peru’s central Andes',
    deck: 'It struck 34 km north of Junín, 108 km deep, at 00:09 UTC and was felt in Lima. No deaths or damage were reported.',
    sure: 'OFFICIAL', src: 'USGS · IGP PERU',
    art: ['place', { label: 'JUNIN, PERU', big: 'M 6.9', small: '108 KM DEEP', x: 0.24, land: '#d9cfae' }],
  },
];

// Twelve cards: a small picture and a headline each.
export const CARDS = [
  {
    region: 'ASIA', field: 'Aviation', at: [125.6, 7.1],
    head: 'Air Niugini jet lands safely in Davao after engine-fire alert',
    sure: 'OFFICIAL', src: 'CAAP',
    art: ['plane', { label: 'DAVAO', big: '146', small: 'ALL SAFE' }],
  },
  {
    region: 'ASIA', field: 'North Korea', at: [125.7, 39.0], nudge: [-2, -8],
    head: 'Kim Jong Un tours school-supply plants, state media reports',
    sure: 'CLAIM', src: 'KCNA',
    art: ['capitol', { label: 'PYONGYANG', bg: '#f1e4e2' }],
  },
  {
    region: 'ASIA', field: 'Law', at: [105.8, 21.0], nudge: [-6, 4],
    head: 'Vietnam’s parliament passes faster land-seizure law',
    sure: 'CONFIRMED', src: 'REUTERS',
    art: ['vote', { label: 'HANOI', bg: '#f6e3e0' }],
  },
  {
    region: 'ASIA', field: 'Diplomacy', at: [116.4, 39.9], nudge: [-9, 2],
    head: 'Singapore’s Wong meets China’s Li Qiang in Beijing',
    sure: 'CONFIRMED', src: 'STRAITS TIMES',
    art: ['flags', { a: ['#d7261e', '#fff'], b: ['#d7261e'], label: 'BEIJING' }],
  },
  {
    region: 'OCEANIA', field: 'Cricket', at: [174.8, -41.3],
    head: 'Rahul’s century takes India to 344-2 at tea in Wellington',
    sure: 'CONFIRMED', src: 'REUTERS',
    art: ['sport', { kind: 'cricket', big: '344-2', small: 'INDIA AT TEA', label: 'NZ v INDIA' }],
  },
  {
    region: 'OCEANIA', field: 'Weather', at: [145.6, -35.8], nudge: [-6, 0],
    head: 'Lightning strikes four at Australian music festival',
    sure: 'CONFIRMED', src: 'ABC',
    art: ['storm', { label: 'TOCUMWAL, NSW', label2: '4 HURT' }],
  },
  {
    region: 'LATIN AMERICA', field: 'Flood', at: [-90.3, -0.7],
    head: 'Flash flood on Galápagos island kills one, affects 2,000',
    sure: 'REPORTED', src: 'MERCOPRESS',
    art: ['ship', { label: 'SANTA CRUZ', label2: '1 DEAD', people: false, hull: '#5b6b7a' }],
  },
  {
    region: 'OCEANIA', field: 'Cyclone', at: [-161.0, -10.0],
    head: 'Cook Islands ready relief ship as Cyclone Xavier weakens',
    sure: 'OFFICIAL', src: 'RNZ',
    art: ['cyclone', { label: 'COOK ISLANDS', label2: 'XAVIER' }],
  },
  {
    region: 'OCEANIA', field: 'Election', at: [145.0, -37.8], nudge: [8, 6],
    head: 'Victoria’s leaders start final week before 28 Nov vote',
    sure: 'CONFIRMED', src: 'ABC',
    art: ['vote', { label: 'VICTORIA', big: '7', small: 'DAYS TO GO' }],
  },
  {
    region: 'N. AMERICA', field: 'Motor racing', at: [-115.1, 36.2],
    head: 'Las Vegas Grand Prix: Russell fastest in final practice',
    sure: 'CONFIRMED', src: 'REUTERS',
    art: ['sport', { kind: 'car', bg: '#2a2140', big: 'P1', small: 'RUSSELL', label: 'LAS VEGAS' }],
  },
  {
    region: 'MIDDLE EAST', field: 'Iran war', at: [51.4, 35.7],
    head: 'Iran still wants a deal to end the war, Araqchi tells daily',
    sure: 'CLAIM', src: 'IRAN DAILY · REUTERS',
    art: ['flags', { a: ['#239f40', '#fff', '#da0000'], b: ['#b22234', '#fff', '#3c3b6e'], label: 'TEHRAN', rift: true }],
  },
  {
    region: 'ASIA', field: 'Education', at: [127.0, 37.5], nudge: [8, 0],
    head: 'South Korea’s university essay tests begin under cheating cloud',
    sure: 'REPORTED', src: 'SBS',
    art: ['number', { label: 'SEOUL', big: '111', small: 'CAUGHT CHEATING', bg: '#eee7f5' }],
  },
];

// Numbered briefs: place, then one line.
export const BRIEFS = [
  { region: 'OCEANIA', field: 'Sport', place: 'Australia', text: 'Hazlewood backs Cummins, denies "Sandpapergate" knowledge', at: [151.2, -33.9] },
  { region: 'ASIA', field: 'Energy', place: 'Pakistan', text: 'new fuel prices in force: petrol Rs322, diesel Rs357', at: [73.0, 33.7] },
  { region: 'ASIA', field: 'Media', place: 'North Korea', text: 'KCNA silent on Trump, who left Asia without meeting Kim', at: [125.7, 39.0] },
];

// The day by the clock, in UTC. Only events whose time is on record.
export const CLOCK = [
  { t: '00:09', label: 'M6.9 quake, Peru', anchor: 'start', dx: -6 },
];

// Left out on purpose: big stories that broke before Saturday, with the day they belong to.
export const OLDER = [
  { what: 'Trump–Xi–Putin summit and declaration', when: 'Thu 19 Nov' },
  { what: 'ICJ rules Myanmar committed genocide', when: 'Thu 19 Nov' },
  { what: 'Russian missiles fall inside Poland', when: 'Fri 20 Nov' },
  { what: 'UK and EU sign post-Brexit reset deal', when: 'Fri 20 Nov' },
  { what: 'Cyclone Akvan lands in Odisha', when: 'Fri 20 Nov' },
  { what: 'Wall Street’s AI sell-off after Anthropic debut', when: 'Fri 20 Nov' },
];
export const NOT_YET = 'Victoria’s state election (Sat 28 Nov).';

export const SOURCES = 'Reuters, AP, AFP, Al Jazeera, CNA, ABC, RNZ, Straits Times, USGS';
