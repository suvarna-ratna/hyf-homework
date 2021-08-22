console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

function renderProducts(products) {
  productsUl.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");

    let shipsToHTML = "";
    product.shipsTo.forEach(
      (country) => (shipsToHTML += `<li>${country}</li>`)
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}

renderProducts(products);

const userInput = document.getElementById("inputName");
const userOption = document.getElementById("selectOption");
const userCountry = document.getElementById("countryOption");
const userPriceRange = document.getElementById("start");

// userInput.addEventListener("change", (event) => {
//     const searchedProduct = event.target.value.toLowerCase()
//     return searchedProduct ? renderProducts(products.filter(a=>a.name.toLowerCase().includes(searchedProduct))) :
//     renderProducts(products)
// })
userInput.addEventListener("keyup", () => {
  const searchedProduct = document
    .getElementById("inputName")
    .value.toLowerCase();
  return searchedProduct
    ? renderProducts(
        products.filter((a) => a.name.toLowerCase().includes(searchedProduct))
      )
    : renderProducts(products);
});
userOption.addEventListener("change", () => {
  const searchedOption = document.getElementById("selectOption").value;
  return searchedOption == "cheap"
    ? renderProducts(products.sort((a, b) => a.price - b.price))
    : searchedOption == "expensive"
    ? renderProducts(products.sort((a, b) => b.price - a.price))
    : renderProducts(products.sort((a, b) => (a.name > b.name && 1) || -1));
});
userCountry.addEventListener("change", () => {
  const searchedCountry = document.getElementById("countryOption").value;
  switch (searchedCountry) {
    case "all":
      renderProducts(products);
      break;
    case "denmark":
      renderProducts(products.filter((a) => a.shipsTo.includes("Denmark")));
      break;
    case "sweden":
      renderProducts(products.filter((a) => a.shipsTo.includes("Sweden")));
      break;
    case "norway":
      renderProducts(products.filter((a) => a.shipsTo.includes("Norway")));
      break;
    case "germany":
      renderProducts(products.filter((a) => a.shipsTo.includes("Germany")));
      break;
    case "iceland":
      renderProducts(products.filter((a) => a.shipsTo.includes("Iceland")));
      break;
    case "england":
      renderProducts(products.filter((a) => a.shipsTo.includes("England")));
      break;
  }
});
userPriceRange.addEventListener("change", () => {
  const searchedPrice = document.getElementById("start").value;
  return searchedPrice
    ? renderProducts(products.filter((a) => a.price < searchedPrice * 1000))
    : renderProducts(products);
});
