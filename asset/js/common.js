/* back button */
function goBack() {
  window.history.back();
}

$(document).ready(function(){
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
