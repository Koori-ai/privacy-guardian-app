import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '../hooks/use-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // For demo purposes, set a default user
    setUser({
      id: 'demo-user',
      name: 'Demo User',
      email: 'demo@example.com',
      is_premium: false
    });
  }, []);

  const login = async (credentials) => {
    try {
      setLoading(true);
      
      // Demo login - always succeed
      const demoUser = {
        id: 'demo-user',
        name: 'Demo User',
        email: credentials.email,
        is_premium: false
      };
      
      setUser(demoUser);
      
      toast({
        title: "Login Successful",
        description: `Welcome, ${demoUser.name}!`,
      });
      
      return { user: demoUser };
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Demo mode - login not required",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      
      toast({
        title: "Registration Successful",
        description: "Demo mode - you can now use the app.",
      });
      
      return { user: userData };
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Demo mode - registration not required",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
  };

  const updateProfile = async (userData) => {
    try {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully.",
      });
      
      return updatedUser;
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "Could not update profile",
        variant: "destructive",
      });
      throw error;
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
