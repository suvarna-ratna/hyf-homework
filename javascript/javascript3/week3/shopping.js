class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    fetch(
      "https://v6.exchangerate-api.com/v6/2d116b855d76dabb3c7dcbe8/latest/DKK"
    )
      .then((response) => response.json())
      .then((data) => {
        const currencies = data.conversion_rates;
        const convertCurrency = this.price * currencies[currency];
        console.log(convertCurrency);
      });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const updatedProducts = this.products.filter(
      (item) => product.name !== item.name
    );
    this.products = updatedProducts;
  }

  searchProduct(productName) {
    const searchedProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(productname.toLowerCase())
    );
    return searchedProducts;
  }

  getTotal() {
    return this.products.reduce(
      (totalPrice, product) => totalPrice + product.price,
      0
    );
  }

  renderProducts() {
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    body.appendChild(h1);
    h1.innerHTML = "Products";
    this.products.forEach((product) => {
      const pro = document.createElement("h2");
      body.appendChild(pro);
      pro.innerHTML = product.name;
      const price = document.createElement("p");
      body.appendChild(price);
      price.innerHTML = product.price;
    });
  }

  getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        const user = document.getElementById("user");
        const h3 = document.createElement("h3");
        user.appendChild(h3);
        h3.innerHTML = `Username: ${data.username}`;
        const p = document.createElement("p");
        user.appendChild(p);
        p.innerHTML = `Email: ${data.email}`;
      })
      .then(() => this.renderProducts())
      .then(() => {
        const total = document.getElementById("total");
        total.innerHTML = `Total Price: ${this.getTotal()}`;
      });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const flatscreen2 = new Product("flat-screen2", 4000);
const flatscreen3 = new Product("flat-screen3", 3000);
const dvd = new Product("dvd", 2000);
const videogame = new Product("videogame", 4000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(flatscreen2);
shoppingCart.addProduct(flatscreen3);
shoppingCart.addProduct(dvd);
shoppingCart.addProduct(videogame);
shoppingCart.removeProduct(flatscreen2);
console.log(shoppingCart);

const userinfo = document.getElementById("userbtn");
userinfo.addEventListener("click", () => {
  shoppingCart.getUser();
  userinfo.disabled = true;
});
