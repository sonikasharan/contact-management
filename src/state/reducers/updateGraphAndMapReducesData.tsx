type UpdateGraphAndMapState = any;

const UpdateGraphAndMapDataReducer = (
  state: UpdateGraphAndMapState = null,
  action: any
): UpdateGraphAndMapState => {
  if (action.type === "updateGraphAndMapData") {
    return action.payload;
  } else {
    return state;
  }
};

export default UpdateGraphAndMapDataReducer;
