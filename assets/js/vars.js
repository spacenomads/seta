const NEWLINE = '\n';
//const NEWLINE = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
const YEAR = new Date().getFullYear();
const TZID = 'Europe/Madrid';
const TSTART = 'T213000';
const TEND = 'T230000';
const ALARM = '15';
const CALENDARFILENAME = 'videoclub-de-lectura';
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
const SENTENCE = /(["'])(?:(?=(\\?))\2.)*?\1/g;

const SAMPLECONTENT = {
	solo: `Enero: 4 "Enola Holmes", 7 "Dash y Lily", 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith".`,
	mixed: `Enero: 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith". Febrero: 2 "She Loves Me", 4 "Isla", 9 "Guía del caballero para el vicio y la virtud", 11 "Parabellum", 16 "Destellos",  18 "Y no quedó ninguno", 23 "La última mujer de La Mancha", 25 "El Vizconde que me amó"
	.`
}

export {NEWLINE, YEAR, MONTHS, TSTART, TEND, TZID, CALENDARFILENAME, SENTENCE, WEEK, ALARM, SAMPLECONTENT};
