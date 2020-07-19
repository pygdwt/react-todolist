import { css } from "@emotion/core";

export const todos = () =>
  css`
    display: flex;
    flex-direction: column;

    min-height: 500px;
  `;

export const todoPlaceholderText = () =>
  css`
    font-family: "Pangolin";
    font-size: 18px;
    text-align: center;
    padding: 16px;
    color: #3b3b3b;
  `;

export const addButtonPlaceholderText = () =>
  css`
    font-family: "Pangolin";
    font-size: 16px;
    color: #e71700;
  `;
