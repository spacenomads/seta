import {SAMPLECONTENT} from './vars.js';
import {initSampleContent} from './sample.js';

const app = document.querySelector('.app');
const createBtn = app.querySelector('.js__create-calendar');
const icsBlock = app.querySelector('.js__ics');
const icsEvents = icsBlock.querySelector('.js__ics-events');
const icsFullCalendar = icsBlock.querySelector('.js__ics-full-calendar');
const telegramInputSolo = app.querySelector('.js__telegramInputSolo');
const telegramInputMixed = app.querySelector('.js__telegramInputMixed');
const icsCode = app.querySelector('.js__ics-code');
const icsMonth = app.querySelector('.js__ics-month');




initSampleContent(telegramInputSolo, SAMPLECONTENT.solo);
initSampleContent(telegramInputMixed, SAMPLECONTENT.mixed);

