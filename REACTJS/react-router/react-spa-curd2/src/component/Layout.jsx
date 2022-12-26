import React from 'react'
import Home from './Home'
import { BrowserRouter,Route,Routes,Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
     
      <Outlet/>
    </div>
  )
}
