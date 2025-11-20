const Bus = require("../models/Bus");

// Add a new bus
const addBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json(bus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all buses
const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.findAll();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get buses with available seats greater than a given number
const getAvailableBuses = async (req, res) => {
  try {
    const seats = parseInt(req.params.seats);
    if (isNaN(seats)) {
      return res.status(400).json({ error: "Seats must be a number" });
    }

    // Simple filter in JS instead of Op.gt
    const buses = await Bus.findAll();
    const filteredBuses = buses.filter(bus => bus.availableSeats > seats);

    res.json(filteredBuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBus,
  getAllBuses,
  getAvailableBuses,
};
