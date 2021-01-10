import {MONTHS, SENTENCE} from './vars.js';
import {getCurrentYear} from './helpers.js';





function getTitle(str) {
	return str.match(SENTENCE).toString().replace(/["]/g, '');
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
	const result = str
		.split(':')[1]
		.replace('.', '')
		.split(',')
		.map(event => {
			const parts = event
				.trim()
				.split(' ');
			return {
				day: Number(parts[0]),
				title: getTitle(event)
			};
		});
	return result;
}





function getEventsData(el) {
	const events = el.value
		.split('.')
		.filter(item => item)
		.map(event => {
			return {
				month: getMonthFromStrEvent(event),
				year: getCurrentYear(),
				data: splitEvents(event)
			};
		});
	return events;
}





export {
	getEventsData,
	getMonthFromStrEvent,
	splitEvents
};
