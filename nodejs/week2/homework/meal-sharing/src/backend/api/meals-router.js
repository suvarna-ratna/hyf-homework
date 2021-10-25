const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  console.log(meals);
  console.log("in /api/meals");
  const query1 = request.query;
  console.log(request.query);

  if (
    (query1.maxPrice && isNaN(parseInt(query1.maxPrice))) ||
    (query1.createdAfter && isNaN(Date.parse(query1.createdAfter))) ||
    (query1.limit && isNaN(parseInt(query1.limit)))
  ) {
    return response.status(400).send("Given parameter is not supported");
  }

  if (query1.maxPrice || query1.title || query1.createdAfter || query1.limit) {
    let updatedMeals = meals
      .filter((meal) =>
        query1.maxPrice ? meal.price <= query1.maxPrice : true
      )
      .filter((meal) =>
        query1.title ? meal.title.toLowerCase().includes(query1.title) : true
      )
      .filter((meal) =>
        query1.createdAfter
          ? Date.parse(meal.createdAt) >= Date.parse(query1.createdAfter)
          : true
      );
    if (updatedMeals.length === 0) {
      return response.status(404).send("Given query does not find any data");
    } else {
      return query1.limit
        ? response.send(updatedMeals.slice(0, query1.limit))
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
