$(document).ready(function(){
  /* back button */
  function goBack() {
    window.history.back();
  }

  /* touch event */
  $('.btn_link').on({
    'touchstart' : function () {
      $(this).addClass('active');
    },
    'touchend' : function () {
      $(this).removeClass('active');
    }
  });
});
