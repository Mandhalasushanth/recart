import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  FaSearch,
  FaMobileAlt,
  FaLaptop,
  FaCar,
  FaCouch,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function ExploreProducts() {

  const navigate =
    useNavigate();

  const [products, setProducts] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("");

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts =
    async () => {

      try {

        const { data } =
          await axios.get(
            "http://localhost:5000/api/products"
          );

        setProducts(data);

      } catch (error) {

        console.log(error);

      }

    };

  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === ""
          ? true
          : product.category ===
            category;

      return (
        matchesSearch &&
        matchesCategory
      );

    });

  return (
    <div className="explore-page">

      {/* TOP SECTION */}
      <div className="explore-top">

        <h1>
          Explore Products
        </h1>

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* FILTER SECTION */}
      <div className="filter-section">

        <div
          className="filter-card"
          onClick={() =>
            setCategory(
              "Mobiles"
            )
          }
        >
          <FaMobileAlt />
          <p>Mobiles</p>
        </div>

        <div
          className="filter-card"
          onClick={() =>
            setCategory(
              "Laptops"
            )
          }
        >
          <FaLaptop />
          <p>Laptops</p>
        </div>

        <div
          className="filter-card"
          onClick={() =>
            setCategory(
              "Cars"
            )
          }
        >
          <FaCar />
          <p>Cars</p>
        </div>

        <div
          className="filter-card"
          onClick={() =>
            setCategory(
              "Furniture"
            )
          }
        >
          <FaCouch />
          <p>Furniture</p>
        </div>

      </div>

      {/* PRODUCT GRID */}
      <div className="products-grid">

        {filteredProducts.map(
          (product) => (

            <div
              className="product-card"
              key={product._id}
            >

               <img
  src={
    product.images &&
    product.images.length > 0
      ? product.images[0]
      : "/no-image.png"
  }
  alt={product.title}
  onError={(e) => {
    e.target.src = "/no-image.png";
  }}
/>

              <div className="product-info">

                <span className="ai-badge">
                  AI Ready
                </span>

                <h3>
                  {product.title}
                </h3>

                <h2>
                  ₹
                  {
                    product.sellingPrice
                  }
                </h2>

                <p>
                  Condition:
                  {" "}
                  {
                    product.condition
                  }
                  /5
                </p>

                <p>
                  Category:
                  {" "}
                  {
                    product.category
                  }
                </p>

                <button
                  onClick={() =>
                    navigate(
                      `/product/${product._id}`
                    )
                  }
                >
                  View Details
                </button>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default ExploreProducts;