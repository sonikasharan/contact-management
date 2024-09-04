import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./reducers/tableReducer";
import SidebarToggleStateReducer from "./reducers/sidebarToggleReducer";
import UpdateContactFormsReducer from "./reducers/contactFormReducer";

const store = configureStore({
  reducer: {
    table: tableReducer,
    sidebarToggleState: SidebarToggleStateReducer,
    contactForms: UpdateContactFormsReducer,
  },
});
export default store;
