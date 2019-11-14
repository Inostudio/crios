// Menu

const buttonMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');

buttonMenu.addEventListener('click', ()=> {
    const heightMenu = document.querySelector('.menu__list').offsetHeight;

    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
        menu.style.height = 0;
        buttonMenu.classList.remove('button-menu--closed');
        buttonMenu.classList.add('button-menu--opened');
    } else {
        menu.classList.add('is-active');
        menu.style.height = heightMenu + 'px';
        buttonMenu.classList.remove('button-menu--opened');
        buttonMenu.classList.add('button-menu--closed');
    }
})

// Search

const buttonSearch = document.querySelector('.search__button');
const search = document.querySelector('.search');

buttonSearch.addEventListener('click', ()=> {
    search.classList.toggle('is-active');
})
