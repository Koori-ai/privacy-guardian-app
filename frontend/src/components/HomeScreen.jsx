import React, { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Camera, Shield, Mic, MapPin, ChevronRight, User, RefreshCw } from "lucide-react";
import BottomNavigation from "./BottomNavigation";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [privacyScore] = useState(85);
  const [recentActivity] = useState([
    {
      id: "1",
      app: "Instagram",
      action: "Camera access granted",
      time: "2 min ago",
      icon: "camera",
      type: "warning"
    },
    {
      id: "2",
      app: "WhatsApp", 
      action: "Microphone access reviewed",
      time: "1 hour ago",
      icon: "mic",
      type: "info"
    },
    {
      id: "3",
      app: "TikTok",
      action: "Location access blocked", 
      time: "3 hours ago",
      icon: "map-pin",
      type: "success"
    }
  ]);

  const quickActions = [
    {
      id: 1,
      title: "App Permissions",
      subtitle: "Review access rights",
      icon: "camera",
      color: "bg-red-100 text-red-600",
      route: "/privacy"
    },
    {
      id: 2,
      title: "Privacy Score",
      subtitle: "Check your status",
      icon: "shield",
      color: "bg-blue-100 text-blue-600",
      route: "/privacy"
    }
  ];

  const getActivityIcon = (iconName) => {
    const icons = {
      camera: Camera,
      mic: Mic,
      "map-pin": MapPin
    };
    const IconComponent = icons[iconName] || Shield;
    return <IconComponent className="w-5 h-5" />;
  };

  const getActivityColor = (type) => {
    const colors = {
      warning: "text-orange-600",
      info: "text-blue-600", 
      success: "text-green-600"
    };
    return colors[type] || "text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Mobile Status Bar */}
      <div className="bg-white px-6 py-2 flex justify-between items-center text-sm font-semibold">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <span className="ml-2">100%</span>
        </div>
      </div>

      {/* Header Section with Privacy Score */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Good Morning!</h1>
            <p className="text-blue-100">Your privacy score: {privacyScore}%</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <RefreshCw className="w-5 h-5 text-white" />
            </button>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Privacy Score Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-0 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">Privacy Score</h3>
              <p className="text-blue-100 text-sm">Good protection</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{privacyScore}%</div>
              <Badge className="bg-green-500 text-white mt-1">Secure</Badge>
            </div>
          </div>
        </Card>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <Card
                key={action.id}
                className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate(action.route)}
              >
                <div className="text-center space-y-3">
                  <div className={`w-12 h-12 ${action.color} rounded-xl mx-auto flex items-center justify-center`}>
                    {action.icon === "camera" && <Camera className="w-6 h-6" />}
                    {action.icon === "shield" && <Shield className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.subtitle}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <Card key={activity.id} className="p-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                      {getActivityIcon(activity.icon)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{activity.app}</h3>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Demo User Info */}
        <div className="pt-4">
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Demo User</h3>
                <p className="text-sm text-gray-600">demo@example.com</p>
                <Badge className="bg-blue-600 text-white mt-1">Demo Account</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <BottomNavigation activeTab="home" />
    </div>
  );
};

export default HomeScreen;
