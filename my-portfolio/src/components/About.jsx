import myImage from "../assets/samarth.png"; // Replace with your actual image

const About = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        padding: "80px 20px",
      }}
    >
      {/* Section Title */}
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#4B0082",
          marginBottom: "60px",
          textAlign: "center",
        }}
      >
        About Me
      </h2>

      {/* About Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          maxWidth: "1100px",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Image */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={myImage}
            alt="Samarth V. Kurdukar"
            style={{
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              border: "4px solid white",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
            }}
          />
        </div>

        {/* Right: Text */}
        <div
          style={{
            flex: "1",
            textAlign: "justify", // ✅ Text justified here
            color: "#333",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#4B0082",
              textAlign: "right",
            }}
          >
            Hi, I’m <span style={{ color: "#6A0DAD" }}>Samarth V. Kurdukar</span> 👋
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "15px",
            }}
          >
            I’m a passionate <strong>Frontend Developer</strong> skilled in HTML, CSS, and JavaScript.
            I love designing creative and interactive user experiences that are clean and impactful.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "15px",
            }}
          >
            Currently exploring backend development and modern frameworks to become a full-stack
            developer. I enjoy solving real-world problems through code and collaborating with
            like-minded individuals on innovative projects.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            Beyond coding, I believe in continuous learning and strive to bring creativity and
            problem-solving together in everything I build. I’m driven to create designs that not
            only look great but also function flawlessly across devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
