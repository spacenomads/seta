import {SAVEDNAME} from './vars.js';

function saveData(data) {
	localStorage.setItem(SAVEDNAME, JSON.stringify(data));
}





export {saveData};
