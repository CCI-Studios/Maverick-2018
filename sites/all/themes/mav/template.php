<?php

function mav_form_alter(&$form, &$form_state, $form_id) {
  $form['#attributes']['class'][] = $form['#id'];
  switch ($form_id) {
    case 'commerce_checkout_form_checkout':
      $form['account']['login']['mail']['#type'] = 'emailfield';
      unset($form['customer_profile_billing']['commerce_customer_address']['und'][0]['name_block']['name_line']['#size']);
      unset($form['customer_profile_shipping']['commerce_customer_address']['und'][0]['name_block']['name_line']['#size']);
      //$form['customer_profile_shipping']['commerce_customer_address']['und'][0]['name_block']['#attributes']['class']
      for ($i = 0; $i < count($form['customer_profile_billing']['commerce_customer_address']['und'][0]['name_block']['#attributes']['class']); $i++) {
        if ($form['customer_profile_billing']['commerce_customer_address']['und'][0]['name_block']['#attributes']['class'][$i] == 'addressfield-container-inline') {
          unset($form['customer_profile_billing']['commerce_customer_address']['und'][0]['name_block']['#attributes']['class'][$i]);
        }
      }
      for ($i = 0; $i < count($form['customer_profile_shipping']['commerce_customer_address']['und'][0]['name_block']['#attributes']['class']); $i++) {
        if ($form['customer_profile_shipping']['commerce_customer_address']['und'][0]['name_block']['#attributes']['class'][$i] == 'addressfield-container-inline') {
          unset($form['customer_profile_shipping']['commerce_customer_address']['und'][0]['name_block']['#attributes']['class'][$i]);
        }
      }
      break;
    default:
      // print $form_id;
  }
}
