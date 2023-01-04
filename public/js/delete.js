const DeleteProductHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const products_id = event.target.getAttribute("data-id")
        const response = await fetch(`/cart`, {
            method: 'DELETE',
            body: JSON.stringify({
                products_id
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/cart');
            alert('Product removed from cart');
        } else {
            alert('Failed to delete product');
        }
    }
};

document
    // .querySelector("#cart-feed")
    .addEventListener('click', DeleteProductHandler);
