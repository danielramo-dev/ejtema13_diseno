import React from "react";

interface WeatherDetailProps {
  day: string;
  icon: string;
  tempMin: number;
  tempMax: number;
  condition: string;
  humidity: number;
  wind: number;
  data: number[];
  onSelectDay: (temperature: number, condition: string, humidity: number, wind: number, data: number[]) => void;
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({ 
  day, icon, tempMin, tempMax, condition, humidity, wind, data, onSelectDay 
}) => {
  return (
    <div 
      className="col text-center p-2 border rounded shadow-sm" 
      onClick={() => onSelectDay(tempMax, condition, humidity, wind, data)}
      style={{ cursor: "pointer", background: "#f8f9fa" }}
    >
      <p className="fw-bold">{day}</p>
      <img src={icon} alt={day} width="50" />
      <p>{tempMax}° / {tempMin}°</p>
    </div>
  );
};

export default WeatherDetail;
