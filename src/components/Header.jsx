import React from "react";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <section className="header">
      <button className="btn-header add-color">Add</button>
      <h1 className="judul-header">ToDo List</h1>
      <button className="btn-header clear-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired
};

export default Header;
