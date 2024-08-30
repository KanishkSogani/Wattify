import React, { useState } from "react";

const DashboardContent = () => {
  const [activeSection, setActiveSection] = useState("Daily");

  const cards = [
    { title: "Prediction", value: Math.floor(Math.random() * 1000) },
    { title: "Peak Load", value: Math.floor(Math.random() * 1000) },
    { title: "Min Load", value: Math.floor(Math.random() * 1000) },
    { title: "Avg Load", value: Math.floor(Math.random() * 1000) },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{activeSection} Prediction</h1>
      <div className="flex flex-wrap justify-start gap-5 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[500px] h-[150px] border border-[8A7F7F] bg-white rounded-lg shadow-sm"
          >
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-8">{card.title}</h2>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold mr-2">{card.value}</span>
                <span className="text-muted-foreground text-2xl">kWh</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
