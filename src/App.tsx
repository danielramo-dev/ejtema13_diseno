import { FaHome, FaSearch, FaCompass, FaVideo, FaEnvelope, FaBell, FaPlus, FaCogs, FaUser, FaEllipsisH } from "react-icons/fa";
import List from "./components/Sidebar";
import Card, { CardBody } from "./components/Card";

function App() {
    // Función para manejar la selección de un elemento
    const handleSelect = (elemento: string) => {
        console.log("Elemento seleccionado:", elemento);
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
        { label: "Perfil", icon: <FaUser />, extraSpacing: true }, // Espaciado grande debajo de "Perfil"
        { label: "Threads", icon: " @ " }, 
        { label: "Más", icon: <FaEllipsisH /> } // Ícono de "Más opciones"
    ];

    return (
        <Card>
            <CardBody title="Instagram" />
            <List data={menuItems} onSelect={handleSelect} />
        </Card>
    );
}

export default App;
