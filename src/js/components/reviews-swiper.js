import Swiper from 'swiper';
import {
  Navigation
} from 'swiper/modules';

const reviewsSwiper = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".reviews__swiper-button_next",
    prevEl: ".reviews__swiper-button_prev",
  },
});
