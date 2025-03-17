const menuIcon = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');
const links = document.querySelectorAll('.link')



menuIcon.addEventListener("click", ()=>{
    menu.classList.toggle("active");


})

links.forEach(link =>{
    link.addEventListener('click', ()=>{
        menu.classList.remove('active');
    })
})