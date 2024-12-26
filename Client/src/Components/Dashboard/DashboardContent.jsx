import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Loader from "../../utils/Loader";
import { toastError } from "../../utils/toastWrapper";

const DashboardContent = () => {
  const [activeSection, setActiveSection] = useState("Daily");
  const [graphData, setGraphData] = useState([]);
  const [cardData, setCardData] = useState({
    prediction: 5572,
    peakLoad: 6608,
    minLoad: 4205,
    avgLoad: 5158,
  });

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/api/weather");
  //       console.log("API response:", response.data);

  //       const { mlData, mlData24 } = response.data.data;

  //       if (mlData && mlData24) {
  //         setCardData({
  //           prediction: Math.round(mlData.prediction) || 0,
  //           peakLoad: Math.round(mlData24.max_load) || 0,
  //           minLoad: Math.round(mlData24.min_load) || 0,
  //           avgLoad: Math.round(mlData24.average) || 0,
  //         });

  //         // Transform mlData24.prediction into the format needed for the graph
  //         if (Array.isArray(mlData24.prediction)) {
  //           const graphData = mlData24.prediction.map((value, index) => ({
  //             time: `${index.toString().padStart(2, "0")}:00`,
  //             prediction: Math.round(value) || 0,
  //           }));
  //           setGraphData(graphData);
  //         } else {
  //           console.error(
  //             "mlData24.prediction is not an array:",
  //             mlData24.prediction
  //           );
  //           setGraphData([]);
  //         }
  //       } else {
  //         console.error("mlData or mlData24 is missing from the API response");
  //         toastError("Incomplete data received from the server");
  //       }

  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching Prediction data:", error);
  //       // toastError(
  //       //   "Our AI model is currently not hosted online, which is causing the values to display as 0."
  //       // );

  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    // Generate 24-hour prediction data
    const newData = Array.from({ length: 24 }, (_, i) => ({
      time: `${i.toString().padStart(2, "0")}:00`,
      prediction: Math.floor(Math.random() * (6000 - 4000 + 1)) + 4000, // Random value between 4000 and 6000
    }));
    setGraphData(newData);
    setLoading(false);
  }, []); // Run only once on component mount

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Loader />
      </div>
    );
  }

  const cards = [
    { title: "Prediction", value: cardData.prediction },
    { title: "Peak Load", value: cardData.peakLoad },
    { title: "Min Load", value: cardData.minLoad },
    { title: "Avg Load", value: cardData.avgLoad },
  ];

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
