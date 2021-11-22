function initContent(container, content) {
	container.value = content;
}





function getCurrentYear(eventMonth) {
	const now = new Date();
	const currentMonth = now.getMonth();
	return eventMonth.value >= currentMonth ? now.getFullYear() : now.getFullYear() + 1;
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





function removeEmojis(srt) {
	const regex = /\p{Extended_Pictographic}/ug;
	return srt.replace(regex, '').replaceAll('\n', '.');
}





export {
	initContent,
	getCurrentYear,
	getTwoDigitNumber,
	getCalendarUri,
	getTitleNumbers,
	removeEmojis
};
