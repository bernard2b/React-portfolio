import React, { useState, useEffect, useRef } from "react";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { BsGit } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import "./Skills.css";

const frameworks = [
  {
    name: "React",
    logo: <SiReact />,
    experience: "Bootcamp",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "JavaScript",
    logo: <SiJavascript />,
    experience: "Bootcamp",
    description: "A TypeScript-based open-source web application framework.",
  },
  {
    name: "TypeScript",
    logo: <SiTypescript />,
    experience: "Side project",
    description: "A progressive framework for building user interfaces.",
  },
  {
    name: "Node.Js",
    logo: <IoLogoNodejs />,
    experience: "Bootcamp",
    description:
      "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript on the server-side.",
  },
  {
    name: "Git",
    logo: <BsGit />,
    experience: "Work",
    description: "A TypeScript-based open-source web application framework.",
  },
  {
    name: "Java",
    logo: <FaJava />,
    experience: "Online course",
    description:
      "A programming language used for building a variety of applications.",
  },
  {
    name: "Jest",
    logo: <SiJest />,
    experience: "Bootcamp",
    description:
      "A JavaScript testing framework used for testing web applications.",
  },
  {
    name: "Jira",
    logo: <SiJirasoftware />,
    experience: "Side project",
    description:
      "A popular project management tool used for tracking issues and bugs.",
  },
  {
    name: "MySQL",
    logo: <SiMysql />,
    experience: "Side project",
    description:
      "A domain-specific language used for managing and manipulating relational databases.",
  },
];

const FrameworksList = () => {
  const [modalContent, setModalContent] = useState(null);
  const modalRef = useRef(null);

  const handleCardClick = (description) => {
    setModalContent(description);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalContent(null);
    }
  };

  useEffect(() => {
    document.addEventListener("onclick", handleOutsideClick);
    return () => {
      document.removeEventListener("onclick", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <section id="skills">
        <div className="skill_text">
        <p>
          One of the highlights of the bootcamp was our <span style={{ color: 'rgb(219, 217, 155)' }}> team project</span>, where we
          collaboratively developed <span style={{ color: 'rgb(219, 217, 155)' }}>a web application game </span>. This experience
          allowed me to <span style={{ color: 'rgb(219, 217, 155)' }}>work closely with a team</span>, fostering <span style={{ color: 'rgb(219, 217, 155)' }}>effective
          communication and coordination</span>.</p>
          <p>
           Additionally, I had the opportunity to
          explore and <span style={{ color: 'rgb(219, 217, 155)' }}>gain proficiency in various new technologies</span>, further
          expanding <span style={{ color: 'rgb(219, 217, 155)' }}>my skillset</span>. Working on this project was a valuable and
          exciting experience that not only <span style={{ color: 'rgb(219, 217, 155)' }}>strengthened my technical abilities</span>
          but also taught me the <span style={{ color: 'rgb(219, 217, 155)' }}>importance of teamwork</span> in software development.
        </p>
        </div>
        <div className="cards">
          <h2 className="title">...including:</h2>
          <div className="cards-container">
            {frameworks.map((framework, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(framework.description)}
              >
                <h2>{framework.name}</h2>
                <div className="logo">{framework.logo}</div>
                <p>{framework.experience}</p>
              </div>
            ))}
            {modalContent && (
              <div className="modal" ref={modalRef}>
                <div className="modal-content">
                  <span className="modal" onClick={handleCloseModal}>
                    &times;
                  </span>
                  <p>{modalContent}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrameworksList;
