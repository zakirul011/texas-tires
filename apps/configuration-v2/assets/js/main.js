(function ($) {
	"use strict";

   /*=========================
	PRELOADER JS
	===========================*/
   $(window).on("load", function (event) {
      $(".proloader").delay(500).fadeOut(500);
   });

   /* ======= Hamburger Menu  ======= */
   $(".hamberguer-menu, .close-btn").on("click", function () {
      $(".sidebar-menu-wrapper").toggleClass("navbar-on");
   });
	
   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
   })
   


	
})(jQuery);