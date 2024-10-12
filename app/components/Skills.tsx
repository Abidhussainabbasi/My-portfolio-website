

import React from 'react';
import { FaReact, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 'Advanced', icon: <FaJsSquare />, bgColor: 'bg-yellow-100', textColor: 'text-yellow-500' },
    { name: 'React', level: 'Intermediate', icon: <FaReact />, bgColor: 'bg-blue-100', textColor: 'text-blue-500' },
    { name: 'Next.js', level: 'Intermediate', icon: <SiNextdotjs />, bgColor: 'bg-gray-100', textColor: 'text-black' },
    { name: 'TypeScript', level: 'Intermediate', icon: <SiTypescript />, bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { name: 'TailwindCSS', level: 'Advanced', icon: <SiTailwindcss />, bgColor: 'bg-teal-100', textColor: 'text-teal-500' },
    { name: 'Node.js', level: 'Intermediate', icon: <FaNodeJs />, bgColor: 'bg-green-100', textColor: 'text-green-500' },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${skill.bgColor}`}
            >
              <div className={`text-4xl mb-4 ${skill.textColor}`}>
                {skill.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${skill.textColor}`}>
                {skill.name}
              </h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
