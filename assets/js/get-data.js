import {
	MONTHS, SENTENCE, MONTH_REGEX, EVENTS_REGEX, SINGLE_EVENT_DAY_REGEX, SINGLE_EVENT_TITLE_REGEX, MONTH_DIVIDER_CHAR, EVENTS_DIVIDER_CHAR } from './vars.js';
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
			let clonedEvent = event.trim();
			const hasDay = SINGLE_EVENT_DAY_REGEX.test(clonedEvent);
			const [day] = hasDay ? clonedEvent.match(SINGLE_EVENT_DAY_REGEX) : 'DIA';
			clonedEvent = clonedEvent
				.replace(day, '')
				.trim();
			const hasTitle = SINGLE_EVENT_TITLE_REGEX.test(clonedEvent);
			const title = hasTitle ? clonedEvent.match(SINGLE_EVENT_TITLE_REGEX).groups.title : 'TITLE';
			clonedEvent = clonedEvent
				.replace(title, '')
				.trim();
			return {
				day,
				title,
				guest: clonedEvent
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
			const data = splitEvents(events);
			return { month, year, data };
		});
}





export {
	getEventsData,
	getMonthFromStrEvent,
	splitEvents
};
