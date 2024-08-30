import Navbar from "./Navbar";
import herobg2 from "../../assets/herobg2.png";
import { useNavigate } from "react-router-dom";
import HeroCard from "./HeroCard";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative bg-cover bg-center h-auto md:h-[600px]"
      style={{ backgroundImage: `url(${herobg2})` }}
    >
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-[120px] md:pt-[160px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[470px] text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-sora">
              AI-Driven Energy Consumption Prediction
            </h1>
            <p className="text-lg font-semibold text-white mt-5 font-urbanist">
              Get accurate daily, weekly, and hourly forecast data for optimized
              energy consumption.
            </p>
            <button
              className="mt-10 md:mt-[80px] h-16 w-[360px] text-2xl font-bold text-white bg-[#E26307E0] rounded-md hover:bg-opacity-90 transition-colors duration-300"
              onClick={() => navigate("/dashboard")}
            >
              Start using AI
            </button>
          </div>
          <div className="w-[350px] md:w-[500px] mt-8 md:mt-0 mb-8">
            <HeroCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
