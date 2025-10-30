import React from "react";

function Education() {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <div className="container text-center mt-4" style={{ maxWidth: 900 }}>
        <div className="card p-4 mb-3 edu-card card-hover">
          <h4>Bachelor of Engineering in Computer Engineering</h4>
          <p className="mb-1">Pimpri Chinchwad University, Pune</p>
          <small className="text-muted">2023 - 2027</small>
        </div>

        <div className="card p-4 mb-3 edu-card card-hover">
          <h4>Higher Secondary Education</h4>
          <p className="mb-1">Dayananad Science College, Latur</p>
          <small className="text-muted">2020 - 2023</small>
        </div>
        <div className="card p-4 mb-3 edu-card card-hover">
          <h4>Secondary School Education</h4>
          <p className="mb-1">Shri Keshavraj Vidaylay, Latur</p>
          <small className="text-muted">2014 - 2020</small>
        </div>
      </div>
    </section>
  );
}

export default Education;
