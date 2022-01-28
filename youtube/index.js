const CLASSNAME = {
  main: 'main',
  pushedMain: 'main--pushed',
  nav: 'nav',
  openNav: 'nav--open',
  toggleNavBtn: 'header__toggle-drawer-btn',
};

const main = document.getElementsByClassName(CLASSNAME.main)[0];
const nav = document.getElementsByClassName(CLASSNAME.nav)[0];

const toggleNavBtn = document.getElementsByClassName(CLASSNAME.toggleNavBtn)[0];

toggleNavBtn.addEventListener('click', () => {
  toggleNavBtn.toggleAttribute('aria-pressed');
  main.classList.toggle(CLASSNAME.pushedMain);
  nav.classList.toggle(CLASSNAME.openNav);
});
