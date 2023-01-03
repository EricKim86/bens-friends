const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const city = document.querySelector('#city-signup').value.trim();
    const bio = document.querySelector('#bio-signup').value.trim();
  
    if (user_name && email && password && city && bio) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ user_name, email, password, city, bio}),
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
  