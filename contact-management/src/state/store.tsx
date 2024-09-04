import { configureStore } from "@reduxjs/toolkit";
import SidebarToggleStateReducer from "./reducers/sidebarToggleReducer";
import UpdateContactFormsReducer from "./reducers/contactFormReducer";
import UpdateGraphAndMapDataReducer from "./reducers/updateGraphAndMapReducesData";

const store = configureStore({
  reducer: {
    sidebarToggleState: SidebarToggleStateReducer,
    contactForms: UpdateContactFormsReducer,
    graphAndMapData: UpdateGraphAndMapDataReducer,
  },
});
export default store;
