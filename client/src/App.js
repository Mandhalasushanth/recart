import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ExploreProducts from "./pages/ExploreProducts";
import SellProduct from "./pages/SellProduct";
import ProductDetails from "./pages/ProductDetails";
import MyListings from "./pages/MyListings";
import AIAssistant from "./pages/AIAssistant";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

         <Route
  path="/explore"
  element={<ExploreProducts />}
/>

<Route
  path="/sell"
  element={<SellProduct />}
/>

<Route
  path="/sell/:id"
  element={<SellProduct />}
/>

<Route
  path="/product/:id"
  element={<ProductDetails />}
/>

        <Route
          path="/my-listings"
          element={<MyListings />}
        />

        <Route
          path="/ai"
          element={<AIAssistant />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;