var $ = require('jquery');
import 'slick-carousel';

const slider = {
  sliderInit() {
    function hero() {
      const $parent = $('.hero__slider');
      if ($parent.length) {
        $parent.slick({
          dots: false,
          arrows: true,
          infinite: false,
          autoplay: false,
          slidesToShow: 1,
          nextArrow: '<span class="arrow-right abs"></span>',
          prevArrow: '<span class="arrow-left abs"></span>',
          customPaging: function(slick,index) {
            return '<span class="current">0' + (index + 1) + '</span>/' + '0' + slick.slideCount - 2;
          },
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                dots: false,
                arrows: false,
              }
            }
          ]
        });
      }
    }
    function popularSlider() {
      const $parent = $('.popular-carousel');
      $parent.slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: false,
        customPaging: function(slick,index) {
          return '<span class="current">0' + (index + 1) + '</span>/' + '0' + ( slick.slideCount - 2 );
        },
        nextArrow: '<span class="arrow-right abs"></span>',
        prevArrow: '<span class="arrow-left abs"></span>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              customPaging: function(slick,index) {
                return '<span class="current">0' + (index + 1) + '</span>/' + '0' + slick.slideCount;
              },
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
          nextArrow: '<span class="arrow-right default"></span>',
          prevArrow: '<span class="arrow-left default"></span>',
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
    }
    function cardShowcaseSlider() {
      if ($('.card-showcase-big').length && $('.card-showcase-small').length) {
        $('.card-showcase-big').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.card-showcase-small',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                fade: false,
              }
            }
          ]
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
    function designShowcaseSlider() {
      if ($('.design-showcase-big').length && $('.design-showcase-small').length) {
        $('.design-showcase-big').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.design-showcase-small',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                fade: false,
              }
            }
          ]
        });
        $('.design-showcase-small').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.design-showcase-big',
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
          nextArrow: '<span class="arrow-right default"></span>',
          prevArrow: '<span class="arrow-left default"></span>',
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
    }
    function designReviews() {
      const $parent = $('.design-reviews');
      if ($parent.length) {
        $parent.slick({
          dots: false,
          arrows: true,
          infinite: true,
          autoplay: false,
          slidesToShow: 2,
          nextArrow: '<span class="arrow-right default"></span>',
          prevArrow: '<span class="arrow-left default"></span>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                slidesToShow: 1,
                fade: false,
                arrows: false
              }
            }
          ]
        });
      }
    }
    function projects() {
      const $parent = $('.grid3.projects-list');
      if ($parent.length && window.matchMedia("(max-width: 1024px)").matches) {
        $parent.slick({
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                fade: false,
              }
            }
          ]
        });
      }
    }
    function init() {
      hero();
      popularSlider();
      reviewsSlider();
      cardShowcaseSlider();
      similarProducts();
      designReviews();
      designShowcaseSlider();
      projects();
    }
    return {
      init: init(),
    };
  },
};

export default slider;
