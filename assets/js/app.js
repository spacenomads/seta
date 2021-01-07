import {YEAR, CALENDARFILENAME, MONTHS, TSTART, TEND, ALARM} from './vars.js';
import {getCalendar, getCalendars, getMonth, getMonthName, getCalendarUri} from './calendar.js';
import {getEvents} from './event.js';
import {isAndroid} from './android.js';

const app = document.querySelector('.app');
const createBtn = app.querySelector('.js__create-calendar');
const icsBlock = app.querySelector('.js__ics');
const icsEvents = icsBlock.querySelector('.js__ics-events');
const icsFullCalendar = icsBlock.querySelector('.js__ics-full-calendar');
const telegramInput = app.querySelector('.js__telegramInput');
const icsCode = app.querySelector('.js__ics-code');
const icsMonth = app.querySelector('.js__ics-month');





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
		console.log(calendar.length, i);
		const event = calendar[i];
		createItem(el, event);
	}
}





function showCalendarBlock(calendar, uri, month) {


	createFullLink(icsFullCalendar, uri, 'Descargar calendario completo');
	createEvents(icsEvents, calendar);

	icsBlock.classList.add('app__calendar--visible');
	icsMonth.innerText = getMonthName(MONTHS, month);
}





function showCalendarCode(data) {
	icsCode.innerHTML = data;
}





function createCalendar() {
	const vAlarm = ALARM;
	const message = telegramInput.value;

	const month = getMonth(message, MONTHS);
	const calendarData = getEvents(message).map(event => {
		const {day, title} = event;
		const strDay = day > 9 ? day : '0' + day;

		const tStart = `${YEAR}${month}${strDay}${TSTART}`;
		const tEnd = `${YEAR}${month}${strDay}${TEND}`;

		return {title, day, month: Number(month), year: YEAR, tStart, tEnd, vAlarm };
	});

	const setaFullCalendar = getCalendar(calendarData);
	const setaCalendars = getCalendars(calendarData);
	console.log(setaCalendars);
	const icsFullSetaCalendar = getCalendarUri(setaFullCalendar) ;

	showCalendarBlock(setaCalendars, icsFullSetaCalendar, month);
	//showCalendarCode(setaFullCalendar);
}





createBtn.addEventListener('click', createCalendar);





export {getEvents};
