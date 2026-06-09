**ReCart - AI Powered Used Product Marketplace**

ReCart is a full-stack web application that allows users to buy and sell used products online. Users can upload product listings with images, explore available products, view detailed product information, and connect directly with sellers through WhatsApp. The platform also includes an AI-powered product analysis feature that helps buyers evaluate whether a listed product is worth purchasing.

**Features**
User Registration and Login
Product Listing with Image Upload
Browse and Search Products
Product Details Page
WhatsApp Seller Contact
AI Product Analysis using Groq AI
My Listings Page
Edit Product Details
Delete Product Listings
Responsive User Interface
**Technologies Used**
**Frontend**
React.js
React Router DOM
Axios
CSS
React Icons
**Backend**
Node.js
Express.js
MongoDB
Mongoose
Multer
AI Integration
Groq API (LLM-based Product Analysis)


**Project Structure**

/client → React Frontend

/server → Node.js & Express Backend

**Installation**
Frontend
cd client
npm install
npm start
Backend
cd server
npm install
npm run dev
Environment Variables

**Create a .env file inside the server folder:**

MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
PORT=5000

**Algorithms / Logic Used**
CRUD Operations for Product Management
REST API Architecture
MongoDB Query Operations
Image Upload Handling using Multer
AI-Based Product Recommendation Analysis
Dynamic Routing with React Router
Additional Implementations
Product Edit Functionality
Product Delete Functionality
Multi-Image Upload Support
Price Comparison and AI Recommendation
Responsive Design for Multiple Devices
Future Enhancements
JWT Authentication
Wishlist Feature
Product Search & Filters
User Profile Management
Online Payment Integration
Product Recommendation System
