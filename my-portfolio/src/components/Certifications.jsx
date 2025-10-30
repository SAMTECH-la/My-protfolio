import cert1 from "../assets/certificate1.jpeg";
import cert2 from "../assets/certificate2.jpeg";
import cert3 from "../assets/certificate3.jpeg";

function Certifications() {
  const certs = [
    { name: "C+ Certified", img: cert1 },
    { name: "Cloud Virtual Internship", img: cert2 },
    { name: "Web Development Internship", img: cert3 },
  ];

  return (
    <section
      id="certifications"
      style={{
        background: "linear-gradient(135deg, #4B0082, #6A0DAD)", // same as Hero
        color: "white",
        padding: "60px 0",
      }}
    >
      <h2
        className="section-title text-center"
        style={{
          color: "#FFD700", // golden accent like Hero
        }}
      >
        Certifications
      </h2>

      <div className="container d-flex justify-content-center flex-wrap mt-5">
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
                border: "2px solid #FFD700", // golden border
              }}
              onClick={() => window.open(cert.img, "_blank")}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p
              className="mt-2 fw-bold"
              style={{
                color: "#FFD700", // golden text
              }}
            >
              {cert.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
