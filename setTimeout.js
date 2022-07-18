'use strict'

setTimeout(() => document.write("setTimeout 함수<br>"), 4000);

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        document.write(`${i + "<br>"}`)
    }, 2000);
}

for (let i = 5; i < 8; i++) {
    setTimeout(() => {
        document.write(`${i + "<br>"}`)
    }, 1000 * i);
}

let timeout1,
    timeout2,
    timeout3;

for (let i = 10; i < 13; i++) {
    switch (i) {
        case 10:
            timeout1 = setTimeout(() => {
                document.write(`${i + "<br>"}`)
            }, 1000 * i);
            break;
        case 11:
            timeout2 = setTimeout(() => {
                document.write(`${i + "<br>"}`)
            }, 1000 * i);
            clearTimeout(timeout2);
            break;
        case 12:
            timeout3 = setTimeout(() => {
                document.write(`${i + "<br>"}`)
            }, 1000 * i);
            break;
    }
}