import React from "react";
import project1 from "../assets/project1.PNG";
import project2 from "../assets/project2.PNG";
import project3 from "../assets/project3.PNG";

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
    title: "Smart Calculator",
    desc: "A responsive web-based calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations with a sleek modern UI and includes smooth hover effects. Designed to deliver a clean and intuitive user experience.",
    img: project3,
    link: "https://heartfelt-llama-903ffe.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
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
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="card-img-top image-hover-zoom"
              />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
