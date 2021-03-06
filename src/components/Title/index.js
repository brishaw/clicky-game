import React from "react";
import "./style.css";

function Title(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-ben bg-black">
      <div className="navbar-brand logo"></div>
      

      <div id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-link dir">
           Click on a character and earn points, but don't click anyone twice!
          </li>
          <li
            className={ props.message.indexOf('Wrong') !== -1 ?
              "wrong message wiggle_and" :
              props.message.indexOf('Correct') !== -1 ?
                "correct message" : "message"
            }
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
