"use strict"

console.log(Number(undefined)); //NaN
console.log(Number(null));      // 0
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(" 123 "));   // 0
console.log(Number(" 12 3 "));  // 양쪽 끝의 공백을 제거한 후 변환된 number타입 값으로 반환.
console.log(Number("   "));     // 양쪽 끝이 아닌 중간에 공백이나 숫자 형태가 아닌 값이 포합된 공백이나 빈문자열은 0으로 뱐환하여 반환

let n7;
let n8 = null;
let n9 = true;

console.log(n7 + 5);    // n7은 초기화되지 않았으므로 undefined로 평가되며, undefined는 연산 시 숫자형식으로 변환이 불가하므로 NaN 반환
console.log(n8 + 5);
console.log(n9 + 5);    //공백은 래퍼 객체를 통한 명시적 변환인경우에는 0이 반환되지만, 이와같이 연산시에는 자동형변환되지않음.
console.log(" " + 5);

const n10 = 4;
const n11 = 10;

console.log(String(n10) + String(n11));  //String 래퍼 객체를 통한 문자열 변환
console.log(String(n7) + String(n8));    //String 래퍼 객체를 통한 문자열 변환