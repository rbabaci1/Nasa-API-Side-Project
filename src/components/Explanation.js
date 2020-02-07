import React from "react";

const Explanation = ({ explanation }) => {
  return (
    <div>
      <p>
        <span style={{ fontWeight: "bold" }}>Explanation: </span>
        {explanation}
      </p>
    </div>
  );
};

export default Explanation;
