import React from "react";
import "./style.css";

function Title(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-ben bg-black">
      <span className="navbar-brand">Ben 10!</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-link">
           Click on a character and earn points, but don't click anyone twice!
          </li>
          <li className="nav-item nav-link">
            Score:
          </li>
          <li className="nav-item nav-link">
            Current: {props.curScore}
          </li>
          <li className="nav-item nav-link">
            High: {props.highScore}
          </li>
        </ul>

  </div>
</nav>
  
  )
}

export default Title;
