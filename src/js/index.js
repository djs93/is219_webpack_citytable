import TestJS from './TestJs';
import ConsoleLogIt from './ConsoleLogIt';
import getJSON from './getJSON';
import DataFuncs from './DataFuncs';

TestJS();

getJSON('http://localhost:8000/api/v1/cities',
    (err, records) => {
        if (err !== null) {
            /* eslint-disable no-undef */
            /* eslint-disable no-alert */
            alert(`Something went wrong: ${err}`);
            /* eslint-enable no-undef */
            /* eslint-enable no-alert */
        } else {
            /* eslint-disable no-undef */
            const table = document.querySelector('table');
            /* eslint-enable no-undef */
            const data = Object.keys((records.data[0]));
            const dataRecords = records.data;

            DataFuncs.generateTable(table, data, dataRecords);
        }
    });

ConsoleLogIt('this worked in the bundle');
