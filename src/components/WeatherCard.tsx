import React from "react";
import { LineChart } from "@mui/x-charts";

interface WeatherCardProps {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  wind: number;
  data: number[];
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, condition, humidity, wind, data }) => {
  const sanitizedData = data.map((num) => Number(num)).filter((num) => !isNaN(num));

  const chartData = sanitizedData.length > 0 ? sanitizedData : [temperature, temperature, temperature, temperature, temperature, temperature, temperature];

  const minY = Math.min(...chartData); 
  const maxY = Math.max(...chartData) + 1; 

  return (
    <div className="card text-center shadow p-3 mb-4 rounded" style={{ backgroundColor: "#f8f9fa" }}>
      <h5 className="card-header">{city}</h5>
      <div className="card-body">
        <h2>{temperature}°C</h2>
        <p>{condition}</p>
        <p>Humedad: {humidity}% | Viento: {wind} km/h</p>

       
        <div style={{ width: "100%", overflowX: "auto" }}>
          <LineChart
            xAxis={[
              { 
                data: ["1:00", "4:00", "7:00", "10:00", "16:00", "19:00", "22:00"],
                scaleType: "point" 
              }
            ]}
            yAxis={[{ min: minY, max: maxY }]} 
            series={[
              {
                data: chartData,
                area: true, 
                color: "#FFC107", 
                showMark: true, 
                curve: "monotoneX", 
                label: (value) => `${value}°`, 
              },
            ]}
            grid={{ vertical: false, horizontal: true }} 
            width={1100}
            height={250}
            legend={{ hidden: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
