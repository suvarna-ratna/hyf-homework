const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
    try {
        console.log(reservations);
        console.log("in /api/reservations");
        response.send(reservations);
    } catch (error) {
        throw error;
    }
});
router.get("/:id", async (request, response) => {

    if (typeof parseInt(request.params.id) == "number") {
        const responseData = reservations.filter(reservation => reservation.id === parseInt(request.params.id))
        if (responseData.length === 0) {
            return response.status(404).send("Given query does not find any data")
        }
        else {
            return response.send(responseData);
        }
    }
    else {
        return response.status(400).send("Given parameter is not supported")
    }
});

module.exports = router;