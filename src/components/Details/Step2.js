import React from "react";

export const Step2 = ({ data, status }) => {
  return (
    <React.Fragment>
      <div className="heading">
        {status === "completed" && data.carSelected
          ? "Paid Token"
          : "Pay Token"}
      </div>
      <div className="details">
        {status === "completed" && data.carSelected
          ? "for " + data.carSelected
          : "for selected car"}
      </div>
    </React.Fragment>
  );
};
