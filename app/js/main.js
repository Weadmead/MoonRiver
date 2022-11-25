$(function () {

    $('.slider__inner').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '120px',
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.png" alt="arrow-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.png" alt="arrow-next"></button>',
    });

});