import {NEWLINE, TZID} from './vars.js';

function getCalendar({title, tStart, tEnd, vAlarm }) {
	const eventTemplate = [
		`BEGIN:VCALENDAR`,
		`VERSION:2.0`,
		`CALSCALE:GREGORIAN`,
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
		`END:VCALENDAR`,
	];

	return eventTemplate.join(NEWLINE);
}

export {getCalendar};
