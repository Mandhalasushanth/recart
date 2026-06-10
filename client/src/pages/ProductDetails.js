import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useParams,
} from "react-router-dom";

import {
  FaWhatsapp,
  FaRobot,
  FaMapMarkerAlt,
  FaUserCircle,
} from "react-icons/fa";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const [analysis, setAnalysis] =
    useState("");

  const [loadingAI, setLoadingAI] =
    useState(false);

  useEffect(() => {

    fetchProduct();

  }, [id]);

  const fetchProduct =
    async () => {

      try {

        const { data } =
          await axios.get(
            `http://localhost:5000/api/products/${id}`
          );

        setProduct(data);

      } catch (error) {

        console.log(error);

      }

    };

  const handleAIAnalysis = async () => {
    try {

      setLoadingAI(true);

      const prompt = `
Analyze this used product and provide a recommendation.

Title: ${product.title}
Category: ${product.category}
Original Price: ₹${Number(product.originalPrice).toLocaleString("en-IN")}
Selling Price: ₹${Number(product.sellingPrice).toLocaleString("en-IN")}
Condition: ${product.condition}/5
Purchase Date: ${product.purchaseDate}
Description: ${product.description}

Please tell:
1. Is the selling price fair?
2. Pros
3. Cons
4. Final recommendation
`;

      const { data } = await axios.post(
        "http://localhost:5000/api/ai/chat",
        {
          message: prompt,
        }
      );

      setAnalysis(data.reply);

    } catch (error) {

      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      setAnalysis("AI Analysis Failed");

    } finally {

      setLoadingAI(false);

    }
  };

  if (!product) {

    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Loading...
      </h2>
    );

  }

  return (

    <div className="details-page">

      <div className="details-container">

        <div className="details-left">

          <img
            src={
              product.images?.[0] ||
              "https://via.placeholder.com/500"
            }
            alt={product.title}
            className="main-image"
          />

        </div>

        <div className="details-right">

          <span className="condition-badge">

            Condition:
            {" "}
            {product.condition}/5

          </span>

          <h1>
            {product.title}
          </h1>

          <h2>
            ₹{Number(product.sellingPrice).toLocaleString("en-IN")}
          </h2>

          <h3
            style={{
              textDecoration: "line-through",
              textDecorationThickness: "1px",
              opacity: 0.7,
            }}
          >
            ₹{Number(product.originalPrice).toLocaleString("en-IN")}
          </h3>

          <p className="product-description">

            {product.description}

          </p>

          <div className="product-meta">

            <p>
              <FaMapMarkerAlt />
              {" "}
              {product.location}
            </p>

            <p>
              Category:
              {" "}
              {product.category}
            </p>

            <p>
              Selling Price:
              {" "}
              ₹{Number(product.sellingPrice).toLocaleString("en-IN")}
            </p>

            <p>
              Original Price:
              {" "}
              ₹{Number(product.originalPrice).toLocaleString("en-IN")}
            </p>

            <p>
              Mobile:
              {" "}
              {product.mobileNumber}
            </p>

            <p>
              Purchase Date:
              {" "}
              {
                new Date(
                  product.purchaseDate
                ).toLocaleDateString()
              }
            </p>

            <p>
              <FaUserCircle />
              {" "}
              Seller:
              {" "}
              {product.seller ||
                "Anonymous"}
            </p>

          </div>

          <div className="details-buttons">

            <a
              href={`https://wa.me/${product.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >

              <FaWhatsapp />

              Chat on WhatsApp

            </a>

            <button
              className="ai-analysis-btn"
              onClick={
                handleAIAnalysis
              }
            >

              <FaRobot />

              {
                loadingAI
                  ? "Analyzing..."
                  : "AI Analysis"
              }

            </button>

          </div>

          <div className="ai-analysis-box">

            <h3>
              AI Product Analysis
            </h3>

            <p
              style={{
                whiteSpace:
                  "pre-wrap",
              }}
            >

              {
                analysis ||
                "Click AI Analysis to get AI recommendation."
              }

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ProductDetails;