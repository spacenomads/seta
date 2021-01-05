const NEWLINE = '\n';
//const NEWLINE = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
const YEAR = new Date().getFullYear();
const TZID = 'Europe/Madrid';
const CALENDARFILENAME = 'calendario-seta';
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
	'diciembre': '12',
};

export {NEWLINE, YEAR, MONTHS, TZID, CALENDARFILENAME};
