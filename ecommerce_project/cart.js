const storedCart = JSON.parse(localStorage.getItem('cart'));
        const cartList = document.getElementById('cart-list');

        if (storedCart && storedCart.length > 0) {
            storedCart.forEach((product, index) => {
                // Create a list item for each product in the cart
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div class="cart-item">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="product-details">
                            <p>Name: ${product.name}</p>
                            <p>Price: $${product.price.toFixed(2)}</p>
                            <p>Quantity: ${product.quantity} &nbsp;
                            <span class="delete-button" data-index="${index}"><i class="fa-solid fa-xmark fa-beat"></i></span></p>

                        </div>
                    </div>
                `;

                // Add a click event listener to the delete button
                const deleteButton = listItem.querySelector('.delete-button');
                deleteButton.addEventListener('click', () => {
                    // Remove one item from the cart when the delete button is clicked
                    if (product.quantity > 1) {
                        // Decrease the quantity by 1 if there's more than one item
                        product.quantity -= 1;
                    } else {
                        // Remove the entire product if there's only one item
                        storedCart.splice(index, 1);
                    }
                    // Update the cart in localStorage and refresh the cart page
                    localStorage.setItem('cart', JSON.stringify(storedCart));
                    location.reload(); // Refresh the page
                });

                cartList.appendChild(listItem);
            });
        } else {
            // Display a message if the cart is empty
            const emptyCartMessage = document.createElement('p');
            emptyCartMessage.textContent = 'Your cart is empty :(';
            cartList.appendChild(emptyCartMessage);
        }