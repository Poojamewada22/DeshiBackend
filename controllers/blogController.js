// const Blog = require("../models/Blog");

// // Create Blog
// exports.createBlog = async (req, res) => {
//   try {
//     const { title, description, category } = req.body;

//     const blog = await Blog.create({
//       title,
//       description,
//       category,
//       image: req.file ? req.file.filename : ""
//     });

//     res.status(201).json({
//       success: true,
//       blog
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };

// // Get Blogs
// exports.getBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//     res.status(200).json({ blogs });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update Blog
// exports.updateBlog = async (req, res) => {
//   try {
//     const updateData = {
//       ...req.body
//     };

//     if (req.file) {
//       updateData.image = req.file.filename;
//     }

//     const updatedBlog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );

//     res.status(200).json(updatedBlog);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete Blog
// exports.deleteBlog = async (req, res) => {
//   try {
//     await Blog.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Blog deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    const blog = await Blog.create({
      title,
      description,
      category,
      image: req.file ? req.file.filename : ""
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};