import React, { Component } from "react";

export const Content = ({ data, status, details }) => {
  return (
    <div className={"content " + status}>
      {status != "" ? <div className="date">{data.date}</div> : null}
      {details(data, status)}
    </div>
  );
};
