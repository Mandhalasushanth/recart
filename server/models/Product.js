const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    originalPrice: {
      type: Number,
      required: true,
    },

    sellingPrice: {
      type: Number,
      required: true,
    },

    condition: {
      type: Number,
      required: true,
    },

    purchaseDate: {
      type: Date,
      required: true,
    },

    mobileNumber: {
      type: String,
      required: true,
    },

    whatsappNumber: {
      type: String,
      required: true,
    },
    location: {
  type: String,
  required: true,
},

    images: [
      {
        type: String,
      },
    ],

    seller: {
      type: String,
      default: "Anonymous",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "Product",
    productSchema
  );