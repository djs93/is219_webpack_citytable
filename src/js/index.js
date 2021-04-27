import TestJS from './TestJs.js';
import ConsoleLogIt from './ConsoleLogIt.js';
import getJSON from './getJSON';
import DataFuncs from './DataFuncs';

TestJS();

getJSON('http://localhost:8000/api/v1/cities',
    function(err, records) {
        if (err !== null) {
            /* eslint-disable no-undef */
            alert('Something went wrong: ' + err);
            /* eslint-enable no-undef */
        } else {
            /* eslint-disable no-undef */
            let table = document.querySelector('table');
            /* eslint-enable no-undef */
            let data = Object.keys((records.data[0]));
            let dataRecords = records.data;

            DataFuncs.generateTable(table, data, dataRecords);
        }
    });

ConsoleLogIt('this worked in the bundle');
