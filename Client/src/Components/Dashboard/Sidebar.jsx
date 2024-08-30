import React, { useState } from "react";
import { Calendar, X } from "lucide-react";
import SidebarButton from "./SidebarButton";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeButton, setActiveButton] = useState("Daily");
  const navigate = useNavigate();
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-200 ease-in-out bg-white z-30 w-48 md:w-64`}
    >
      <div className="py-3 md:py-5 px-6 md:px-10 h-full flex flex-col">
        <div className="flex justify-between items-center">
          <h1
            className="text-lg md:text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Wattify
          </h1>
          <button onClick={toggleSidebar} className="md:hidden">
            <X className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="mt-8 md:mt-12">
          {["Daily", "Weekly", "Monthly"].map((text) => (
            <SidebarButton
              key={text}
              icon={Calendar}
              text={text}
              isActive={activeButton === text}
              onClick={() => setActiveButton(text)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
