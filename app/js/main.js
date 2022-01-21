$(function () {

  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close')
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
  })


  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open')
  });


  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $('.contact-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
  });

  $('.article-slider__box').slick({    
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="./images/arrow-slider-left.svg" alt="arrow for slider to left"></button>' ,
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="./images/arrow-slider-right.svg" alt="arrow for slider to right"></button>' ,
  });

  

  var mixer = mixitup('.gallery__inner' , {
    load: {
      filter: '.living'
    }
  });

})