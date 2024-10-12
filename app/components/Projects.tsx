

import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Countdown Timer',
      description: 'A simple countdown timer that helps you keep track of important events.',
      link: 'https://github.com/Abidhussainabbasi/30-days-of-30-projects.git', // Link to your project
      image: '/images/countdown.png', // Add your project image here
    },
    {
      title: 'Weather Widget',
      description: 'A weather widget that provides real-time weather updates for any location.',
      link: 'https://github.com/Abidhussainabbasi/Weather-Widget-App-nextjs.git', // Link to your project
      image: '/images/weather-widget.png', // Add your project image here
    },
    {
      title: 'Birthday Wish App',
      description: 'An application to send personalized birthday wishes to your friends and family.',
      link: 'https://github.com/Abidhussainabbasi/birth-day-wish-app-30days-of-30project.git', // Link to your project
      image: '/images/happy-birthday.png', // Add your project image here
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-lg mb-4 w-full h-58 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
