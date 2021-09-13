setInterval(function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = document.getElementById("img1");
      imageUrl.src = data.message;
    });
}, 2000);
