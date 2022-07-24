'use strict'

// const namingFunc = function identify() {
//     console.log('Naming func');
// }
// namingFunc();
// console.log(namingFunc);
// // console.log(identify());

// const sum = function (a,b,c) {
//     return a+b+c;
// };
// console.log(sum(1,2,3));

// const varSum = function (obj) {
//     return obj.n1 + obj.n2 + obj.n3 + obj.n4 +obj.n5;
// };

// console.log(varSum({n1:1, n2:2, n3:3, n4:4, n5:5}));

function varSum(obj) {
    return obj.ni;
};

console.log(varSum({ni: "string", n2: 2, n3: 3, n4: 4, n5: 5}));

const output = function () {
    console.log("출력테스트");
};

const call_output = function (func) {
    func();
};

call_output(output);
