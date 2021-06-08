function initContent(container, content) {
	container.value = content;
}





function getCurrentYear() {
	const now = new Date();
	return now.getFullYear();
}




function getTwoDigitNumber(num) {
	return ('0' + num).slice(-2);
}





function getCalendarUri(cal) {
	return `data:text/calendar;charset=utf-8,${encodeURIComponent(cal)}`;
}




function getTitleNumbers(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		result += '' + char;
	}
	return result;
}





export {
	initContent,
	getCurrentYear,
	getTwoDigitNumber,
	getCalendarUri,
	getTitleNumbers
};
