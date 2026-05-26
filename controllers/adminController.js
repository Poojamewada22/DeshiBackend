const Admin = require("../models/adminModel");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

// ================= REGISTER =================
const registerAdmin = async (
  req,
  res
) => {
  try {
    const { email, password } =
      req.body;

    // Check Admin
    const existingAdmin =
      await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message:
          "Admin already exists",
      });
    }

    // Hash Password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Create Admin
    const admin =
      await Admin.create({
        email,
        password: hashedPassword,
      });

    res.status(201).json({
      success: true,
      message:
        "Admin Registered Successfully",
      admin,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ================= LOGIN =================
const loginAdmin = async (
  req,
  res
) => {
  try {
    const { email, password } =
      req.body;

    // Check Admin
    const admin =
      await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin Not Found",
      });
    }

    // Match Password
    const isMatch =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid Credentials",
      });
    }

    // Token
    const token = jwt.sign(
      {
        id: admin._id,
      },
      "deshi_secret_key",
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message:
        "Login Successful",
      token,
      admin,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
};