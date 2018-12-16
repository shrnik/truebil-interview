import React, { Component } from "react";

export const Sidebar = ({ step, status }) => {
  return (
    <div className="sidebar">
      {status === "active" ? (
        <i className={"fa fa-circle-o icon " + status} />
      ) : (
        <i className={"fa fa-circle icon " + status} />
      )}
      {step != 5 ? <div className={"tail " + status} /> : null}{" "}
    </div>
  );
};
