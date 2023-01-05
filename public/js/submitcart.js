const submitCart = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const user_id = document.querySelector("#submit-cart").getAttribute("data-user")
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
            alert('Failed to submit order');
        }
    }
};

document.querySelector("#submit-cart")
    .addEventListener('click', submitCart);
