'use strict';

let sum = 0;

// while(1){
//     let value = prompt("숫자를 입력하세요");

//     if(value == 0)break;
//     sum = sum + value;
// }
// alert("합계 :"+sum);

while(true){
    let value = +prompt("숫자를 입력하세요");

    if(value) break;
    sum = sum + value;
}
alert("합계 :"+sum);