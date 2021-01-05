import {NEWLINE, TZID} from './vars.js';

function getCalendar(data) {

	const calendarStart = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'CALSCALE:GREGORIAN'
	];

	const calendarEnd = [
		'END:VCALENDAR'
	];

	const calendarBody = data.map(event => {
		const {title, tStart, tEnd, vAlarm} = event;
		const eventTemplate = [
			`BEGIN:VEVENT`,
			`SUMMARY:[Se(c)ta] "${title}"`,
			`DTSTART;TZID=${TZID}:${tStart}`,
			`DTEND;TZID=${TZID}:${tEnd}`,
			`LOCATION:Online (Zoom)`,
			`DESCRIPTION:[La Sombra] Club de lectura: Hoy toca "${title}"`,
			`STATUS:CONFIRMED`,
			`SEQUENCE:0`,
			`BEGIN:VALARM`,
			`TRIGGER:-PT${vAlarm}M`,
			`DESCRIPTION:Prepárate para la Se(c)ta!`,
			`ACTION:DISPLAY`,
			`END:VALARM`,
			`END:VEVENT`,
		];

		return eventTemplate.join(NEWLINE);
	});



	return [...calendarStart, ...calendarBody, ...calendarEnd].join(NEWLINE);
}





function getMonth(str, dic) {
	const parts = str.split(':');
	const messageMonth = parts[0].toLowerCase();

	return dic[messageMonth];
}





export {getCalendar, getMonth};
