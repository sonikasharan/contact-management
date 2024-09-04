import { Dispatch } from "react";

interface UpdateTableAction {
  type: "updateTable";
  payload: any;
}

interface UpdateSidebarToggleAction {
  type: "updateSidebarToggleState";
  payload: boolean;
}

interface UpdateContactAction {
  type: "updateContactForms";
  payload: any;
}

type UpdateTableDispatch = (dispatch: Dispatch<UpdateTableAction>) => void;
type UpdateSidebarToggleStateDispatch = (
  dispatch: Dispatch<UpdateSidebarToggleAction>
) => void;
type UpdateContactDispatch = (dispatch: Dispatch<UpdateContactAction>) => void;

export const updateTable = (tableData: any): UpdateTableDispatch => {
  return (dispatch) => {
    dispatch({
      type: "updateTable",
      payload: tableData,
    });
  };
};

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
