import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  margin: 15px 20px;
  padding: 3px 10px;
  font-size: 20px;
  letter-spacing: 2px;
`;

const DateInput = ({ setDate }) => {
  return (
    <InputContainer>
      <h4>Choose a Date 👉🏼</h4>
      <Input
        type="date"
        placeholder="Search"
        onkeydown="return false"
        onChange={e => setDate(e.target.value)}
      />
    </InputContainer>
  );
};

export default DateInput;
