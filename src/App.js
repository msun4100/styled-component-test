import React, { Component } from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: aqua;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  required: true,
}))`
  border: none;
  ${awesomeCard}
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Input placeholder="hello" />
        </Container>
      </>
    );
  }
}

export default App;
