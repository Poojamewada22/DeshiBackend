// const mongoose = require("mongoose");

// const blogCategorySchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model(
//   "BlogCategory",
//   blogCategorySchema
// );


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