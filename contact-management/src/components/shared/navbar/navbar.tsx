import React from "react";
import { useLocation } from "react-router-dom";
import { getRouteName } from "../../../utils/routeMapper";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../../../state";

const Navbar: React.FC = () => {
  const location = useLocation();
  const routeName = getRouteName(location.pathname);
  const dispatch = useDispatch();
  const { updateSidebarToggleState } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const isSidebarVisible = useSelector(
    (state: any) => state.sidebarToggleState
  );

  const handleButtonClick = () => {
    updateSidebarToggleState(!isSidebarVisible);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full text-white border-b-[1px] border-white/40 z-50">
      <div className="w-full px-2 flex justify-between items-center">
        <button className="h-6 w-6" onClick={handleButtonClick}>
          <img
            src="assets/images/menu.svg"
            alt="menu"
            className="w-6 h-6"
          ></img>
        </button>
        <div className="text-white md:text-lg text-sm font-bold">
          {routeName}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
