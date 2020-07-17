import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <button className="btn-header add-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="judul-header">ToDo List</h1>
      <button className="btn-header clear-color" onClick={clearTodos}>
        Clear
      </button>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
