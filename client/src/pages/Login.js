import "./Login.css";
import React, {
  useState,
} from "react";

import { useNavigate }
from "react-router-dom";

import API
from "../services/api";

function Login() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({

      email: "",

      password: "",

    });


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };


  const handleSubmit =
    async (e) => {

    e.preventDefault();

    try {

      const { data } =
        await API.post(
          "/auth/login",
          formData
        );

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert(
        error.response.data.message
      );

    }

  };


  return (
    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-right">

          <h2>Login</h2>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button type="submit">
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;