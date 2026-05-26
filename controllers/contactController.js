// const Contact = require("../models/Contact");

// // Create Contact
// const createContact = async (req, res) => {
//   try {
//     const contact = await Contact.create(req.body);

//     res.status(201).json({
//       success: true,
//       contact,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Get Contacts
// const getContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find();

//     res.status(200).json({
//       success: true,
//       contacts,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   createContact,
//   getContacts,
// };

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