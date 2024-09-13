import React from 'react';
import './Projects.css'; // Custom styles for this page

function Projects() {
  const projects = [
    {
      title: "Home Page",
      image: "/path/to/project1.jpg",
      description: "I'm responsible for creating this website using React and Bootstrap!"
    },
    {
      title: "Project 2",
      image: "/path/to/project2.jpg",
      description: "This project was focused on building a scalable back-end system using Node.js."
    },
    {
      title: "Project 3",
      image: "/path/to/project3.jpg",
      description: "I built a responsive e-commerce website using React and Bootstrap."
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
