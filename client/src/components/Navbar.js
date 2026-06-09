import React, {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaShoppingBag,
  FaUserCircle,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {

  const navigate =
    useNavigate();

  const [showMenu, setShowMenu] =
    useState(false);

  const menuRef = useRef(null);

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  useEffect(() => {

    const handleClickOutside = (
      event
    ) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
      ) {

        setShowMenu(false);

      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");

  };

  return (

    <nav className="navbar">

      {/* LEFT LOGO */}
      <div className="navbar-left">

        <Link
          to="/"
          className="logo-section"
        >

          <FaShoppingBag
            className="logo-icon"
          />

          <h2>ReCart</h2>

        </Link>

      </div>

      {/* CENTER LINKS */}
      <div className="navbar-center">

        <Link to="/">
          Home
        </Link>

        <Link to="/sell">
          Sell Products
        </Link>

        <Link to="/explore">
          Explore Products
        </Link>

      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        {

          user ? (

            <div
              className="profile-wrapper"
              ref={menuRef}
            >

              <FaUserCircle
                className="profile-icon"
                onClick={() =>
                  setShowMenu(
                    (prev) => !prev
                  )
                }
              />

              {

                showMenu && (

                  <div className="profile-menu">

                    <h4>
                      Welcome, {user.name}
                    </h4>

                    <p>
                      {user.email}
                    </p>

                    <Link to="/my-listings">
                      My Listings
                    </Link>

                    <button
                      onClick={handleLogout}
                    >
                      Logout
                    </button>

                  </div>

                )

              }

            </div>

          ) : (

            <div className="auth-links">

              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>

            </div>

          )

        }

      </div>

    </nav>

  );

}

export default Navbar;