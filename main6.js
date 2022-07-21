'use strict'

let btn = document.getElementsByTagName('button'),
span = document.getElementsByTagName('span');
let b = true;

btn[0].addEventListener('dblclick', () => {
    btn[1].style.cursor = 'none';
});

btn[1].addEventListener('dblclick', event => {
    if(b){
        event.target.style.cursor = 'wait';
        b = false;
    }
    else {
        event.target.style.cursor = 'none';
        b = true;
    }
});

btn[2].addEventListener('dblclick', () => {
    btn[0].style.pointerEvents = 'none';
    console.log( btn[0].style.pointerEvents);
});

btn[3].addEventListener('dblclick', () => {
    span[0].style.cursor = 'default';
});

btn[4].addEventListener('dblclick', () => {
    btn[0].style.pointerEvents = 'auto';
});

span[0].addEventListener('dblclick', ()=>{
    btn[0].style.pointerEvents = 'auto';
});

let box1 = document.getElementsByClassName('box1');

box1[0].addEventListener('mousedown', function () {
    this.style.fontSize = '2em';
    this.style.color = 'blue';
});

box1[0].addEventListener('mouseup',function () {
    this.style.fontSize = '1px';
    this.style.color = 'red';
});

let box2 = document.getElementsByClassName('box2');

box1[1].addEventListener('mouseenter',function () {
    box2[0].textContent = +box2[0].textContent + 1;
})

box2[1].textContent = 100;
box1[2].addEventListener('mouseleave',function () {
   box2[1].textContent = box2[1].textContent - 1; 
});

box1[3].addEventListener('mouseover',function () {
   box2[2].textContent = +box2[2].textContent + 1; 
});

box2[3].textContent = 100;
box1[4].addEventListener('mouseout', function () {
    box2[3].textContent = box2[3].textContent - 1;
});

let box3 = document.getElementsByClassName('box3');
let circle = document.querySelector('.circle');

box3[0].addEventListener('mousemove',function (event) { 
//    console.log('pageX' + event.pageX);
//    console.log(event.pageY);
   
   setTimeout(() => {
    circle.style.display = 'none';
    circle.style.left = `${event.offsetX}px`;
    circle.style.top = `${event.offsetY}px`;
    circle.style.display = 'inline-block';
   }, 400);
});

