import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">
    <div className="wrapper-spacer"></div>
      {props.children}
    </div>;
}

export default Wrapper;
