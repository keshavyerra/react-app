import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
