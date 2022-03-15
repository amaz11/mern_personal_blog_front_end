import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(userContext);
  const MenuRender = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              LogOut
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="signup">
              Registraton
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="my-2 ml-auto navbar-nav my-lg-0 navbar-nav-scroll">
            <MenuRender />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
