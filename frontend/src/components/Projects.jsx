import React from "react";
import "../styles/Projects.css";
import ProfileForm from "./ProfileForm";


const Projects = () => {
  return (
    <div className="ProjectFrame">
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project-medallion">
          <img src="project1.jpg" alt="Project 1" />
        </div>
        <div className="project-medallion">
          <img src="project2.jpg" alt="Project 2" />
        </div>
        <div className="project-medallion">
          <img src="project3.jpg" alt="Project 3" />
        </div>
        <div className="project-medallion">
          <img src="project4.jpg" alt="Project 4" />
        </div>
      </div>
      <div>
      </div>
      <ProfileForm onSuccess={(data) => console.log("User created!", data)} />
    </div>
  );
};

export default Projects;