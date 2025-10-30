import React from "react";

function Education() {
  return (
    <section
      id="education"
      style={{
        background: "linear-gradient(135deg, #4B0082, #6A0DAD)",
        color: "white",
        padding: "100px 0",
        minHeight: "100vh",
      }}
    >
      <h2
        className="section-title"
        style={{
          textAlign: "center",
          color: "#FFD700",
          fontWeight: "700",
          marginBottom: "50px",
          fontSize: "2.2rem",
        }}
      >
        Education
      </h2>

      <div
        className="container text-center mt-4"
        style={{ maxWidth: 900, margin: "0 auto" }}
      >
        {[
          {
            title: "Bachelor of Engineering in Computer Engineering",
            school: "Pimpri Chinchwad University, Pune",
            year: "2023 - 2027",
          },
          {
            title: "Higher Secondary Education",
            school: "Dayanand Science College, Latur",
            year: "2020 - 2023",
          },
          {
            title: "Secondary School Education",
            school: "Shri Keshavraj Vidyalay, Latur",
            year: "2014 - 2020",
          },
        ].map((edu, index) => (
          <div
            key={index}
            className="card p-4 mb-3 edu-card card-hover"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid #FFD700",
              borderRadius: "15px",
              color: "white",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")
            }
          >
            <h4 style={{ color: "#FFD700" }}>{edu.title}</h4>
            <p className="mb-1">{edu.school}</p>
            <small className="text-light">{edu.year}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
