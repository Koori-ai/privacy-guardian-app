import React, { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Bell, AlertTriangle, CheckCircle, Info, X, RefreshCw } from "lucide-react";
import BottomNavigation from "./BottomNavigation";

const AlertsScreen = () => {
  const [alerts] = useState([
    {
      id: "1",
      title: "New App Permissions",
      message: "Instagram requested camera access",
      time: "2 min ago",
      type: "warning",
      read: false
    },
    {
      id: "2", 
      title: "Privacy Score Updated",
      message: "Your privacy score increased to 85%",
      time: "1 hour ago",
      type: "success",
      read: false
    },
    {
      id: "3",
      title: "Location Access Blocked", 
      message: "TikTok location access was blocked",
      time: "3 hours ago",
      type: "info",
      read: true
    }
  ]);

  const getAlertIcon = (type) => {
    const icons = {
      warning: AlertTriangle,
      success: CheckCircle,
      info: Info
    };
    const IconComponent = icons[type] || Bell;
    return <IconComponent className="w-5 h-5" />;
  };

  const getAlertColor = (type) => {
    const colors = {
      warning: "text-orange-600 bg-orange-100",
      success: "text-green-600 bg-green-100",
      info: "text-blue-600 bg-blue-100"
    };
    return colors[type] || "text-gray-600 bg-gray-100";
  };

  const getAlertBadgeColor = (type) => {
    const colors = {
      warning: "bg-orange-500 text-white",
      success: "bg-green-500 text-white", 
      info: "bg-blue-500 text-white"
    };
    return colors[type] || "bg-gray-500 text-white";
  };

  const unreadCount = alerts.filter(alert => !alert.read).length;

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

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-white">Alerts</h1>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <RefreshCw className="w-5 h-5 text-white" />
            </button>
            {unreadCount > 0 && (
              <Badge className="bg-red-500 text-white">
                {unreadCount} new
              </Badge>
            )}
          </div>
        </div>
        <p className="text-blue-100">Stay informed about your privacy and security</p>
      </div>

      <div className="px-6 py-6">
        {/* Alert Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <Badge className="bg-blue-600 text-white whitespace-nowrap">
            All Alerts
          </Badge>
          <Badge className="bg-gray-100 text-gray-600 whitespace-nowrap">
            Unread ({unreadCount})
          </Badge>
          <Badge className="bg-gray-100 text-gray-600 whitespace-nowrap">
            Warnings
          </Badge>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => (
            <Card 
              key={alert.id} 
              className={`p-4 transition-all duration-200 ${
                !alert.read ? "border-l-4 border-l-blue-500 bg-blue-50/30" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getAlertColor(alert.type)}`}>
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                      {!alert.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{alert.message}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-gray-500">{alert.time}</p>
                      <Badge className={`text-xs ${getAlertBadgeColor(alert.type)}`}>
                        {alert.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  {!alert.read && (
                    <button className="text-blue-600 hover:text-blue-700 text-xs">
                      Mark Read
                    </button>
                  )}
                  <button className="text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 text-center cursor-pointer hover:shadow-lg transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Mark All Read</h3>
              <p className="text-sm text-gray-600">Clear all notifications</p>
            </Card>
            <Card className="p-4 text-center cursor-pointer hover:shadow-lg transition-all duration-300">
              <Bell className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Settings</h3>
              <p className="text-sm text-gray-600">Manage notifications</p>
            </Card>
          </div>
        </div>
      </div>

      <BottomNavigation activeTab="alerts" />
    </div>
  );
};

export default AlertsScreen;
