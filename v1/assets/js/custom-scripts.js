$(document).ready(function () {
  'use strict';

  //===== Width =====//
  var width = window.innerWidth;

  //===== Wow Animation Setting =====//
  if ($(".wow").length > 0) {
    var wow = new WOW({
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }); 

    wow.init();
  }

  //===== Side Menu =====//
  $('.res-menu-btn').on('click', function () {
    $('nav').addClass('slidein');
    return false;
  });
  $('.close-menu-btn').on('click', function () {
    $('nav').removeClass('slidein');
  });

  //===== LightBox =====//
  if ($.isFunction($.fn.ddslick)) {
    $('.slc-box > select').ddslick({
      defaultSelectedIndex:2
    });
  }

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {

    //=== Testimonials Carousel ===//
    $('.testi-caro').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      speed: 3000,
      draggable: true,
      dots: true,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='fas fa-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='fas fa-arrow-right'></i></button>"
    });

    //=== Office Address Carousel ===//
    $('.office-address-caro').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: false,
      autoplaySpeed: 5000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      speed: 3000,
      draggable: true,
      dots: true,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='fas fa-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='fas fa-arrow-right'></i></button>"
    });

  }

}); //===== Document Ready Ends =====//