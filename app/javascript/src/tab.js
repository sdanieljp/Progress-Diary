document.addEventListener("turbolinks:load", function() {
  $(function() {
    $('.tab_btn').on('click', function() {
      $('.tab_item').removeClass("is-active-item");
      $($(this).attr("data-option")).addClass("is-active-item");

      $('.tab_btn').removeClass('is-active-btn');
      $(this).addClass('is-active-btn');
    });
  });
})
