const SidebarButton = ({ icon: Icon, text, isActive, onClick }) => (
  <button
    className={`flex items-center px-2 md:px-3 py-1 md:py-2 rounded-lg w-full mt-2 transition-colors duration-200 ${
      isActive
        ? "bg-[#E9E9ED] text-black"
        : "text-[#6F6F88] hover:bg-[#E9E9ED] hover:text-black"
    }`}
    onClick={onClick}
  >
    <Icon className="h-3 w-3 md:h-4 md:w-4 mr-2 md:mr-3" />
    <span className="text-xs md:text-sm">{text}</span>
  </button>
);

export default SidebarButton;
