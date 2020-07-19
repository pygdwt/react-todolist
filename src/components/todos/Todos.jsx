/** @jsx jsx */
import { jsx } from "@emotion/core";
//import React from "react";
import PropTypes from "prop-types";
//import styles from "./todos.module.css";

import * as styles from "./todos.styles";

import Todo from "../todo/Todo";
const Todos = ({ todos, completeTodo }) => {
  return (
    <section css={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div css={styles.todoPlaceholderText}>
          Silahkan Menambah Todo List dengan mengklik tombol{" "}
          <span css={styles.addButtonPlaceholderText}>Add</span>
        </div>
      )}
    </section>
  );
};

Todos.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),

  completeTodo: PropTypes.func.isRequired
};

export default Todos;
