const AddProductHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const user_id = document.querySelector("#product-feed").getAttribute("data-user-id")
        const products_id = event.target.getAttribute("data-id")
        const response = await fetch(`/cart`, {
            method: 'POST',
            body: JSON.stringify({
                user_id, products_id
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/cart');
        } else {
            alert('Failed to add product to cart');
        }
    }
};

document.querySelector("#product-feed")
    .addEventListener('click', AddProductHandler);
