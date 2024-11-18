import './toastify';

document.addEventListener('DOMContentLoaded', () => {
  aws_wishlist_init();
});

function aws_wishlist_init() {

  let buttons = document.querySelectorAll('.aws-wishlist--trigger');
  buttons.forEach(button => {

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
          backgroundColor: '#28A745'
        }).showToast();
        button.closest('tr')?.remove();
      } else {
        Toastify({
          text: response.data.message,
          duration: 7000,
          backgroundColor: '#DC3545'
        }).showToast();
        console.error('AWS_WISHLIST_ERROR:', response.data.message);
      }
    }
  });
}
