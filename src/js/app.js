// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

// import {NAME} from './modules/...';
import hamburger from './modules/hamburger';
import slider from './modules/slick';
import accordeon from './modules/filterToggle';
import range from './modules/price-range';
import select from './modules/select';
import modal from './modules/modal';
import mobileTabs from './modules/mobile-tabs';
import mask from './modules/mask'

// $('.turkey').append('hello');

hamburger.handler();
slider.sliderInit();
accordeon.handler();
range.enable();
select.customStyle();
modal.open();
mobileTabs.enable();
mask.phone();
