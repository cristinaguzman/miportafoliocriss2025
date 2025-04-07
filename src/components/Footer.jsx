import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Logo o nombre del sitio */}
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/N6N9s7mF/criss-blanco.png" // Cambia esta ruta según tu logo real
              alt="Logo del portafolio"
              className="h-8 w-auto"
            />
           
          </div>

          {/* Derechos reservados */}
          <div className="text-sm text-gray-300">
            &copy; {currentYear} Todos los derechos reservados.
          </div>

          {/* Navegación rápida */}
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { name: "Inicio", href: "#home" },
              { name: "Sobre Mí", href: "#about" },
              { name: "Proyectos", href: "#projects" },
              { name: "Contacto", href: "#contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="hover:text-secondary transition-colors"
                  aria-label={`Ir a ${item.name}`}
                  title={item.name}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
