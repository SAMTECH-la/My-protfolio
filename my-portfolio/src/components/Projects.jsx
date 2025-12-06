import project3 from "../assets/foodhub.PNG";
import project4 from "../assets/novastudio.png";
import project1 from "../assets/project1.PNG";
import project2 from "../assets/project2.PNG";

const projects = [
  {
    title: "Online Bookstore",
    desc: "A full-stack Book Store Management System using PHP and MySQL. It allows users to browse, search, and purchase books online. The project features user authentication, a dynamic catalog, and a visually appealing frontend design.",
    img: project1,
    link: "https://incomparable-semolina-d3b092.netlify.app/",
  },
  {
    title: "Temperature Converter",
    desc: "An interactive temperature converter that allows users to convert between Celsius, Fahrenheit, and Kelvin. Built using HTML, CSS, and JavaScript, featuring a soft gradient design and real-time conversion display.",
    img: project2,
    link: "https://incomparable-boba-ca42d1.netlify.app/",
  },
  {
    title: "Food Vending Machine Website (In Progress)",
    desc: "I am building a Food Vending Machine website using React.js with a clean, responsive UI, dynamic food menu, and a simple add-to-cart system. The project is still in progress as I continue improving the design and functionality.",
    img: project3,
    link: "https://food-ordering-system-beta-wine.vercel.app/",
  },
  {
    title: "NovaStudio – Modern Digital Agency Website (In Progress)",
    desc: "A modern digital agency website showcasing services, process, and contact details, built with clean UI/UX and responsive layouts. The project is still in progress as I continue refining the design and overall experience.",
    img: project4,
    link: "https://nova-studio-eight.vercel.app/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "linear-gradient(135deg, #4B0082, #6A0DAD)", // same gradient as Hero
        color: "white",
        padding: "60px 0",
      }}
    >
      <h2
        className="section-title text-center"
        style={{
          color: "#FFD700", // gold accent for title
        }}
      >
        Projects
      </h2>

      <div
        className="container d-flex justify-content-center flex-wrap mt-4"
        style={{ gap: 20 }}
      >
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="card"
              style={{
                width: 300,
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.1)", // transparent card
                border: "2px solid #FFD700", // gold border
                borderRadius: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="card-img-top image-hover-zoom"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ color: "#FFD700", fontWeight: "bold" }}
                >
                  {p.title}
                </h5>
                <p
                  className="card-text"
                  style={{ color: "white", textAlign: "justify" }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
