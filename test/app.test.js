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

	test('January has 7 events', () =>{
		const {solo: input} = SAMPLECONTENT;
		const result = 8;

		expect(splitEvents(input).length).toBe(result);
	});

	test('Result is an Array', () =>{
		const {solo: input} = SAMPLECONTENT;
		const result = true;

		expect(Array.isArray(splitEvents(input))).toBe(result);
	});

	test('Every event (first) is an object {month: {value, label}, year, data: [{day, title}]}', () =>{
		const {solo, mixed} = SAMPLECONTENT;
		const input = getEventsData({value:solo})[0];

		expect(input).toEqual(expect.objectContaining({
			month: expect.objectContaining({
				value: expect.any(Number),
				label: expect.any(String)
			}),
			year: expect.any(Number),
			data: expect.arrayContaining([
				expect.objectContaining({
					day: expect.any(Number),
					title: expect.any(String)
				})
			])
		}));
	});
});
