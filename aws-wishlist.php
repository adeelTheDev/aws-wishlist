<?php
/*
* Plugin Name:       Awesome Wishlist
* Description:       Enable wishlist for your wooCommerce store.
* Version:           1.0
* Requires at least: 6.0
* Requires PHP:      8.0
* Requires Plugins:  woocommerce
* Author URI:        https://muhammadadeel.net/awesome-wishlist-plugin/
* Author:            Muhammad Adeel
* Author URI:        https://muhammadadeel.net/
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
*/


// Ensure the file is being loaded by WordPress
if (!defined('ABSPATH')) {
  exit;
}

if (!defined('AWS_PLUGIN_DIR')) {
  define('AWS_PLUGIN_DIR', plugin_dir_path(__FILE__));
}

if (!defined('AWS_PLUGIN_URL')) {
  define('AWS_PLUGIN_URL', plugin_dir_url(__FILE__));
}

require_once AWS_PLUGIN_DIR . 'inc/enqueue-scripts.php';
require_once AWS_PLUGIN_DIR . 'inc/add-to-wishlist.php';
require_once AWS_PLUGIN_DIR . 'inc/display-wishlist-products.php';
