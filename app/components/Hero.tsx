

import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-3xl font-bold mb-4">  <image>
          src=profile1.png 
          alt=Profile image
          className="rounded-full w-36 h-36 object-cover shadow-lg"</image> Salam, I&apos;m Abid Hussain</h1>
      <p className="text-4xl md:text-3xl text-gray-700 mb-6">
        A passionate Web Developer and Designer
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        View My Work
      </a>
      <div className="md:w-1/2 mt-8 md:mt-0">

      </div>
    </section>
  );
};

export default Hero;
