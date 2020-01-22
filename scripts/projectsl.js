
 
$(document).ready(function () {
    AOS.init();

 });

if (window.innerWidth < 700){
    $('.burger').on('click', function (e) {
        $('.menu').fadeToggle(200);
    })

    $('.menu').on('click', function (e) {
        $('.menu').fadeToggle(200);
    })
}
