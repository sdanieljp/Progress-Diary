$(function() {
  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  $('.faq-list-item').click(function() {
   var $answer = $(this).find('.answer');
   if($answer.hasClass('open')) {
     $answer.removeClass('open');
     $answer.slideUp();
     $(this).find('span').addClass('fa-plus-circle').removeClass('fa-minus-circle');

   } else {
     $answer.addClass('open');
     $answer.slideDown();
     $(this).find('span').addClass('fa-minus-circle').removeClass('fa-plus-circle');

   }
 });

});
