import {YEAR, CALENDARFILENAME, MONTHS} from './vars.js';
import {getCalendar} from './calendar.js';

const app = document.querySelector('.app');
const createBtn = app.querySelector('.js__create-calendar');
const icsBlock = app.querySelector('.js__ics');
const icsButton = icsBlock.querySelector('.js__ics-button');





function createCalendar() {
	const title = 'Evento de prueba';
	const tStart = `${YEAR}0107T213000`;
	const tEnd = `${YEAR}0107T230000`;
	const vAlarm = '15';
	const calendarData = {title, tStart, tEnd, vAlarm };
	const setaCalendar = encodeURIComponent(getCalendar(calendarData));
	const ICSTESTFILE = `data:text/calendar;charset=utf-8,${setaCalendar}` ;

	showCalendarBlock(ICSTESTFILE);
}





function showCalendarBlock(uri) {
	icsButton.innerHTML =`<a href="${uri}" download="${CALENDARFILENAME}.ics">Descarga el calendario de este mes</a>`;
	icsBlock.classList.add('app__calendar--visible');
}





createBtn.addEventListener('click', createCalendar);
