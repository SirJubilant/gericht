import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Showcase from "../components/Showcase/Showcase";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";
import Chef from "../components/Chef/Chef";
import Video from "../components/Video/Video";
import Laurels from "../components/Laurels/Laurels";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";



export default function Home() {
  return (
    <>
      <Topbar />
      <Showcase />
      <About />
      <Menu />
      <Chef />
      <Video />
      <Laurels />
      <Gallery />
      <Contact />
    </>
  );
}
