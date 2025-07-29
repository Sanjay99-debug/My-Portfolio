import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import '../App.css';

const certifications = [
  
  {
    title: "MERN Stack",
    issuer: "Fortec Web Solution",
    year: "2025",
    description:
      "Successfully completed training in MERN Stack(MongoDB,Express.js,React.js,Node.js). I learned to build dynamic and responsive full-stack web applications.Worked on projects involving frontend development with React and backend APIs using Node"
  },
  {
    title: "ASP.NET Core MVC",
    issuer: "CS Infotech",
    year: "2023",
    description:
      "Comprehensive training on scalable web apps using MVC. Topics: routing, controllers, views, model binding, data annotations, form submission, session/state management, authentication, dependency injection, middleware, and Entity Framework Core integration."
  },
  {
    title: "Computer Trainee",
    issuer: "K.S Computer Institute",
    year: "2016",
    description:
      "Intro to computer fundamentals: Windows, MS Office, internet, email, data management, and troubleshooting for academic/professional use."
  }
];

function Certification() {
  return (
    <motion.section
      id="certification"
      className="container certification-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Certifications</h2>
      <div className="row justify-content-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="cert-card p-4 text-start h-100">
              <h5 className="fw-bold d-flex align-items-center">
                <FaCertificate className="me-2 text-info cert-icon" />
                {cert.title}
              </h5>
              <h6 className="text-light fst-italic">{cert.issuer}</h6>
              <p className="mb-1">
                <small className="text-muted fst-italic">{cert.year}</small>
              </p>
              <p className="cert-desc mt-2">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certification;