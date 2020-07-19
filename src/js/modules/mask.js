var $ = require('jquery');
import inputmask from './../../../node_modules/inputmask/dist/jquery.inputmask';

const mask = {
  phone() {
    const $phone = $("input[type='tel'");
    function enablePhone() {
      $phone.inputmask('+38(099)999-99-99');
    }
    function init() {
      if (!$phone.length) return;
      enablePhone();
    }
    return {
      init: init(),
    };
  }
  
};

export default mask;
