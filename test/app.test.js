/* eslint-disable no-undef */
import {SAMPLECONTENT} from '../assets/js/vars';
import {initSampleContent} from '../assets/js/sample.js';

describe('SPAMPLES', () => {
	test('Successfully add content to the container', () => {
		const {solo: input, solo: result} = SAMPLECONTENT;
		const obj = {
			value: ''
		};
		initSampleContent(obj, input);
		expect(obj.value).toBe(result);
	});
});
