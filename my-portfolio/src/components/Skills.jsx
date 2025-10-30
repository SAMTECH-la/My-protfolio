import React, { useEffect } from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "Bootstrap", level: "85%" },
  ];

  useEffect(() => {
    const fills = document.querySelectorAll(".skill-fill");
    fills.forEach((el) => {
      const w = el.getAttribute("data-width") || "80%";
      setTimeout(() => (el.style.width = w), 100);
    });
  }, []);

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

      <div className="container mt-4" style={{ maxWidth: 700, margin: "0 auto" }}>
        {skills.map((s) => (
          <div key={s.name} className="mb-4">
            <div
              className="d-flex justify-content-between"
              style={{ color: "#fff", fontWeight: "500" }}
            >
              <strong>{s.name}</strong>
              <span>{s.level}</span>
            </div>
            <div
              className="skill-bar"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "10px",
                overflow: "hidden",
                height: "12px",
                marginTop: "8px",
              }}
            >
              <div
                className="skill-fill"
                data-width={s.level}
                style={{
                  width: "0%",
                  height: "100%",
                  background: "linear-gradient(90deg, #FFD700, #FFF380)",
                  borderRadius: "10px",
                  transition: "width 1.2s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
