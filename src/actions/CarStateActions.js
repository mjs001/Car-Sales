export const toggleAddFeature = (feature) => {
  return { type: "TOGGLE_ADD", payload: feature };
};

export const TOGGLE_ADD = "TOGGLE_ADD";

export const toggleRemoveFeature = (feature) => {
  return { type: TOGGLE_REMOVE, payload: feature };
};

export const TOGGLE_REMOVE = "TOGGLE_REMOVE";
