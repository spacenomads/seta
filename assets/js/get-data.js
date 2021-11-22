import {
	MONTHS, SENTENCE, MONTH_REGEX, EVENTS_REGEX, SINGLE_EVENT_DAY_REGEX, SINGLE_EVENT_TITLE_REGEX, MONTH_DIVIDER_CHAR, EVENTS_DIVIDER_CHAR, UNWANTED_CHARS_REGEX } from './vars.js';
import { getCurrentYear, removeEmojis} from './helpers.js';





function getTitle(str) {
	const result = str.match(SENTENCE).toString().replace(/["]/g, '');
	return result;
}




function getMonthNumber(str, months) {

	const cleanStr = str.replace(UNWANTED_CHARS_REGEX, '');

	return months.findIndex(month => {
		return cleanStr === month;
	});
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
			let clonedEvent = event.trim();
			const hasDay = SINGLE_EVENT_DAY_REGEX.test(clonedEvent);
			const [day] = hasDay ? clonedEvent.match(SINGLE_EVENT_DAY_REGEX) : '';
			clonedEvent = clonedEvent
				.replace(day, '')
				.trim();
			const hasTitle = SINGLE_EVENT_TITLE_REGEX.test(clonedEvent);
			const title = hasTitle ? clonedEvent.match(SINGLE_EVENT_TITLE_REGEX).groups.title : '';
			clonedEvent = clonedEvent
				.replace(title, '')
				.replaceAll('"','')
				.trim();
			return {
				day,
				title: title ? title : clonedEvent,
				guest: title ? clonedEvent : ''
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
		.filter(Boolean)
		.map(events => {
			const month = getMonthFromStrEvent(events);
			const year = getCurrentYear(month);
			const data = splitEvents(events)
				.filter(event => event.day);
			return { month, year, data };
		});
}





export {
	getEventsData,
	getMonthFromStrEvent,
	splitEvents
};
