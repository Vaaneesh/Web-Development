
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
        const initialQuantity = parseInt(button.getAttribute('data-quantity')); 

        const existingProduct = cart.find(product => product.name === productName);

        if (existingProduct) {
            existingProduct.quantity += initialQuantity;
        } else {
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

updateCartCount();
