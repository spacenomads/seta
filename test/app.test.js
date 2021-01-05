/* eslint-disable no-undef */
import {MONTHS} from '../assets/js/vars.js';
import {getMonth} from '../assets/js/calendar.js';
import {getEvents} from '../assets/js/event.js';
import { expect } from '@jest/globals';

describe('CALENDAR.js', () => {
	test('Enero: 4 "Enola Holmes", 7 "Dash y Lily", 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith". is 01', () => {
		const input = 'Enero: 4 "Enola Holmes", 7 "Dash y Lily", 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith".';
		const result = '01';
		expect(getMonth(input, MONTHS)).toBe(result);
	});
});





describe('APP.js', () => {
	test('Message has  8 events.', () => {
		const input = 'Enero: 4 "Enola Holmes", 7 "Dash y Lily", 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith".';
		const result = 8;
		expect(getEvents(input).length).toBe(result);
	});

	test('Second event day is 7.', () => {
		const input = 'Enero: 4 "Enola Holmes", 7 "Dash y Lily", 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith".';
		const result = 7;
		expect(getEvents(input)[1].day).toBe(result);
	});

	test('Any event (2nd) is an object{day, title}.', () => {
		const input = 'Enero: 4 "Enola Holmes", 7 "Dash y Lily", 12 "COnviVIenDo 19 días", 14 "Tras esa montaña está la orilla", 19 "Drama", 21 "Quiero volver", 26 "Legally Blonde", 28 "Hijas de Lilith".';
		expect(getEvents(input)[1]).toEqual(expect.objectContaining({
			day: expect.any(Number),
			title: expect.any(String),
		}));
	});
});
