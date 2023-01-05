const cloudName = "dk3t9jg7w";
const uploadPreset = "ll0omhax";

const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const city = document.querySelector('#city-signup').value.trim();
  const bio = document.querySelector('#bio-signup').value.trim();
  const profile_image = document.querySelector('#uploadedimage').src;
  console.log("THIS IS THE PROFILE SRC", profile_image);


  if (user_name && email && password && city && bio && profile_image) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ user_name, email, password, city, bio, profile_image}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    folder: 'BF',
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);


