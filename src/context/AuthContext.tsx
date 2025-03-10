import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AuthService from "../services/auth/AuthService";
import { IAuthContextProps } from "../domain/interfaces/properties/IAuthContextProps";
import { ILogin } from "../domain/interfaces/entities/ILogin";

const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthService.getAuthStatus()
  );

  const login = async (login: ILogin) => {
    await AuthService.login(login);
    setIsAuthenticated(true);
  };

  const logout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    setIsAuthenticated(AuthService.getAuthStatus());
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
