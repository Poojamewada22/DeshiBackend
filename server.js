const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
// ================= DATABASE =================
mongoose
  .connect("mongodb://127.0.0.1:27017/deshiblog")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

// ================= ROUTES =================
const adminRoutes = require( "./routes/adminRoutes");

const categoryRoutes = require("./routes/blogCategoryRoutes");
const contactRoutes = require("./routes/contactRoutes");
const blogRoutes = require("./routes/blogRoutes");

// ================= API ROUTES =================
app.use( "/api/admin", adminRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/blog", blogRoutes);
app.use("/uploads", express.static("uploads"));  


// ================= TEST =================
app.get("/", (req, res) => {
  res.send("API Running");
});

// ================= SERVER =================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});