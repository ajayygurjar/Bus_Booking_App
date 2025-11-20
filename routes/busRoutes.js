const express = require("express");
const router = express.Router();
const busController = require("../controllers/busController");

// POST /buses
router.post("/add", busController.addBus);

// GET /buses
router.get("/available", busController.getAllBuses);

// GET /buses/available/:seats
router.get("/available/:seats", busController.getAvailableBuses);

module.exports = router;
