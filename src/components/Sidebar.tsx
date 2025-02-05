import { useState, ReactNode } from "react";

interface ListItem {
    label: string;
    icon: ReactNode;
    extraSpacing?: boolean; // Prop para agregar espacio adicional
}

interface ListProps {
    data: ListItem[];
    onSelect?: (elemento: string) => void;
}

function List(props: ListProps) {
    const [index, setIndex] = useState(0);

    const handleClick = (i: number, elemento: string) => {
        setIndex(i);
        props.onSelect?.(elemento);
    };

    return (
        <ul className="list-group" style={{ listStyle: "none", padding: 0 }}> 
            {props.data.map((item, i) => (
                <li 
                    onClick={() => handleClick(i, item.label)} 
                    key={item.label} 
                    className={`list-group-item ${index === i ? "active" : ""}`}
                    style={{ 
                        cursor: "pointer", 
                        padding: "12px 15px", 
                        borderRadius: "8px", 
                        display: "flex", 
                        alignItems: "center",
                        gap: "10px",
                        border: "none",  
                        backgroundColor: index === i ? "#007bff" : "transparent",
                        color: index === i ? "#fff" : "#000",
                        transition: "background-color 0.3s ease",
                        marginBottom: item.extraSpacing ? "40px" : "5px", // Espaciado grande si es true
                    }}
                >
                    {item.icon} {item.label}
                </li>
            ))}
        </ul>
    );
}

export default List;
