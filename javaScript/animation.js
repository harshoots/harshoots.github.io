// Im =age slide function

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
let displaySlide = document.querySelector(".displaySlide");
let displayThumb = document.querySelector(".displayThumb");
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


// let slide_num_show =
let countDiv = document.querySelector(".slideshow").childElementCount;
document.querySelector(".slide_total").textContent = countDiv;
let slide_num = document.querySelector(".data").dataset.slide.num;
document.querySelector(".slide_total").textContent = slide_num;
