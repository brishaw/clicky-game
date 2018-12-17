import React from "react";
import "./style.css";

function Ben10Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <span onClick={() => props.selectAlias(props.id)}>
        <img alt={props.name} src={props.image} />
        </span>
      </div>
    </div>
  );
}

export default Ben10Card;
