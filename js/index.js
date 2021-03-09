const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.navbar__ul');
const header = document.querySelector('.header');
const headerTitle = document.querySelector('.header__title');

hamburger.addEventListener('click', () =>  {
    hamburger.classList.toggle('close');
    header.classList.toggle('show');
    nav.classList.toggle('navshow');
    headerTitle.classList.toggle('invisible');
})