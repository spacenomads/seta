import {CALENDARFILENAME} from './vars.js';
import {getCalendarUri} from './helpers.js';

function calendarToCode(data) {
	const {month, events} = data;
	let result = '';

	for (let i=0; i < events.length; i++) {
		const {title, ics, day, dow} = events[i];
		const filename = `${CALENDARFILENAME}-${month.label}-${day}.ics`;
		result += `<li class="event">
		<a href="${getCalendarUri(ics)}" download="${filename}" class="event__link">
		<i class="event__icon" role="presentation">
			<span class="event__icon-month">${month.label.substring(0,3)}</span>
			<span class="event__icon-day">${day}</span>
		</i>
		<div class="event__date">${dow} ${day}</div>
		<h4 class="event__title">${title}</h4>
		</a>
	</li>`;
	}

	return result;
}


function showCalendars(block, data) {
	const blockEvents = block.querySelector('.js__ics-events');

	let result = '';

	for (let i=0; i< data.length; i++) {
		const set = data[i];
		result += `<li class="app__calendar-event">
			<h3 class="app__calendar-event-title">Calendario de ${set.month.label}</h3>
			<ul class="events">
				${calendarToCode(set)}
			</ul>
		</li>`;
	}

	blockEvents.innerHTML = result;
	block.classList.add('app__calendar--on');
	block.setAttribute('role', 'alert');
	block.setAttribute('aria-hidden', false);
}

export {showCalendars};
