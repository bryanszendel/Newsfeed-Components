
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  // const openMenu = document.querySelector('.menu--open');
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

const articlesClick = document.querySelector('.articles');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());

menuButton.addEventListener('click', () => TweenMax.fromTo(menu, .5, {x:-350}, {x:0}));

// articlesClick.addEventListener('click', () => TweenMax.fromTo(menu, .5, {x:0}, {x:-350}));
// the above closes the menu but it is a TERRIBLE experience because it will always do it. I need to figure out some logic to include so that it only fires if the menu is open
