import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "../styles/Profile.css"; // Import du fichier CSS

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [userId, setUserId] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/profiles/${userId}?expand=skills,experiences,projects`,
        {
          headers: {
            Accept: "application/ld+json",
          },
        }
      )
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(null);
        setError("Error fetching user profile");
      });
  }, [userId]);

  return (
    <div className="profile-container">
      {error && <div className="profile-error">{error}</div>}
      {profile ? (
        <>
          {/* Full-screen card with profile info and carousel */}
          <div>
            <div className="profile-card">
              <div className="profile-card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="profile-card-title">{profile.name}</h1>
                    <p>
                      <strong>Title:</strong> {profile.title}
                    </p>
                    <p>
                      <strong>Bio:</strong> {profile.bio}
                    </p>
                    <p>
                      <strong>Email:</strong> {profile.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {profile.phone}
                    </p>
                    <p>
                      <strong>GitHub:</strong>{" "}
                      <a href={profile.github_url}>{profile.github_url}</a>
                    </p>
                    <p>
                      <strong>LinkedIn:</strong>{" "}
                      <a href={profile.linkedin_url}>{profile.linkedin_url}</a>
                    </p>
                  </div>

                  {/* Carousel in the right side of the card */}
                  <div className="col-md-6">
                    <div
                      id="profile-carousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <a href="#projects">
                            <img
                              src="/assets/cannon_old_weapon.svg"
                              className="carousel-img"
                              alt="Projets"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Projets</h5>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-item">
                          <a href="#experiences">
                            <img
                              src="/assets/clavierFondBleuter.jpeg"
                              className="carousel-img"
                              alt="Experiences"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Expériences</h5>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-item">
                          <a href="#aboutme">
                            <img
                              src="/assets/defaultImgageCode.jpg"
                              className="carousel-img"
                              alt="About Me"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>About Me</h5>
                            </div>
                          </a>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#profile-carousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#profile-carousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Profile;
