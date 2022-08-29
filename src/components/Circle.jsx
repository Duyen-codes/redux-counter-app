import React from "react";
import classes from "./Circle.module.css";

const Circle = ({ count }) => {
  return <div className={classes.circle}>{count}</div>;
};

export default Circle;
