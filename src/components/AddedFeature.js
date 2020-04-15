import React from "react";
const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        //b. clicking on button refers back to the action creators on carSTateActions
        onClick={() => props.removeFeature(props.feature)}
      >
        {" "}
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
