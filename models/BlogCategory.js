const mongoose = require("mongoose");

const blogCategorySchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
// fgfgfg
module.exports = mongoose.model(
  "BlogCategory",
  blogCategorySchema
);