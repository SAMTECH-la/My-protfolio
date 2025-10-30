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
    // trigger width animation when component mounts
    const fills = document.querySelectorAll(".skill-fill");
    fills.forEach((el) => {
      const w = el.getAttribute("data-width") || "80%";
      // small timeout to ensure CSS transition picks up
      setTimeout(() => (el.style.width = w), 100);
    });
  }, []);

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="container mt-4" style={{ maxWidth: 700 }}>
        {skills.map((s) => (
          <div key={s.name} className="mb-4">
            <div className="d-flex justify-content-between">
              <strong>{s.name}</strong>
              <span>{s.level}</span>
            </div>
            <div className="skill-bar" aria-hidden>
              <div className="skill-fill" data-width={s.level} style={{ width: "0%" }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
