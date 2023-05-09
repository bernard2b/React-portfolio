import React from "react";
import "./Profile.css";
import Header from "../header/Header";
import CV from "../../assets/bernard1.pdf";

const Profile = () => {
  return (
    <div className="profile">
      <section id="profile">
        <Header />
        <div className="bla">
          <h2>Hi, my name is</h2>
          <h1 className="big-heading">Bernard Gyugyi.</h1>
          <h1 className="big-heading2">Junior Full-Stack Developer</h1>
          <p>
            I'm junior software engineer, focused on full stack development.
            Constantly educating myself and seeking opportunities for
            collaboration to enhance my skills and gain experience...
          </p>
          <a href={CV} download className="btn">
            check out my CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default Profile;
