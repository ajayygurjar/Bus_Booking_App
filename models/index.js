const sequelize = require("../utils/db-connection");

const User = require("./User");
const Bus = require("./Bus");
const Booking = require("./Booking");

// USER → BOOKING (One-to-Many)
User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });

// BUS → BOOKING (One-to-Many)
Bus.hasMany(Booking, { foreignKey: "busId" });
Booking.belongsTo(Bus, { foreignKey: "busId" });

module.exports = { sequelize, User, Bus, Booking };
