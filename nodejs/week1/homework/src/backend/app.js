const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

function mealsWithReviews(meals) {
  return meals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId == meal.id);
    return meal;
  });
}

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

//route for meals
app.get("/meals", async (request, response) => {
  response.send(mealsWithReviews(meals));
});
//route for cheap meals
app.get("/cheap-meals", async (request, response) => {
  response.send(mealsWithReviews(meals).filter((meal) => meal.price < 100));
});
//oute for large meals
app.get("/large-meals", async (request, response) => {
  response.send(
    mealsWithReviews(meals).filter((meal) => meal.maxNumberOfGuests > 5)
  );
});
//route for random meals
app.get("/meal", async (request, response) => {
  response.send(
    mealsWithReviews[Math.floor(Math.random() * reservations.length)]
  );
});
//route for all reservations
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});
//route for random reservation
app.get("/reservation", async (request, response) => {
  response.send(reservations[Math.floor(Math.random() * reservations.length)]);
});
//route for all reviews
app.get("/reviews", async (request, response) => {
  response.send(reviews);
});
module.exports = app;
