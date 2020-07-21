import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";


const StyledTodo = styled.div`
  position: relative;

  flex: 1 0 auto;
  text-align: center;

  max-height: 34px;
  margin: 16px 0 0;
  font-family: "Homemade Apple";
  font-size: 14px;
  border-bottom: 1px solid #5374a5;
  color: #3b3b3b;
`;

const StyledTodoText = styled.span`
  position: relative;

  flex: 1 0 auto;
  text-align: center;

  max-height: 34px;
  margin: 16px 0 0;
  font-family: "Homemade Apple";
  font-size: 14px;
  /* border-bottom: 1px solid #5374a5; */
  color: #3b3b3b;
  text-decoration: ${props => props.isCompleted ? 'line-through' : 'initial'}
`;

class Todo extends React.Component {
  render() {
    const{text, completeTodo, index, isCompleted, theme} = this.props
    return(
      <StyledTodo onClick={() => completeTodo(index)} theme={theme}>
      <StyledTodoText theme={theme} isCompleted={isCompleted}>{text}</StyledTodoText>
      </StyledTodo>

    ); 
  }



static propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
}
export default withTheme(Todo);