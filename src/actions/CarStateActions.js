//c. the action creator runs which refers back the actual actions

//action creator V
export const toggleAddFeature = (feature) => {
  return { type: "TOGGLE_ADD", payload: feature };
};
//action type V
export const TOGGLE_ADD = "TOGGLE_ADD";
//action creator
export const toggleRemoveFeature = (feature) => {
  return { type: TOGGLE_REMOVE, payload: feature };
};
//action type V
export const TOGGLE_REMOVE = "TOGGLE_REMOVE";
