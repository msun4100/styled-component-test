import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: aqua;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button success>Hello</Button> />
        <Button danger>Hello</Button> />
      </Container>
    );
  }
}

export default App;
