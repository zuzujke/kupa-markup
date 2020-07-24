var $ = require('jquery');
import ionRangeSlider from 'ion-rangeslider';

const range = {
  enable() {
    const $from = $(".js-from");
    const $to = $(".js-to");
    let from = null;
    let to = null;

    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 10000,
      from: $from.val(),
      to: $to.val(),
      onChange: function (data) {
        from = data.from;
        to = data.to;
        
        updateValues();
     }
    });

    let updateValues = function () {
      $from.prop("value", from);
      $to.prop("value", to);
    };
  
  }
};

export default range;
