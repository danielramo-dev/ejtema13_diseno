import { useState, ReactNode } from "react";

interface ListItem {
    label: string;
    icon: ReactNode;
    extraSpacing?: boolean;
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
        <div style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "250px",
            height: "100vh",
            background: "#fff",
            boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
            padding: "20px"
        }}>
            <h2 style={{ marginBottom: "20px" }}>Instagram</h2>
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
                            marginBottom: item.extraSpacing ? "40px" : "5px",
                        }}
                    >
                        {item.icon} {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
