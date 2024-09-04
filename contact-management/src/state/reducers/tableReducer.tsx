type TableState = any;

const tableReducer = (state: TableState = null, action: any): TableState => {
  if (action.type === "updateTable") {
    return action.payload;
  } else {
    return state;
  }
};

export default tableReducer;
