const storedCart = JSON.parse(localStorage.getItem('cart'));
        const cartList = document.getElementById('cart-list');

        if (storedCart && storedCart.length > 0) {
            storedCart.forEach((product, index) => {
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

                const deleteButton = listItem.querySelector('.delete-button');
                deleteButton.addEventListener('click', () => {
                    if (product.quantity > 1) {
                        product.quantity -= 1;
                    } else {
                        storedCart.splice(index, 1);
                    }
                    localStorage.setItem('cart', JSON.stringify(storedCart));
                    location.reload();
                });

                cartList.appendChild(listItem);
            });
        } else {
           const emptyCartMessage = document.createElement('p');
            emptyCartMessage.textContent = 'Your cart is empty :(';
            cartList.appendChild(emptyCartMessage);
        }