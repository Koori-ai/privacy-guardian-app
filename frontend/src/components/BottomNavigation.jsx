import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Shield, Bell, Settings } from "lucide-react";

const BottomNavigation = ({ activeTab }) => {
  const navigate = useNavigate();

  const tabs = [
    { id: "home", label: "Home", icon: Home, route: "/home" },
    { id: "privacy", label: "Privacy", icon: Shield, route: "/privacy" },
    { id: "alerts", label: "Alerts", icon: Bell, route: "/alerts" },
    { id: "settings", label: "Settings", icon: Settings, route: "/settings" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
      <div className="flex justify-around items-center max-w-sm mx-auto">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.route)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <IconComponent className={`w-5 h-5 ${isActive ? "text-blue-600" : ""}`} />
              <span className="text-xs font-medium">{tab.label}</span>
              {tab.id === "alerts" && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
