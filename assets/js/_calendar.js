import {NEWLINE, TZID, MONTHS, WEEK} from './vars.js';





function getCalendarUri(cal) {
	return `data:text/calendar;charset=utf-8,${encodeURIComponent(cal)}`;
}




function getMonthName(obj, value) {
	let result = 'enero';
	for (const key in obj) {
		if (obj[key] === value) result = key;
	}

	return result;
}





function getCalendar(data) {

	const calendarStart = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'NAME:NAME:Se(c)ta',
		'COLOR:0:136:238',
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





function getCalendars(data) {
	return data.map(event => {
		const {title, day, month, year} = event;
		const fullMonth = getMonthName(MONTHS, month > 9 ? month : '0'+month);
		const dow = WEEK[new Date(`${month} ${day}, ${year}`).getDay()];
		return {
			title,
			day,
			month,
			year,
			fullMonth,
			dow,
			calendarUri: getCalendarUri(getCalendar([event]))
		};
	});
}





function getMonth(str, dic) {
	const parts = str.split(':');
	const messageMonth = parts[0].toLowerCase();

	return dic[messageMonth];
}





export {getCalendar, getCalendars, getMonth, getMonthName, getCalendarUri};
