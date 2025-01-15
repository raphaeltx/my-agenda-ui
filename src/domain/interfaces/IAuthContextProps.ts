export interface IAuthContextProps {
    isAuthenticated?: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
  }