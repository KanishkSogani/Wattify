const FeatureItem = ({ Icon, text }) => (
  <div className="flex items-center mt-3">
    <Icon size={32} className="text-[#535251] mr-3" />
    <span className="text-base font-medium">{text}</span>
  </div>
);

export default FeatureItem;
