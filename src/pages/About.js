import React from 'react';
import './About.css'; 
import profileImage from './assets/images/pic.png';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src={profileImage} alt="selfprofile" className="profile-image" />
      <p>
        Hi there! My name is Justin Tieu, and I am currently a software developer student specializing in AI, front-end, and back-end technologies. Right now, I am focusing on building interactive web applications using modern frameworks like React!
      </p>
      <a href="/path/to/your-resume.pdf" target="_blank" className="btn">Download My Resume (PDF)</a>
    </div>
  );
}

export default About;
