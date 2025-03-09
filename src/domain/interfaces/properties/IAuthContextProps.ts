import { ILogin } from "../entities/ILogin";

export interface IAuthContextProps {
    isAuthenticated?: boolean;
    login: (login: ILogin) => void;
    logout: () => void;
  }