import { combineReducers } from "redux";
import SidebarToggleStateReducer from "./sidebarToggleReducer";
import UpdateContactFormsReducer from "./contactFormReducer";
import UpdateGraphAndMapDataReducer from "./updateGraphAndMapReducesData";

interface RootState {
  sidebarToggleState: ReturnType<typeof SidebarToggleStateReducer>;
  contactForms: ReturnType<typeof UpdateContactFormsReducer>;
  graphAndMapData: ReturnType<typeof UpdateGraphAndMapDataReducer>;
}

const reducers = combineReducers<RootState>({
  sidebarToggleState: SidebarToggleStateReducer,
  contactForms: UpdateContactFormsReducer,
  graphAndMapData: UpdateGraphAndMapDataReducer,
});

export default reducers;
export type { RootState };
