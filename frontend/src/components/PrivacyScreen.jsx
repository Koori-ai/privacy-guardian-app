import React, { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Camera, Mic, MapPin, Users, Image, AlertTriangle, Shield, CheckCircle, RefreshCw } from "lucide-react";
import BottomNavigation from "./BottomNavigation";

const PrivacyScreen = () => {
  const [privacyScore] = useState(85);
  const [appPermissions] = useState([
    {
      id: 1,
      app_name: "Instagram",
      permissions: {
        camera: true,
        microphone: false,
        location: true,
        contacts: false,
        photos: true
      },
      risk_level: "high",
      last_access: "2 min ago"
    },
    {
      id: 2,
      app_name: "WhatsApp",
      permissions: {
        camera: true,
        microphone: true,
        location: false,
        contacts: true,
        photos: true
      },
      risk_level: "medium",
      last_access: "1 hour ago"
    },
    {
      id: 3,
      app_name: "TikTok",
      permissions: {
        camera: true,
        microphone: true,
        location: false,
        contacts: false,
        photos: true
      },
      risk_level: "low",
      last_access: "3 hours ago"
    }
  ]);

  const getPermissionIcon = (permission) => {
    const icons = {
      camera: Camera,
      microphone: Mic,
      location: MapPin,
      contacts: Users,
      photos: Image
    };
    const IconComponent = icons[permission] || Shield;
    return <IconComponent className="w-4 h-4" />;
  };

  const getRiskColor = (level) => {
    const colors = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800"
    };
    return colors[level] || "bg-gray-100 text-gray-800";
  };

  const getRiskIcon = (level) => {
    if (level === "high") return <AlertTriangle className="w-4 h-4" />;
    if (level === "medium") return <Shield className="w-4 h-4" />;
    return <CheckCircle className="w-4 h-4" />;
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

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-white">Privacy Center</h1>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <RefreshCw className="w-5 h-5 text-white" />
          </button>
        </div>
        <p className="text-blue-100">Manage your app permissions and privacy settings</p>
        
        {/* Privacy Score Overview */}
        <Card className="bg-white/10 backdrop-blur-sm border-0 p-4 mt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">Overall Privacy Score</h3>
              <p className="text-blue-100 text-sm">Based on your app permissions</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{privacyScore}%</div>
              <Badge className="bg-green-500 text-white mt-1">Good</Badge>
            </div>
          </div>
        </Card>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* App Permissions */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">App Permissions</h2>
          <div className="space-y-4">
            {appPermissions.map((app) => (
              <Card key={app.id} className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{app.app_name}</h3>
                      <p className="text-sm text-gray-500">Last access: {app.last_access}</p>
                    </div>
                  </div>
                  <Badge className={getRiskColor(app.risk_level)}>
                    <div className="flex items-center gap-1">
                      {getRiskIcon(app.risk_level)}
                      <span className="capitalize">{app.risk_level} Risk</span>
                    </div>
                  </Badge>
                </div>

                {/* Permissions List */}
                <div className="space-y-3">
                  {Object.entries(app.permissions).map(([permission, enabled]) => (
                    <div key={permission} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-gray-500">
                          {getPermissionIcon(permission)}
                        </div>
                        <span className="text-sm font-medium text-gray-700 capitalize">
                          {permission}
                        </span>
                      </div>
                      <Switch checked={enabled} />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Privacy Tips */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Privacy Tips</h2>
          <div className="space-y-3">
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900">Review App Permissions Regularly</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Check which apps have access to your camera, microphone, and location data.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-purple-50 border-purple-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-purple-900">Enable Two-Factor Authentication</h3>
                  <p className="text-sm text-purple-700 mt-1">
                    Add an extra layer of security to your important accounts.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <BottomNavigation activeTab="privacy" />
    </div>
  );
};

export default PrivacyScreen;
