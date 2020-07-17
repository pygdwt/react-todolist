import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";
const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
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
        <div className="todo-placeholder-text">
          Silahkan Menambah Todo List dengan mengklik tombol{" "}
          <span className="add-button-placeholder-text">Add</span>
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
