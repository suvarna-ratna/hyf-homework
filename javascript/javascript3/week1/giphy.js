const input = document.getElementById("search");
const searchButton = document.getElementById("searchGiphy");
const number = document.getElementById("limit");
const gifImages = document.getElementById("gifImages");
let giphyUrl;

function getGiphy() {
  fetch(giphyUrl)
    .then((response) => response.json())
    .then((gifData) => {
      gifData.data.forEach((giphfy) => {
        const image = document.createElement("img");
        image.setAttribute("src", `${giphfy.images.fixed_width.url}`);
        gifImages.appendChild(image);
      });
    });
}

function searchGiphy() {
  gifImages.innerHTML = "";
  const searchValue = search.value;
  let numberOfGifs = limit.value;
  let limitValue = numberOfGifs ? numberOfGifs : 25;
  giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=FjWGFG1EVjkbGBDd7Ihm93smQxGFYaZE&q=${searchValue}&limit=${limitValue}&offset=0&rating=g&lang=en`;
  getGiphy();
}

searchButton.addEventListener("click", searchGiphy);
