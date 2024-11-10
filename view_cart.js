// Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Get the container where cart items will be displayed
const cartItemsContainer = document.getElementById("cartItems");

// Function to display the cart items
function displayCart() {
    // Clear the container first
    cartItemsContainer.innerHTML = "";

    // Check if cart is empty
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <div>
                    <h4>${item.bookName}</h4>
                    <p>Name: ${item.name}</p>
                    <p>Phone: ${item.phone}</p>
                    <p>Email: ${item.email}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Address: ${item.address}</p>
                </div>
                <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
    }
}

// Function to delete an item from the cart
function deleteItem(index) {
    // Remove the item from the cart array
    cart.splice(index, 1);

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Re-render the cart
    displayCart();
}

// Call the displayCart function when the page loads
displayCart();
