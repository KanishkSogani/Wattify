import InfoCard from "./InfoCard";
import { Clock, Globe, Server, Zap } from "lucide-react";

const Information = () => {
  const infoCards = [
    {
      icon: Clock,
      title: "Real-Time, History",
      description:
        "Our API covers global weather data across the board — from a multi-year history all the way to live information.",
    },
    {
      icon: Globe,
      title: "Millions of Locations",
      description:
        "Make use of live or hour-by-hour weather data for millions of cities and towns worldwide, supporting sdfa sf.",
    },
    {
      icon: Server,
      title: "Rock-Solid Uptime & Speed",
      description:
        "Powered by best-in-class cloud infrastructure, our API delivers data in milliseconds around the clock with an uptime of nearly 100%.",
    },
    {
      icon: Zap,
      title: "Start Free, Upgrade Later",
      description:
        "Start testing the API immediately by signing up for our Free Plan. You can always upgrade later — no strings attached.",
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
