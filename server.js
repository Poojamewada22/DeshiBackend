// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* ================= MongoDB Connect ================= */

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// /* ================= Routes ================= */

// app.get("/", (req, res) => {
//   res.send("API Running Successfully");
// });

// /* ================= Server ================= */

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server Running on Port ${PORT}`);
// });

// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const blogRoutes = require("./routes/blogRoutes");
// const blogCategoryRoutes = require("./routes/blogCategoryRoutes");
// // const contactRoutes = require("./routes/contactRoutes");
// const contactRoutes = require("./routes/contactRoutes");


// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use("/api/blog", blogRoutes);
// app.use("/api/blogcategory", blogCategoryRoutes);
// app.use("/api/contact", contactRoutes);

// /* MongoDB Connection */

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// /* Test Route */

// app.get("/", (req, res) => {
//   res.send("API Running");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server Running on Port ${PORT}`);
// });





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