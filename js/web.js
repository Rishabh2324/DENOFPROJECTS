$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});
var typed = new Typed('h1', {
  strings: ["", "Need an App ,We are here for You"],
  typeSpeed: 60 
}); 
$('.parallax-window').parallax({imageSrc: './assets/parallaz.jpg'});
jQuery(window).trigger('resize').trigger('scroll');
$('.parallax-window').parallax({
    naturalWidth: 600,
    naturalHeight: 400
  });
