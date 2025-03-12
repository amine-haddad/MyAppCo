import React, { useState, useEffect }  from "react";
import CustomNavBar from "../components/CustomNavBar";
import DynamicShapes from "../components/DynamicShapes";
import TypingEffect from "../components/TypingEffect";
import Profile from "../components/Profile";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Experience from "../components/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css";
import "../styles/TypingEffect.css";
import "../styles/Project.css";
import axios from "axios";


function Home() {
const [profile, setProfile] = useState(null);
const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/profiles/1?expand=skills,experiences,projects`, {
        headers: {
          Accept: "application/ld+json",
        },
      })
      .then((response) => {
        setProfile(response.data);
      })
      .catch(() => {
        setError("Error fetching user profile");
      });
  }, []);

  return (
    <>
    <div className="app">
      <div className="content">
        <DynamicShapes />
        <div className="overlay">
          <TypingEffect />
        </div>
      </div>
      <div className="Home-container">
        {/* Ajoutez d'autres composants ici */}
        <CustomNavBar profile={profile} error={error} />
        <Profile />
        <Skill />
        <Project />
        <Experience />
      </div>
    </div>
    </>
  );
}

export default Home;
