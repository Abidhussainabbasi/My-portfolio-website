import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 h-screen flex flex-col justify-center items-center text-center">
      <Image
        src="/profile1.png" // Ensure the path is correct
        alt="Profile image"
        className="rounded-full w-36 h-36 object-cover shadow-lg"
        width={144} // Set width as per your design
        height={144} // Set height as per your design
      />
      <h1 className="text-4xl md:text-3xl font-bold mb-4">  
        Salam, I&apos;m Abid Hussain
      </h1>
      <p className="text-4xl md:text-3xl text-gray-700 mb-6">
        A passionate Web Developer and Designer
      </p>
      <Link
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        View My Work
      </Link>
      <div className="md:w-1/2 mt-8 md:mt-0">
        {/* Add any additional content here if needed */}
      </div>
    </section>
  );
};

export default Hero;
