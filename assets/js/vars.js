const NEWLINE = '\n';
//const NEWLINE = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
const YEAR = new Date().getFullYear();
const TZID = 'Europe/Madrid';
const TSTART = 'T213000';
const TEND = 'T230000';
const ALARM = '15';
const CALENDARFILENAME = 'seta';
const SAVEDNAME = 'setaData';
const WEEK = [
	'domingo',
	'lunes',
	'martes',
	'miércoles',
	'jueves',
	'viernes',
	'sábado'
];
const MONTHS = [
	'enero',
	'febrero',
	'marzo',
	'abril',
	'mayo',
	'junio',
	'julio',
	'agosto',
	'septiembre',
	'octubre',
	'noviembre',
	'diciembre'
];

const MONTH_DIVIDER_CHAR = '|';
const EVENTS_DIVIDER_CHAR = 'ø';
const MONTH_REGEX = /\.(?=(?:[^"]*"[^"]*")*[^"]*$)/g;
const EVENTS_REGEX = /,| y (?=(?:[^"]*"[^"]*")*[^"]*$)/g;
//const SINGLE_EVENT_REGEX = /(?<day>[0-9].+)("(?<title>[a-zA-Z].+)")(?<guest>[ con ][a-zA-Z].+)?/;
const SINGLE_EVENT_DAY_REGEX = /[0-9]*/;
const SINGLE_EVENT_TITLE_REGEX = /"+(?<title>[a-zA-Z].+)"/;
// const SINGLE_EVENT_REGEX = /(?<day>[0-9]*)+[ ]+("(?<title>[a-zA-Z].+)")(?<guest>[ con ][a-zA-Z].+)?/;
const SENTENCE = /(["'])(?:(?=(\\?))\2.)*?\1/g;

const SAMPLECONTENT = {
	solo: 'Enero: 4 "Enola Holmes", 7 "Dash y Lily", 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith"',
	mixed: 'Enero: 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith". Febrero: 2 "She Loves Me", 4 "Isla", 9 "Guía del caballero para el vicio y la virtud", 11 "Parabellum", 16 "Destellos",  18 "Y no quedó ninguno", 23 "La última mujer de La Mancha", 25 "El Vizconde que me amó".',
	last: `🍁Noviembre: 18 "Matemos al tío", 22 Taylor Swfit No Bufandas Secret Club, 23 "Dear Evan Hansen" "Grease", 25 "Condición artificial" (MataBot 2 con Carla), 30 "Los muertos no pagan IVA"  (Parabellum 2 con Sergio)
🎄Diciembre: 2 "Emprendadas" (Con La Crono), 7 "Orgullo y prejuicio y zombies", 9 "Agatha Raisin y el veterinario cruel", 14 "Nimona", 16 "Todo Dinokid" con presencia de su amado autor, 21 "Anna and the apocalypse" (musical), 23 "Harrow La novena", 28 "Matilda", 30 "Así se pierde la guerra del tiempo", Club de Clubes 🍄
❄️Enero: 4 "Brujerías", 6 Musical "Lady Di", 11 "Los escarabajos vuelan al atardecer", 13 "El club de los libros prohibidos", 18 "Guía de lectura para matar vampiros", 20 "¡Prepárate!", 25 "Pastelería americana" 🧁, 27 "Confesiones".`,
};

export {
	NEWLINE,
	YEAR,
	MONTHS,
	TSTART,
	TEND,
	TZID,
	CALENDARFILENAME,
	SENTENCE,
	MONTH_DIVIDER_CHAR,
	EVENTS_DIVIDER_CHAR,
	MONTH_REGEX,
	EVENTS_REGEX,
	SINGLE_EVENT_DAY_REGEX,
	SINGLE_EVENT_TITLE_REGEX,
	WEEK,
	ALARM,
	SAMPLECONTENT,
	SAVEDNAME
};
