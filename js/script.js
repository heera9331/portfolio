function toggleMenu() {
    var menuBtn = document.querySelector('.menu-btn');
    var navbar = document.querySelector('#navbar');

    menuBtn.classList.toggle('show-menu');
    navbar.classList.toggle('show-menu');
    console.log('changed');
}
