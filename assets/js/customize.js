import {ALARM} from './vars.js';

const alarm = document.querySelector('.js__customAlarm');
const clubLink = document.querySelector('.js__customLink');

function setDefaultAlarm() {
	alarm.value = ALARM;
}





function getAlarm() {
	return alarm.value === '0' ? 0 : (Number(alarm.value) || ALARM);
}





function getLink() {
	const link = clubLink.value.includes('https://') ? clubLink.value : '';
	return link;
}





export {setDefaultAlarm, getAlarm, getLink};
