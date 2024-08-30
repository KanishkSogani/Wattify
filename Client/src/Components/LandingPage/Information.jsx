import InfoCard from "./InfoCard";
import { Cloud, BarChart2, DollarSign, Zap } from "lucide-react";

const Information = () => {
  const infoCards = [
    {
      icon: Cloud,
      title: "Weather impact analysis",
      description:
        "Our AI model incorporates real-time and historical weather data, analyzing its impact on power demands.",
    },
    {
      icon: BarChart2,
      title: "Load balancing",
      description:
        "Using advanced AI algorithms, load will be evenly distributed, preventing losses due to instability.",
    },
    {
      icon: DollarSign,
      title: "Adaptive power purchasing",
      description:
        "Even distribution of load across multiple grids using AI provides an edge in purchasing power at optimal rates.",
    },
    {
      icon: Zap,
      title: "Dynamic load forecasting",
      description:
        "Using historical trends and forecasted data of multiple parameters provides an efficient load prediction.",
    },
  ];

  return (
    <section className="mt-20 ">
      <div className="max-w-7xl mx-auto py-5 px-4 bg-[#EEF2F5] rounded-lg">
        <div className="flex flex-wrap justify-evenly gap-5">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              Icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;
