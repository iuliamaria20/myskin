const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#navbarNav');

menuToggle.addEventListener('click', function() {
	mainMenu.classList.toggle('open');
});
