import { css } from "@emotion/core";

export const button = ({ color, align, theme }) => {
  let textColor;
  const {
    color: { primary }
  } = theme;

  switch (color) {
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor = primary.red;
  }

  return css`
    /* width: 24%; */
    font-size: 1.8rem;
    font-family: "Pangolin";

    color: ${textColor};
    text-align: ${align};

    padding: 16px;

    background: unset;
    border: unset;
    outline: unset;

    cursor: pointer;
  `;
};
