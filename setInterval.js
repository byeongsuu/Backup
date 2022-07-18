'use strict'

let id = setInterval(() => {
    document.write(`123<br>`);
}, 2000);

setTimeout(() => {
    clearInterval(id)
}, 10000);