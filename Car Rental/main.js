let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* ScrollReveal */

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
/*
sr.reveal('.text',{delay: 200,origin:'top'})
sr.reveal('.form-container form',{delay: 800,origin:'left'})
  sr.reveal('.heading',{delay: 800,origin:'top'})
sr.reveal('.ride-container .box',{delay: 600,origin:'top'})
sr.reveal('.services-container .box',{delay: 600,origin:'top'})
sr.reveal('.about-container .box',{delay: 600,origin:'top'})
sr.reveal('.reviews-container',{delay: 600,origin:'top'})  */

function topScroll(){
    const topScrollCont = document.getElementById('top-scroll-content')
    if (this.scrollY >= 470){
        topScrollCont.classList.add('top-scroll-up')
    }
    else{
        topScrollCont.classList.remove('top-scroll-up')
    }
}
window.addEventListener('scroll', topScroll)
const topScrollContClick = document.querySelector('.top-scroll-content')
topScrollContClick.addEventListener('click', function(){
    scrollBy(0,0)
})

/* Sign in up */
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.sign-in');
const iconClose = document.querySelector('.icon-close');
const contentWrapper = document.querySelector('.content-wrapper')

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
    contentWrapper.classList.add('contenwpr-none')
});

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
    contentWrapper.classList.remove('contenwpr-none')
});