$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

function mode() {
    let docBody = document.body;
    docBody.classList.toggle("dark_mode");
}