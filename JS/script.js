document.querySelectorAll('.product button').forEach((button) => {
    button.addEventListener('click', () => { cartCount++; document.querySelector('.cart a').textContent = `Cart (${cartCount})`; });
});

// filter products by category
function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
        if (category === 'all') {
          product.style.display = 'block';
        } else if (product.classList.contains(category)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'block';
        }
      });

    // update active button
    document.querySelectorAll('.categories button').forEach((button) => {
        button.classList.remove('active');
    });
    document.querySelector(`.categories button[onclick="filterProducts('${category}')"]`).classList.add('active');
}

// Search for products
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach((product) => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage
let cartCount = cart.length; // Get the initial cart count

// Update cart count in the header
document.getElementById('cart-count').textContent = cartCount;

// Ensure event listeners are only added once
document.querySelectorAll('.product button').forEach((button) => {
  button.removeEventListener('click', addToCart); // Remove any existing event listener
  button.addEventListener('click', addToCart); // Add a single event listener
});

function addToCart(event) {
  const productCard = event.target.closest('.product');
  const productName = productCard.querySelector('h3').textContent;
  const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));

  // Add product to the cart array
  cart.push({ name: productName, price: productPrice });

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Increase cart count correctly
  cartCount = cart.length;
  document.getElementById('cart-count').textContent = cartCount;
}






