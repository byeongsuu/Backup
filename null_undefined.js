/*
    < null과 undefined >

- null은 존재하지만 값이나 객체가 할당되지 않았음을 의미하는 특수한 값인 반면,  undefined는 애초에
  존재(정의)하지 않거나 초기화 하지 않음을 의미. 따라서 객체간 비교 또는 값의 할당 여부를 확인하기
  위한 비교 연산시, 이퀄(equal : '==')연산인지 또는 엄격 이퀄(strict equal : '===')연산인지에 따라
  그 평과 결과가 달라질 수 있음에 주의.
  일반적으로 객체에 대한 값의 실질적 할당 비할당 여부를 체크할 때에는  null과  undefined 모두 이퀄
  연산자로 비교시 동일하게 측정되어 값이  null,  undefined 또는 비어있는 경우에는 둘 다  null 또는
  undefined로 평가 가능. 하지만 엄격 이퀄연산자로 비교시에는 다르게 동작하여 null은 단순히 null인지
  null이 아닌지 두 가지로만 평가를 진행하는 반면,  undefined는  undefined값 뿐만 아니라  초기화되지
  않은 값에 대해서도 undefined로 평가.

*/

'use strict';

console.log(null == undefined);
console.log(null === undefined);      // 타입은 다르므로 엄격 이퀄 비교 연산시 다름으로 평가.

console.log(null + 1);                // null은 다른 숫자와 연산시 기본적으로 0으로 변환되어 평가되는 반면,
console.log(undefined + 1);           // undefined는 숫자가 아닌 타입(NaN)으로 인식함을 확인 가능.
console.log(null * 1);
console.log(undefined * 1);
console.log('-----------------');


const i1 = 5;
const i2 = undefined;
const i3 = null;
let i4;

console.log(i1 == null);
console.log(i2 == null);
console.log(i3 == null);
console.log(i4 == null);
console.log();
console.log(i1 == undefined);
console.log(i2 == undefined);
console.log(i3 == undefined);     // 이퀄연산은 null, undefined 또는 초기화되지 
console.log(i4 == undefined);     // 않은 빈 값에 대하여 모두 동일한 값으로 평가.
console.log();
console.log(i1 === null);
console.log(i2 === null);
console.log(i3 === null);         // 엄격 이퀄연산에서 null에 대한 평가는 오로지 null인지 아닌지로만 평가.
console.log(i4 === null);
console.log();
console.log(i1 === undefined);
console.log(i2 === undefined);
console.log(i3 === undefined);    // 엄격 이퀄연산에서 undefined에 대한 평가는 undefined뿐만 아니라,
console.log(i4 === undefined);    // 초기화되지 않은 비어있는 값에 대해서도 undefined로 평가.