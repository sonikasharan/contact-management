import { combineReducers } from "redux";
import tableReducer from "./tableReducer";
import SidebarToggleStateReducer from "./sidebarToggleReducer";
import UpdateContactFormsReducer from "./contactFormReducer";

interface RootState {
  table: ReturnType<typeof tableReducer>;
  sidebarToggleState: ReturnType<typeof SidebarToggleStateReducer>;
  contactForms: ReturnType<typeof UpdateContactFormsReducer>;
}

const reducers = combineReducers<RootState>({
  table: tableReducer,
  sidebarToggleState: SidebarToggleStateReducer,
  contactForms: UpdateContactFormsReducer,
});

export default reducers;
export type { RootState };
