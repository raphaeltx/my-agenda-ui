import { IUser } from "../interfaces/entities/IUser";

export interface IUserService {
  createUser(user: IUser): Promise<IUser>;
}
