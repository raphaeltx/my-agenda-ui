import { IPerson } from "./IPerson";

export interface IUser {
  user_name: string;
  password: string;
  person: IPerson;
}
