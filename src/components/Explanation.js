import React from "react";

const Explanation = ({ explanation }) => {
  return (
    <div>
      <p>
        <span>Explanation: </span>
        {explanation}
      </p>
    </div>
  );
};

export default Explanation;
