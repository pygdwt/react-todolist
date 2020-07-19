import {css} from '@emotion/core';
export const paper = ({theme}) => 
  css`
    width: 600px;
    height: 800px;
    background-color: ${theme.background.color.primary};
    border-radius: 4px;
    padding: 32px;
  `;

export const frame = () =>
  css`
    border: 1.2px dashed #5374a5;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;