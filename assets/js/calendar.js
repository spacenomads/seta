import {WEEK, TZID, TSTART, TEND, ALARM, NEWLINE} from './vars.js';
import {getAlarm, getLink, getCallDetails} from './customize.js';
import {getTwoDigitNumber} from './helpers.js';

function getIcsString(event, month, year) {
	const {day, title} = event;
	const timeStart = `${year}${getTwoDigitNumber(month + 1)}${getTwoDigitNumber(day)}${TSTART}`;
	const timeEnd = `${year}${getTwoDigitNumber(month + 1)}${getTwoDigitNumber(day)}${TEND}`;

	const vcalendar = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'NAME:NAME:🍄 Seta',
		'COLOR:0:136:238',
		'CALSCALE:GREGORIAN',
		`BEGIN:VEVENT`,
		`SUMMARY:[🍄 Seta] "${title}"`,
		`DTSTART;TZID=${TZID}:${timeStart}`,
		`DTEND;TZID=${TZID}:${timeEnd}`,
		`LOCATION:Online (Zoom)`,
		`DESCRIPTION:Videoclub de lectura de La Sombra: Hoy toca ${title}. ${getCallDetails()}`,
		`STATUS:CONFIRMED`,
		`SEQUENCE:0`,
		`END:VEVENT`,
		'END:VCALENDAR'
	];

	const link = getLink();
	const linkIndex = vcalendar.length - 4;
	link && vcalendar.splice(linkIndex, 0, link);

	const alarm = getAlarm();
	const alarmIndex = vcalendar.length - 2;
	alarm && vcalendar.splice(alarmIndex, 0, alarm);

	return vcalendar.flat().join(NEWLINE);
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
