const Contact = require("../models/contact");

// CREATE CONTACT
exports.createContact = async (req, res) => {
  try {

    console.log(req.body);

    const { name, email, message } =
      req.body;

    const newContact =
      await Contact.create({
        name,
        email,
        message,
      });

    res.status(201).json({
      success: true,
      message: "Contact Saved",
      contact: newContact,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET CONTACTS
exports.getContacts = async (req, res) => {

  try {

    const contacts =
      await Contact.find();

    res.status(200).json({
      success: true,
      contacts,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
    });
  }
};