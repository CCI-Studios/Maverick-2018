(function ($) {
  $(function () {
    if (window.location.pathname === '/product/be-maverick-fitted-tee') {
      $('.node-product-display .field-name-commerce-price .field-item').text('FREE - LIMIT 1 PER ORDER.');
      $('.node-product-display .commerce-add-to-cart').find('.form-item-quantity, .form-submit').hide();
      $('.node-product-display').on('click', '.commerce-add-to-cart .form-item-attributes-field-shirt-size label', function () {
        var size = $('.node-product-display .commerce-add-to-cart [name="attributes[field_attribute_color]"]:checked').parent().find('label').text();
        console.log(size);
      });
    }
  });
}(jQuery));
