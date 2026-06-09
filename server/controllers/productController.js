 const Product = require("../models/Product");

// CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const imageUrls = [];

    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        imageUrls.push(file.path);
      });
    }

    const product = await Product.create({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,

      condition: Number(req.body.condition),
      originalPrice: Number(req.body.originalPrice),
      sellingPrice: Number(req.body.sellingPrice),

      purchaseDate: req.body.purchaseDate,

      mobileNumber: req.body.mobileNumber,
      whatsappNumber: req.body.whatsappNumber,
      location: req.body.location,

      images: imageUrls,
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE PRODUCT
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const updatedProduct =
      await Product.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          category: req.body.category,
          description: req.body.description,
          condition: Number(req.body.condition),
          originalPrice: Number(req.body.originalPrice),
          sellingPrice: Number(req.body.sellingPrice),
          purchaseDate: req.body.purchaseDate,
          mobileNumber: req.body.mobileNumber,
          whatsappNumber: req.body.whatsappNumber,
          location: req.body.location,
        },
        {
          new: true,
        }
      );

    res.json({
      success: true,
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};