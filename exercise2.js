'use strict'

let main_container = document.querySelector('.main_container'),
    btn_back = main_container.querySelector('.btn_back'),
    btn_foward = main_container.querySelector('.btn_foward'),
    slide_list = main_container.querySelector('.slide_list'),
    slide_list_child = slide_list.querySelectorAll('.slide_list li');

let page_left = 0;
let page = 2;
let standard = slide_list_child[2];



btn_back.addEventListener('click', () => {
    if (page == 0) return;
    let move = false;
    pageMove(move);
});


btn_foward.addEventListener('click', () => {
    if (page==4) return;
    let move = true;
    pageMove(move);
});




function pageMove(move) {
    standard.style.visibility = 'hidden';
    if(move){
        page++;
        page_left = page_left - 30;
    }else{
        page--;
        page_left = page_left + 30;
    }
    standard = slide_list_child[page];
    standard.style.visibility = 'visible';
    slide_list.style.left = `${page_left}vw`;
}