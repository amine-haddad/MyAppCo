import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomNavBar from "./components/CustomNavBar";
import Router from "./routes/Router";
import Footer from "./components/Footer";
import axios from "axios";
import './styles/CustomNavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles/Profile.css'


function App() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/profiles/1?expand=skills,experiences,projects`,
        {
          headers: {
            Accept: "application/ld+json",
          },
        }
      )
      .then((response) => {
        setProfile(response.data);
      })
      .catch(() => {
        setError("Error fetching user profile");
      });
  }, []);
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <CustomNavBar profile={profile} error={error} />
      <Router profile={profile} error={error} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
