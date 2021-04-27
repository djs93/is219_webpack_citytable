export default function getJSON(url, callback) {
    /* eslint-disable no-undef */
    var xhr = new XMLHttpRequest();
    /* eslint-enable no-undef */
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
