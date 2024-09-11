import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Project 1',
      image: '/path/to/project1_image.jpg',
      description: 'Description of Project 1.',
    },
    {
      title: 'Project 2',
      image: '/path/to/project2_image.jpg',
      description: 'Description of Project 2.',
    },
    {
      title: 'Project 3',
      image: '/path/to/project3_image.jpg',
      description: 'Description of Project 3.',
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      {projectList.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
