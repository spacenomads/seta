import {YEAR, CALENDARFILENAME, MONTHS, TSTART, TEND} from './vars.js';
import {getCalendar, getMonth} from './calendar.js';
import {getEvents} from './event.js';

const app = document.querySelector('.app');
const createBtn = app.querySelector('.js__create-calendar');
const icsBlock = app.querySelector('.js__ics');
const icsButton = icsBlock.querySelector('.js__ics-button');
const telegramInput = app.querySelector('.js__telegramInput');
const icsCode = app.querySelector('.js__ics-code');





function showCalendarBlock(uri) {
	icsButton.innerHTML =`<a href="${uri}" target="_blank" download="${CALENDARFILENAME}.ics">Descarga el calendario de este mes</a>`;
	icsBlock.classList.add('app__calendar--visible');
}





function showCalendarCode(data) {
	icsCode.innerHTML = data;
}



function createCalendar() {
	const vAlarm = '15';
	const message = telegramInput.value;

	const month = getMonth(message, MONTHS);
	const calendarData = getEvents(message).map(event => {
		const {day, title} = event;
		const strDay = day > 9 ? day : '0' + day;

		const tStart = `${YEAR}${month}${strDay}${TSTART}`;
		const tEnd = `${YEAR}${month}${strDay}${TEND}`;

		return {title, tStart, tEnd, vAlarm };
	});

	const setaCalendar = getCalendar(calendarData);
	const ICSTESTFILE = `data:text/calendar;charset=utf-8,${encodeURIComponent(setaCalendar)}` ;



	showCalendarBlock(ICSTESTFILE);
	showCalendarCode(setaCalendar);
}





createBtn.addEventListener('click', createCalendar);


export {getEvents};
