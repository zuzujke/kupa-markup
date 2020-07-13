var $ = require('jquery');
import 'slick-carousel';

const slider = {
  sliderInit() {
    function popularSlider() {
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
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    }
    function reviewsSlider() {
      const $parent = $('.reviews-carousel');
      if ($parent.length) {
        $parent.slick({
          dots: false,
          arrows: true,
          infinite: true,
          autoplay: false,
          slidesToShow: 4,
          nextArrow: '<span class="arrow-right"></span>',
          prevArrow: '<span class="arrow-left"></span>',
        });
      }
    }
    function cardShowcaseSlider() {
      if ($('.card-showcase-big').length && $('.card-showcase-small').length) {
        $('.card-showcase-big').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.card-showcase-small'
        });
        $('.card-showcase-small').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.card-showcase-big',
          dots: false,
          arrows: false,
          focusOnSelect: true
        });
      }
    }
    function similarProducts() {
      const $parent = $('.similar-carousel');
      if ($parent.length) {
        $parent.slick({
          dots: false,
          arrows: true,
          infinite: true,
          autoplay: false,
          slidesToShow: 4,
          nextArrow: '<span class="arrow-right"></span>',
          prevArrow: '<span class="arrow-left"></span>',
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
      popularSlider();
      reviewsSlider();
      successSlider();
      cardShowcaseSlider();
      similarProducts();
    }
    return {
      init: init(),
    };
  },
};

export default slider;
