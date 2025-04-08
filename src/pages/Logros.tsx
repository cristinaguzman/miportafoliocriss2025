import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Logros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-20 bg-white rounded-lg shadow-md mt-10 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          Logros Profesionales
        </h1>
        <h2 className="text-xl md:text-2xl text-center font-semibold text-secondary mb-8">
          Gestora Cultural - Muestra CityLove Alameda
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Como parte de la muestra <strong>CityLove Alameda</strong>, lideré y coordiné
          actividades culturales que promovieron la participación comunitaria y el arte urbano
          en espacios públicos. Mi trabajo incluyó la gestión de artistas, logística de eventos, y
          la creación de vínculos entre ciudadanía y cultura.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Esta experiencia fortaleció mi compromiso con la cultura local y el desarrollo de
          proyectos con impacto social.
        </p>
        <br />
        <p>www.citylove.cl</p>
      </main>

      <Footer />
    </div>
  );
};

export default Logros;