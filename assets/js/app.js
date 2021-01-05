console.log('🦄');

//const NEWLINE = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
const NEWLINE = '\n';

const YEAR = new Date().getFullYear();
const title = 'Evento de prueba';
const tzid = 'Europe/Madrid';
const tStart = `${YEAR}0107T213000`;
const tEnd = `${YEAR}0107T230000`;
const vAlarm = '15';

const calendarData = {title, tzid, tStart, tEnd, vAlarm };

function getCalendar(data) {
	const {title, tzid, tStart, tEnd, vAlarm } =  data;

	const eventTemplate = [
		`BEGIN:VCALENDAR`,
		`VERSION:2.0`,
		`CALSCALE:GREGORIAN`,
		`BEGIN:VEVENT`,
		`SUMMARY:[Se(c)ta] "${title}"`,
		`DTSTART;TZID=${tzid}:${tStart}`,
		`DTEND;TZID=${tzid}:${tEnd}`,
		`LOCATION:Online (Zoom)`,
		`DESCRIPTION:[La Sombra] Club de lectura: Hoy toca "${title}"`,
		`STATUS:CONFIRMED`,
		`SEQUENCE:0`,
		`BEGIN:VALARM`,
		`TRIGGER:-PT${vAlarm}M`,
		`DESCRIPTION:Prepárate para la Se(c)ta!`,
		`ACTION:DISPLAY`,
		`END:VALARM`,
		`END:VEVENT`,
		`END:VCALENDAR`,
	];

	return eventTemplate.join(NEWLINE);
}

const setaCalendar = encodeURIComponent(getCalendar(calendarData));
const ICSTESTFILE = `data:text/calendar;charset=utf-8,${setaCalendar}` ;

const icsBlock = document.querySelector('.js__ics');
const icsButton = icsBlock.querySelector('.js__ics-button');

icsButton.innerHTML =`<a href="${ICSTESTFILE}" download="calendario-seta.ics">Descarga el calendario de este mes</a>`;
icsBlock.classList.add('app__calendar--visible');
