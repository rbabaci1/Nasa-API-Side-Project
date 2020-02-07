import React from "react";
import styled from "styled-components";

const Define = styled.span`
  color: black;
  font-size: 20px;
`;

const Explanation = ({ explanation }) => {
  return (
    <div>
      <p>
        <Define style={{ fontWeight: "bold" }}>Explanation: </Define>
        {explanation}
      </p>
    </div>
  );
};

export default Explanation;
