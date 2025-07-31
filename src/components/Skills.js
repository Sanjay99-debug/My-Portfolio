import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

// Import PNG images from skills folder
import csharp from '../assets/skills/C#-(CSharp).png';
import javascript from '../assets/skills/javascript.png';
import html from '../assets/skills/HTML5.png';
import css from '../assets/skills/CSS3.png';
import sql from '../assets/skills/SQL-Developer.png';
import mysql from '../assets/skills/MySQL.png';
import reactImg from '../assets/skills/React.png';
import aspnet from '../assets/skills/Bootstrap.png';
import efcore from '../assets/skills/.NET-core.png';
import git from '../assets/skills/Git.png';
import postman from '../assets/skills/Postman.png';
import vscode from '../assets/skills/Visual-Studio-Code-(VS-Code).png';
import mongo from '../assets/skills/MongoDB.png';
import nodejs from '../assets/skills/Node.js.png';
import express from '../assets/skills/express.png';
import restapi from '../assets/skills/api-interface.webp'; // SVG converted to PNG

const skillCategories = {
  'Programming Languages': ['C#', 'JavaScript', 'HTML', 'CSS'],
  'Databases': ['SQL', 'MySQL', 'MongoDB'],
  'Frameworks': ['React.js', 'ASP.NET', 'Entity Framework Core', 'Node.js', 'Express', 'REST API'],
  'Tools': ['Git', 'Postman', 'VS Code']
};

const skillImages = {
  'C#': csharp,
  'JavaScript': javascript,
  'HTML': html,
  'CSS': css,
  'SQL': sql,
  'MySQL': mysql,
  'MongoDB': mongo,
  'React.js': reactImg,
  'ASP.NET': aspnet,
  'Entity Framework Core': efcore,
  'Node.js': nodejs,
  'Express': express,
  'REST API': restapi,
  'Git': git,
  'Postman': postman,
  'VS Code': vscode
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="container skills-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Skills</h2>

      {Object.entries(skillCategories).map(([category, skills], index) => (
        <div key={index} className="mb-5">
          <h4 className="text-info mb-4">{category}</h4>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="card p-2 shadow border-0"
                style={{ width: '130px' }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={skillImages[skill]}
                  alt={skill}
                  className="card-img-top rounded"
                  style={{ height: '80px', objectFit: 'contain' }}
                />
                <div className="card-body p-1">
                  <p className="card-text small mb-0">{skill}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
}
