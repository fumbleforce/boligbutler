// Sentral informasjon om virksomheten. Feltene merket TODO må fylles inn før lansering.
export const site = {
  name: 'BoligButler',
  url: 'https://www.boligbutler.no',
  tagline: 'Prosjektet er ditt. BoligButler sørger for at det går.',
  vision: 'BoligButler skal gjøre det enklere og tryggere å lykkes med prosjekter på kundens egen eiendom.',
  description:
    'BoligButler leier ut utstyr med en erfaren rådgiver på kjøpet, for deg som vil gjøre drenering, terrasse, plen, maling og gravearbeid selv. Levering i hele Vestfold.',
  legalName: 'Boligbutler Eri',
  phone: '+4791800200',
  phoneDisplay: '918 00 200',
  email: 'post@boligbutler.no', // TODO
  orgnr: '934 181 549',
  address: { street: 'Mullers gate 8', postalCode: '3181', city: 'Horten', region: 'Vestfold' },
  region: 'Vestfold',
  // Kommunene i Vestfold fylke (2024), nord til sør
  areas: ['Holmestrand', 'Horten', 'Tønsberg', 'Færder', 'Sandefjord', 'Larvik'],
  founder: { name: 'Erling Eri', role: 'Grunnlegger og rådgiver' },
};

// Sett til true når eier har bekreftet innholdet i oppsettene. Da fremheves «Prosjekt».
export const packagesConfirmed = false;

export const packages = [
  {
    name: 'Basis',
    for: 'Du vet hva du skal gjøre og trenger riktig utstyr.',
    items: [
      'Utstyret levert og hentet hjemme hos deg',
      'Innføring i bruk ved levering',
      'Standard prosjektkasse: måling, oppmerking, verneutstyr og småverktøy',
      'Sjekklistene «Før du starter» og «Før du leverer tilbake»',
      'Telefon når du lurer på noe',
    ],
  },
  {
    name: 'Prosjekt',
    for: 'Du vil gjøre jobben selv, men ha en plan som holder.',
    featured: true,
    items: [
      'Alt i Basis',
      'Befaring før oppstart',
      'Plan for rekkefølge, masser og bortkjøring',
      'Prosjektspesifikk tilleggskasse',
      'Utstyret samkjørt, så maskinene står der når du trenger dem',
    ],
  },
  {
    name: 'Pluss',
    for: 'Du gjør mesteparten, men vil ha hjelp i de kritiske fasene.',
    items: [
      'Alt i Prosjekt',
      'BoligButler på stedet når det gjelder mest, for eksempel ved utsetting av fall eller fundament',
      'Praktisk bistand der det er tryggere eller raskere',
      'Bestilling av masser og bortkjøring',
    ],
  },
];

export const standardKit = [
  { group: 'Måling', items: ['Målebånd 5 m og 30 m', 'Tommestokk', 'Krittsnor', 'Merkeblyant og tømrerblyant'] },
  { group: 'Oppmerking', items: ['Merkespray, oransje og hvit', 'Markeringspinner og treplugger', 'Snor og strips'] },
  { group: 'Kontroll', items: ['Vater', 'Vinkelhake', 'Laserbriller', 'Reservebatterier'] },
  { group: 'Verneutstyr', items: ['Vernebriller', 'Ørepropper', 'Arbeidshansker', 'Førstehjelpspakke'] },
  { group: 'Småverktøy', items: ['Hammer og brekkjern', 'Kniv med ekstra blad', 'Skiftenøkkel og tang', 'Skrutrekkere og umbraco'] },
  { group: 'Strøm og sikring', items: ['Skjøteledning 25 m', 'Arbeidslampe', 'Presenning', 'Lastestropper'] },
];

export const beforeStart = [
  'Er kabler og rør påvist?',
  'Har du bestilt massene?',
  'Har du tenkt på bortkjøring?',
  'Er det nok drivstoff?',
  'Har du lest brukerveiledningen?',
  'Har du riktig verneutstyr?',
  'Er arbeidsområdet sikret?',
];

export const beforeReturn = ['Vask maskinen', 'Fyll drivstoff', 'Se etter skader', 'Lever alt tilbehør'];
