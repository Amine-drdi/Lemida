import React from "react";
import Hero from "./components/Hero";
import { Outlet } from "react-router-dom";

const Authentication = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-100">
      <div className="flex justify-center items-center p-8 bg-secondary">
        <Outlet />
      </div>
      <Hero />
    </div>
  );
};

export default Authentication;
