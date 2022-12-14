$(function () {

  let wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  $('.header__btn').on('click', function () {
    $('.rightside').removeClass('rightside-menu--close');
  });
  $('.rightside__top-btn').on('click', function () {
    $('.rightside').addClass('rightside-menu--close');
  });


  let height = -1;

  $('.tab__content').each(function () {
    height = height > $(this).outerHeight() ? height : $(this).outerHeight();
    $(this).css('position', 'absolute');
  });

  // set height of tabs + top offset
  $('[data-tabs]').css('min-height', height + 40 + 'px');

  $('.slider__inner').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '120px',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.png" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.png" alt="arrow-next"></button>',
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '250px',
        }
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 1222,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 1122,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '230px',
        }
      },
      {
        breakpoint: 888,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '190px',
        }
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '110px',
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '70px',
          dots: false,
        }
      },
      {
        breakpoint: 558,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
          dots: false,
        }
      },

    ]
  });

});