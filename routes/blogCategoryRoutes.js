// const express = require("express");

// const {
//   createCategory,
//   getCategories,
// } = require("../controllers/blogCategoryController");

// const router = express.Router();

// router.post("/create", createCategory);
// router.get("/all", getCategories);

// module.exports = router;


// const express = require("express");

// const router = express.Router();

// const {
//   createCategory,
//   getCategories,
//   deleteCategory,
// } = require("../controllers/blogCategoryController");

// router.post("/create", createCategory);

// router.get("/all", getCategories);

// router.delete("/delete/:id", deleteCategory);

// module.exports = router;


const express = require("express");

const router = express.Router();

const {
  createCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/blogCategoryController");

router.post(
  "/create",
  createCategory
);

router.get(
  "/all",
  getCategories
);

router.delete(
  "/delete/:id",
  deleteCategory
);

module.exports = router;