'use strict'

let k = 1;
//중첩 루프 특징 : 외곽구조변수값이 고정되 있는 상태에서 안쪽구조변수값이 변하는 특성.
// for (let i = 1; i < 6; i++) {
//     for (let j = 1; j < 6; j++, k++) {
//         document.write(k);
//     }
//     document.write("<br/>")
// }

// for (let i = 1; i <6; i++) {
//     for (let j = 1; j < i+1; j++) {
//         document.write(" * ");
//     }
//     document.write("<br/>")
// }

// for (let i = 1; i <6; i++) {
//     for (let j = 1; j < 6-i; j++) {
//         document.write(" * ");
//     }
//     document.write("<br/>")
// }

// for (let i = 1; i <6; i++) {
//     for (let j = 1; j < 6; j++) {
//         if(j<i){
//             document.write(" x ");
//         }else{
//             document.write(" * ");
//         }
        
//     }
//     document.write("<br/>")
// }

// 열끝나는값 - 행 = 2, 열끝나는값 = 행 + 2
//별시작열 + 행 = 4,  별시작열 = 4 - 행
 
// let n;

// n = +prompt("줄 수: ");

// for (let i = 1; i <= n; i++) {
//     for (let j = 1 ; j <= i+n-1 ; j++) {
//         if(j < n+1 - i){
//             document.write(" x ");
//         }else{
//             document.write(" * ");
//         }
//     }
//     document.write("<br/>")
// }

//열종료값 + 행 = 6, 열종료값 = 6 - 행
//별시작열 = 행
//
// for(let i = 1 ;i <= 3;i++){
//     for(let j = 1;j <= 6 - i;j++){
//         if(j<i){
//             document.write(" x ");
//         }else{
//             document.write(" * ")
//         }
//     }
//     document.write("<br/>")
// }


let n = +prompt("줄 수: ");

for(let i = 1 ;i <= n;i++){
    for(let j = 1;j <= n+3-i;j++){
        if(j<i){
            document.write(" x ");
        }else{
            document.write(" * ")
        }
    }
    document.write("<br/>")
}
