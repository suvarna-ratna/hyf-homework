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
  giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=SEbeBvT6vQX0Pjf9ukTwaWbgwcVpuY2X=${searchValue}&limit=25`;
  getGiphy();
}

function numberOfGiphys() {
  gifImages.innerHTML = "";
  const searchValue = search.value;
  let numberOfGifs = limit.value;
  giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=SEbeBvT6vQX0Pjf9ukTwaWbgwcVpuY2X=${searchValue}&limit=${numberOfGifs}`;
  getGiphy();
}

searchButton.addEventListener("click", searchGiphy);
number.addEventListener("input", numberOfGiphys);
