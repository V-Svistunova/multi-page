import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp(); // для коректной работы пребразования файлов в webp формат

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

  if($(window).width() < 650) {
    $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
  }

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
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
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