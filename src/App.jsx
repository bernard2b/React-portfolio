import React from "react";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Profile from "./components/profile/Profile";

export const App = () => {
  return (
    <>
      <Profile />
      <About />
      <Skills />
      <Contact />
    </>
  );
};
export default App;
