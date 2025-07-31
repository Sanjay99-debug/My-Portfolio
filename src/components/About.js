import React from "react";
import "../App.css";
import profileImg from "../assets/skills/pf2.webp";

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">Full Stack Developer</h4>
              <p className="text-muted">
                I’m a passionate full-stack developer with hands-on experience
                in designing and developing web applications using{" "}
                <strong>.NET Core</strong>, <strong>React.js</strong>,{" "}
                <strong>Bootstrap</strong>, <strong>Entity Framework</strong>,
                <strong>SQL Server</strong>. I I currently work at{" "}
                <strong>
                  Shiwansh Solutions as FullStack Developer Intern
                </strong>{" "}
                where I contribute to scalable module-based solutions including
                Admin, Employee, and Employer features.
              </p>

              <p className="text-muted">
                I'm also proficient with tools like <strong>Git</strong> and
                <strong>Postman</strong>, have strong foundations in ,{" "}
                <strong>HTML5</strong>,<strong>CSS3</strong>,
                <strong>JAVASCRIPT(ES6)</strong>,<strong>REACT.js</strong>,
                <strong>NODE.js</strong>,<strong>MONGODB</strong>
              </p>
              <p className="text-muted mb-0">
                My goal is to build efficient, secure, and maintainable software
                that delivers value to users. I’m continuously learning,
                exploring new tech, and growing as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
