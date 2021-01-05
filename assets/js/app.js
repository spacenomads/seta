import {YEAR, CALENDARFILENAME, MONTHS, TSTART, TEND, SENTENCE} from './vars.js';
import {getCalendar, getMonth} from './calendar.js';

const app = document.querySelector('.app');
const createBtn = app.querySelector('.js__create-calendar');
const icsBlock = app.querySelector('.js__ics');
const icsButton = icsBlock.querySelector('.js__ics-button');
const telegramInput = document.querySelector('.js__telegramInput');





function getDay(str) {
	let messageDay = str.trim().split(' ')[0];

	if (messageDay.length === 1) {
		messageDay = `0${messageDay}`;
	}
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




function createCalendar() {
	const vAlarm = '15';
	const message = telegramInput.value;

	const month = getMonth(message, MONTHS);
	const calendarData = getEvents(message).map(event => {
		const {day, title} = event;

		const tStart = `${YEAR}${month}${day}${TSTART}`;
		const tEnd = `${YEAR}${month}${day}${TEND}`;

		return {title, tStart, tEnd, vAlarm };
	});

	const setaCalendar = encodeURIComponent(getCalendar(calendarData));
	const ICSTESTFILE = `data:text/calendar;charset=utf-8,${setaCalendar}` ;





	showCalendarBlock(ICSTESTFILE);
}





function showCalendarBlock(uri) {
	icsButton.innerHTML =`<a href="${uri}" target="_blank" data-download="${CALENDARFILENAME}.ics">Descarga el calendario de este mes</a>`;
	icsBlock.classList.add('app__calendar--visible');
}





createBtn.addEventListener('click', createCalendar);
