const spiritAnimals = [
  "fullmoonwolf",
  "The Butterfly",
  "Teen wolf",
  "Spidersense",
];
const button1 = document.getElementById("btn1");

const randomNumber1 = Math.floor(Math.random() * 4);

const h2 = document.getElementById("spiritinfo");

const getSpiritAnimal = function () {
  const userName = document.getElementById("name").value;
  h2.innerHTML = userName + "-" + spiritAnimals[randomNumber1];
};
button1.addEventListener("click", getSpiritAnimal);

const button2 = document.getElementById("btn2");
button2.innerHTML = "Get new spirit animal";

function getNewSpiritAnimal() {
  const userName = document.getElementById("name").value;
  if (userName) {
    const randomNumber2 = Math.floor(Math.random() * 10);
    h2.innerHTML = userName + "-" + spiritAnimals[randomNumber2];
  } else {
    h2.innerHTML = "Please enter your name";
  }
}
button2.addEventListener("click", getNewSpiritAnimal);
