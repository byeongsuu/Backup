'use strict'

let li = document.getElementsByTagName('li'),
body = document.querySelector('body');

let i = 0;

window.addEventListener('load', () => {
    for(let i=0 ; i<li.length;i++){
        setTimeout(() => {
            li[i].style.backgroundColor = "yellow";
        }, i * 500);
    }
});

let scrollBox = document.querySelector('.scrollBox');

let stop;

document.addEventListener('scroll', () => {
    let posX = parseInt(window.scrollX),
        posY = parseInt(window.scrollY);

    // scrollBox.style.display = 'block';
    scrollBox.innerHTML = `x = ${posX}, y = ${posY}`;

    // if (posX > 500 || posY > 500) {
    //     window.scroll(0, 0);
    //     // window.scrollTo(0,0);
    // }
    let i = 1;
    // if (posX > 500) {
    //     let stopTimeout = setInterval(() => {
    //         console.log(`${i}바퀴`);
    //         window.scrollTo(posX -= 50, posY);
    //         console.log("x="+posX+" y="+posY);
    //         if (posX <= 0) {
    //             clearInterval(stopTimeout)
    //             console.log("stop");
    //         }
    //         i++;
    //     }, 200);
    // }

    // if (posX > 500) {
    //     let stopTimeout = setInterval(() => {
    //         console.log(`${i}바퀴`);
    //         window.scrollBy(-5, posY);
    //         console.log("x="+posX+" y="+posY);
    //         if (posX <= 0) {
    //             clearInterval(stopTimeout)
    //             console.log("stop");
    //         }
    //         i++;
    //     }, 1000);
    // }

    // if (posY > 500) {
    //     let stopTimeout = setInterval(() => {
    //         window.scroll( posX, posY -= 5);
    //         if (posY <= 0) {
    //             clearInterval(stopTimeout);
    //         }

    //     }, 10);
    // }

    // body.addEventListener("click",()=>{
    //     window.scroll(501,501);
    // });
    
// ========================================================================================================
  if (posX > 500) {
        backScroll(() => window.scroll(posX -= 5, posY));
    }

    if (posY > 500) {
        backScroll(() => window.scroll(posX, posY -= 5));
    }

    function backScroll(backSc) {
        let stopTimeout = setInterval(() => {
            backSc();

            if (posX < 0 || posY < 0) {     // posX 와 posY 가 직접 감소 연산을 하는 상태에서
                clearInterval(stopTimeout); // posX 와 posY 를 동시에 비교하므로 이하(<=)로 비교시
            }                               // setInterval 함수의 두 번째 루틴시 감소 연산을 하는
        }, 5);                              // 좌표가 아닌, 다른쪽의 좌표는 그대로 0 을 유지하므로
    }                                       // 참으로 평가되어 바로 clearInterval 함수가 호출되어
    //                                      // setInterval 함수가 바로 종료됨에 주의.

    /*
        scrollBox 가 5초 뒤에 화면에 보이지 않도록 설정.
    */
        clearTimeout(stop);
    
        stop = setTimeout(() => {
            scrollBox.style.display = 'none';
        }, 5000);
}); 
