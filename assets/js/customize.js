import {ALARM} from './vars.js';
import {resetEvents} from './interface.js';
import {saveData} from './localstorage.js';

const alarm = document.querySelector('.js__customAlarm');
const callLink = document.querySelector('.js__callLink');
const callId = document.querySelector('.js__callId');
const callPwd = document.querySelector('.js__callPwd');

function setDefaultAlarm() {
	alarm.value = ALARM;
}





function getAlarm() {
	const alarmT = alarm.value === '0' ? 0 : (Number(alarm.value) || ALARM);

	const vAlarm = [
		`BEGIN:VALARM`,
		`TRIGGER:-PT${alarmT}M`,
		`DESCRIPTION:Prepárate para la 🍄 Seta!`,
		`ACTION:DISPLAY`,
		`END:VALARM`,
	];

	return alarmT ? vAlarm : [];
}





function getLinkData() {
	return callLink.value.includes('https://') ? callLink.value : ''
}




function getLink() {
	const link = getLinkData();
	const vLink = `URL;VALUE=URI:${link}`;
	return link ? vLink : '';
}





function getCallDetails() {
	const link = getLinkData();
	const cId = callId.value;
	const cPwd = callPwd.value;

	let result = '';
	link && (result += `\\nZoom: ${link} `);
	cId && cPwd && (result += `\\nID de reunión: ${cId} \\nCódigo de acceso: ${cPwd}`);

	return result;
}





function customizationHasChanged() {
	const link = getLinkData();
	const cId = callId.value;
	const cPwd = callPwd.value;
	const icsBlock = document.querySelector('.js__ics');
	const blockEvents = icsBlock.querySelector('.js__ics-events');
	resetEvents(icsBlock, blockEvents);
	const customData = {
		alarm: alarm.value,
		zoom: {
			link,
			cId,
			cPwd
		}
	};
	saveData(customData);
}




alarm.addEventListener('change', customizationHasChanged);
callLink.addEventListener('change', customizationHasChanged);
callId.addEventListener('change', customizationHasChanged);
callPwd.addEventListener('change', customizationHasChanged);





export {setDefaultAlarm, getAlarm, getLink, getCallDetails};
