import { Clock, Globe, Server, Zap } from "lucide-react";

const InfoCard = ({ Icon, title, description }) => (
  <div className="w-[250px] h-[208px] bg-[#EBEEF5] p-4 rounded-lg flex flex-col">
    <Icon size={30} className="text-[#535251] h-[32px]" />
    <h3 className="mt-4 text-base font-semibold">{title}</h3>
    <p className="mt-3 text-sm">{description}</p>
  </div>
);

export default InfoCard;
