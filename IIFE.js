'use strict';

/*
    < 즉시 실행 함수 표현(Immediately Invoked Function Expression) >

- 정의된 익명 함수 자기 자신을 호출하여 실행하는 형식으로써 구조형식은 익명함수를
  그룹핑하는 소괄호() 부분과 실행 호출을 위한 소괄호()로 구성.
  참조를 전달할 필요없이 일회성 실행을 하는 경우 유용.

형식    :   ( function( ) {
                실행블럭;
            } ) ( );

*/

(function(){
    console.log("IIFE 테스트");
})();

(() => {
    console.log("람다 테스트");
    })();

let fruitName = (function(fruit){
    switch (fruit) {
        case "apple": return "사과";
        case "banana": return "바나나";
        case "melon": return "메론";
        case "strawberry": return "딸기";
        default:
            return "해당 과일이 없습니다.";
    }
})("strawberry");

fruitName = ((fruit)=>{
    switch (fruit) {
        case "apple": return "사과";
        case "banana": return "바나나";
        case "melon": return "메론";
        case "strawberry": return "딸기";
        default:
            return "해당 과일이 없습니다.";
    }
})("melon");

console.log(fruitName);