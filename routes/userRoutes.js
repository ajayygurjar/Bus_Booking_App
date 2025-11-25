const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const bookingController = require("../controllers/bookingController");

// POST /users
router.post("/add", userController.addUser);

// GET /users
router.get("/get", userController.getAllUsers);


router.get("/:id/bookings", bookingController.getUserBookings);

module.exports = router;
