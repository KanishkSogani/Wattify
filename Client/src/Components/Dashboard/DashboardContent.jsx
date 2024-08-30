import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardContent = () => {
  const [activeSection, setActiveSection] = useState("Daily");
  const [graphData, setGraphData] = useState([]);

  const cards = [
    { title: "Prediction", value: 5572 },
    { title: "Peak Load", value: 6608 },
    { title: "Min Load", value: 4205 },
    { title: "Avg Load", value: 5158 },
  ];

  useEffect(() => {
    // Generate 24-hour prediction data
    const newData = Array.from({ length: 24 }, (_, i) => ({
      time: `${i.toString().padStart(2, "0")}:00`,
      prediction: Math.floor(Math.random() * (6000 - 4000 + 1)) + 4000, // Random value between 4000 and 6000
    }));
    setGraphData(newData);
  }, []); // Run only once on component mount

  return (
    <div className="p-4">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        {activeSection} Prediction
      </h1>
      <div className="flex flex-wrap justify-start gap-4 md:gap-5 mt-6 md:mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(50%-10px)] lg:w-[500px] h-[120px] md:h-[150px] border border-[#8A7F7F] bg-white rounded-lg shadow-sm"
          >
            <div className="p-3 md:p-4">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">
                {card.title}
              </h2>
              <div className="flex items-baseline">
                <span className="text-3xl md:text-4xl font-bold mr-2">
                  {card.value}
                </span>
                <span className="text-muted-foreground text-xl md:text-2xl">
                  kWh
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-12 w-full md:w-[calc(100%-10px)] lg:w-[1010px] h-[300px] md:h-[400px] border border-[#8A7F7F] bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-xl md:text-2xl font-bold mb-8">
          Daily Energy Prediction
        </h2>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            data={graphData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 8000]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="prediction"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardContent;
