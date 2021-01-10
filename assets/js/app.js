import {SAMPLECONTENT} from './vars.js';
import {initSampleContent} from './sample.js';
import {getEventsData} from './get-data.js';
import {makeCalendars} from './calendar.js';
import {showCalendars} from './interface.js';

const app = document.querySelector('.app');
const generateBtn = app.querySelector('.js__generate-calendars');
const icsBlock = app.querySelector('.js__ics');
const telegramInputSolo = app.querySelector('.js__telegramInputSolo');
const telegramInputMixed = app.querySelector('.js__telegramInputMixed');
const icsCode = app.querySelector('.js__ics-code');





// Remove before main version deployment
//initSampleContent(telegramInputSolo, SAMPLECONTENT.solo);
//initSampleContent(telegramInputMixed, SAMPLECONTENT.mixed);





function generateCalendars() {
	const eventsData = getEventsData(telegramInputMixed);
	const calendarsData = makeCalendars(eventsData);

	showCalendars(icsBlock, calendarsData);
	//icsCode.innerHTML = JSON.stringify(eventsData, null, 2);
	//icsCode.innerHTML = JSON.stringify(calendarsData, null, 2);
}





generateBtn.addEventListener('click', generateCalendars);
