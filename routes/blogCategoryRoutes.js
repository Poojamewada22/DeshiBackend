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