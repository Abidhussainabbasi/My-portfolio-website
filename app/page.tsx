

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills'; 
import Contact from './components/Contact';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header>
        <Navbar />
      </header>

      {/* Main Content Section */}
      <main className="flex-grow">
        <section id="hero" className="bg-gray-100">
          {/* Hero Section */}
        </section>
        <>
        <Hero />
        </>

        <section id="about" className="bg-white">
          {/* About Section */}
        </section>
        <> 
        <About />
        </>

        <section id="projects" className="bg-gray-100">
          {/* Projects Section */}
        </section>
        <>
        <Projects />
        </>

        <section id="skills" className="bg-white">
          {/* Skills Section */}
        </section>
        <>
        <Skills />
        </>

        <section id="contact" className="bg-gray-100">
          {/* Contact Section */}
        </section>
        <>
        <Contact />
        </>
      </main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default HomePage;
