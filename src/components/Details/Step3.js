import React from "react";

export const Step3 = ({ data, status }) => {
  return (
    <React.Fragment>
      <div className="heading">
        {status === "completed" ? "Loan Processed" : "Processing your Loan"}
      </div>
      <div className="details">Usually takes 3-6 for different banks</div>
    </React.Fragment>
  );
};
