// console.log(n1);     ReferenceError(Cannot access 'n1' before
// initializationat).
let n1 = 5; // let : ECMAScript6에 추가된 변수 선언 구문으로 선언된 시점부터 접근이 가능하며
// let n1 = 5;          블럭 스코프가 적용되어 블럭 외부 또는 내부를 기준으로 하여 전역과 지역으로 나뉨.
console.log(n1); // 또한, var과 같이 중복 선언 불가.
console.log();

function letTest() {
    let n2 = 10;
}
// console.log(n2);      ReferenceError(n2 is not defined).

{
    let n3 = 15;
}
// console.log(n3);      ReferenceError(n3 is not defined).
console.log();

const n4 = 8; // 변수에 대한 값부 변경 불가.(immutable)
// n4 = 9; const n5;           const선언이 지정된 변수는 반드시 선언과 동시에 초기화가 강제. 선언 이후에 지연
// 초기화도 불가.
