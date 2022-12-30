const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const order_item = document.querySelector('#username-signup').value.trim();

    if (user_name && email && password && city && bio) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ user_name, email, password, city, bio }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
  