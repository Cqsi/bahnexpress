import React from 'react';

const LogoSlider: React.FC = () => {
  return (
    <div className="slider mt-16 bg-gray-100 py-10 px-8 overflow-hidden">
      <div className="slide-track flex gap-12">
        {logos.map((logo, index) => (
          <div key={index} className="slide">
            <img
              className="w-24 h-24 animate-scroll"
              src={logo.src}
              alt={logo.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const logos = [
  {
    src: '/companies/autosuni.png',
    alt: 'McDonalds',
  },
  {
    src: '/companies/autosuni.png',
    alt: 'Starbucks',
  },
  {
    src: '/companies/autosuni.png',
    alt: 'General Electric',
  },
  {
    src: '/companies/kamux.png',
    alt: 'NFL',
  },
  {
    src: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png',
    alt: 'Mercedes-Benz',
  },
  {
    src: 'https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png',
    alt: 'Hogwarts',
  },
];

export default LogoSlider;
