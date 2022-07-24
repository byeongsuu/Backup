const idx = "012345678901234567890";
const str = "both ends of a String";

// console.log(str.startsWith("both"));
// console.log(str.startsWith("ends"));
// console.log(str.startsWith("ends",5));
// console.log(str.endsWith("String"));
// console.log(str.includes("of"));

console.log(str[50]);             //배열 연산자와 charAt 기능상 동일하지만, 배열 연산자는 해당 인덱스에 문자가 존재하지않으면
console.log(str.charAt(50));      //undefined를 반환, charAt은 빈 문자열 반환

// console.log(str.indexOf("t"));
console.log(str.indexOf("t",3));
// console.log(str.lastIndexOf("t"));

// console.log("A".codePointAt());
// console.log("ABC".codePointAt(1));
// console.log("a".codePointAt());
// console.log("abc".codePointAt(1));

// console.log(String.fromCodePoint(65));
// console.log(String.fromCodePoint(97,98));

const dis = "a".codePointAt() = "A".codePointAt();

let input = "t";
let lowerCode = input.codePointAt();

console.log(String.fromCodePoint(lowerCode - dis));