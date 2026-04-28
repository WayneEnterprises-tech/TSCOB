export type Termin = {
  date: string
  title: string
}

export type Heimspiel = {
  date: string
  team: string
  time: string
}

export type BoardMember = {
  name: string
  role: string
  email: string
}

export type Trainer = {
  name: string
}

export type Team = {
  name: string
  leader: string
  email: string
  ligaUrl: string
}

export type DownloadItem = {
  title: string
  href: string
  description: string
}

export type NavLink = {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Startseite', href: '/' },
  { label: 'Unser Club', href: '/unser-club' },
  { label: 'Mannschaften', href: '/mannschaften' },
  { label: 'Informationen', href: '/informationen' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const TERMINE: Termin[] = [
  { date: '25.04.2026', title: 'Platzaufbau Arbeitseinsatz' },
  { date: '26.04.2026', title: 'Platzeröffnung' },
  { date: '12.06.2026', title: 'Jahreshauptversammlung' },
  { date: '11.07.2026', title: 'Tie-Break Champion Event' },
  { date: '18.07.2026', title: 'LK-Tagesturnier W/M 00/40' },
  { date: '19.07.2026', title: 'LK-Tagesturnier W/M Doppel / Mixed' },
  { date: '05.09.2026', title: 'Sommerfest + Finalspiele Clubmeister' },
]

export const HEIMSPIELE: Heimspiel[] = [
  { date: '03.05.2026', team: 'Herren 30', time: '09:00 Uhr' },
  { date: '04.05.2026', team: 'Juniorinnen U12', time: '16:00 Uhr' },
  { date: '05.05.2026', team: 'Juniorinnen U18 (2)', time: '16:00 Uhr' },
  { date: '09.05.2026', team: 'Herren 50 (2)', time: '14:00 Uhr' },
  { date: '10.05.2026', team: 'Damen (1)', time: '09:00 Uhr' },
  { date: '19.05.2026', team: 'Juniorinnen U18 (2)', time: '16:00 Uhr' },
  { date: '23.05.2026', team: 'Juniorinnen U18 (1)', time: '10:00 Uhr' },
  { date: '30.05.2026', team: 'Herren 50 (1) + (2)', time: '14:00 Uhr' },
  { date: '31.05.2026', team: 'Damen (1) + (2)', time: '10:00 Uhr' },
]

export const BOARD_MEMBERS: BoardMember[] = [
  { name: 'Jörg Vogt', role: 'Präsident / 1. Vorsitzender', email: 'joerg.32547@web.de' },
  { name: 'Thomas Sunderbrink', role: '2. Vorsitzender', email: 't.sunderbrink@web.de' },
  { name: 'Dilip Seuster-Thomas', role: 'Sportwart', email: 'd.seuster-thomas@web.de' },
  { name: 'Barbara Graf', role: 'Kassenwartin', email: 'kassenwart-tscob@gmx.de' },
  { name: 'Barbara Herbeck', role: 'Schriftführerin', email: 'b.herbeck@mail.de' },
  { name: 'Sophie Zimmermann', role: 'Presse und Web', email: 'sosozimbo@gmail.com' },
  { name: 'Michael Möller', role: 'Jugendwart', email: 'm.moeller1@web.de' },
  { name: 'Corinna Danch', role: 'Festwartin', email: 'c.danch@icloud.com' },
  { name: 'Maximilian Menzel', role: '1. Technischer Leiter', email: 'maxi@menzelc.de' },
]

export const TRAINER: Trainer[] = [
  { name: 'Volker Wenzel' },
  { name: 'Bodo Bernhard' },
]

export const TEAMS: Team[] = [
  {
    name: 'Herren 30',
    leader: 'Patrick Martini',
    email: 'patrick.martini@outlook.de',
    ligaUrl: 'https://wtv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/groupPage?championship=OW+2025&group=43',
  },
  {
    name: '1. Damen 4er',
    leader: 'Nina Timmerberg',
    email: 'Nina-Ti@gmx.de',
    ligaUrl: 'https://wtv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/groupPage?championship=OW+2025&group=133',
  },
  {
    name: 'Herren 50',
    leader: 'Hagen Martini',
    email: 'h.martini@vis-makler.de',
    ligaUrl: 'https://wtv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/groupPage?championship=OW+2025&group=75',
  },
  {
    name: 'Herren 50 (2) 4er',
    leader: 'Frank Giesen',
    email: 'fgiesen@hotmail.com',
    ligaUrl: 'https://wtv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/groupPage?championship=OW+2025&group=90',
  },
  {
    name: 'Juniorinnen U18 (1) 4er',
    leader: 'Marina Fröse',
    email: 'mfroese100@gmail.com',
    ligaUrl: 'https://wtv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/groupPage?championship=OW+2025&group=365',
  },
  {
    name: 'Juniorinnen U18 (2) 4er',
    leader: 'Anabel Fröse',
    email: 'mfroese100@gmail.com',
    ligaUrl: 'https://wtv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/groupPage?championship=OW+2025&group=371',
  },
  {
    name: 'Juniorinnen U12 2er',
    leader: 'Ines Menzel',
    email: 'sylwester-ines@gmx.de',
    ligaUrl: 'https://wtv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/groupPage?championship=OW+2025&group=415',
  },
  {
    name: 'Gemischte Mannschaft',
    leader: 'Dilip Seuster-Thomas',
    email: 'd.seuster-thomas@web.de',
    ligaUrl: 'https://wtv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/groupPage?championship=OW+2025&group=222',
  },
]

export const DOWNLOADS: DownloadItem[] = [
  {
    title: 'Vereinssatzung',
    href: '/downloads/vereinssatzung.pdf',
    description: 'Die Satzung des Tennis-Sport-Club Oberbecksen e.V.',
  },
  {
    title: 'Platzregeln',
    href: '/downloads/platzregeln.pdf',
    description: 'Regeln für die Nutzung unserer Tennisanlage.',
  },
  {
    title: 'Beitrittserklärung',
    href: '/downloads/beitrittserklaerung.pdf',
    description: 'Formular für neue Mitglieder zum Vereinsbeitritt.',
  },
  {
    title: 'Datenschutzerklärung',
    href: '/downloads/datenschutzerklaerung.pdf',
    description: 'Unsere Datenschutzerklärung gemäß DSGVO.',
  },
]

export const CONTACT = {
  clubName: 'Tennis-Sport-Club Oberbecksen-Bad Oeynhausen e.V.',
  address: 'Lienweg 29',
  city: '32547 Bad Oeynhausen',
  email: 'TSCOB@gmx.de',
  phone: '05731 20644',
  instagram: 'https://www.instagram.com/tscob_tennis/',
}
