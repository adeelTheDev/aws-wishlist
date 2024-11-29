import Toastify from 'toastify-js'


document.addEventListener('DOMContentLoaded', () => {
  aws_wishlist_init();
});

function aws_wishlist_init() {

  let buttons = document.querySelectorAll('.aws-wishlist--trigger');
  buttons.forEach(button => {

    // Add HEART svg if it's not wishlist listing page
    if(!button.classList.contains('wishlist-page') || !button.querySelector('svg') ) {
      button.innerHTML+= `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
        </svg> 
      `
    }

    let productId = button.getAttribute('data-product-id');

    // Check if the product is already in the wishlist
    if (aws_wishlist_data.wishlist.includes(+productId)) {
      button.setAttribute('data-type', 'REMOVE')
      button.classList.add('active');
    } else {
      button.setAttribute('data-type', 'ADD')
    }

    function buttonClickHandler() {
      // Send AJAX request to add product to the wishlist
      let actionType = button.getAttribute('data-type');
      AwsAddToWishlist(button, productId, actionType);
    }

    button.removeEventListener('click', buttonClickHandler);
    button.addEventListener('click', buttonClickHandler);

  });
}

window.aws_wishlist_init = aws_wishlist_init;

function AwsAddToWishlist(button, productId, actionType) {
  jQuery.ajax({
    url: aws_wishlist_data.ajax_url,
    type: 'POST',
    data: {
      action: 'aws_add_to_wishlist',
      product_id: productId,
      action_type: actionType,
      nonce: aws_wishlist_data.nonce
    },
    success: (response) => {
      if (response.success) {
        button.setAttribute('data-type', actionType === 'ADD' ? 'REMOVE' : 'ADD');
        button.classList.toggle('active', actionType === 'ADD');

        Toastify({
          text: response.data.message,
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #069234, #09b53f)",
          },
        }).showToast();

        button.closest('tr')?.remove();

      } else {
        Toastify({
          text: response.data.message,
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, rgb(246, 50, 68), rgb(243, 111, 54))",
          },
        }).showToast();

        console.error('AWS_WISHLIST_ERROR:', response.data.message);
      }
    }
  });
}
