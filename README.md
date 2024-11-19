# Awesome Wishlist WordPress Plugin for WooCommerce

AWS Wishlist is a lightweight WordPress plugin specifically designed for developers who want to customize their wishlist functionality without the bloat of heavy plugin files.

This plugin is very lightweight, with its CSS and JS files totaling only 1KB. The entire plugin build size is approximately 6KB, making it an efficient choice for enhancing your WooCommerce site.

## How To Use AWS (Awesome Wishlist Plugin)
1. To Display add to wishlist button. Inside the product query loop or single product page. Add a `div` or `button` tag with class `aws-wishlist--trigger`. You can add icons or text inside the wrapper. It’s up to you how you design it.
2. Add `data-product-id` attribute with the product `id` as a value.
3. To display the products added to the wishlist. Use the shortcode `[aws_wishlist]`.

## Basic Design Overview
You can design the ADD TO WISHLIST button as you want. Just make sure to add the `aws-wishlist--trigger` class and `data-product-id` attribute in the wrapper/button.

If the product is added to the wishlist, we are adding `active` class on the wrapper. You can customize the design/colors for the products added to the wishlist.


## For Developers/Contributors
The plugin is free use. You can modify the plugin for personal and commercial use. Contributors are always welcome.

