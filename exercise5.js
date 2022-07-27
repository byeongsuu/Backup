'use strict'

// const sh = document.getElementsByClassName('service_header'),
//       btn = document.querySelector('.btn_collapseAll');

// let standard = sh[0];

// for(let i=0; i<sh.length ;i++){
//     sh[i].addEventListener('click',()=>{
//         if(sh[i].textContent.includes('-')) return;
//         sh[i].parentNode.classList.remove('hidden');  //i번째 sh의조상에 hidden제거
//         sh[i].textContent=sh[1].textContent.replace('+','-');  //i번째 sh의 + 를 -로 바꿈
     
//         if(standard){
//         standard.parentNode.classList.add('hidden');
//         standard.textContent=standard.textContent.replace('-','+'); 
//         }
//         standard = sh[i]
//     });
// }

// btn.addEventListener('click',()=>{
//     standard.parentNode.classList.add('hidden');  //standard의 조상에 hidden추가
//     standard.textContent=standard.textContent.replace('-','+'); // standard에 -를 +로바꿈
//     standard = "";
// })

const li = document.getElementsByClassName('service_list'),
      btn = document.querySelector('.btn_collapseAll'),
      sv = document.querySelector('.service_container'),
      sh = sv.getElementsByClassName('service_header');
      let standard=sh[0].parentNode;
// for(let i=0; i<li.length ;i++){
//     li[i].children[0].addEventListener('click',(e)=>{
//         console.log(e.target);
//         makeHidden();

//         li[i].classList.remove('hidden');
//         li[i].children[0].textContent = li[i].children[0].textContent.replace('+','-'); 
        
//         standard = li[i];
//     })
// }

btn.addEventListener('click',makeHidden)

function makeHidden() {
    standard.classList.add('hidden');
    standard.children[0].textContent =  standard.children[0].textContent.replace('-','+');
}

sv.addEventListener('click',(e)=>{
    let t = e.target;
    
    if(t.className == 'service_header'){
       makeHidden();
       t.parentNode.classList.remove('hidden');
       t.textContent = t.textContent.replace('+','-');
       standard = t.parentNode;
    }
});





