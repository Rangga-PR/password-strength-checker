import React, { useState } from "react";
import styled from "styled-components";
import { colorPalates } from "./variables";
import StrengthMeter from "./component/strengthMeter";

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
  letter-spacing: 2px;
  font-family: "Fredoka One", cursive;
`;

const Input = styled.input`
  margin-top: 25px;
  border-radius: 5px;
  width: 300px;
  height: 20px;
  padding: 7px;
  border: none;
  color: ${colorPalates.paleGreen};
  font-weight: bolder;

  :focus {
    outline: none;
  }
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

const LengthCheck = (input: String): number => {
  const length = input.length;
  if (length < 3) return 40;
  if (length < 12) return 20;
  return 0;
};

const characterCheck = (input: String): number => {
  let deduction = 0;
  if (!input.match(/([a-z])\w+/g)) deduction += 15;
  if (!input.match(/([A-Z])\w+/g)) deduction += 15;
  if (!input.match(/([0-9])\w+/g)) deduction += 15;
  if (!input.match(/([^A-Za-z0-9])/g)) deduction += 15;
  return deduction;
};

function App() {
  const [input, setInput] = useState("");
  const [strength, setStrength] = useState(0);

  const handleInput = (event: any) => {
    setInput(event.target.value);
    let deduction =
      LengthCheck(event.target.value) + characterCheck(event.target.value);
    setStrength(100 - deduction);
    if (event.target.value.length < 1) setStrength(0);
  };

  return (
    <AppContainer>
      <Title>Password Strength Checker</Title>
      <Input
        autoFocus
        type="text"
        placeholder="type your password here"
        onChange={handleInput}
        value={input}
      />
      <StrengthMeter gauge={strength} />
      <Divider />
    </AppContainer>
  );
}

export default App;
