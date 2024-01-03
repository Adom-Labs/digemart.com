import React, { createContext, useState, ReactNode } from 'react';

interface User {}

export interface AuthContextProps {
  user: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user] = useState<User | null>(null);

  const contextValue: AuthContextProps = {
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
