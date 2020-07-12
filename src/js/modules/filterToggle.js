var $ = require('jquery');

const accordeon = {
  handler() {
    const $this = $('.sidebar-filter__item-head');
    const $body = $('.sidebar-filter__item-body');
    const OPENED_CLASS = 'opened';
    // alert('works');
    function accordeonToggle() {
      $this.on('click', function switcher() {
        $(this).toggleClass(OPENED_CLASS);
        $(this).next().toggleClass(OPENED_CLASS);
      });
    }
    function init() {
      if (!$this.length) return;
      accordeonToggle();
    }
    return {
      init: init(),
    };
  },
};

export default accordeon;
