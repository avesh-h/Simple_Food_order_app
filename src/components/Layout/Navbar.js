import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import "../Layout/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const isAuth = localStorage.getItem("loggedIn");
  const navigate = useNavigate()

  const logOutHandler = () => {
    props.onLogout();
    navigate('/login')
  };

  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="/login">
          FasteR_Meal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isAuth && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Home
                </Link>
              </li>
            )}
            {!isAuth && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {!isAuth && (
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
        {isAuth && <CartButton />}
        {isAuth && (
          <button className="logout-btn" onClick={logOutHandler}>
            LogOut
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
