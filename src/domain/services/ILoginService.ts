import { ILogin } from "../interfaces/entities/ILogin";

export interface ILoginService {
  login(login: ILogin): Promise<void>;
}