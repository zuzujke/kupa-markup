var $ = require('jquery');
import 'slick-carousel';

const slider = {
  sliderInit() {
    function heroSlider() {
      const $parent = $('.popular-carousel');
      $parent.slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        customPaging: function(slick,index) {
          return '<span class="current">0' + (index + 1) + '</span>/' + '0' + slick.slideCount;
        },
        nextArrow: '<span class="arrow-right"></span>',
        prevArrow: '<span class="arrow-left"></span>',
      });
    }
    function testimonialsSlider() {
      const $parent = $('.testimonials-slider');
      if ($parent.length) {
        let currentSlide;
        let slidesCount;
        const sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');
        const updateSliderCounter = (slick) => {
          currentSlide = slick.slickCurrentSlide() + 1;
          slidesCount = slick.slideCount;
          $(sliderCounter).text(`${currentSlide} of ${slidesCount}`);
        };
        $parent.on('init', (event, slick) => {
          $('.slider-counter-wrap').append(sliderCounter);
          updateSliderCounter(slick);
        });
        $parent.on('afterChange', (event, slick) => {
          updateSliderCounter(slick, currentSlide);
        });
        $parent.slick({
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: false,
          items: 1,
        });
        $('.testimonials-prev').click(() => {
          $parent.slick('slickPrev');
        });
        $('.testimonials-next').click(() => {
          $parent.slick('slickNext');
        });
      }
    }
    function successSlider() {
      const $parent = $('.success-slider');
      if ($parent.length) {
        let currentSlide;
        let slidesCount;
        const sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');
        const updateSliderCounter = (slick) => {
          currentSlide = slick.slickCurrentSlide() + 1;
          slidesCount = slick.slideCount;
          $(sliderCounter).text(`${currentSlide} of ${slidesCount}`);
        };
        $parent.on('init', (event, slick) => {
          $('.success-slider-counter-wrap').append(sliderCounter);
          updateSliderCounter(slick);
        });
        $parent.on('afterChange', (event, slick) => {
          updateSliderCounter(slick, currentSlide);
        });
        $parent.slick({
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: false,
          items: 1,
        });
        $('.success-prev').click(() => {
          $parent.slick('slickPrev');
        });
        $('.success-next').click(() => {
          $parent.slick('slickNext');
        });
      }
    }
    function init() {
      heroSlider();
      testimonialsSlider();
      successSlider();
    }
    return {
      init: init(),
    };
  },
};

export default slider;
