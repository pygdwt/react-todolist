import { css } from "@emotion/core";

export const add = () =>
  css`
    padding: 16px;
  `;

export const addForm = () =>
  css`
    display: flex;
    align-items: flex-start;
  `;

export const addInput = () =>
  css`
    background: unset;
    border: unset;
    padding: 0 64px;
    flex: 1;
    border-bottom: solid 1px #5374a5;
    outline: unset;
    font-family: "Homemade Apple";
    font-size: 16px;
    text-transform: lowercase;
    color: #3b3b3b;
  `;

export const addBtn = () =>
  css`
    font-size: 1.8rem;
    font-family: "Pangolin";
    color: #e71700;
    padding: 16px;
    padding-right: unset;
    cursor: pointer;
    border: unset;
    background: unset;
    outline: unset;
  `;
