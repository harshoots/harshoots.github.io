

// $(document).ready(function() {
//     var countDiv = document.getElementsByClassName('card').length;
//     var slide_total = document.getElementsByClassName("slide_total");
//     slide_total.textContent = countDiv;
// });

let slide_num = document.querySelector(".slide-num");
let displaySlide = document.querySelector(".displaySlide");
let displayThumb = document.querySelector(".displayThumb");
let total_Slide = document.querySelector(".slide_total");
let countDiv = document.querySelector(".card").length;


// Image slide function

   $(document).ready(function() {
    $('.slideshow').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infintie: true,
        loop: true,
        prevArrow: ".prevArrow",
        nextArrow: ".nextArrow",
       
        responsive: [
      {
       breakpoint: 900,
         settings: {
         arrows: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         }
    }
]
    });
});


function styleChange () {
   // body... 
   if(displaySlide.style.display === "block") {
      displaySlide.style.display = 'none';
      displayThumb.style.display = 'block';
   }
   else {
      displaySlide.style.display = 'block';
      displayThumb.style.display = 'none';
   }
}

function imagefun() {
var Image_Id = document.getElementById('Image_Id');
if (Image_Id.src.match("image/thumbnail.svg")) {
Image_Id.src = "image/slideshow.svg";
}
else {
Image_Id.src = "image/thumbnail.svg";
}
}




