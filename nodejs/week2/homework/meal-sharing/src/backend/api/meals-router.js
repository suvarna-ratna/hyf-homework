const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  console.log(meals);
  console.log("in /api/meals");
  const mealsQuery = request.query;
  console.log(request.query);

  if (
    (mealsQuery.maxPrice && isNaN(parseInt(mealsQuery.maxPrice))) ||
    (mealsQuery.createdAfter && isNaN(Date.parse(mealsQuery.createdAfter))) ||
    (mealsQuery.limit && isNaN(parseInt(mealsQuery.limit)))
  ) {
    return response.status(400).send("Given parameter is not supported");
  }

  if (mealsQuery.maxPrice || mealsQuery.title || mealsQuery.createdAfter || mealsQuery.limit) {
    const updatedMeals = meals
      .filter((meal) =>
        mealsQuery.maxPrice ? meal.price <= mealsQuery.maxPrice : true
      )
      .filter((meal) =>
        mealsQuery.title ? meal.title.toLowerCase().includes(mealsQuery.title) : true
      )
      .filter((meal) =>
        mealsQuery.createdAfter
          ? Date.parse(meal.createdAt) >= Date.parse(mealsQuery.createdAfter)
          : true
      );
    if (updatedMeals.length === 0) {
      return response.status(404).send("Given query does not find any data");
    } else {
      return mealsQuery.limit
        ? response.send(updatedMeals.slice(0, mealsQuery.limit))
        : response.send(updatedMeals);
    }
  } else {
    return response.send(meals);
  }
});

router.get("/:id", async (request, response) => {
  if (typeof parseInt(request.params.id) == "number") {
    const responseData = meals.filter(
      (meal) => meal.id === parseInt(request.params.id)
    );
    if (responseData.length === 0) {
      return response.status(404).send("Given query does not find any data");
    } else {
      return response.send(responseData);
    }
  } else {
    return response.status(400).send("Given parameter is not supported");
  }
});

module.exports = router;
