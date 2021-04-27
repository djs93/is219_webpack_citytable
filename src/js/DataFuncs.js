export default class DataFuncs {
    static generateTableHead(table, data) {
        const thead = table.createTHead();
        const row = thead.insertRow();
        data.forEach((key) => {
            /* eslint-disable no-undef */
            const th = document.createElement('th');
            const text = document.createTextNode(key);
            /* eslint-enable no-undef */
            th.appendChild(text);
            row.appendChild(th);
        });
    }

    static generateTableBody(table, data) {
        Object.entries(data).forEach((element) => {
            const row = table.insertRow();
            console.log(element[1]);
            Object.entries(element[1]).forEach((key) => {
                const cell = row.insertCell();
                /* eslint-disable no-undef */
                const text = document.createTextNode(element[1][key[0]]);
                /* eslint-enable no-undef */
                cell.appendChild(text);
            });
        });
    }

    static generateTable(table, data, dataRecords) {
        this.generateTableHead(table, data);
        this.generateTableBody(table, dataRecords);
    }
}
