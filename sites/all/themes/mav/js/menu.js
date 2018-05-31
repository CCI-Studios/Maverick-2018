(function ($) {
  $(function () {
    $(".menu-button").on("click", menuButtonClick);
    $(window).on("scroll", documentScroll);
  });
  function menuButtonClick (e) {
    e.preventDefault();
    $("body").toggleClass("menu-open");
  }
  function documentScroll () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 65) {
      $("body").addClass("scroll");
    } else {
      $("body").removeClass("scroll");
    }
  }
}(jQuery));
