

import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
        
        <p className="mb-8 text-lg text-gray-700">
        I&apos;m open to collaboration or any exciting opportunities! You can reach me at:
        </p>
        
        {/* Contact Buttons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="mailto:ahabbasi640@gmail.com" 
            className="text-gray-700 hover:text-blue-500 text-3xl"
          >
            <FaEnvelope />
          </a>
          <a 
            href="https://www.linkedin.com/in/abid-hussain-b378a628b" 
            className="text-gray-700 hover:text-blue-700 text-3xl"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Abidhussainabbasi

" 
            className="text-gray-700 hover:text-black text-3xl"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        {/* Contact Form (Optional) */}
        <form 
          action="https://formspree.io/f/{form-id}" 
          method="POST" 
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={5}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
