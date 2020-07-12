var $ = require('jquery');
import ionRangeSlider from 'ion-rangeslider';

const range = {
  enable() {
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 10000,
      from: 200,
      to: 5000,
      prefix: "$"
    });
  }
};

export default range;
