import React, { useState } from "react";
import { 
  FaHome, FaSearch, FaCompass, FaVideo, FaEnvelope, FaBell, 
  FaPlus, FaCogs, FaUser, FaEllipsisH 
} from "react-icons/fa";
import List from "./components/List";
import WeatherCard from "./components/WeatherCard";
import WeatherForecast from "./components/WeatherForecast";

const App: React.FC = () => {
    const [selectedWeather, setSelectedWeather] = useState({
      city: "Fuenlabrada",
      temperature: 14,
      condition: "Soleado",
      humidity: 39,
      wind: 3,
      data: [2, 1, 7, 14, 8, 5,4],  
    });

    // Función para actualizar el clima
    const handleSelectDay = (temperature: number, condition: string, humidity: number, wind: number, newData: number[]) => {
      setSelectedWeather({
        city: "Fuenlabrada",
        temperature,
        condition,
        humidity,
        wind,
        data: newData.every(num => typeof num === "number" && !isNaN(num)) ? newData : [0, 0, 0, 0, 0, 0, 0],
      });
    };

    const menuItems = [
        { label: "Inicio", icon: <FaHome /> },
        { label: "Buscar", icon: <FaSearch /> },
        { label: "Explorar", icon: <FaCompass /> },
        { label: "Reels", icon: <FaVideo /> },
        { label: "Mensajes", icon: <FaEnvelope /> },
        { label: "Notificaciones", icon: <FaBell /> },
        { label: "Crear", icon: <FaPlus /> },
        { label: "Panel", icon: <FaCogs /> },
        { label: "Perfil", icon: <FaUser />, extraSpacing: true }, 
        { label: "Threads", icon: " @ " }, 
        { label: "Más", icon: <FaEllipsisH /> } 
    ];

    return (
        <div style={{ display: "flex" }}>
            {/* Menú lateral */}
            <List data={menuItems} />

            {/* Contenido Principal */}
            <div style={{ flex: 1, marginLeft: "250px", padding: "20px" }}>
                <div className="container mt-4">
                    <WeatherCard {...selectedWeather} />
                    <WeatherForecast onSelectDay={handleSelectDay} />
                </div>
            </div>
        </div>
    );
};

export default App;
