import React from 'react';
import './Services.css'; // Custom styles for this page

function Services() {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <ul>
        <li>Web Development - Responsive and interactive websites</li>
        <li>Mobile App Development - Cross-platform mobile applications</li>
        <li>Backend Development - Building scalable server-side applications</li>
      </ul>
      <div className="service-images">
        <img src="/path/to/webdev.jpg" alt="Web Development" />
        <img src="/path/to/mobileapp.jpg" alt="Mobile App Development" />
        <img src="/path/to/backend.jpg" alt="Backend Development" />
      </div>
    </div>
  );
}

export default Services;
