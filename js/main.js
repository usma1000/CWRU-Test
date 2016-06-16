(function($) {

  var allPanels = $('.accordion > dd').hide();

  $('.accordion > dt').click(function() {
      $this = $(this);
      $target =  $this.next();

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();
         $this.children('.plusMinus').text('-');
      } else {
        $target.removeClass('active').slideUp();
        $this.children('.plusMinus').text('+');
      }

    return false;
  });

})(jQuery);
