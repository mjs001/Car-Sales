import React from "react";
import { createStore } from "redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { toggleRemoveFeature } from "./actions/CarStateActions";
import { toggleAddFeature } from "./actions/CarStateActions";

const App = ({ state, toggleAddFeature, toggleRemoveFeature }) => {
  const removeFeature = (item) => {
    // dispatch an action here to remove an item
    toggleRemoveFeature(item);
  };

  const buyItem = (item) => {
    // dipsatch an action here to add an item
    toggleAddFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} buyItem={buyItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, {
  toggleAddFeature,
  toggleRemoveFeature,
})(App);
