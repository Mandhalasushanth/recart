import "./Login.css";
import React, {
  useState,
} from "react";

import { useNavigate }
from "react-router-dom";

import API
from "../services/api";

function Register() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({

      name: "",

      email: "",

      password: "",

      confirmPassword: "",

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

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      return alert(
        "Passwords do not match"
      );

    }

    try {

      await API.post(
        "/auth/register",
        {

          name:
            formData.name,

          email:
            formData.email,

          password:
            formData.password,

        }
      );

      alert(
        "Registration Successful"
      );

      navigate("/login");

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

          <h2>Create Account</h2>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

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

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />

            <button type="submit">
              Register
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;