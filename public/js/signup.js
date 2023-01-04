// const cloudinary = require('cloudinary')

// require('dotenv').config();

// cloudinary.config({ 
//   cloud_name: process.env.CLOUDNAME,
//   api_key: process.env.CLOUDAPIKEY,
//   api_secret: process.env.CLOUDAPISECRET,
// });

const img = document.getElementById("profile_image");
let info = document.getElementById("info");
let errorMessage = document.getElementById("errorMessage");

const imagePreview = document.getElementById("preview");
img.addEventListener("change", (e) => {
  const imgDetails = document.querySelector("input[type=file]").files[0];
  if (imgDetails) {
    info.style.display = "block";
    document.querySelector(".img-name").innerText = imgDetails.name;
    document.querySelector(".img-type").innerText = imgDetails.type;
    document.querySelector(".img-size").innerText = imgDetails.size + "bytes";
    previewImage(imgDetails);
  } else {
    imagePreview.src = ""
    errorMessage.innerText = "Please select a picture";
    console.error("Please select a picture");
    info.style.display = "none";
  }
})

function previewImage(imgD) {
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    imagePreview.src = reader.result;
  })

  if (imgD) {
    if (imgD.type === "image/jpeg" || imgD.type == "image/jpg" || imgD.type == "image/gif" || imgD.type == "image/png") {
      errorMessage.innerText = "";

      reader.readAsDataURL(imgD);
    } else {
      errorMessage.innerText = "File type should be an image file"
      imagePreview.src = "";
    }
  }
  else {
    imagePreview.src = ""
    errorMessage.innerText = "Please select a picture";
  }
}

const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const city = document.querySelector('#city-signup').value.trim();
  const bio = document.querySelector('#bio-signup').value.trim();
  const profile_image = document.querySelector('#profile_image').value.trim();

  // cloudinary.uploader
  // .upload(profile_image, {
  //   resource_type: "image",
  // })

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

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
