import Swiper from 'swiper';
import {
  Navigation
} from 'swiper/modules';

const gallarySwiper = new Swiper('.gallary__swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".gallary__swiper-button_next",
    prevEl: ".gallary__swiper-button_prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
