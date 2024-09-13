import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h3 className="welcome-text">Welcome</h3>
      <h1 className="name-heading">I am Justin Tieu</h1>
      <p className="description">
        I love to explore new concepts and technologies to understand how they work. 
        My passion is problem solving and developing solutions that solve real-world problems.
      </p>
      <Link to="/about" className="about-btn">About Me</Link>
    </div>
  );
}

export default Home;
