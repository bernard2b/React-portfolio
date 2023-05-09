import React, { useState, useEffect } from "react";
import "./About.css";
import ME1 from "../../assets/me1.png";
import ME2 from "../../assets/me2.png";

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <section id="about">
        <div className="abc">
          <div className="title">
            <h2>About me</h2>
            <p>
              Hi, my name is Bernard and I have a passion for software
              technologies, which is why I decided to change my career path from
              project management. To pursue my passion, I enrolled in an
              on-campus bootcamp where I started my new journey and learned the
              fundamentals of software development.
            </p>
            <p>
              After successfully completing a high-paced bootcamp, my next
              challenge is to prove that I have what it takes to be a valuable
              member of a development team and contribute to creating complex
              projects.
            </p>
            <p>
              I am excited to take on this challenge and in the meantime, I will
              continue to develop my skills and knowledge in the field of
              software development.
            </p>
          </div>
          <div className="photo">
            {isSmallScreen ? (
              <img src={ME2} alt="me" className="me" />
            ) : (
              <img src={ME1} alt="me" className="me" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
