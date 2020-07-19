var $ = require('jquery');

const modal = {
  open() {
    $('.modal').each(function (i) {
      var target = $(this).attr('data-modal', "modal" + (i + 1));
      console.log(target);
    });
    
    $('.open-modal').each(function (i) {
      var modal_id = $(this).attr('rel', "modal" + (i + 1));
      console.log(modal_id);
      $(modal_id).on('click', function (e) {
        e.preventDefault();
        $("[data-modal='" + $(this).attr("rel") + "']").addClass('is-visible');
        $('body').addClass('lock-scroll');
      });
    });
    
    //Close Modal
    $('.modal-close').on('click', function () {
      $('.modal').removeClass('is-visible');
      $('body').removeClass('lock-scroll');
    });
  }
}

export default modal;