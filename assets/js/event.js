import {SENTENCE} from './vars.js';

function getDay(str) {
	let messageDay = parseInt(str.trim().split(' ')[0]) || 1;
	return messageDay;
}





function getTitle(str) {
	return str.match(SENTENCE).toString().replace(/["]/g, '');
}





function getEvents(str) {
	const message = str.split(':')[1].trim().split(',');

	return message.map(event => {
		const title = getTitle(event);
		const day = getDay(event);
		return {day, title};
	});
}





export {getDay, getTitle, getEvents};
