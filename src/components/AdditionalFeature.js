import React from "react";

const AdditionalFeature = (props) => {
  return (
    //b. clicking on button refers back to the action creators on carSTateActions
    //f. buyItem refers back to the carSTateACtions
    <li>
      <button className="button" onClick={() => props.buyItem(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
