# Awesome Wishlist WordPress Plugin

AWS Wishlist is a lightweight WordPress plugin specifically designed for developers who want to customize their wishlist functionality without the bloat of heavy plugin files.

This plugin is very lightweight, with its CSS and JS files totaling only 1KB. The entire plugin build size is approximately 6KB, making it an efficient choice for enhancing your WooCommerce site.


## Usage
- To Display add to wishlist button. Inside the product query where you are displaying img, title, price, etc. Add a `div` with class `aws-wishlist--trigger`. You can add icons or text inside the div. It's up to you how you design it.
- Add `data-product-id` attribute with the product id as a value.
- To display the products added to the wishlist. Use the shortcode `[aws_wishlist]`.
- Call the init function. 👇
```js
document.addEventListener('DOMContentLoaded', () => {
  aws_wishlist_init();
});
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug reports.

## License
This plugin is licensed under the [GPL v2 or later](https://www.gnu.org/licenses/gpl-2.0.html).
