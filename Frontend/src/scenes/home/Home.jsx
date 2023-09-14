import React from "react";
import Feature from "./components/Features";
import Topheading from "./components/Topheading";
import Welcome from "./components/Welcome";
import Stats from "./components/Stats";

function Home() {
  return (
    <div>
      <Welcome />
      <Topheading />
      <Feature />
      <Stats />
    </div>
  );
}

export default Home;
