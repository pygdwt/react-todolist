import React, { useState } from "react";

import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";
import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoform/TodoFormClass";
import Todos from "../components/todos/TodosClass";

import Container from "./../layout/Container";

const TodoList = () => {
  /* const [todos, setTodos] = useState([
    {
      text: "Alhamdulillah",
      isCompleted: false
    },
    {
      text: "hirabbil",
      isCompleted: false
    },
    {
      text: "aaLaamiin",
      isCompleted: false
    }
  ]); */

  /* const [todos, setTodos] = useState(
  JSON.parse(localStorage.getItem("todos")) || []
) */
  const [todos, setTodos] = useStateWithLocalStorage("todos");
  const [showAdd, setShowAdd] = useState(false);

  /* useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
},[todos]); */

  const addTodo = value => {
    if (todos.length < 25) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("sorry, you have reached the maximum limit!");
    }
  };

  const completeTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
