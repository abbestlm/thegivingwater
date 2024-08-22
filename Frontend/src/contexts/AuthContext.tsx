import React, { createContext, useState, useContext } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081"; // Ensure this matches your backend

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await axios.post("/api/login", { username, password });

      if (response.data.success) {
        setIsAuthenticated(true);
        return true;
      } else {
        alert(response.data.message);
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
