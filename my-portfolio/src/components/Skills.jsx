import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaUsers,
  FaComments,
  FaPalette,
  FaMobileAlt,
  FaLightbulb,
} from "react-icons/fa";

import { SiTypescript, SiMysql } from "react-icons/si";
import { MdEmail } from "react-icons/md"; // ✔ Working icon

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={28} color="#FFD700" /> },
    { name: "CSS", icon: <FaCss3Alt size={28} color="#FFD700" /> },
    { name: "JavaScript", icon: <FaJs size={28} color="#FFD700" /> },
    { name: "React", icon: <FaReact size={28} color="#FFD700" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={28} color="#FFD700" /> },
    { name: "Git", icon: <FaGitAlt size={28} color="#FFD700" /> },
    { name: "GitHub", icon: <FaGithub size={28} color="#FFD700" /> },
    { name: "EmailJS", icon: <MdEmail size={28} color="#FFD700" /> }, // ✔ FIXED
    { name: "PHP", icon: <FaPhp size={28} color="#FFD700" /> },
    { name: "Typescript", icon: <SiTypescript size={28} color="#FFD700" /> },
    { name: "MySQL", icon: <SiMysql size={28} color="#FFD700" /> },
    { name: "Responsive Design", icon: <FaMobileAlt size={28} color="#FFD700" /> },
    { name: "UI/UX Design", icon: <FaPalette size={28} color="#FFD700" /> },
    { name: "Problem Solving", icon: <FaLightbulb size={28} color="#FFD700" /> },
    { name: "Team Collaboration", icon: <FaUsers size={28} color="#FFD700" /> },
    { name: "Communication", icon: <FaComments size={28} color="#FFD700" /> },
  ];

  return (
    <section
      id="skills"
      style={{
        background: "linear-gradient(135deg, #4B0082, #6A0DAD)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        className="section-title"
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "50px",
          color: "#FFD700",
        }}
      >
        Skills
      </h2>

      <div
        className="skills-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-box"
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "18px 20px",
              borderRadius: "12px",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#FFD700",
              backdropFilter: "blur(6px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
