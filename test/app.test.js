/* eslint-disable no-undef */
import {SAMPLECONTENT} from '../assets/js/vars';
import {getEventsData, getMonthFromStrEvent, splitEvents} from '../assets/js/get-data.js';
import {initContent, getTwoDigitNumber} from '../assets/js/helpers.js';

describe('Init', () => {
	test('Successfully add content to the container', () => {
		const {solo: input, solo: result} = SAMPLECONTENT;
		const obj = {
			value: ''
		};
		initContent(obj, input);
		expect(obj.value).toBe(result);
	});
});





describe('Helpers', () => {
	test('Two digit string: 2 -> 02', () => {
		const input = 2;
		const result = '02';
		expect(getTwoDigitNumber(input)).toBe(result);
	});

	test('Two digit string: 12 -> 12', () => {
		const input = 12;
		const result = '12';
		expect(getTwoDigitNumber(input)).toBe(result);
	});
});





describe('Get data from telegram post', () => {
	test('Get month object {value: 0, label: "enero"}', () =>{
		const {solo: input} = SAMPLECONTENT;
		const result = {
			value: 0,
			label: 'enero'
		};

		expect(getMonthFromStrEvent(input)).toMatchObject(result);
	});

	test('Result is an Array', () =>{
		const {solo: input} = SAMPLECONTENT;
		const result = true;

		expect(Array.isArray(splitEvents(input))).toBe(result);
	});
});
