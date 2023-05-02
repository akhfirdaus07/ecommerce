import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { MiniProfile } from "../components/miniProfile";

export const ReportPage = () => (
  <div>
    <Navbar />
    <MiniProfile />
    <Outlet />
  </div>
);
