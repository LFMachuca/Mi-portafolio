const menuIcon = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-links');
let menuOpen = false;

menuIcon.addEventListener('click',()=>{
    if (!menuOpen) {
        menu.classList.add('active')
        menuOpen = true
    }else if (menuOpen) {
        menu.classList.remove('active')
        menuOpen = false;
    }
})
