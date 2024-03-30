import React from "react";
import Showcase from "../components/Showcase/Showcase";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";
import Chef from "../components/Chef/Chef";
import Video from "../components/Video/Video";
import Laurels from "../components/Laurels/Laurels";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Newsletter from "../components/Newsletter/Newsletter";



export default function Home() {
  return (
    <>
      <Showcase />
      <About />
      <Menu />
      <Chef />
      <Video />
      <Laurels />
      <Gallery />
      <Contact />
      <Newsletter />
    </>
  );
}
