import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";

const StyledButton = styled.button`
  font-size: 1.8rem;
  font-family: "Pangolin";

  color: ${props => props.textColor};
  text-align: ${props => props.align};

  padding: 16px;

  background: unset;
  border: unset;
  outline: unset;

  cursor: pointer;
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, align, theme } = this.props;
    const {
      color: { primary }
    } = theme;

    let textColor;
    switch (color) {
      case "red":
        textColor = primary.red;
        break;
      default:
        textColor = primary.red;
    }

    return (
      <StyledButton textColor={textColor} align={align} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }

  static defaultProps = {
    text: "Button",
    color: "red",
    align: "left"
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["red"]),
    align: PropTypes.oneOf(["left", "right"])
  };
}

export default withTheme(Button);
