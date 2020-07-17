import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, color, align }) => {
  const className = [
    "btn-header",
    color === "red" && "add-color",
    color === "red" && "clear-color",
    align === "left" && "align-left",
    align === "right" && "align-right"
  ].join(" ");

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "red",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
