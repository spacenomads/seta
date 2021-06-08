import {SAMPLECONTENT} from './vars.js';
import {initContent} from './helpers.js';
import {setCustomData} from './customize.js';
import {getEventsData} from './get-data.js';
import {makeCalendars} from './calendar.js';
import {showCalendars} from './interface.js';
import {getSavedData} from './localstorage.js';

const app = document.querySelector('.app');
const generateBtn = app.querySelector('.js__generate-calendars');
const icsBlock = app.querySelector('.js__ics');
const telegramInput = app.querySelector('.js__telegramInput');
const icsCode = app.querySelector('.js__ics-code');





// Remove before main version deployment
initContent(telegramInput, SAMPLECONTENT.last);
const customData = getSavedData();
customData && setCustomData(customData);





function generateCalendars() {
	const content = telegramInput.value;

	if (content) {
		const eventsData = getEventsData(telegramInput);
		console.log(eventsData);
		const calendarsData = makeCalendars(eventsData);

		showCalendars(icsBlock, calendarsData);
		//icsCode.innerHTML = JSON.stringify(eventsData, null, 2);
		//icsCode.innerHTML = JSON.stringify(calendarsData, null, 2);
	}
}





//generateBtn.addEventListener('click', generateCalendars);
generateCalendars();
