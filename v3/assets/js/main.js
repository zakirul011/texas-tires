(function ($) {
	"use strict";


	// responsive menu event
	const humbergerIcon = document.querySelector('.humberger-icon')
	const mainmenu = document.querySelector('.mainmenu')
	const overlayResponsive = document.querySelector('.overlay-responsive')
	const mainmenuLinks = document.querySelectorAll('.mainmenu ul li a')
	humbergerIcon.addEventListener('click', ()=>{
		humbergerIcon.classList.toggle('active')
		mainmenu.classList.toggle('active')
		overlayResponsive.classList.toggle('active')
	})
	overlayResponsive.addEventListener('click', ()=>{
		humbergerIcon.classList.remove('active')
		mainmenu.classList.remove('active')
		overlayResponsive.classList.remove('active')
	})
	mainmenuLinks.forEach(link => {
		link.addEventListener('click', ()=>{
			humbergerIcon.classList.remove('active')
			mainmenu.classList.remove('active')
			overlayResponsive.classList.remove('active')
		})
	});

	//dropdown more menus
	const plusIcon = document.querySelector('.plus-icon i');
	const moreMenu = document.querySelector('.more-menu');
	const moreMenuLink = document.querySelectorAll('.more-menu ul li');

	plusIcon.addEventListener('click', ()=>{
		moreMenu.classList.toggle('active')
		plusIcon.classList.toggle('active')
	})
	moreMenuLink.forEach(link => {
		link.addEventListener('click', ()=>{
			moreMenu.classList.toggle('active')
			plusIcon.classList.toggle('active')
		})
	});



	
	window.addEventListener('load', ()=>{
		const serviceCardBack = document.querySelectorAll('.service-card-back')
		let x
		serviceCardBack.forEach(cardBack => {
			x = 0;
			for (let i = 0; i < cardBack.children.length; i++) {
				x += cardBack.children[i].clientHeight;
			}
			cardBack.parentElement.style.height = `${x}px`
		});
	})
	

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .sidebar-menu ul, .header-area ul, .single-hero-slider, .footer-menu ul').onePageNav({
		scrollOffset: top_offset,
	});

	

	/*=========================
	Hero-slider SLIDER JS
	===========================*/
	function mainSlider() {
		var BasicSlider = $('.slide-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.slider-item:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.slider-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			arrows: false,
			responsive: [{
				breakpoint: 767,
				settings: {
					dots: true,
					arrows: false
				}
			}]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();


	/*=========================
	quality-active-slider
	===========================*/
	$('.quality-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true
	});

	/*=========================
	client-active-slider
	===========================*/
	$('.client-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
		autoplay: true,
	});

	/*=========================
	membership-active-slider
	===========================*/
	$('.membership-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
		autoplay: true,
	});

	/*=========================
	team-active-slider
	===========================*/
	$('.team-active-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
		autoplay: true,

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
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
					slidesToShow: 2
					,arrows: true,
				}
			}
		]
	});

	/*=========================
	location-active-slider
	===========================*/
	$('.location-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
		autoplay: true,

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


	/*=========================
	product-active-slider
	===========================*/
	$('.product-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
		autoplay: true,

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});



	/*=========================
	footer-gallery-slider
	===========================*/
	$('.footer-gallery-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
		autoplay: true,

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			}
		]
	});

	/*=========================
	shop-active-carousel
	===========================*/
	$('.shop-active-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: true,
  		centerPadding: '0px',
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
		autoplay: true,

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});



	/*=========================
	active-hero-slider
	===========================*/
	$('.active-hero-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
		autoplay: true,
	});



	// sticky
	var wind = $(window);
	var sticky = $('.header-area');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

	/*<===isotop==>*/

	//change the active class on btn
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.col-md-6',
			layoutMode: 'fitRows'
		});
		// filter items on button click
		$('.work-buttons').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		})

	});

	const filterBtn = document.querySelectorAll('.work-buttons button')
	filterBtn.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < filterBtn.length; i++) {
				filterBtn[i].classList.remove('active')
			}
			btn.classList.add('active')
		})
	});

	



	
	/*=========================
	magnificPopup image JS
	===========================*/
	$('.view-video-pop, .service-play-icon a').magnificPopup({
		type: 'iframe'
	});

	//magnificPopup img view 
	$(".view-img-pop").magnificPopup({
		type: "image",
		gallery: {
		enabled: true,
		},
	});
    /*=========================
    NICE-SELECT JS
    ===========================*/
    $('select').niceSelect();

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