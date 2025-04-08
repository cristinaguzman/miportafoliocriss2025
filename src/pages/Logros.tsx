import React from "react";

const Logros = () => {
  return (
    <div className="logros-container" style={styles.container}>
      <h1 style={styles.title}>Logros Profesionales</h1>
      <h2 style={styles.subtitle}>Gestora Cultural - Muestra CityLove Alameda</h2>
      <p style={styles.text}>
        Como parte de la muestra <strong>CityLove Alameda</strong>, lideré y coordiné actividades culturales que promovieron la participación comunitaria y el arte urbano en espacios públicos. 
        Mi trabajo incluyó la gestión de artistas, logística de eventos, y la creación de vínculos entre ciudadanía y cultura.
      </p>
      <p style={styles.text}>
        Esta experiencia fortaleció mi compromiso con la cultura local y el desarrollo de proyectos con impacto social.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#666",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: "1.6",
  },
};

export default Logros;
