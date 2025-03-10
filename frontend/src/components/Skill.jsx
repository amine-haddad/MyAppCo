import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import "../styles/Skill.css";
import axios from "axios";

const Skill = () => {
  const [skills, setSkills] = useState([]); // Utiliser un tableau pour stocker toutes les compétences
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/skills", {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        console.log("Réponse API:", response.data);
        setSkills(response.data); // L'API renvoie directement un tableau de compétences
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
        setSkills([]);
        setError("Erreur lors du chargement des compétences");
      });
  }, []); // Changer à [] pour charger les compétences une seule fois au montage

  return (
    <div className="SkillFrame">
      <h2>Skills</h2>

      {error && <p className="error">{error}</p>}

      <div className="skills-container">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div key={index} className="skill-medallion" style={{
              backgroundImage: `conic-gradient(rgb(0, 255, 0) 0% ${skill.level}%,rgb(245, 165, 252) ${skill.level}% 100%)`
            }}>
              <img
                src="/assets/defaultImgageCode.jpg" // Remplacer avec une image par défaut si nécessaire
                alt={skill.name}
                className="skill-image"
              />
              <p>{skill.name}</p> {/* Afficher le nom de la compétence */}
              <span>{skill.level}%</span> {/* Afficher le pourcentage du niveau */}
            </div>
          ))
        ) : (
          <p>Aucune compétence trouvée.</p>
        )}
      </div>
    </div>
  );
};

export default Skill;
