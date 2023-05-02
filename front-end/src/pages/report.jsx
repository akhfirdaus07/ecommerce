import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { MiniProfile } from "../components/miniProfile";
import { ReportComp } from "../components/reportComp";

export const ReportPage = () => (
  <div>
    <Navbar />
    <MiniProfile />
    <ReportComp />
    <Outlet />
  </div>
);
