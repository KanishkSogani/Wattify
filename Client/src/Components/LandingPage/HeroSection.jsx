import Navbar from "./Navbar";
import herobg2 from "../../assets/herobg2.png";
import { useNavigate } from "react-router-dom";

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
          <div className="w-full md:w-[430px] text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-sora">
              Real Time Electrical Consumption Data API
            </h1>
            <p className="text-lg font-semibold text-white mt-5 font-urbanist">
              Retrieve instant, accurate information for any location in Delhi
              NCT
            </p>
            <button
              className="mt-10 md:mt-[80px] h-16 w-[360px] text-2xl font-bold text-white bg-[#E26307E0] rounded-md hover:bg-opacity-90 transition-colors duration-300"
              onClick={() => navigate("/dashboard")}
            >
              Start using the API
            </button>
          </div>
          <div className="w-[350px] md:w-[500px] mt-8 md:mt-0">
            {/* Placeholder for the right-side component */}
            <div className="bg-gray-300 w-full h-[300px] rounded-lg flex items-center justify-center mb-5 md:mb-0">
              <span className="text-gray-600">Right-side component</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
