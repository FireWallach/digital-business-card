import React from "react";
import Twitter from "../images/Twitter Icon.png";
import Facebook from "../images/Facebook Icon.png";
import Instagram from "../images/Instagram Icon.png";
import Github from "../images/GitHub Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="button-wrapper">
        <a href="https://google.com">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://google.com">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://google.com">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://google.com">
          <img src={Github} alt="Github" />
        </a>
      </div>
    </div>
  );
}
