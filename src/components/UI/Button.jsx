import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, onClick, children }) => {
  return (
    <button
      type={type ? type : "button"}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
