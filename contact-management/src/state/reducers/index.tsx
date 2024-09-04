import { combineReducers } from "redux";
import tableReducer from "./tableReducer";
import SidebarToggleStateReducer from "./sidebarToggleReducer";

interface RootState {
  table: ReturnType<typeof tableReducer>;
  sidebarToggleState: ReturnType<typeof SidebarToggleStateReducer>;
}

const reducers = combineReducers<RootState>({
  table: tableReducer,
  sidebarToggleState: SidebarToggleStateReducer,
});

export default reducers;
export type { RootState };
