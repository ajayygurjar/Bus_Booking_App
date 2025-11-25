const { Booking, User, Bus } = require("../models");

const addBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { userId: req.params.id },
      include: [{ model: Bus, attributes: ["busNumber", "name"] }],
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBusBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { busId: req.params.id },
      include: [{ model: User, attributes: ["name", "email"] }],
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBooking,
  getUserBookings,
  getBusBookings,
};
