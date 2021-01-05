import {YEAR, CALENDARFILENAME, MONTHS, TSTART, TEND} from './vars.js';
import {getCalendar, getMonth} from './calendar.js';
import {getEvents} from './event.js';
import {isAndroid} from './android.js';

const app = document.querySelector('.app');
const createBtn = app.querySelector('.js__create-calendar');
const icsBlock = app.querySelector('.js__ics');
const icsButton = icsBlock.querySelector('.js__ics-button');
const telegramInput = app.querySelector('.js__telegramInput');
const icsCode = app.querySelector('.js__ics-code');
const icsMonth = app.querySelector('.js__ics-month');





function showCalendarBlock(uri, month) {
	const downloadLink = document.createElement('a');
	const downloadLinkText = document.createTextNode('Descarga el calendario de este mes');
	downloadLink.href = uri;
	downloadLink.appendChild(downloadLinkText);

	isAndroid && downloadLink.setAttribute('target', '_blank');
	!isAndroid && downloadLink.setAttribute('download', `${CALENDARFILENAME}.ics`);

	icsButton.appendChild(downloadLink);
	icsBlock.classList.add('app__calendar--visible');
	icsMonth.innerText = 'enero';
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



	showCalendarBlock(ICSTESTFILE, month);
	showCalendarCode(setaCalendar);
}





createBtn.addEventListener('click', createCalendar);


export {getEvents};
