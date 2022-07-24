// let standard = nation[0];

// function getOpacity(ele) {
//     let temp = window.getComputedStyle(ele).getPropertyValue("opacity");
//     return temp;
// }

// for (let i = 0; i < nation.length; i++) {
//     nation[i].addEventListener('click', function () {
//         img.src = `img${i + 1}.jpg`;

//         let temp = getOpacity(this);
//         this.style.opacity = getOpacity(standard);
//         standard.style.opacity = temp;
//         standard = this;
//     });
// }



'use strict';

let imageList = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

let main_container = document.querySelector("#main_container"),
    img = main_container.querySelector('img'),
    nation_container = main_container.querySelector(".nation_container");

for (let j = 0; j < imageList.length; j++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation1">${j + 1}</a>`;
}

let nation = document.getElementsByClassName("nationBox");
let before = nation[0];







let i = 1;

let b = true;

function func() {
    let i2 = i%imageList.length;
    // console.log("i="+i+ " i2="+i2);
    img.src = imageList[i2];

    before.style.opacity = .5;
    nation[i2].style.opacity = 1;
    before = nation[i2];
    i++;
}

let id = setInterval(func, 1000);

main_container.addEventListener("click", function () {
    if(b) {
        clearInterval(id);
        b = false;
    }
    else {
        id = setInterval(func, 1000);
        b = true;
    }
});






// for (let i = 0; i < nation.length; i++) {
//     nation[i].addEventListener('click', a);
// }









// function a() {
//     img.src = imageList[this.textContent-1];

//     before.style.opacity = .5;
//     this.style.opacity = 1;

//     before = this;
// }
