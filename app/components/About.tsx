import React from 'react';
import Image from 'next/image'; // Import the Image component

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center text-center md:text-left">
        
        {/* Profile Image */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <Image
            src="/profile.png" // Ensure the path is correct
            alt="Profile image"
            className="rounded-full w-36 h-48 mx-auto md:mx-0"
            width={144} // Set width as per your design
            height={192} // Set height as per your design
          /> 
        </div>

        {/* About Text */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I specialize in building web applications using modern technologies like React and Next.js. 
            I&apos;ve created scalable and maintainable projects for clients worldwide. 
            I enjoy creating user-friendly experiences and solving problems through clean and efficient code. 
            I&apos;m always eager to learn new tools and technologies. 
            Besides coding, I enjoy activities that keep me balanced and motivated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
