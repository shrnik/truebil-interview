import React from "react";

export const Step4 = ({ data, status }) => {
  return (
    <React.Fragment>
      <div className="heading">
        {status === "completed" ? "Car Delivered" : "Take delivery of your car"}
      </div>
      <div className="details">From our {data.location} showroom</div>
    </React.Fragment>
  );
};
