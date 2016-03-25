$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['home', 'about', 'works', 'contact'],
        scrollingSpeed: 1750,
        navigation: true,
        navigationTooltips: ['Home', 'About Me', 'Works', 'Contact']
    });
});