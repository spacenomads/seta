import {SENTENCE, CALENDARFILENAME} from './vars.js';

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





function createFullLink(el, uri, label) {
	el.innerHTML = '';
	const downloadLink = document.createElement('a');
	const downloadLinkText = document.createTextNode(label);
	downloadLink.href = uri;
	downloadLink.appendChild(downloadLinkText);
	downloadLink.setAttribute('download', `${CALENDARFILENAME}.ics`);
	el.appendChild(downloadLink);
}




function createItem(el, data) {
	const {calendarUri, dow, day, title} =  data;
	const item = `<li class="app__calendar-event">
		<a href="${calendarUri}" class="app__calendar-event-link" download="${CALENDARFILENAME}-${day}.ics">
			<span class="app__calendar-event-date">${dow} ${day}</span> <span class="app__calendar-event-title">${title}</span>
		</a>
	</li>`;

	el.insertAdjacentHTML('beforeend', item);
}





function createEvents(el, calendar) {
	el.innerHTML = '';
	for (let i = 0; i < calendar.length; i++) {
		const event = calendar[i];
		createItem(el, event);
	}
}





export {getDay, getTitle, getEvents, createFullLink, createItem, createEvents};
