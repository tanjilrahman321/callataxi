$(document).ready(function(){

  

// Slick Slider jq
      $('.autoplay').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      // Aos Js
      AOS.init({
        offset: 120,
        duration: 1000,
      });
// type js
  var typing = new Typed (".typing" ,{

            strings : ['"Call-A-Taxi"','"Taxi-Service"','"Service-In-Scotland"'],
            typeSpeed: 120,
            backSpeed:60,
            loop:true
        });
      
});