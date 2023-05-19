import React from "react";
import SideBar from "../components/layout/SideBar";

export default function MainPageLayout({ children }) {
  return (
    <div className="main-page text-white flex w-full ">
      <SideBar />
      {children}
    </div>
  );
}
