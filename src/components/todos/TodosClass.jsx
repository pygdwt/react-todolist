import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";
import Container from "../../layout/Container";

import Todo from "../todo/TodoClass";

const StyledTodoPlaceholderText = styled.div`
  font-family: "Pangolin";
  font-size: 18px;
  text-align: center;
  padding: 16px;
  color: #3b3b3b;
`;

const StyledAddButtonPlaceholderText = styled.span`
  font-family: "Pangolin";
  font-size: 16px;
  color: #e71700;
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo } = this.props;
    return (
      <section className="todos-component">
        <Container flexDirection="column" minHeight="500px">
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
            <StyledTodoPlaceholderText>
              {[
                "Silahkan Menambah Todo List dengan mengklik tombol ",
                <StyledAddButtonPlaceholderText>
                  Add
                </StyledAddButtonPlaceholderText>,
                " yang terletak pada pojok kiri atas"
              ]}
            </StyledTodoPlaceholderText>
          )}
        </Container>
      </section>
    );
  }

  static PropTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),

    completeTodo: PropTypes.func.isRequired
  };
}
export default withTheme(Todos);
