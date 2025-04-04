// populating the confimation page with the purchased items
function populateConfirmationPage() {
    const confirmationItemsContainer = document.getElementById('confirmation-items');
    const orderTotalElement = document.getElementById('order-total');

    // retrieve the purchased cart from local storage....passed before clearing
    const purchasedCart = JSON.parse(localStorage.getItem('purchasedCart')) || [];

    let total = 0;

    // display the purchased items
    purchasedCart.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'confirmation-item';
        itemElement.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price.toFixed(2)}</p>`;
        
        confirmationItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    // display the total paid
    orderTotalElement.textContent = total.toFixed(2);

    // clear the purchased cart from the local storage after displaying
    localStorage.removeItem('purchasedCart');
}


function handlePayment() {
    alert('Thank you for your purchase! Redirecting to Confirmation page...');
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    if (storedCart.length === 0) {
        alert('Cart is empty! Please Add items before proceeding.');
        return;
    }

    // pass the cart data to confirmation page
    localStorage.setItem('purchasedCart', JSON.stringify(storedCart));

    // clear the cart
    localStorage.removeItem('cart');

    // redirect to the confirmation page
    window.location.href = 'confirmation.html';
}

// load the confirmation logic only on the confirmation page
if(window.location.pathname.includes('confirmation.html')) {
    populateConfirmationPage();
}

// update payement button on checkout page
if(window.location.pathname.includes('checkout.html')) {
    document.getElementById('proceed-payment')
    .addEventListener('click', handlePayment);
}