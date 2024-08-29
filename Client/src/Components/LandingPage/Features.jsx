import { Cloud, Clock, Sun, MapPin } from "lucide-react";
import delhimap from "../../assets/delhimap.png";
import FeatureItem from "./FeatureItem";

const Features = () => {
  const features = [
    { icon: Cloud, text: "Real-Time Weather API" },
    { icon: Clock, text: "Historical Weather API" },
    { icon: Sun, text: "Weather Forecasts API" },
    { icon: MapPin, text: "Location Autocomplete" },
  ];

  return (
    <section className="mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[460px] mb-8 md:mb-0">
            <h2 className="md:text-[32px] text-[20px] font-semibold leading-[1.25]">
              Access to Global Weather Data, Developer-friendly
            </h2>
            <p className="mt-4 md:text-[20px] text-[16px] leading-[1.25]">
              Get instant access to accurate weather data for any geo-point in
              the world and enjoy a rich set of capabilities:
            </p>
            <div className="mt-6">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  Icon={feature.icon}
                  text={feature.text}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-[514px]">
            <img src={delhimap} alt="Delhi Map" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
