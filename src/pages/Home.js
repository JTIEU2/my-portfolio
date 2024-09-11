import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Your mission statement goes here.</p>
      <Link to="/about">Learn more about me</Link>
    </div>
  );
}

export default Home;
