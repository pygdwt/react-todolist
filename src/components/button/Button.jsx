/** @jsx jsx */
//import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";
//import cx from "classnames";

//import styles from "./button.module.css";
import * as styles from "./button.styles";
const Button = ({ text, onClick, color, align }) => {
  // const className = [
  //   "btn-header",
  //   color === "red" && "add-color",
  //   color === "red" && "clear-color",
  //   align === "left" && "align-left",
  //   align === "right" && "align-right"
  // ].join(" ");

  /* const classNames = cx(styles.btnHeader, {
    [styles.addColor]: color === "red",
    [styles.clearColor]: color === "red",
    [styles.alignLeft]: align === "left",
    [styles.alignRight]: align === "right"
  }); */

  const theme = useTheme();

  return (
    /*   <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
}; */

    <button css={styles.button({ align, color, theme })} onClick={onClick}>
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
