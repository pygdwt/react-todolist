import { css } from "@emotion/core";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "red":
      textColor = "#e71700";
      break;
    default:
      textColor = "black";
  }

  return css`
    width: 24%;
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
