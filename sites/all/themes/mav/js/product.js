(function ($) {
  var $mainContent;
  var $mainWrapper;
  var $photosField;
  $(function () {
    if (!$("body").hasClass("node-type-product-display")) {
      return;
    }
    fixPhotosLayout();
    updateLayoutElements();
    updateFixedLayout();
    $(window).on("scroll", updateFixedLayout);
    $(window).on("resize", updateFixedLayout);
    Drupal.behaviors.YourBehaviour = {
      attach: function (context, settings) {
        $(document).ajaxComplete(function (event, xhr, settings) {
          updateLayoutElements();
          updateFixedLayout();
        });
      }
    }
  });
  function fixPhotosLayout () {
    $(".node-product-display .field-field-photos").insertAfter(".main-content");
  }
  function updateLayoutElements () {
    $mainContent = $(".main-content");
    $mainWrapper = $(".main-wrapper");
    $photosField = $(".commerce-product-field-field-photos");
  }
  function updateFixedLayout () {
    $mainContent.removeClass("fixed-layout-bottom");
    if (isLargeEnoughForFixedLayout()) {
      var scrollTop = $(window).scrollTop();
      var top = $photosField.offset().top;
      var bottom = $mainWrapper.offset().top + $mainWrapper.outerHeight();
      var height = $mainContent.height();
      if (scrollTop > top - 60) {
        if (scrollTop < bottom - height - 120) {
          $mainContent.addClass("fixed-layout");
        } else {
          $mainContent.removeClass("fixed-layout").addClass("fixed-layout-bottom");
        }
        return;
      }
    }
    $mainContent.removeClass("fixed-layout");
  }
  function isLargeEnoughForFixedLayout () {
    return $(window).width() > 760 && $(window).height() >= $mainContent.height() + 60 && $mainWrapper.height() > $mainContent.height();
  }
}(jQuery));
