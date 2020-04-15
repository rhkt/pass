< script >
    const HEADER = document.getElementsByTagName("header");
window.addEventListener("scroll", Shrink);
window.addEventListener("load", Shrink);
window.addEventListener('resize', Shrink);
console.dir(HEADER);

function Shrink() {
    if (document.documentElement.scrollTop > 80 && window.innerWidth > 750) {
        HEADER[0].classList.add("is_shrink");
    } else {
        HEADER[0].classList.remove("is_shrink");

    }
} <
/script>