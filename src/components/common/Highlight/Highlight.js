import React from "react";
import classes from "./Highlight.module.css";
const Highlight = ({ children }) => {
  return <span className={classes.highlight}>{children}</span>;
};

export default Highlight;
