lv01clickAction();

function lv01clickAction() {
    let lv01Item = document.querySelectorAll(".p-megaMenu__lv01Item");
    let lv02Item;
    let lv03Item;
    let lv01Wrap;
    let lv02Wrap;
    let lv03Wrap;
    let lv04Wrap;
    let clickedlv01Item;
    let clickedlv02Item;
    let clickedlv03Item;
    let clickedlv04Item;

    for (let i = 0; i < lv01Item.length; i++) {
        lv01Item[i].addEventListener('click', function() {
            clickedlv01Item = this;
            if (clickedlv01Item.classList.contains('is-active')) {
                clickedlv01Item.classList.remove('is-active');
                return;
            } else {
                removeLv01ActiveClass(lv01Item);
                clickedlv01Item.classList.add('is-active');
                lv02FirstChildSelect(clickedlv01Item);
            }
        })
    }
}



// Lv01のactive-classを削除
function removeLv01ActiveClass(lv01Item) {
    for (let i = 0; i < lv01Item.length; i++) {
        if (lv01Item[i].classList.contains("is-active")) {
            lv01Item[i].classList.remove("is-active");
            lv02Item = lv01Item[i].querySelectorAll(".p-megaMenu__lv02Item");
            removeLv02ActiveClass(lv02Item);
            return;
        }
    }
}
// Lv02のactive-classを削除
function removeLv02ActiveClass(lv02Item) {
    for (let i = 0; i < lv02Item.length; i++) {
        if (lv02Item[i].classList.contains('is-active')) {
            lv02Item[i].classList.remove('is-active');
            lv03Item = lv02Item[i].querySelectorAll(".p-megaMenu__lv03Item");
            removeLv03ActiveClass(lv03Item);
            return;
        }
    }
}
// Lv03のactive-classを削除
function removeLv03ActiveClass(lv03Item) {
    for (let i = 0; i < lv03Item.length; i++) {
        if (lv03Item[i].classList.contains('is-active')) {
            lv03Item[i].classList.remove('is-active');
            return;
        }
    }
}

function lv02FirstChildSelect(clickedlv01Item) {
    lv02Item = clickedlv01Item.querySelectorAll('.p-megaMenu__lv02Item');
    lv02clickAction(lv02Item);
    lv02Item[0].classList.add('is-active');
    lv03Item = lv02Item[0].querySelectorAll('.p-megaMenu__lv03Item');
    lv03Item[0].classList.add('is-active');
}

function lv03FirstChildSelect(clickedlv02Item) {
    lv03Item = clickedlv02Item.querySelectorAll('.p-megaMenu__lv03Item');
    lv03clickAction(lv03Item);
    lv03Item[0].classList.add('is-active');
}


function lv02clickAction(lv02Item) {
    for (let i = 0; i < lv02Item.length; i++) {
        lv02Item[i].addEventListener('click', function(e) {
            e.stopPropagation();
            clickedlv02Item = this;
            if (clickedlv02Item.classList.contains('is-active')) {
                return;
            } else {
                removeLv02ActiveClass(lv02Item);
                clickedlv02Item.classList.add('is-active');
                lv03FirstChildSelect(clickedlv02Item)
            }
        });
    }
}

function lv03clickAction(lv03Item) {
    for (let i = 0; i < lv03Item.length; i++) {
        lv03Item[i].addEventListener('click', function(e) {
            e.stopPropagation();

            clickedlv03Item = this;
            if (clickedlv03Item.classList.contains('is-active')) {
                return;
            } else {
                removeLv03ActiveClass(lv03Item);
                clickedlv03Item.classList.add('is-active');
                // lv04FirstChildSelect(clickedlv03Item)
            }
        });
    }
}