import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Experiences from "../pages/Experiences";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/experiences" element={<Experiences />} />
    </Routes>
  );
};

export default Router;