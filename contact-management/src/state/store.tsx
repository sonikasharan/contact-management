import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./reducers/tableReducer";
import SidebarToggleStateReducer from "./reducers/sidebarToggleReducer";

const store = configureStore({
  reducer: {
    table: tableReducer,
    sidebarToggleState: SidebarToggleStateReducer,
  },
});
export default store;
