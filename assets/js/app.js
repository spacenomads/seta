console.log('🦄');

const TESTEVENT = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Access-A-Ride Pickup
DTSTART;TZID=America/New_York:20130802T103400
DTEND;TZID=America/New_York:20130802T110400
LOCATION:1000 Broadway Ave.\, Brooklyn
DESCRIPTION: Access-A-Ride trip to 900 Jay St.\, Brooklyn
STATUS:CONFIRMED
SEQUENCE:3
BEGIN:VALARM
TRIGGER:-PT10M
DESCRIPTION:Pickup Reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`;

const ICSTESTFILE = 'data:text/calendar;charset=utf-8,' + escape(TESTEVENT);

const container = document.querySelector('.js__ics-list');

container.innerHTML =`
<li class="app__download-item"><a href="${ICSTESTFILE}" download="evento.ics">Descarga el evento de prueba</a></li>
`;
