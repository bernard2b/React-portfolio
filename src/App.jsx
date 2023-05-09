import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About"
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Profile from "./components/profile/Profile";


export const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Profile />
      <About />
      <Skills />
      <Contact />
    </>
  );
};
export default App;