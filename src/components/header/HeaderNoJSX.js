/** @jsx jsx */
//import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../button/ButtonNoJSX";
import { useTheme } from "emotion-theming";
//import styles from "./header.module.css";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return jsx(
    "section",
    {
      className: "header-component"
    },
    jsx(
      Container,
      {
        alignItems: "flex-start"
      },
      jsx(
        //item 1
        Item,
        {
          flex: 1
        },
        jsx(
          //BUTTON 1
          Button,
          {
            text: showAdd ? "Finish" : "Add",
            onClick: showAddToggle
          }
        )
      ),
      jsx(
        //ITEM 2
        Item,
        {
          flex: 2
        },
        jsx(
          "h1",
          {
            css: styles.judulHeader(theme)
          },
          "ToDo List"
        )
      ),
      jsx(
        //ITEM 3
        Item,
        {
          flex: 1,
          align: "right"
        }
      ),
      jsx(
        //BUTTON 2
        Button,
        {
          text: "Clear",
          onClick: clearTodos,
          color: "red",
          align: "right"
        }
      )
    )
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
