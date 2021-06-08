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
const EVENTS_REGEX = /,|y(?=(?:[^"]*"[^"]*")*[^"]*$)/g;

//const SINGLE_EVENT_REGEX = /(?<day>[0-9].+)("(?<title>[a-zA-Z].+)")(?<guest>[ con ][a-zA-Z].+)?/;
const SINGLE_EVENT_REGEX = /(?<day>[0-9]*)+[ ]+("(?<title>[a-zA-Z].+)")(?<guest>[ con ][a-zA-Z].+)?/;
const SENTENCE = /(["'])(?:(?=(\\?))\2.)*?\1/g;

const SAMPLECONTENT = {
	solo: `Enero: 4 "Enola Holmes", 7 "Dash y Lily", 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith".`,
	mixed: `Enero: 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith". Febrero: 2 "She Loves Me", 4 "Isla", 9 "Guía del caballero para el vicio y la virtud", 11 "Parabellum", 16 "Destellos",  18 "Y no quedó ninguno", 23 "La última mujer de La Mancha", 25 "El Vizconde que me amó"
	.`,
	mixedNew: 'Junio: 8 "Vestido de novia", 10 "El lingotazo" con Sergio, 15 "Superman contra el Klan", 17 "The Rocky Horror Picture Show", 22 "La husmeadora de Portosal" con Marina, 24 "El libro de la señorita Buncle" y 29 "Momo". Julio: 1 "La bruja de Ravensworth", 6 "Into the Heights", 8 "Snapdragon", 13 "Manolito gafotas", 15 "La única criatura..." con Carla, 20 "La tía Mame", 22 "No pidas sardinas...", 27 "Seguro de amor", 29 "Agatha Raisin..."'
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
	SINGLE_EVENT_REGEX,
	WEEK,
	ALARM,
	SAMPLECONTENT,
	SAVEDNAME
};
