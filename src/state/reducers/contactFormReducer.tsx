type updateContactFormsState = any;

const UpdateContactFormsReducer = (
  state: updateContactFormsState = [],
  action: any
): updateContactFormsState => {
  if (action.type === "updateContactForms") {
    return action.payload;
  } else {
    return state;
  }
};

export default UpdateContactFormsReducer;
