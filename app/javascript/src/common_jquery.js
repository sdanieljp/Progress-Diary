$(function() {
  // モーダル
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

  // アコーディオン
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

  // トップへ戻るボタン
  $('#top-btn').click( function() {
    $('html, body').animate({
      'scrollTop': 0
    }, '400');
  });

  // ページ内リンク
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, '400');
  });

  // アラートメッセージ
  $('.alert').fadeOut(3000);

  //スライドショー
  $('.a').slick({
      dots: true,
  });

});
