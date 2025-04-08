import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import NuevaSeccion from '../components/NuevaSeccion'; // ✅ nombre corregido
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <NuevaSeccion /> {/* ✅ Sección de logros añadida correctamente */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
