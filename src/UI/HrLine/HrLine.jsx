import React from "react";
import "./HrLine.css";
function HrLine(props) {
  let classes = `cust_divider ${props.className}`;
  return <div className={classes} style={props.style}></div>;
}

export default HrLine;
