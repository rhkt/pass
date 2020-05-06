const openCloseButton = document.querySelector('.openCloseButton');
const openButton01 = document.querySelector('.openButton01');
const openButton02 = document.querySelector('.openButton02');
const openButton03 = document.querySelector('.openButton03');
const openButton04 = document.querySelector('.openButton04');
const Li01 = document.querySelectorAll('.p-megaMenuMobile__cover01 li');
const Li02 = document.querySelectorAll('.p-megaMenuMobile__cover02 li');
const Li03 = document.querySelectorAll('.p-megaMenuMobile__cover03 li');
const Cover01 = document.querySelector('.p-megaMenuMobile__cover01');
const Cover02 = document.querySelector('.p-megaMenuMobile__cover02');
const Cover03 = document.querySelector('.p-megaMenuMobile__cover03');
// const Cover04 = document.querySelector('.p-megaMenuMobile__cover04');
console.log(Li01);

for (let i = 0; i < Li01.length; i++) {
    Li01[i].addEventListener('click', function() {
        ClickedButton = this;
        openCover(ClickedButton.dataset.address);
    });
}
for (let i = 0; i < Li02.length; i++) {
    Li02[i].addEventListener('click', function() {
        ClickedButton = this;
        openCover(ClickedButton.dataset.address);
    });
}
for (let i = 0; i < Li03.length; i++) {
    Li03[i].addEventListener('click', function() {
        ClickedButton = this;
        openCover(ClickedButton.dataset.address);
    });
}

function openCover(window) {
    console.log(window);
    if (window === "cover02") {
        Cover02.style.width = "100%";
    } else if (window === "cover03") {
        Cover03.style.width = "100%";
    } else if (window === "prev02") {
        Cover02.style.width = "0";
    } else if (window === "prev03") {
        Cover03.style.width = "0";
    } else {
        console.log("OTHERS");
    }
}


openCloseButton.addEventListener('click', function() {
    if (Cover01.style.width === '100%') {
        Cover01.style.width = '0';
        Cover02.style.width = '0';
        Cover03.style.width = '0';
    } else {
        Cover01.style.width = '100%';
    }
});
// openButton02.addEventListener('click', function() {
//     Cover02.style.width = '100%';
// });
// openButton03.addEventListener('click', function() {
//     Cover03.style.width = '100%';
// });
// openButton04.addEventListener('click', function() {
//     Cover04.style.width = '100%';
// });
// Cover01.addEventListener('click', function() {
//     // this.style.width = '0';
// });
// Cover02.addEventListener('click', function() {
//     this.style.width = '0';
// });
// Cover03.addEventListener('click', function() {
//     this.style.width = '0';
// });
// Cover04.addEventListener('click', function() {
//     this.style.width = '0';
// });