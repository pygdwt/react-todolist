import { css } from "@emotion/core";

export const todo = () =>
  css`
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

export const todoText = ({ isCompleted }) =>
  css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    text-decoration: ${isCompleted ? "line-through" : "initial"};
  `;
