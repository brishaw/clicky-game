import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}
  
    <ul id="grid" className="clear">
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
      <li>
        <div className="hex"></div>
      </li>
    </ul>

  </div>;
}

export default Wrapper;
