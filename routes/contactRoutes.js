const express = require("express");

const router = express.Router();

const {
  createContact,
  getContacts,
} = require("../controllers/contactController");

router.post("/create", createContact);

router.get("/all", getContacts);

module.exports = router;