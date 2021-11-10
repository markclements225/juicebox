import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="title">Juicebox</h1>
      <div className="links">
        <Link to="/" className="navlinks">
          Home
        </Link>
        <Link to="/posts" className="navlinks">
          Juicy Posts
        </Link>
        <Link to="/register" className="navlinks">
          Create Post
        </Link>
        <Link to="/login" className="navlinks">
          Login
        </Link>
        <Link to="/register" className="navlinks">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
