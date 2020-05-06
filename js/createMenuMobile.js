createMenu();



function createMenu() {
    const Navigation = document.getElementById("navi");
    const Nav = document.createElement("nav");
    const Ul = document.createElement("ul");
    Ul.classList.add("p-megaMenuMobile__lv01Wrap");
    for (let i = 1; i <= 4; i++) {
        const Li = document.createElement("li");
        const Anker = document.createElement("a");
        Li.classList.add("p-megaMenuMobile__lv01Item");
        const title = "0" + i;
        Anker.innerHTML = "Level01-" + title;
        Li.appendChild(Anker);
        Li.appendChild(createMenuChild02(title));
        Ul.appendChild(Li);
    }
    Nav.appendChild(Ul);
    Navigation.appendChild(Nav);
}

function createMenuChild02(title) {
    const DivPosition = document.createElement("div");
    const DivWidth = document.createElement("div");
    const Ul = document.createElement("ul");
    DivPosition.classList.add("p-megaMenuMobile__lv02Position");
    DivWidth.classList.add("p-megaMenuMobile__lv02Width");
    Ul.classList.add("p-megaMenuMobile__lv02Wrap");
    for (let i = 1; i <= 4; i++) {
        const Li = document.createElement("li");
        const Anker = document.createElement("a");
        Li.classList.add("p-megaMenuMobile__lv02Item");
        const title02 = title + "-0" + i;
        Anker.innerHTML = "Level02_" + title02;
        Li.appendChild(Anker);
        Li.appendChild(createMenuChild03(title02));
        Ul.appendChild(Li);
    }
    DivWidth.appendChild(Ul);
    DivPosition.appendChild(DivWidth);
    return DivPosition;
}

function createMenuChild03(title02) {
    const Ul = document.createElement("ul");
    Ul.classList.add("p-megaMenuMobile__lv03Wrap");
    for (let i = 1; i <= 4; i++) {
        const Li = document.createElement("li");
        const Anker = document.createElement("a");
        Li.classList.add("p-megaMenuMobile__lv03Item");
        const title03 = title02 + "-0" + i;
        Anker.innerHTML = "Level03_" + title03;
        Li.appendChild(Anker);
        Li.appendChild(createMenuChild04(title03));
        Ul.appendChild(Li);
    }
    return Ul
}

function createMenuChild04(title03) {
    const Ul = document.createElement("ul");
    Ul.classList.add("p-megaMenuMobile__lv04Wrap");
    for (let i = 1; i <= 4; i++) {
        const Li = document.createElement("li");
        const Anker = document.createElement("a");
        Li.classList.add("p-megaMenuMobile__lv04Item");
        const title04 = title03 + "-0" + i;
        Anker.innerHTML = "Level04_" + title04;
        Li.appendChild(Anker);
        Ul.appendChild(Li);
    }
    return Ul
}