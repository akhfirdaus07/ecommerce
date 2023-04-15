import React from "react";
import { Outlet } from "react-router-dom";
import { Products } from "../components/products";
import { Navbar } from "../components/navbar";

export const HomePage = () => (
    <div>
      <Navbar />
      <Products />
      <Outlet />
    </div>
  );
