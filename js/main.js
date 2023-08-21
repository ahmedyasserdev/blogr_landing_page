const navbarToggler = document.getElementById('navbarToggler');
const navbarToggleIcon = document.getElementById('navbarToggleIcon');

navbarToggler.addEventListener('click', function () {
    const currentSrc = navbarToggleIcon.getAttribute('src');
    const hamburgerIcon = 'images/icon-hamburger.svg';
    const closeIcon = 'images/icon-close.svg';

    if (currentSrc === closeIcon) {
        navbarToggleIcon.setAttribute('src', hamburgerIcon);
    } else {
        navbarToggleIcon.setAttribute('src', closeIcon);
    }
});