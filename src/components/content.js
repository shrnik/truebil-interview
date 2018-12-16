import React, { Component } from "react";

export const Content = ({ data, status, content }) => {
  return (
    <div className={"content " + status}>
      {status != "" ? <div className="date">{data.date}</div> : null}
      {content(data, status)}
    </div>
  );
};
