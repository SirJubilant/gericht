import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Showcase from "../components/Showcase/Showcase";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";
import Chef from "../components/Chef/Chef";



export default function Home() {
  return (
    <>
      <Topbar />
      <Showcase />
      <About />
      <Menu />
      <Chef />
    </>
  );
}
