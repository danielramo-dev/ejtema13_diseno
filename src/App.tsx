import { FaHome, FaSearch, FaCompass, FaVideo, FaEnvelope, FaBell, FaPlus } from "react-icons/fa";
import List from "./components/List";
import React, { useState } from "react";

const App: React.FC = () => {
  // Función para actualizar el clima (puedes añadir la lógica de actualización aquí)
  const menuItems = [
    { label: "Inicio", icon: <FaHome /> },
    { label: "Tasks", icon: <FaSearch /> },
    { label: "Habits", icon: <FaCompass /> },
    { label: "Stats", icon: <FaVideo /> },
    { label: "Calendar", icon: <FaEnvelope />, extraSpacing: true },
    { label: "Notes", icon: <FaBell /> },
    { label: "Pomodoro", icon: <FaPlus /> },
  ];

  return (
    <div style={{ display: "flex" }}>
      {/* Menú lateral */}
      <List data={menuItems} />
      {/* Aquí iría el contenido principal de tu aplicación */}
    </div>
  );
};

export default App;
