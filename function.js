'use strict'

//함수 : 복잡하거나 반복되는 작업을 하나의 명령어로 간단히 실행
//함수 정의 형식
//function 함수명( 매개변수 ){
//      함수 실행 블럭;
// } 

function test1(a,b) {
    console.log(a+b);
}

test1(5,3);
test1(5);
test1(7,5,4);

function test2() {
    //return undefined;   //명시적 리턴을 하지 않아도 자동으로 undefinded 리턴
}
console.log(test2());

function test4() {
    console.log("passed func");
}

function test5(func) {
    func();
}

test5(test4);

function test6(){
    console.log(n);      //함수선언후 전역변수 n을 선언하면 어디서든 참조가능 하지만
}                        //함수 호출하기이전에 반드시 전역변수가먼저 선언되야함

// test6();
let n = 25;
test6();

function div(a,b){
    if(isNaN(a)||isNaN(b)){
        console.log("입력값이 숫자가 아님");
    }else{
        console.log(a+"/"+b+"="+(a/b));
    }
}

div("9", "4");
div("a", 4);

/*
    agruments : 전달된 인수값들을 배열 형태로 내부에 저장하는 객체로써 실제 배열은 아니므로 배열에 적용되는
                메서드 속성의 사용은 불가.   agruments객체의  length속성을 이용하여 객체 내부 배열의 크기를
                조사 가능하며 배열 연산자([])를 통해 저장되어 있는 인수 값을 간접 참조 가능.
*/

function accessArguments(){
    let tot = "";
    for(let i=0; i<arguments.length; i++){
        // console.log(arguments[i]);
        tot += arguments[i];
    }
    console.log(tot);
}

accessArguments(1);
accessArguments(1,2);
accessArguments("a","b","c");
accessArguments(1,2,3,4);

function concateString(...str) {
    let strCombine = "";
    for(let i=0 ; i<str.length ; i++){
        strCombine += str[i];
    }
    return strCombine;
}
console.log(concateString("i","am","a","boy"));

function tot(...arg){
    let tot = 0;
    for(let i=0;i<arg.length;i++){
        tot += arg[i];
    }
    return tot;
}
console.log(tot(1,2,3,4,5,6,7,8,9,10));


function printName(name) {
    function print() {
        console.log(str + name);
    }
    let str = "이름: ";
    print();
}
printName("박성연");                  //로컬이너함수: 함수 내부에 종속적인 지역 함수의 정의가 가능하며
print();                             //지역변수의 특성이 적용되어 외부에서 접근불가. 따라서 로컬이너함수의 호출 호이스팅 범위는 주 함수 내로 제한.


