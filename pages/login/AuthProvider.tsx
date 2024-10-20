import React, { createContext, useContext, useState } from 'react';

interface Employee {
  name: string;
  id: string;
  picture: string;
}

interface AuthContextType {
  token: string | null;
  employees: Employee[];
  setAuthData: (token: string, employees: Employee[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const setAuthData = (token: string, employees: Employee[]) => {
    setToken(token);
    setEmployees(employees);
  };

  return (
    <AuthContext.Provider value={{ token, employees, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
