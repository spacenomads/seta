function getCurrentYear() {
	const now = new Date();
	return now.getFullYear();
}




function getTwoDigitNumber(num) {
	return num > 9 ? num.toString() : '0' + num;
}





function getCalendarUri(cal) {
	return `data:text/calendar;charset=utf-8,${encodeURIComponent(cal)}`;
}





export {getCurrentYear, getTwoDigitNumber, getCalendarUri};
