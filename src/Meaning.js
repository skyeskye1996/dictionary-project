import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech.charAt(0).toUpperCase()+ props.meaning.partOfSpeech.slice(1)} 📖</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              <div className="definition">{definition.definition}</div>

              <div className="example">
                <em>{definition.example}</em>
              </div>
            </p>
          </div>
        );
      })}
      <p className="synonyms">
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}

export default Meaning;