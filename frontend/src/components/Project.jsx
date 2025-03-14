import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/projects", {
          headers: { Accept: "application/json" },
        });
        setProjects(response.data);
        setError(""); // Réinitialisation de l'erreur
      } catch (err) {
        setProjects([]);
        setError("Erreur lors du chargement des projets");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container-fluid section-project">
      <h1 className="text-center mb-2 col-10 mx-auto">Projects</h1>

      {/* Affichage de l'erreur si elle existe */}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Wrapper pour les cartes avec défilement horizontal */}
      <div className="carousel-wrapper">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
            >
              <img
                src={project.image || "/assets/defaultImgageCode.jpg"} // Image par défaut si aucune image n'est fournie
                alt={project.title}
                className="card-img-top"
              />
              <div className="card-body project-body">
                <h5 className="card-title project-title">{project.title}</h5>
                <p className="card-text project-text">{project.description}</p>

                {/* Affichage des technologies si elles existent */}
                {project.technologies?.length > 0 && (
                  <div className="mb-3 card-footer project-footer">
                    <strong>Technologies :</strong>
                    <div className="d-flex flex-wrap gap-3">
                      {project.technologies.map((techno) => (
                        <span key={techno.id} className="badge bg-primary">
                          {techno.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lien vers le projet s'il existe */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100"
                  >
                    Voir le projet
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          !error && <p className="text-center text-muted">Aucun projet trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default Project;
