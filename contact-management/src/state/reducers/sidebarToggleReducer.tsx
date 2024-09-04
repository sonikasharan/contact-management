type SidebarToggleState = any;

const SidebarToggleStateReducer = (
  state: SidebarToggleState = false,
  action: any
): SidebarToggleState => {
  if (action.type === "updateSidebarToggleState") {
    return action.payload;
  } else {
    return state;
  }
};

export default SidebarToggleStateReducer;
