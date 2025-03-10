import { ILogin } from "../interfaces/entities/ILogin";

export interface IAuthService {
  login(login: ILogin): Promise<void>;
  logout(): void;
  getAuthStatus(): boolean;
}
