// populate the checkout page
function populateCheckoutPage() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // get the cart from the local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = storedCart;

    let total = 0;

    // add the cart items to the page
    storedCart.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price.toFixed(2)}</p>`;
        

        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    // update the total
    cartTotalElement.textContent = total.toFixed(2);
}

// Load the checkout page
if
(window.location.pathname.includes('checkout.html')) {
    populateCheckoutPage();

    // proceed to payment button
    document.getElementById('proceed-payment')
    .addEventListener('click', () => {
        alert('Proceeding to payment...');
        // Clear cart after the payment
        window.location.href = 'index.html';
    });
}
