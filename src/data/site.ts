// Sentral informasjon om virksomheten. Feltene merket TODO må fylles inn før lansering.
export const site = {
  name: 'BoligButler',
  url: 'https://www.boligbutler.no',
  tagline: 'Veiledning og utstyr til ditt prosjekt',
  vision: 'BoligButler skal gjøre det enklere og tryggere å lykkes med prosjekter på kundens egen eiendom.',
  description:
    'BoligButler leier ut utstyr med en erfaren rådgiver på kjøpet, for deg som vil gjøre drenering, terrasse, plen, maling og gravearbeid selv. Levering i hele Vestfold.',
  legalName: 'Boligbutler Eri',
  phone: '+4791800200',
  phoneDisplay: '918 00 200',
  email: 'erling@boligbutler.no',
  orgnr: '934 181 549',
  address: { street: 'Mullers gate 8', postalCode: '3181', city: 'Horten', region: 'Vestfold' },
  region: 'Vestfold',
  // Kommunene i Vestfold fylke (2024), nord til sør
  areas: ['Holmestrand', 'Horten', 'Tønsberg', 'Færder', 'Sandefjord', 'Larvik'],
  founder: { name: 'Erling Eri', role: 'Grunnlegger og rådgiver' },
};

// Det som alltid følger med når du leier, og hjelp kunden kan legge til etter behov.
export const included = [
  'Utstyret levert og hentet hjemme hos deg',
  'Innføring i trygg bruk før du starter',
  'Prosjektkasse med måleutstyr, oppmerking, verneutstyr og småverktøy',
  'Sjekklistene «Før du starter» og «Før du leverer tilbake»',
  'Noen å ringe når du lurer på noe',
];

export const extras = [
  { short: 'Befaring før oppstart', text: 'Befaring før oppstart, der dere ser på tilkomst, grunn og hvor vannet skal' },
  { short: 'Plan for rekkefølge og masser', text: 'Plan for rekkefølge, masser og bortkjøring' },
  { short: 'Hjelp på stedet', text: 'BoligButler på stedet når det gjelder mest, for eksempel ved utsetting av fall og fundament' },
  { short: 'Praktisk bistand', text: 'Praktisk bistand der det er tryggere eller raskere at en erfaren gjør jobben' },
  { short: 'Bestilling av masser', text: 'Bestilling av masser og bortkjøring' },
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
