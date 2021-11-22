import {MONTHS, SENTENCE, MONTH_REGEX, EVENTS_REGEX, SINGLE_EVENT_REGEX, MONTH_DIVIDER_CHAR, EVENTS_DIVIDER_CHAR} from './vars.js';
import { getCurrentYear, removeEmojis} from './helpers.js';





function getTitle(str) {
	const result = str.match(SENTENCE).toString().replace(/["]/g, '');
	return result;
}




function getMonthNumber(str, months) {
	return months.findIndex(month => month === str);
}





function getMonthFromStrEvent(str) {
	const monthLabel = str.split(':')[0].toLowerCase().trim();
	return {
		value: getMonthNumber(monthLabel, MONTHS),
		label: monthLabel
	};
}





function splitEvents(str) {
	return str
		.split(':')[1]
		.split(EVENTS_DIVIDER_CHAR)
		.map(event => {
			const {day, title, guest} = event.match(SINGLE_EVENT_REGEX).groups;
			return {
				day,
				title,
				guest
			};
		});
}




function cleanMessage(str) {
	let result = str.replaceAll('...', '…');
	result = result.replaceAll(MONTH_REGEX, MONTH_DIVIDER_CHAR);
	result = result.replaceAll(EVENTS_REGEX, EVENTS_DIVIDER_CHAR);
	return result;
}





function getEventsData(content) {
	const message = cleanMessage( removeEmojis(content) );
	return message
		.split(MONTH_DIVIDER_CHAR)
		.map(events => {
			const month = getMonthFromStrEvent(events);
			const year = getCurrentYear(month);
			const data = splitEvents(events);
			return { month, year, data };
		});
}





export {
	getEventsData,
	getMonthFromStrEvent,
	splitEvents
};
