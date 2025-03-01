import React from "react";
import NavBar from "./components/NavBar";
import DynamicShapes from "./components/DynamicShapes";
import TypingEffect from "./components/TypingEffect";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import "./styles/App.css";
import "./styles/TypingEffect.css";
import "./styles/Projects.css";
import "./styles/NavBar.css";

function App() {
  return (
    <div className="app">
      <div className="content">
        <DynamicShapes />
        <div className="overlay">
          <TypingEffect />
        </div>
      </div>
      <NavBar />
      <div className="main-content">
        <Profile />
        <Projects />
        {/* Ajoutez d'autres composants ici */}
      </div>
    </div>
  );
}

export default App;