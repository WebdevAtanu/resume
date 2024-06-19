function mode() {
    let docBody = document.body;
    docBody.classList.toggle("dark_mode");
};
$("#about_me").click(() => {
    $("#aboutMe").slideDown(900);
    // $("#aboutMe").style.display = 'block';
    let audio = new Audio("./tone/tone1.mp3");
    audio.play();
})
$("#closeAbout").click(() => {
    $("#aboutMe").slideUp(900);
    let audio = new Audio("./tone/tone2.mp3");
    audio.play();
})
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        // items:2,
        loop: true,
        // margin: 10,
        autoplay: true,
        // dots: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,

            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
            }
        }
    });

});

AOS.init();