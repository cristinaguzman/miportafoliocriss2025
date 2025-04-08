import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ IMPORTANTE

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", to: "/" },
    { name: "Sobre Mí", to: "#about" },         // scroll interno
    { name: "Proyectos", to: "#projects" },     // scroll interno
    { name: "Logros", to: "/logros" },          // ✅ página externa
    { name: "Contacto", to: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-80 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://i.ibb.co/cS2pbF9F/criss.png"
            alt="Portfolio Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) =>
            link.to.startsWith("#") ? (
              <a
                key={index}
                href={link.to}
                className="text-foreground hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={index}
                to={link.to}
                className="text-foreground hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {/* icon */}
          {mobileMenuOpen ? (
            <svg> {/* close icon */} </svg>
          ) : (
            <svg> {/* menu icon */} </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) =>
              link.to.startsWith("#") ? (
                <a
                  key={index}
                  href={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
