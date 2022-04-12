import React from "react";
import Firstsection from "./Firstsection/Firstsection";
import Secondsection from "./SecondSection/Secondsection";
import Biosection from "./Biosection/Biosection";
import Faq from "./Biosection/Faq";

function Homepage() {
  return (
    <div className="homepage">
      <Firstsection />
      <Secondsection />
      <Biosection />
      <Faq />
    </div>
  );
}

export default Homepage;
