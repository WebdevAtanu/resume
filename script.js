alert("Hi there! this page is still on development. Thanks for visiting me 🙏")
 var typed = new Typed('#element', {
  strings: ['HTML.', 'CSS.','JavaScript.','Node JS.','Mongo DB.','MySQL.','Wordpress.'],
  typeSpeed: 80,
  loop: true
  });

  const navigation = document.querySelector("#skills");

        navigation.addEventListener("click", () => {
            navigation.classList.toggle("active");
        })



        let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}