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

// SelArticle Swiper 首頁精選文章
const HotArticleSwiper = new Swiper(".HotArticleSwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 48,

  // loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 48,
    }
  },

  navigation: {
    nextEl: ".swiper-next-HotArticle",
    prevEl: ".swiper-prev-HotArticle"
  },
  pagination: {
    el: ".swiper-pagination-HotArticle",
    type: "fraction"
  }
});

// How-Now Swiper 首頁大家都在看
const HowNowSwiper = new Swiper(".HowNowSwiper", {
  slidesPerView: 1, // 默认设置为大屏设备显示3个图片
  slidesPerGroup: 1,
  spaceBetween: 24,
  direction: 'horizontal', // 默认横向滑动

  navigation: {
    nextEl: ".swiper-next-HowNow",
    prevEl: ".swiper-prev-HowNow"
  },
  pagination: {
    el: ".swiper-pagination-HowNow",
    type: "fraction"
  }
});

// Life Swiper 首頁品味生活
const LifeSwiper = new Swiper(".LifeSwiper", {
  slidesPerView: 3, // 默认设置为大屏设备显示3个图片
  slidesPerGroup: 1,
  spaceBetween: 24,
  direction: 'horizontal', // 默认横向滑动

  navigation: {
    nextEl: ".swiper-next-life",
    prevEl: ".swiper-prev-life"
  },
  pagination: {
    el: ".swiper-pagination-life",
    type: "fraction"
  }
});

// Project Swiper 首頁風格提案
const ProjectSwiper = new Swiper(".ProjectSwiper", {
  slidesPerView: 1, // 默认设置为大屏设备显示3个图片
  slidesPerGroup: 1,
  spaceBetween: 24,
  direction: 'horizontal', // 默认横向滑动

  navigation: {
    nextEl: ".swiper-next-project",
    prevEl: ".swiper-prev-project"
  },
  pagination: {
    el: ".swiper-pagination-project",
    type: "fraction"
  }
});

// 
// furtherReading Swiper 文章頁延伸閱讀
const furtherReadingSwiper = new Swiper(".furtherReadingSwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  loop: true,

  // Responsive breakpoints
/*    breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 24
    }
  }, */

  /* autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }, */

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