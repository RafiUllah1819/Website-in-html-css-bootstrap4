$(document).ready(function(){
 
    $('.footer-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        mobileFirst: true,
        responsive: [
              {
                      breakpoint: 768,
                      settings: 'unslick'
              }
        ]
      });
})




function myFunction(x) {
    x.classList.toggle("change");
  }