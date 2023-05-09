import React from "react";
import "./Contact.css";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <div className="final">
        <h2 className="final_title">GET IN TOUCH</h2>
        <p>
          I am currently open to exciting positions in the computer science
          sector. If you believe that I would be a valuable addition to your
          team, please don't hesitate to contact me.
        </p>
        <a href="mailto:bernard.gyugyi@gmail.com" className="btn">
          <h1>contact</h1>
        </a>
        <div className="rights">
          <p>Bernard Gyugyi</p>
          <p>All rights reserved 2023</p>
        </div>
        <div className="mobile-sites">
          <a
            href="https://www.linkedin.com/in/bernardgyugyi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin />
          </a>
          <a
            href="https://github.com/bernard2b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.codewars.com/users/bernard2b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodewars />
          </a>
          <a
            href="https://www.hackerrank.com/bernard_gyugyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiHackerrank />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
