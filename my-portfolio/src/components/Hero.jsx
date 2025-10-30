import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // centers vertically
        alignItems: "center", // centers horizontally
        background: "linear-gradient(135deg, #4B0082, #6A0DAD)", // professional purple gradient
        color: "white",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        Hi, I'm <span style={{ color: "#FFD700" }}>Samarth V. Kurdukar</span>
      </h1>

      <h3
        style={{
          fontSize: "1.8rem",
          fontWeight: "400",
          marginBottom: "40px",
        }}
      >
        Frontend Developer & Designer
      </h3>

      <a
        href="#projects"
        style={{
          backgroundColor: "#FFD700",
          color: "#4B0082",
          padding: "12px 30px",
          borderRadius: "30px",
          fontWeight: "600",
          textDecoration: "none",
          fontSize: "1.1rem",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#fff";
          e.currentTarget.style.color = "#4B0082";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#FFD700";
          e.currentTarget.style.color = "#4B0082";
          e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
        }}
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
