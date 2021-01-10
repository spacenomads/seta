import {WEEK, TZID, TSTART, TEND, ALARM, NEWLINE} from './vars.js';
import {getTwoDigitNumber} from './helpers.js';

function getIcsString(event, month, year) {
	const {day, title} = event;
	const calendarStart = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'NAME:NAME:🍄 Seta',
		'COLOR:0:136:238',
		'CALSCALE:GREGORIAN'
	];
	const calendarEnd = 'END:VCALENDAR';
	const timeStart = `${year}${getTwoDigitNumber(month + 1)}${getTwoDigitNumber(day)}${TSTART}`;
	const timeEnd = `${year}${getTwoDigitNumber(month + 1)}${getTwoDigitNumber(day)}${TEND}`;

	const calendarBody = [
		`BEGIN:VEVENT`,
		`SUMMARY:[🍄 Seta] "${title}"`,
		`DTSTART;TZID=${TZID}:${timeStart}`,
		`DTEND;TZID=${TZID}:${timeEnd}`,
		`LOCATION:Online (Zoom)`,
		`DESCRIPTION:Videoclub de lectura de La Sombra: Hoy toca "${title}"`,
		`STATUS:CONFIRMED`,
		`SEQUENCE:0`,
		`BEGIN:VALARM`,
		`TRIGGER:-PT${ALARM}M`,
		`DESCRIPTION:Prepárate para la 🍄 Seta!`,
		`ACTION:DISPLAY`,
		`END:VALARM`,
		`END:VEVENT`,
	];
	return [...calendarStart, ...calendarBody, calendarEnd].join(NEWLINE);
}





function formatEvent(event, month, year) {
	const {day, title} = event;
	const dow = WEEK[new Date(`${month + 1} ${day}, ${year}`).getDay()];
	return {
		day,
		dow,
		title,
		ics: getIcsString(event, month, year)
	};
}





function formatEventData(cal) {
	const {data, month, year} = cal;
	return {
		month,
		events: data.map(monthData => formatEvent(monthData, month.value, year))
	};
}





function makeCalendars(data) {
	return data.map(formatEventData);
}

export {makeCalendars};
