import React from "react";

const NuevaSeccion = () => {
  const logro = {
    titulo: "CityLove Alameda",
    descripcion:
      "Como gestora cultural del proyecto CityLove Alameda, coordiné eventos, colaboré con artistas urbanos y fortalecí vínculos comunitarios a través del arte público en el centro de la ciudad. Este proyecto fue clave para dinamizar espacios urbanos desde una perspectiva inclusiva y participativa.",
    etiquetas: ["Gestión Cultural", "Arte Urbano", "Ciudadanía", "Participación"],
    imagen: "https://i.imgur.com/ZbFj8GD.jpg", // Puedes cambiar esta URL por una tuya
  };

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

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden glass-card transition-all">
          <img
            src={logro.imagen}
            alt={logro.titulo}
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{logro.titulo}</h3>
            <p className="text-gray-700 mb-4">{logro.descripcion}</p>

            <div className="flex flex-wrap gap-2">
              {logro.etiquetas.map((tag, index) => (
                <span
                  key={index}
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
