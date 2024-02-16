import React from "react";
import "./home.scss";
import Slideshow from "../../components/slideshow/slideshow";
import LocationPage from "../../pages/location/location";
import ProgramPage from "../../pages/program/program";

export default function HomePage() {
  return (
    <div className="home">
      <Slideshow />
      {/* <LocationPage /> */}
      {/* <ProgramPage /> */}
    </div>
  );
}
