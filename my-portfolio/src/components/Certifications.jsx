import cert1 from "../assets/certificate1.jpeg";
import cert2 from "../assets/certificate2.jpeg";
import cert3 from "../assets/certificate3.jpeg";

function Certifications() {
  const certs = [
    { name: "C+ Certified", img: cert1 },
    { name: "Cloud Virtual Internship", img: cert2 },
    { name: "Web Development Internship", img: cert3 }, // 👈 Added third certificate
  ];

  return (
    <section id="certifications">
      <h2 className="section-title text-center">Certifications</h2>
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
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onClick={() => window.open(cert.img, "_blank")}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p className="mt-2 fw-bold">{cert.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
