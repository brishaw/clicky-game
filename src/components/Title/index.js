import React from "react";
import "./style.css";

function Title(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-ben bg-black">
      <span className="navbar-brand">Ben 10!</span>
      

      <div id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-link dir">
           Click on a character and earn points, but don't click anyone twice!
          </li>
          <li
            className={props.message.indexOf('Wrong') !== -1 ?
              "desc-incorrect message" :
              props.message.indexOf('Correct') !== -1 ?
                "desc-correct message" :
                "desc-normal message"}
          >
            {props.message}
          </li>
          <li className="nav-item nav-link score-cap">
            Score:
          </li>
          <li className="nav-item nav-link score-cur">
            Current: {props.curScore}
          </li>
          <li className="nav-item nav-link score-hi">
            High: {props.highScore}
          </li>
        </ul>

  </div>
</nav>
  
  )
}

export default Title;
