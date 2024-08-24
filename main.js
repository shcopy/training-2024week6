// Import
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; // 覆蓋 bootstrap

import './assets/scss/all.scss';

import 'bootstrap/dist/js/bootstrap.min.js';

import AOS from 'aos';
import './node_modules/aos/dist/aos.css';

import jQuery from 'jquery';
window.$ = jQuery;

/* jQuery(".navbar-toggler").click(function () {
  //jQuery(".btn").toggleClass("active");
  jQuery(".hamburger-icon").toggleClass("close");
  // jQuery(".hamburger-icon").css("display","none");
  jQuery(".closure").toggleClass("close");
  // jQuery(".closure").css("display","none");
  //jQuery("ul").toggleClass("close");
}); */


const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});


const swiper2 = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



// JavaScript
// News swiper
const newsSwiper = new Swiper(".newsSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
  
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
    navigation: {
      nextEl: ".swiper-button-next-news",
      prevEl: ".swiper-button-prev-news",
      clickable: true,
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
  
  
  // furtherReading Swiper
  const furtherReadingSwiper = new Swiper(".furtherReadingSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,

    // Responsive breakpoints
 /*    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 24
      }
    }, */
  
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    /* navigation: {
      nextEl: ".swiper-button-next-comment",
      prevEl: ".swiper-button-prev-comment",
      clickable: true,
    }, */
  
   /*  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, */
  });
 
  
  // aos
  AOS.init();
  
  
  // jQuery
  // Signin/ login
  $('.needs-validation').each(function (index) {
    $(this).on('submit', function (e) {
      e.preventDefault();
      $(this).addClass('was-validated');
    });
  });

console.log("Hello world!");