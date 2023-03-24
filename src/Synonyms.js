import React from "react";
import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        <h5>Synonyms</h5>
        {props.synonyms.map((synonym, index) => {
          return <li key={index}>• {synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}

export default Synonyms;