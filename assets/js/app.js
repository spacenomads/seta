import {SAMPLECONTENT} from './vars.js';
import {initSampleContent} from './sample.js';
import {getEventsData} from './get-data.js';

const app = document.querySelector('.app');
const generateBtn = app.querySelector('.js__generate-calendars');
const icsBlock = app.querySelector('.js__ics');
const icsEvents = icsBlock.querySelector('.js__ics-events');
const icsFullCalendar = icsBlock.querySelector('.js__ics-full-calendar');
const telegramInputSolo = app.querySelector('.js__telegramInputSolo');
const telegramInputMixed = app.querySelector('.js__telegramInputMixed');
const icsCode = app.querySelector('.js__ics-code');
const icsMonth = app.querySelector('.js__ics-month');





// Remove before main version deployment
initSampleContent(telegramInputSolo, SAMPLECONTENT.solo);
initSampleContent(telegramInputMixed, SAMPLECONTENT.mixed);





function generateCalendars() {
	const eventsData = getEventsData(telegramInputMixed);
	icsCode.innerHTML = JSON.stringify(eventsData, null, 2);
}





generateBtn.addEventListener('click', generateCalendars);
