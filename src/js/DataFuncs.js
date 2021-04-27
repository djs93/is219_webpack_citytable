export default class DataFuncs {
    static generateTableHead(table, data) {
        const thead = table.createTHead();
        const row = thead.insertRow();
        for (const key of data) {
            const th = document.createElement("th");
            const text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    static generateTableBody(table, data) {
        for (const element of data) {
            const row = table.insertRow();
            console.log(element);
            let key;
            for (key in element) {
                const cell = row.insertCell();
                const text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }

    static generateTable(table, data, dataRecords) {
        this.generateTableHead(table, data);
        this.generateTableBody(table, dataRecords);
    }
}
