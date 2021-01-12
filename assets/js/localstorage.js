import {SAVEDNAME} from './vars.js';

function saveData(data) {
	localStorage.setItem(SAVEDNAME, JSON.stringify(data));
}





function getSavedData() {
	const savedData = JSON.parse(localStorage.getItem(SAVEDNAME));
	return savedData || undefined;
}





export {getSavedData, saveData};
