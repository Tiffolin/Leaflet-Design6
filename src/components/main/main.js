import React from "react";
import Landing from "../landing/landing.js";
import About from "../about/about.js";
import Contact from "../contact/contact.js";
import summer from "./summer.png";
// import fall from "./fall.png";
// import winter from "./winter.png";
// <img id="bgImg2" src={fall} atl="..."></img>
// <img id="bgImg3" src={winter} atl="..."></img>

function Main() {
  return (
    <div className="main">
      <img id="bgImg" src={summer} atl="..."></img>

      <Landing />
      <About />
      <Contact />

    </div>
  );
}

export default Main;