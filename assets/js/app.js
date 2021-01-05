import {YEAR, CALENDARFILENAME, MONTHS, TSTART, TEND} from './vars.js';
import {getCalendar, getMonth} from './calendar.js';
import {getEvents} from './event.js';
import {isAndroid} from './android.js';

const app = document.querySelector('.app');
const createBtn = app.querySelector('.js__create-calendar');
const icsBlock = app.querySelector('.js__ics');
const icsActions = icsBlock.querySelector('.js__ics-actions');
const telegramInput = app.querySelector('.js__telegramInput');
const icsCode = app.querySelector('.js__ics-code');
const icsMonth = app.querySelector('.js__ics-month');





function getPropertyName(obj, value) {
	let result = 'enero';
	for (const key in obj) {
		if (obj[key] === value) result = key;
	}

	return result;
}





function createAction(el, uri, label, download) {
	const actionItem = document.createElement('li');
	actionItem.classList.add('app__calendar-action');

	const downloadLink = document.createElement('a');
	const downloadLinkText = document.createTextNode(label);
	downloadLink.href = uri;
	downloadLink.appendChild(downloadLinkText);

	!download && downloadLink.setAttribute('target', '_blank');
	download && downloadLink.setAttribute('download', `${CALENDARFILENAME}.ics`);
	actionItem.appendChild(downloadLink);
	el.appendChild(actionItem);
}





function showCalendarBlock(uri, month) {
	icsActions.innerHTML = '';
	createAction(icsActions, uri, 'Abrir', false);
	createAction(icsActions, uri, 'Descargar', true);

	icsBlock.classList.add('app__calendar--visible');
	icsMonth.innerText = getPropertyName(MONTHS, month);
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
