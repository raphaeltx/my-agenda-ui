import axios from "axios";
import { IUserService } from "../../domain/services/IUserService";
import { IUser } from "../../domain/interfaces/entities/IUser";
import { UserServiceError } from "../../errors/UserServiceError";

class UserService implements IUserService {
  private apiUrl = process.env.REACT_APP_API_URL || "";

  async createUser(user: IUser): Promise<IUser> {
    try {
      const response = await axios.post<IUser>(`${this.apiUrl}/users`, user);
      return response.data;
    } catch (error) {
      throw new UserServiceError("Failed to create user: ", error);
    }
  }
}

export default UserService;
