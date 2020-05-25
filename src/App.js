import React, { Component } from "react";
import reset from "styled-reset";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    padding: 0;
    margin: 0;
  }
  `;

const Card = styled.div`
  background-color: red;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: aqua;
  ${Card} {
    background-color: blue;
  }
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${(props) => props.theme.successColor};
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>
            <Form />
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
