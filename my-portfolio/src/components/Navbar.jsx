import { Navbar as BsNavbar, Container, Nav } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar expand="lg" fixed="top" className="navbar shadow-sm" style={{ backgroundColor: "#0a0a23" }}>
      <Container>
        <BsNavbar.Brand href="#home" className="text-light fw-bold">
          Samarth <span style={{ color: "#64ffda" }}>Portfolio</span>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              style={{ color: "#64ffda", fontWeight: "500" }}
              onMouseOver={(e) => (e.target.style.color = "#ffffff")}
              onMouseOut={(e) => (e.target.style.color = "#64ffda")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              style={{ color: "#64ffda", fontWeight: "500" }}
              onMouseOver={(e) => (e.target.style.color = "#ffffff")}
              onMouseOut={(e) => (e.target.style.color = "#64ffda")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#education"
              style={{ color: "#64ffda", fontWeight: "500" }}
              onMouseOver={(e) => (e.target.style.color = "#ffffff")}
              onMouseOut={(e) => (e.target.style.color = "#64ffda")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#skills"
              style={{ color: "#64ffda", fontWeight: "500" }}
              onMouseOver={(e) => (e.target.style.color = "#ffffff")}
              onMouseOut={(e) => (e.target.style.color = "#64ffda")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#certifications"
              style={{ color: "#64ffda", fontWeight: "500" }}
              onMouseOver={(e) => (e.target.style.color = "#ffffff")}
              onMouseOut={(e) => (e.target.style.color = "#64ffda")}
            >
            Experience
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={{ color: "#64ffda", fontWeight: "500" }}
              onMouseOver={(e) => (e.target.style.color = "#ffffff")}
              onMouseOut={(e) => (e.target.style.color = "#64ffda")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{ color: "#64ffda", fontWeight: "500" }}
              onMouseOver={(e) => (e.target.style.color = "#ffffff")}
              onMouseOut={(e) => (e.target.style.color = "#64ffda")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
