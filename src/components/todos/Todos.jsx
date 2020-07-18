import React from "react";
import PropTypes from "prop-types";
import styles from "./todos.module.css";

import Todo from "../todo/Todo";
const Todos = ({ todos, completeTodo }) => {
  return (
    <section className={styles.todos}>
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
        <div className={styles.todoPlaceholderText}>
          Silahkan Menambah Todo List dengan mengklik tombol{" "}
          <span className={styles.addButtonPlaceholderText}>Add</span>
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
