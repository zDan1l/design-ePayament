const menuTog = document.querySelector('.menu-toggle input');
const go = document.querySelector('nav ul');

menuTog.addEventListener('click', function() {
    go.classList.toggle('hidden');
});