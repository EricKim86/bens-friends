const checkOutHandler = async (event) => {
console.log("THIS BUTTON WORKS!");

    if (event.target.hasAttribute('checkout-data-user-id')) {
        const user_id = event.target.getAttribute("checkout-data-user-id")
        console.log(user_id);
        const response = await fetch(`/api/cart`, {
            method: 'POST',
            body: JSON.stringify({
                user_id,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to add product to cart');
        }
    }
};

document
    // .querySelector("#checkout-feed")
    .addEventListener('click', checkOutHandler);
