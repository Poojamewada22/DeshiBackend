const express = require("express");
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
} = require("../controllers/adminController");

// Admin Register Route
router.post("/register", registerAdmin);

// Admin Login Route
router.post("/login", loginAdmin);

module.exports = router;