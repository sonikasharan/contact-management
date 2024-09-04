import { Dispatch } from "react";

interface UpdateSidebarToggleAction {
  type: "updateSidebarToggleState";
  payload: boolean;
}

interface UpdateContactAction {
  type: "updateContactForms";
  payload: any;
}

interface UpdateGraphAndMapAction {
  type: "updateGraphAndMapData";
  payload: any;
}

type UpdateSidebarToggleStateDispatch = (
  dispatch: Dispatch<UpdateSidebarToggleAction>
) => void;
type UpdateContactDispatch = (dispatch: Dispatch<UpdateContactAction>) => void;
type UpdateGraphAndMapDispatch = (
  dispatch: Dispatch<UpdateGraphAndMapAction>
) => void;

export const updateSidebarToggleState = (
  isSidebarOpen: boolean
): UpdateSidebarToggleStateDispatch => {
  return (dispatch) => {
    dispatch({
      type: "updateSidebarToggleState",
      payload: isSidebarOpen,
    });
  };
};

export const updateContactForms = (payload: any): UpdateContactDispatch => {
  return (dispatch) => {
    dispatch({
      type: "updateContactForms",
      payload: payload,
    });
  };
};

export const updateGraphAndMapData = (
  payload: any
): UpdateGraphAndMapDispatch => {
  return (dispatch) => {
    dispatch({
      type: "updateGraphAndMapData",
      payload: payload,
    });
  };
};
