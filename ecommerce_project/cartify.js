    // // JavaScript code to handle the cart functionality
    // const cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart data from localStorage or initialize an empty array

    // const addToCartButtons = document.querySelectorAll('.add-to-cart');
    // const cartCount = document.getElementById('cart-count');
    // const cartMessage = document.getElementById('cart-message');

    // addToCartButtons.forEach(button => {
    //     button.addEventListener('click', (ev) => {
    //         ev.preventDefault();
    //         const productName = button.getAttribute('data-product');
    //         cart.push(productName);
    //         updateCartCount();
    //         updateCartInLocalStorage(); // Store the updated cart in localStorage
    //     });
    // });

    // function updateCartCount() {
    //     cartCount.textContent = cart.length;
    // }

    // function updateCartInLocalStorage() {
    //     localStorage.setItem('cart', JSON.stringify(cart)); // Save the cart data in localStorage
    // }

    // // Initialize cart count when the page loads
    // updateCartCount();
// JavaScript code to handle the cart functionality
const cart = JSON.parse(localStorage.getItem('cart')) || [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');
const cartMessage = document.getElementById('cart-message');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (ev) => {
        ev.preventDefault();
        const productName = button.getAttribute('data-product');
        const productPrice = parseFloat(button.getAttribute('data-price'));
        const productImage = button.getAttribute('data-image');
        const initialQuantity = parseInt(button.getAttribute('data-quantity')); // Get the initial quantity

        // Check if the product is already in the cart
        const existingProduct = cart.find(product => product.name === productName);

        if (existingProduct) {
            // If the product is already in the cart, increase its quantity
            existingProduct.quantity += initialQuantity;
        } else {
            // If not, add it to the cart with the initial quantity
            const product = {
                name: productName,
                price: productPrice,
                quantity: initialQuantity,
                image: productImage
            };
            cart.push(product);
        }

        updateCartCount();
        updateCartInLocalStorage();
    });
});

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function updateCartInLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Initialize cart count when the page loads
updateCartCount();
