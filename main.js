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
  
  
  // Comment swiper
  const commentSwiper = new Swiper(".commentSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
  
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
  
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
    navigation: {
      nextEl: ".swiper-button-next-comment",
      prevEl: ".swiper-button-prev-comment",
      clickable: true,
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  
  // playlist-1
  const swOne = new Swiper(".swOne", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next-swOne",
      prevEl: ".swiper-button-prev-swOne",
      clickable: true,
    },
  });
  
  // playlist-2
  const swTwo = new Swiper(".swTwo", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next-swTwo",
      prevEl: ".swiper-button-prev-swTwo",
      clickable: true,
    },
  });
  
  // playlist-3
  const swThree = new Swiper(".swThree", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
  
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next-swThree",
      prevEl: ".swiper-button-prev-swThree",
      clickable: true,
    },
  });
  
  // playlist-4
  const swFour = new Swiper(".swFour", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next-swFour",
      prevEl: ".swiper-button-prev-swFour",
      clickable: true,
    },
  });
  
  // Search swiper
  const searchSwiper = new Swiper(".searchSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
  
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      }
    },
  
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
    navigation: {
      nextEl: ".swiper-button-next-search",
      prevEl: ".swiper-button-prev-search",
      clickable: true,
    },
  
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
  
  //scrollbar
  const hitSwiper = new Swiper(".hitSwiper", {
    spaceBetween: 24,
    //滑鼠中間滾輪可滑動
    mousewheel: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true
    },
    slidesPerView: "auto",
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