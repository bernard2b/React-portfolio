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
              I have a passion for <span style={{ color: 'rgb(206, 194, 21)' }}>software
              technologies</span>, which is why I decided to change my career path from 
              <span style={{ color: 'rgb(206, 194, 21)' }}> project management.</span> To pursue my passion, I enrolled in an
              <span style={{ color: 'rgb(206, 194, 21)' }}> on-campus bootcamp</span> where I started my new journey and learned the
              fundamentals of <span style={{ color: 'rgb(206, 194, 21)' }}>software development</span>.
            </p>
            <p>
              After successfully completing a high-paced bootcamp, my next
              challenge is to prove that I have what it takes to be <span style={{ color: 'rgb(206, 194, 21)' }}>a valuable
              member of a development team </span>and contribute to the creation <span style={{ color: 'rgb(206, 194, 21)' }}>complex
              projects</span>.
            </p>
            <p>
              I am excited to take on this <span style={{ color: 'rgb(206, 194, 21)' }}>challenge</span> and in the meantime, <span style={{ color: 'rgb(206, 194, 21)' }}>I will
              continue to develop my skills</span> and knowledge in the field of
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
