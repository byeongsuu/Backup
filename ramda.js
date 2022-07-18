'use strict'

let add = function (n1, n2) {
    return n1+n2;
}
console.log(add(6,9));

add = (n1,n2) => n1+n2;
console.log(add(6,9));

let outputTest = function(){
    console.log("출력 테스트");
}
outputTest();

outputTest = () => console.log("화살표 테스트");
outputTest();

// =======================================================================

let repeatChar = function(char){
    for(let i=0 ; i<2 ; i++){
        console.log(char);
    }
};
repeatChar("string");

repeatChar = char => {
    for(let i=0 ; i<2 ;i++){
        console.log(char);
    }
};

repeatChar("abc");

// =====================================================================

function printOdd() {
    console.log("홀수");
}

function printEven() {
    console.log("짝수");
}

let decide_Odd_Even = function (num, odd, even) {
    (num % 2 == 1) ? odd() : even();
};

decide_Odd_Even(7, printOdd, printEven);


decide_Odd_Even = (num, odd, even) => {
    (num % 2 == 1) ? odd() : even();
};

decide_Odd_Even(    7,  ()=>console.log("홀수"), ()=>console.log("짝수")   );

// =====================================================================================

//  function calculator(n1,n2,ope) {
//     let n3;
//     switch (ope) {
//         case "+": n3=n1+n2; break;
//         case "-": n3=n1-n2; break;
//         case "*": n3=n1*n2; break;
//         case "/": n3=n1/n2; 
//     }
//     console.log(n3);
//  }

//  calculator(10,5,"+");
//  calculator(10,5,"-");
//  calculator(10,5,"*");
//  calculator(10,5,"/");

function sum(n1, n2) {
    return n1+n2;
}

function dis(n1, n2) {
    return n1-n2;
}

function mul(n1, n2) {
    return n1*n2;
}

function div(n1, n2) {
    return n1/n2;
}

function calculator(n1,n2,ope) {
    return ope(n1,n2);
}

console.log(calculator(10, 5, sum));
console.log(calculator(10, 5, dis));
console.log(calculator(10, 5, mul));
console.log(calculator(10, 5, div));

console.log(calculator(10, 5, (n1,n2)=>n1+n2));
console.log(calculator(10, 5, (n1,n2)=>n1-n2));
console.log(calculator(10, 5, (n1,n2)=>n1*n2));
console.log(calculator(10, 5, (n1,n2)=>n1/n2));

 