let header = document.querySelector('.header');
let nav_left = document.querySelector('.header .nav_left');
let nav_right = document.querySelector('.header .nav_right');
let butt_menu = document.querySelector('.header .container_icon_header #butt_menu');

let statusYCur = 0;
window.addEventListener("scroll", (e) => {
    let statusY = scrollY;
    let y = 100;
    if(statusY > y && statusY > statusYCur){
        header.style.display = 'none'
        statusYCur = scrollY;
    }else if(statusY < statusYCur){
        header.style.display = 'flex'
        statusYCur = scrollY;
    }
});

butt_menu.addEventListener('click',()=>{
    nav_left.classList.toggle('active');
    nav_right.classList.toggle('active');

})