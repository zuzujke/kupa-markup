var $ = require('jquery');

const mobileTabs = {
  enable() {
    const $tabs = $('.mobile_tabs');
    function tabs() {
      $(".mobile_tabs .tab").click(function() {
        $(".mobile_tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass("active");
    }
    function init() {
      if (!$tabs.length) return;
      tabs();
    }
    return {
      init: init(),
    };
  }
  
}

export default mobileTabs;