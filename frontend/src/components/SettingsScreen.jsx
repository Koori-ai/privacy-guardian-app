import React from "react";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { ChevronRight, User, Bell, Shield, Lock, Eye, HelpCircle, LogOut, RefreshCw } from "lucide-react";
import BottomNavigation from "./BottomNavigation";

const SettingsScreen = () => {
  const settingsGroups = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Profile", hasChevron: true },
        { icon: Lock, label: "Change Password", hasChevron: true },
        { icon: Shield, label: "Two-Factor Authentication", hasSwitch: true, enabled: true }
      ]
    },
    {
      title: "Privacy & Security",
      items: [
        { icon: Eye, label: "Privacy Mode", hasSwitch: true, enabled: true },
        { icon: Bell, label: "Alert Notifications", hasSwitch: true, enabled: true },
        { icon: Shield, label: "Auto Privacy Scan", hasSwitch: true, enabled: false }
      ]
    },
    {
      title: "Data & Privacy",
      items: [
        { icon: HelpCircle, label: "Export My Data", hasChevron: true },
        { icon: Shield, label: "Privacy Policy", hasChevron: true },
        { icon: User, label: "Terms of Service", hasChevron: true }
      ]
    }
  ];

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
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <RefreshCw className="w-5 h-5 text-white" />
          </button>
        </div>
        <p className="text-blue-100">Manage your privacy preferences and account</p>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* User Profile Card */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Demo User</h3>
              <p className="text-sm text-gray-600">demo@example.com</p>
              <p className="text-xs text-green-600 mt-1">Demo Account</p>
            </div>
          </div>
        </Card>

        {/* Settings Groups */}
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">{group.title}</h2>
            <Card className="divide-y divide-gray-100">
              {group.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.hasSwitch && (
                      <Switch checked={item.enabled} />
                    )}
                    {item.hasChevron && (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </Card>
          </div>
        ))}

        {/* Privacy Score Overview */}
        <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">Privacy Score</h3>
              <p className="text-sm text-gray-600">Your current privacy rating</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <p className="text-xs text-green-600">Good</p>
            </div>
          </div>
        </Card>

        {/* App Info */}
        <div className="text-center pt-4">
          <p className="text-sm text-gray-500">Privacy Guardian v1.0.0</p>
          <p className="text-xs text-gray-400 mt-1">© 2024 Privacy Guardian. All rights reserved.</p>
        </div>

        {/* Logout Button */}
        <Card className="p-4 border-red-200 bg-red-50">
          <button className="flex items-center gap-3 w-full text-left p-3 rounded-lg hover:bg-red-100 transition-colors duration-200">
            <LogOut className="w-5 h-5 text-red-600" />
            <span className="font-medium text-red-900">Sign Out</span>
          </button>
        </Card>
      </div>

      <BottomNavigation activeTab="settings" />
    </div>
  );
};

export default SettingsScreen;
