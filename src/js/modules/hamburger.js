var $ = require('jquery');

const hamburger = {
  handler() {
    const $body = $('body');
    const $btn = $('.hamburger');
    const $menu = $('.navigation');
    const $submenu = $('.submenu');
    const $hasSubmenu = $('.menu__wrap.has-submenu .menu__item');
    const OPENED_CLASS = 'opened';
    const OVERLAY_CLASS = 'overlay';
    // alert('works');
    function hamburgerToggle() {
      $btn.on('click', function switcher() {
        $(this).toggleClass(OPENED_CLASS);
        $menu.toggleClass(OPENED_CLASS);
        $body.toggleClass(OVERLAY_CLASS);
        $submenu.removeClass(OPENED_CLASS);
      });
    }
    function submenuToggle() {
      $hasSubmenu.each(function(index) {
        $(this).on("click", function(e){
          e.preventDefault();
          console.log('element: ',$(this).attr('class'));
          console.log('siblings: ',$(this).next().attr('class'));
          $(this).toggleClass(OPENED_CLASS).next().toggleClass(OPENED_CLASS);
        });
      });
      // $submenuClose.on('click', (event) => {
      //   event.preventDefault();
      //   $submenu.removeClass(OPENED_CLASS);
      // });
    }
    function init() {
      if (!$btn.length) return;
      hamburgerToggle();
      // if (!$hasSubmenu.length) return;
      submenuToggle();
    }
    return {
      init: init(),
    };
  },
};

export default hamburger;
