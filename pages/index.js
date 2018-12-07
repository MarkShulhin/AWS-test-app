import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Title from '../components/Title';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default () => (
  <Title>
    <GlobalStyle />
    Server side rendered "Hello World!"
  </Title>
)