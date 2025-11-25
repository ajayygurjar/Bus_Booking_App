const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// POST /bookings
router.post("/", bookingController.addBooking);

// GET /buses/:id/bookings
router.get("/bus/:id", bookingController.getBusBookings);

module.exports = router;
