import React, { useState } from "react";
import axios from "axios";

function SellProduct() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Mobiles",
    description: "",
    condition: "5",
    originalPrice: "",
    sellingPrice: "",
    purchaseDate: "",
    mobileNumber: "",
    whatsappNumber: "",
    location: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: Array.from(e.target.files),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM DATA BEFORE SUBMIT:");
    console.log(formData);

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("title", formData.title);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("condition", formData.condition);
      formDataToSend.append("originalPrice", formData.originalPrice);
      formDataToSend.append("sellingPrice", formData.sellingPrice);
      formDataToSend.append("purchaseDate", formData.purchaseDate);
      formDataToSend.append("mobileNumber", formData.mobileNumber);
      formDataToSend.append("whatsappNumber", formData.whatsappNumber);
      formDataToSend.append("location", formData.location);

      formData.images.forEach((image) => {
        formDataToSend.append("images", image);
      });

      console.log("FORMDATA CONTENTS:");
      for (let pair of formDataToSend.entries()) {
        console.log(pair[0], pair[1]);
      }

      const response = await axios.post(
        "https://recart-1.onrender.com/api/products",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("SUCCESS RESPONSE:", response.data);

      alert("Product Uploaded Successfully");

      setFormData({
        title: "",
        category: "Mobiles",
        description: "",
        condition: "5",
        originalPrice: "",
        sellingPrice: "",
        purchaseDate: "",
        mobileNumber: "",
        whatsappNumber: "",
        location: "",
        images: [],
      });
    } catch (error) {
      console.log("AXIOS ERROR:", error);

      if (error.response) {
        console.log("STATUS:", error.response.status);
        console.log("DATA:", error.response.data);

        alert(JSON.stringify(error.response.data));
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="sell-page">
      <div className="sell-container">
        <h1>Sell Your Product</h1>

        <p>
          Upload your used products and connect directly with buyers.
        </p>

        <form className="sell-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Mobiles</option>
              <option>Laptops</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Cars</option>
              <option>Bikes</option>
              <option>Watches</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write product details..."
              required
            />
          </div>

          <div className="form-group">
            <label>Condition (1-5)</label>

            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
            >
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Average</option>
              <option value="2">2 - Old</option>
              <option value="1">1 - Poor</option>
            </select>
          </div>

          <div className="form-group">
            <label>Buying Price</label>

            <input
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              placeholder="Original price"
              required
            />
          </div>

          <div className="form-group">
            <label>Selling Price</label>

            <input
              type="number"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleChange}
              placeholder="Selling price"
              required
            />
          </div>

          <div className="form-group">
            <label>Purchase Date</label>

            <input
              type="date"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>

            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter mobile number"
              required
            />
          </div>

          <div className="form-group">
            <label>WhatsApp Number</label>

            <input
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="Enter WhatsApp number"
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your location"
              required
            />
          </div>

          <div className="form-group">
            <label>Upload Images</label>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          <button type="submit" className="upload-btn">
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default SellProduct;