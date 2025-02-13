import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const CandidateDashboard = () => {
  return (
    <div className="flex md:flex-row flex-col gap-6 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding py-16">
      <Menu />
      <Outlet />
    </div>
  );
};

export default CandidateDashboard;
