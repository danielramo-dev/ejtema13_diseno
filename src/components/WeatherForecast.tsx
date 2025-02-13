import React from "react";
import WeatherDetail from "./WeatherDetail";

interface ForecastData {
  day: string;
  icon: string;
  tempMin: number;
  tempMax: number;
  condition: string;
  humidity: number;
  wind: number;
  data: number[];
}

interface WeatherForecastProps {
  onSelectDay: (temperature: number, condition: string, humidity: number, wind: number, data: number[]) => void;
}

const forecastData: ForecastData[] = [
  { day: "Mié", icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png", tempMax: 14, tempMin: 1, condition: "Soleado", humidity: 39, wind: 3, data: [2, 1, 7, 14, 8, 5,4] },
  { day: "Jue", icon: "https://cdn-icons-png.flaticon.com/512/1163/1163657.png", tempMax: 13, tempMin: 1, condition: "Chubascos", humidity: 42, wind: 5, data: [1, 3, 5, 8, 7, 4,4] },
  { day: "Vie", icon: "https://cdn-icons-png.flaticon.com/512/414/414927.png", tempMax: 8, tempMin: 2, condition: "Nublado", humidity: 87, wind: 12, data: [3, 6, 8, 5, 3, 2,3] },
  { day: "Sáb", icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png", tempMax: 12, tempMin: 0, condition: "Soleado", humidity: 37, wind: 4, data: [0, 4, 8, 12, 9, 6,7] },
  { day: "Dom", icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png", tempMax: 13, tempMin: 2, condition: "Soleado", humidity: 40, wind: 6, data: [4, 2, 9, 13, 10, 7,7] },
  { day: "Lun", icon: "https://cdn-icons-png.flaticon.com/512/1163/1163657.png", tempMax: 13, tempMin: 4, condition: "Nublado", humidity: 50, wind: 8, data: [6, 5, 8, 13, 9, 4,6] },
  { day: "Mar", icon: "https://cdn-icons-png.flaticon.com/512/1163/1163657.png", tempMax: 13, tempMin: 4, condition: "Nublado", humidity: 55, wind: 7, data: [6, 4, 7, 13, 8, 6,4] },
];

const WeatherForecast: React.FC<WeatherForecastProps> = ({ onSelectDay }) => {
  return (
    <div className="row text-center">
      {forecastData.map((day, index) => (
        <WeatherDetail key={index} {...day} onSelectDay={onSelectDay} />
      ))}
    </div>
  );
};

export default WeatherForecast;