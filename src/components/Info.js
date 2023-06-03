import React from "react";
import profilePicture from "../images/dylan.jpg";
import MailIcon from "../images/icons8-mail-24.png";
import LinkedinIcon from "../images/icons8-linkedin-24.png";

export default function Info() {
  return (
    <div>
      <img src={profilePicture} className="profile" />
      <div className="name">Dylan Wallach</div>
      <div className="title">Software Engineer</div>
      <div className="email">dylan@wallach.dev</div>
      <div className="buttons">
        <a className="button email-div" href="emailto:dylan@wallach.dev">
          <img src={MailIcon} />
          Email
        </a>
        <a
          className="button linkedin-div"
          href="https://www.linkedin.com/in/dylan-wallach-085973108"
        >
          <img src={LinkedinIcon} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
