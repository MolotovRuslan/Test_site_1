$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
    });
});

window.onscroll = function showHeader() {
    var header = document.querySelector('.main_menu');
    if(window.pageYOffset > 200){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.btn_up').fadeIn();
        } else {
            $('.btn_up').fadeOut();
        }
    });
    $('.btn_up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});

$(document).ready(function(){
    $('.btn_up');
});