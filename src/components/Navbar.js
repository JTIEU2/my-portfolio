import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        {/* You can include your custom logo here */}
        <Link to="/"><img src="/path/to/logo.png" alt="Logo" /></Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
