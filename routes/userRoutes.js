const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// POST /users
router.post("/add", userController.addUser);

// GET /users
router.get("/get", userController.getAllUsers);

module.exports = router;
