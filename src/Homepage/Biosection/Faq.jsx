import React from "react";
import "./faq.css";
import Accordion from "./Accordion";
import { accordionData } from "./utils/content";
import teamlogo from "./teamlogo.svg";

function Faq() {
  return (
    <div className="faq" id="faq">
      <h1>FAQ</h1>
      <div className="faqaccord">
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
        <div className="accordionlogo">
          <img src={teamlogo} alt="logo" />
        </div>
        <div className="terms">
          <span>© FWENCLUB</span>
          <span>TERMS & CONDITIONS</span>
        </div>
      </div>
    </div>
  );
}

export default Faq;
