(function ($) {
  $(function () {
    if (window.location.pathname === '/product/be-maverick-fitted-tee') {
      $('.node-product-display .field-name-commerce-price .field-item').text('FREE - LIMIT 1 PER ORDER.');
      $('.node-product-display').addClass('hide-add-to-cart');
      $('.node-product-display').on('click', '.commerce-add-to-cart .form-type-radio.form-item-attributes-field-attribute-color', function (e) {
        var colour = $(e.target).closest('.form-type-radio.form-item-attributes-field-attribute-color').find('label.option').text().trim();
        $('.block--free-tshirt-shipping .webform-component--colour input').val(colour);
      });
      $('.node-product-display').on('click', '.commerce-add-to-cart .form-item-attributes-field-shirt-size label', function (e) {
        var size = $(e.target).text().trim();
        $('.block--free-tshirt-shipping .webform-component--size input').val(size);
      });
    }
  });
}(jQuery));
