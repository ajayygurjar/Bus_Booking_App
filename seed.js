const sequelize = require("./utils/db-connection");
const User = require("./models/User");
const Bus = require("./models/Bus");

(async () => {
  try {
    // Sync tables
    await sequelize.sync({ force: true });

    // Add users
    await User.bulkCreate([
      { name: "Ajay", email: "ajay@example.com" },
      { name: "Aman", email: "aman@example.com" },
      { name: "Ashish", email: "ashish@example.com" },
    ]);

    // Add buses
    await Bus.bulkCreate([
      { name: "Express 1", totalSeats: 40, availableSeats: 20 },
      { name: "Express 2", totalSeats: 50, availableSeats: 5 },
    ]);

    console.log("Seed data inserted");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
