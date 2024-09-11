import React from 'react';

function Services() {
  const services = [
    {
      name: 'Web Development',
      image: '/path/to/service_image1.jpg',
    },
    {
      name: 'Mobile App Development',
      image: '/path/to/service_image2.jpg',
    },
    {
      name: 'General Programming',
      image: '/path/to/service_image3.jpg',
    },
  ];

  return (
    <div className="services">
      <h1>Services</h1>
      {services.map((service, index) => (
        <div key={index} className="service">
          <h2>{service.name}</h2>
          <img src={service.image} alt={service.name} />
        </div>
      ))}
    </div>
  );
}

export default Services;
