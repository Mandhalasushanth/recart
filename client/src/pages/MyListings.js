import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";

function MyListings() {

  const navigate =
    useNavigate();

  const [products, setProducts] =
    useState([]);

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts =
    async () => {

      try {

        const { data } =
          await axios.get(
            "https://recart-1.onrender.com/api/products"
          );

        setProducts(data);

      } catch (error) {

        console.log(error);

      }

    };

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this product?"
        );

      if (!confirmDelete) {
        return;
      }

      try {

        await axios.delete(
          `https://recart-1.onrender.com/api/products/${id}`
        );

        setProducts(
          products.filter(
            (item) => item._id !== id
          )
        );

        alert(
          "Product Deleted Successfully"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Failed to delete product"
        );

      }

    };

  const handleEdit =
    (id) => {

      navigate(
        `/sell/${id}`
      );

    };

  return (

    <div className="my-listings-page">

      <h1>My Listings</h1>

      <div className="listing-grid">

        {products.map((item) => (

          <div
            className="listing-card"
            key={item._id}
          >

            <h2>
              {item.title}
            </h2>

            <h3>
              ₹
              {Number(
                item.sellingPrice
              ).toLocaleString("en-IN")}
            </h3>

            <span>
              Active
            </span>

            <div className="listing-buttons">

              <button
                onClick={() =>
                  handleEdit(
                    item._id
                  )
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  handleDelete(
                    item._id
                  )
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default MyListings;