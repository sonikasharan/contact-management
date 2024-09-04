import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const isSidebarVisible = useSelector(
    (state: any) => state.sidebarToggleState
  );
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "bg-gray-700" : "";

  return (
    <div
      className={`${
        isSidebarVisible ? "block" : "hidden"
      } absolute top-10 w-64 left-0 lg:relative lg:top-0 h-full bg-gray-800 text-white py-4`}
    >
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className={`block p-3 rounded-md ${isActive("/")}`}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/chartsAndMap"
              className={`block p-3 rounded-md ${isActive("/chartsAndMap")}`}
            >
              Charts And Map
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
