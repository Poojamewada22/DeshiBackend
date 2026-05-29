require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ================= DATABASE CONNECTION =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

// ================= ROUTES =================
const adminRoutes = require("./routes/adminRoutes");
const categoryRoutes = require("./routes/blogCategoryRoutes");
const contactRoutes = require("./routes/contactRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use("/api/admin", adminRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/blog", blogRoutes);

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.send("API Running...");
});

// ================= ERROR HANDLER =================
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.stack);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ================= START SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});