(function ($) {
   "use strict";

   //next prev page
   const nextBtn = document.querySelector(".next");
   const qouteBtn = document.querySelector(".get-qoute-btn");
   const pages = document.querySelectorAll(".pages");
   pages[0].style.display = "block";
   nextBtn.addEventListener("click", () => {
      pages[0].style.display = "none";
      pages[1].style.display = "block";
   });
   qouteBtn.addEventListener("click", () => {
      pages[1].style.display = "none";
      pages[2].style.display = "block";
   });

   //color active checked

   const allColor = document.querySelectorAll(".color-panal-item ul li");
   addActiveClass(allColor);
   function addActiveClass(additions) {
      additions.forEach((addition) => {
         addition.addEventListener("click", () => {
            for (let i = 0; i < additions.length; i++) {
               additions[i].classList.remove("active");
            }
            addition.classList.add("active");
         });
      });
   }

   // tab of color list
   function tab() {
      const colorNameList = document.querySelectorAll(".color-name-list ul li");
      const colorPanal = document.querySelectorAll(".color-panal-item");

      colorNameList.forEach((name, index) => {
         name.addEventListener("click", () => {
            for (let i = 0; i < colorPanal.length; i++) {
               colorPanal[i].classList.remove("active");
               colorNameList[i].classList.remove("active");
            }
            colorPanal[index].classList.add("active");
            name.classList.add("active");
         });
      });
   }
   tab();

   /* ======= Hamburger Menu  ======= */
   $(".hamberguer-menu, .close-btn").on("click", function () {
      $(".sidebar-menu-wrapper").toggleClass("navbar-on");
   });

   /*=========================
	PRELOADER JS
	===========================*/
   $(window).on("load", function (event) {
      $(".proloader").delay(500).fadeOut(500);
   });

   // tooltip
   $(function () {
      $('[data-toggle="tooltip"]').tooltip();
   });

   /*=========================
	AOS JS
	===========================*/
   AOS.init({
      disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
   });
})(jQuery);
