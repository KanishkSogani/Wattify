import React from "react";
import Lottie from "react-lottie";
import windmillAnimation from "../../assets/windmill.json";
import windIcon from "../../assets/wind.png";
import thermometerIcon from "../../assets/thermometer.png";
import airIcon from "../../assets/air.png";

const HeroCard = () => {
  const windmillOptions = {
    loop: true,
    autoplay: true,
    animationData: windmillAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-[350px] md:w-[500px] h-auto min-h-[300px] border-4 border-[#23699D] bg-[#044775] p-4 flex flex-col rounded-xl">
      <div className="text-center text-white text-base font-bold mb-4">
        Delhi, India
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
        <div className="w-[120px] h-[120px]">
          <Lottie options={windmillOptions} height={120} width={120} />
        </div>
        <div className="text-3xl font-bold text-white text-center sm:text-left">
          5500<span className="text-2xl text-[#C3C3CF]">kWh</span>
        </div>
        <div className="text-center sm:text-left">
          <div className="text-xs text-white mt-2">
            Min Load: <span className="text-white font-semibold"> 432 kWh</span>
          </div>
          <div className="text-xs text-white mt-2">
            Avg Load: <span className="text-white font-semibold"> 432 kWh</span>
          </div>
          <div className="text-xs text-white mt-2">
            Peak Load:{" "}
            <span className="text-white font-semibold"> 432 kWh</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-auto">
        <div className="p-2 rounded h-[100px] w-[100px] flex flex-col justify-center items-center">
          <h3 className="text-xs font-semibold text-white">Wind Speed</h3>
          <img
            src={windIcon}
            alt="Wind"
            className="w-[31px] h-[31px] mt-1 mb-1"
          />
          <p className="text-xs text-white font-bold">6kph</p>
        </div>
        <div className="p-2 rounded h-[100px] w-[100px] flex flex-col justify-center items-center">
          <h3 className="text-xs font-semibold text-white">Temperature</h3>
          <img
            src={thermometerIcon}
            alt="Temperature"
            className="w-[31px] h-[31px] mt-1 mb-1"
          />
          <p className="text-xs text-white font-bold">27°C</p>
        </div>
        <div className="p-2 rounded h-[100px] w-[100px] flex flex-col justify-center items-center">
          <h3 className="text-xs font-semibold text-white">Humidity</h3>
          <img
            src={airIcon}
            alt="Humidity"
            className="w-[31px] h-[31px] mt-1 mb-1"
          />
          <p className="text-xs text-white font-bold">68%</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
