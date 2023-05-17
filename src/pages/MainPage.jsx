import React from "react";
import SlideBar from "../components/layout/SlideBar";
import ContentMain from "../components/layout/ContentMain";

export default function MainPage() {
  return (
    <div className="main-page text-white flex w-full ">
      <SlideBar />
      <ContentMain />
    </div>
  );
}
