import cert3 from "../assets/certificate3.jpeg";
function Certifications() {
  const certs = [
    { name: "Web Development Internship", img: cert3 },
  ];
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Huner",
      duration: "June 2025 - August 2025",
      description:
        "Worked on building responsive web applications, implementing frontend features using React, and integrating backend APIs."
    },
    {
      role: "Frontend Developer (College Project)",
      company: "Self/College",
      duration: "March 2025 - May 2025",
      description:
        "Developed a personal portfolio website and other interactive web projects using HTML, CSS, and JavaScript."
    }
  ];

  return (
    <section
      id="certifications"
      style={{
        background: "linear-gradient(135deg, #4B0082, #6A0DAD)",
        color: "white",
        padding: "60px 0",
      }}
    >
      <h2
        className="section-title text-center"
        style={{ color: "#FFD700" }}
      >
        Experience & Certifications
      </h2>

      <div className="container mt-5 d-flex flex-wrap justify-content-center">
        {/* Left Column: Experience */}
        <div className="col-md-6 mb-4">
          <h3 style={{ color: "#FFD700" }}>Experience</h3>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-4 p-3"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderLeft: "4px solid #FFD700",
                borderRadius: "8px",
              }}
            >
              <h5 className="fw-bold">{exp.role}</h5>
              <p className="mb-1">{exp.company}</p>
              <p className="mb-1 text-muted">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column: Certificates */}
        <div className="col-md-6 d-flex flex-wrap justify-content-center align-items-start">
          {certs.map((cert) => (
            <div key={cert.name} className="m-3 text-center">
              <img
                src={cert.img}
                alt={cert.name}
                className="cert-img"
                style={{
                  width: "250px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  border: "2px solid #FFD700",
                }}
                onClick={() => window.open(cert.img, "_blank")}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <p
                className="mt-2 fw-bold"
                style={{ color: "#FFD700" }}
              >
                {cert.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
