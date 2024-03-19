import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!open);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand" to="/">
          {<img src={Logo} alt="Logo" width="200px" />}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          onClick={toggleCollapse}
          aria-expanded={open ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase"
                activeClassName="active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase"
                activeClassName="active"
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase"
                activeClassName="active"
                to="/reservations"
              >
                Reservations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase"
                activeClassName="active"
                to="/orderonline"
              >
                Order Online
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase"
                activeClassName="active"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase"
                activeClassName="active"
                to="/donate"
              >
                Donate
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
