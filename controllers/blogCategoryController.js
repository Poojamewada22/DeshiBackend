// const Category = require("../models/blogCategory");

// const BlogCategory = require("../models/blogCategory");
const BlogCategory = require("../models/blogCategory");
// ================= CREATE =================
const createCategory = async (
  req,
  res
) => {

  try {

    const { name } = req.body;

    if (!name) {

      return res.status(400).json({
        success: false,
        message: "Category name required",
      });
    }

    const category =
      await Category.create({
        name,
      });

    res.status(201).json({
      success: true,
      message: "Category Created",
      category,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ================= GET =================
const getCategories = async (
  req,
  res
) => {

  try {

    const categories =
      await Category.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      categories,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ================= DELETE =================
const deleteCategory = async (
  req,
  res
) => {

  try {

    await Category.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Deleted",
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
  createCategory,
  getCategories,
  deleteCategory,
};