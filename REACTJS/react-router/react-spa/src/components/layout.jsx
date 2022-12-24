import React from "react";
import { Router, Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-around mt-3"></div>
      <Outlet />
    </div>
  );
}
