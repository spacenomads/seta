const NEWLINE = '\n';
//const NEWLINE = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
const YEAR = new Date().getFullYear();
const TZID = 'Europe/Madrid';
const TSTART = 'T213000';
const TEND = 'T230000';
const CALENDARFILENAME = 'videoclub-de-lectura';
const MONTHS = {
	'enero': '01',
	'febrero': '02',
	'marzo': '03',
	'abril': '04',
	'mayo': '05',
	'junio': '06',
	'julio': '07',
	'agosto': '08',
	'septiembre': '09',
	'octubre': '10',
	'noviembre': '11',
	'diciembre': '12'
};
const SENTENCE = /(["'])(?:(?=(\\?))\2.)*?\1/g;

export {NEWLINE, YEAR, MONTHS, TSTART, TEND, TZID, CALENDARFILENAME, SENTENCE};
