(function ($) {
	"use strict";

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});



	/*=========================
	HERO SLIDER JS
	===========================*/
	function heroSlider() {
		var BasicSlider = $('.hero-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.hero-slide:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
			appendArrows: '.hero-slider-wrap .slider-nav',
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

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
	heroSlider();


	/*=========================
	collection-slider
	===========================*/
	$('.collection-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: true,
		centerPadding: '0px',
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
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
	testimony-slider
	===========================*/
	$('.testimony-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){  
		let prev_slick_img = $('.testimony-slider .slick-current').prev().find('.client-img').attr("src");  
		let next_slick_img = $('.testimony-slider .slick-current').next().find('.client-img').attr("src");

		let prev_nav_img = $('.testimony-slider-nav-prev img')
		let next_nav_img = $('.testimony-slider-nav-next img')

		prev_nav_img.attr("src", prev_slick_img);
		next_nav_img.attr("src", next_slick_img);

		prev_nav_img.attr("src", prev_slick_img);
		next_nav_img.attr("src", next_slick_img);

		function addPop(img) {
			img[0].style.animation = "fadeIn .5s";
			img[0].addEventListener('animationend', ()=>{
				img[0].style.animation = "";
			})
		}
		addPop(prev_nav_img);
		addPop(next_nav_img);

		$('.testimony-slider-nav').removeClass('slick-arrow')
	});
	$('.testimony-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '.testimony-slider-nav-prev',
		nextArrow: '.testimony-slider-nav-next',
	});

	/*=========================
	magnificPopup image JS
	===========================*/
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});

	$('.pop-img-btn').magnificPopup({
		type: 'image'
	});
	$('.gallery-item a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		}
	});

	
	// applyLergestheight
	window.addEventListener('resize', ()=>{
		applyLergestheight(document.querySelectorAll('.experience-item'))
		applyLergestheight(document.querySelectorAll('.location-bx'))
	})
	applyLergestheight(document.querySelectorAll('.experience-item'))
	applyLergestheight(document.querySelectorAll('.location-bx'))

	function applyLergestheight(items) {
		const itemheight = []
		items.forEach(item => {
			itemheight.push(item.children[0].offsetHeight)
		});
		items.forEach(item => {
			item.style.height = Math.max.apply(null, itemheight) + 'px'
		});
	}

	// sticky
	var wind = $(window);
	var sticky = $('.header-area');
	var holder = $('.header-holder');
	holder.css('height', sticky.height())
	wind.on('resize', function () {		
		holder.css('height', sticky.height())
	})
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

	
   // niceSelect
   $("select").niceSelect();

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

	// skrollr activation
	var s = skrollr.init({
		forceHeight: false,
		smoothScrollingDuration: 500,
	});
	if (s.isMobile()) {
			s.destroy();
	}

	// counterUp
	const countings = document.querySelectorAll(".counting");
	const speed = 200;
	countings.forEach((counting) => {
		let h = 0;
		const updateCount = () => {
		  const target = +counting.getAttribute("data-target");
		  const count = +counting.innerText;
		  const inc = target / speed;
		  if (count < target) {
			counting.innerText = Math.ceil(count + inc);
			setTimeout(updateCount, 1);
		  } else {
			counting.innerText = target;
		  }
		};
	
		window.addEventListener("scroll", () => {
		  let countingTop = counting.getBoundingClientRect().top;
		  if (countingTop <= window.innerHeight && h == 0) {
			updateCount();
			h = 1;
		  }
		});

	  });

	// custom tab
	tabFunc(document.querySelectorAll('.product-link li'), document.querySelectorAll('.product-tab'))

	function tabFunc(tabLinks, tabs) {
		tabLinks.forEach((link, index) => {
			link.addEventListener('click', ()=>{
				for (let i = 0; i < tabLinks.length; i++) {
					tabLinks[i].classList.remove('active')
					tabs[i].classList.remove('active')
				}
				link.classList.add('active')
				tabs[index].classList.add('active')
			})
		});
	}

	// add serial
	const timelineSerials = document.querySelectorAll('.timeline-serial')
	timelineSerials.forEach((serial, index) => {
		serial.innerText = index + 1
	});

		
	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .responsive-menu ul').onePageNav({
		scrollOffset: top_offset,
	});

	
// responsive menu
const resBar = document.querySelectorAll(
    ".humberger-bar, .resonsive-slide-overlay"
  );
  resBar.forEach((btn) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < resBar.length; i++) {
        resBar[i].classList.toggle("active");
      }
      document.querySelector(".resonsive-slide").classList.toggle("active");
    });
  });

  // if has child
  const listItem = document.querySelectorAll(".responsive-menu ul li");
  listItem.forEach((item) => {
    if (item.contains(item.querySelector("ul"))) {
      item.classList.add("has-child");
      item.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
      });
    }
  });

  // responsive menu clicking event
  const responsiveMenuLink = document.querySelectorAll(
    ".responsive-menu ul li.has-child"
  );
  responsiveMenuLink.forEach((link) => {
    link.addEventListener("click", () => {
      let submenu = document.querySelector(".submenu");
      link.classList.toggle("active");
      submenu.classList.toggle("active");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + 10 + "px";
      }
    });
  });

	
})(jQuery);