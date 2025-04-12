import React from "react";
import logro from "../data/seccionueva.json"; // 

const NuevaSeccion = () => {
  return (
    <section id="logros" className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Mis Logros</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experiencia destacada como gestora cultural con impacto social y comunitario.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden glass-card transition duration-300 hover:shadow-xl">
          <div className="h-64 overflow-hidden">
            <img
              src={logro.imagen}
              alt={logro.titulo || "Imagen del logro"}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{logro.titulo}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{logro.descripcion}</p>

            <div className="flex flex-wrap gap-2">
              {logro.etiquetas.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuevaSeccion;
