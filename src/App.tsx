import React from "react";
import styled from "styled-components";
import { colorPalates } from "./variables";

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${colorPalates.forestGreen};
`;

const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  color: white;
`;

const Input = styled.input`
  margin-top: 25px;
  border-radius: 5px;
  width: 300px;
  height: 20px;
  padding: 7px;
`;

const StrengthGauge = styled.div`
  height: 25px;
  width: 318px;
  border-radius: 5px;
  background-color: white;
  margin-top: 10px;
`;

const Divider = styled.div`
  margin-top: 30px;
  height: 2px;
  width: 85%;
  border-bottom: 2px solid white;

  @media only screen and (min-width: 769px) {
    width: 600px;
  }
`;

function App() {
  return (
    <AppContainer>
      <Title>Password Strength Checker</Title>
      <Input type="text" placeholder="type your password here" />
      <StrengthGauge />
      <Divider />
    </AppContainer>
  );
}

export default App;
