<?php

/**
 * Enqueue Scripts & Styles
 * 
 * @package AWS Wishlist
 */

if (!defined('ABSPATH') || !defined('AWS_PLUGIN_DIR')) {
  exit;
}

function aws_enqueue_scripts() {

  // CSS
  wp_enqueue_style('aws-style', AWS_PLUGIN_URL . 'dist/style.css', [], '1.0');

  // JS
  wp_enqueue_script('aws-wishlist-script', AWS_PLUGIN_URL . 'dist/main.js', ['jquery'], '1.0', false);

  // Localize script to pass data to JavaScript
  $is_user_logged_in =  is_user_logged_in() ? 1 : 0;
  $user_id = 0;
  $wishlist = [];

  if ($is_user_logged_in) {
    $user_id = get_current_user_id();
    $wishlist = get_user_meta($user_id, '_aws_wishlist', true);
    $wishlist = is_array($wishlist) ? $wishlist : [];
  }

  wp_localize_script('aws-wishlist-script', 'aws_wishlist_data', [
    'ajax_url' => admin_url('admin-ajax.php'),
    'nonce' => wp_create_nonce('aws-wishlist-nonce'),
    'is_user_logged_in' => $is_user_logged_in,
    'wishlist' => array_values($wishlist),
  ]);
}


add_action('wp_enqueue_scripts', 'aws_enqueue_scripts');
