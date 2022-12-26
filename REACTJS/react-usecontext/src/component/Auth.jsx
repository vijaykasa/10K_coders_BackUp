import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ fname: "vijay" });

  const Change = () => {
    const change={
      fname:"raju"
    }
    setUser(change);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, Change, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};