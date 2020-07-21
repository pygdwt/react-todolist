import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

import Button from "../button/ButtonClass";

const StyledInput = styled.input`
  background: unset;
  border: unset;
  padding: 0 64px;
  width: 100%;
  border-bottom: solid 1px #5374a5;
  outline: unset;
  font-family: "Homemade Apple";
  font-size: 16px;
  text-transform: lowercase;
  color: #3b3b3b;
`;

class TodoForm extends React.Component {
  state = {
    value: ""
  };

  handleFormSubmit = e => {
    const { value } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();

    if (!value) {
      alert("sorry, input cannot be blank");
      return;
    }

    if (value.length > 50) {
      alert("sorry, maximum input is 50");
      this.setState({
        value: ""
      });
      return;
    }

    addTodo(value);
    this.setState({
      value: ""
    });
  };
  handleOnChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const { showAdd, theme } = this.props;
    if (showAdd) {
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItems="flex-start">
              <Item flex={1} padding="0 0 0 16px">
                <StyledInput
                  theme={theme}
                  type="text"
                  value={this.state.value}
                  onChange={this.handleOnChange}
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
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}
export default withTheme(TodoForm);
