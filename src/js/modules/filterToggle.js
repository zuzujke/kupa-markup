var $ = require('jquery');

const accordeon = {
  handler() {
    const $this = $('.sidebar-filter__item-head');
    // const $body = $('.sidebar-filter__item-body');
    const OPENED_CLASS = 'opened';
    // alert('works');
    function accordeonToggle() {
      $this.on('click', function switcher() {
        $(this).toggleClass(OPENED_CLASS);
        $(this).next().toggleClass(OPENED_CLASS);
      });
    }
    function filterMobileToggle() {
      $('#open_filter').on('click', () => {
        $('.filter_absolute').addClass(OPENED_CLASS);
      });
      $('.close_control').on('click', () => {
        $('.filter_absolute, .catalog-sort').removeClass(OPENED_CLASS);
      });
    }
    function sortMobileToggle() {
      $('#open_sort').on('click', () => {
        $('.catalog-sort').addClass(OPENED_CLASS);
        $('.catalog-sort__label').on('click', () => {
          $('.catalog-sort').removeClass(OPENED_CLASS);
        });
      });
    }
    function init() {
      if (!$this.length) return;
      accordeonToggle();
      filterMobileToggle();
      sortMobileToggle();
    }
    return {
      init: init(),
    };
  },
};

export default accordeon;
