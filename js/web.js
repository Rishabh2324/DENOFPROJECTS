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

(function() {
    var input = document.createElement('input');
    var supports = {};
   
    supports.required    = 'required' in input;
    supports.placeholder = 'placeholder' in input;
    if(!supports.autofocus) {
   }


if(!supports.placeholder) {
         }
    var send = document.getElementById('contact-submit');
    if(send) {
        send.onclick = function () {
            this.innerHTML = '...Sending';
        }
    }
 
})();
