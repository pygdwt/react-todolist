import React from "react";
import Todo from "./Todo";
const Todos = () => {
  const todos = [
    {
      text: "Assalamualaikum"
    },
    {
      text: "Warahmatullahi"
    },
    {
      text: "Wabarakato"
    }
  ];

  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
