(function ($) {
	"use strict";


	// CUSTOM-JS
	// border-color-reverce
	const workbox = document.querySelectorAll('.work-text-wrap')
	const workItem = document.querySelectorAll('.work-item-wrapper')
	const mainMenu = document.querySelector('.mainmenu')
	const menuLink = document.querySelectorAll('.mainmenu ul li a')
	const openMenu = document.querySelector('.open-menu')
	for (let i = 0; i < workbox.length; i++) {
		if (i%2 == 1) {
			workbox[i].classList.add('border-color-reverce')
			workItem[i].classList.add('border-color-reverce')
		}
		
	}

	// responsive-menu shop on resize
	window.addEventListener('resize', ()=>{
		if (window.innerWidth < 992) {
			mainMenu.classList.add('active')
			openMenu.classList.add('active')
			openMenu.addEventListener('click',()=>{
				if (mainMenu.classList[2] == 'show') {
					mainMenu.classList.remove('show')
					openMenu.classList.remove('show')
				} else {
					mainMenu.classList.add('show')
					openMenu.classList.add('show')
				}
			})
		}else{
			mainMenu.classList.remove('active')
			openMenu.classList.remove('active')
		}
	})
		
	// responsive-menu
	if (window.innerWidth < 992) {
		mainMenu.classList.add('active')
		openMenu.classList.add('active')
		openMenu.addEventListener('click',()=>{
			if (mainMenu.classList[2] == 'show') {
				mainMenu.classList.remove('show')
				openMenu.classList.remove('show')
			} else {
				mainMenu.classList.add('show')
				openMenu.classList.add('show')
			}
		})
	}else{
		mainMenu.classList.remove('active')
		openMenu.classList.remove('active')
	}
	
	window.addEventListener('load', ()=>{
		menuLink.forEach(link => {
			link.addEventListener('click', ()=>{
				console.log('clicked');
				mainMenu.classList.remove('show')
				openMenu.classList.remove('show')
			})
		});
	})



    // REVIEW-SLIDER 1
    $('.review-img-slide-1').slick({
        autoplay: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-arrow-left'></i></button>",
		nextArrow: "<button type='button' class='slick-next'><i class='fas fa-arrow-right'></i></button>",
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
			}
		}
	]
	});

		// sticky
		var wind = $(window);
		var sticky = $('.header-menu-area');
		wind.on('scroll', function () {
			var scroll = wind.scrollTop();
			if (scroll < 100) {
				sticky.removeClass('sticky');
			} else {
				sticky.addClass('sticky');
			}
		});
	
	
	/*=========================
	MagnificPopup image JS
	===========================*/
	$('.review-img-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// One Page Nav
	var top_offset = $('.header-menu-area').height() - 170;
	$('.mainmenu ul, .menu-option, .footer-menu').onePageNav({
		scrollOffset: top_offset,
	});


	//=== brand-slider =====
	$('.brand-acive-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 3,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]

	});
	//=== location-slider =====
	$('.location-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',

	});
	//=== shop-slider =====
	$('.shop-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',

	});
	
	//=== product-slider =====
	$('.product-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]

	});
	
	
	//=== CLIENT-SLIDER =====
	$('.client-slider-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<div class="slick-arrow-wrap"><button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button></div>',
		nextArrow: '<div class="slick-arrow-wrap"><button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button></div>',

	});

	/*=========================
	BRAND SLIDER
	===========================*/
	$('.service-slider-active').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	// niceSelect
	$('select').niceSelect();
	/*=========================
	magnificPopup image JS
	===========================*/
	$('.work-process-video a, .video-btn').magnificPopup({
		type: 'iframe'
	});


	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
	});

	
})(jQuery);