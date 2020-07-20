/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";
//import styles from "./todoform.module.css";
import * as styles from "./todoform.styles";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import Button from "../button/Button";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("sorry, input cannot be blank");
      return;
    }

    if (value.length > 50) {
      alert("sorry, maximum input is 50");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };
  if (!showAdd) {
    return (
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput}
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </Item>

            <Item>
              {/* <button css={styles.addBtn}>Add</button> */}
              <Button text="Add" color="red" />
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default TodoForm;
