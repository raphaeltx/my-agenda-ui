import axios from "axios";
import { ILogin } from "../../domain/interfaces/entities/ILogin";
import { IAuthService } from "../../domain/services/IAuthService";
import { LoginServiceError } from "../../errors/LoginServiceError";

class AuthService implements IAuthService {
  private isAuthenticated = false;
  private apiUrl = process.env.REACT_APP_API_URL || "";
  private token: string | null = null;

  async login(login: ILogin): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post<string>(
          `${this.apiUrl}/login`,
          login
        );

        this.token = response.data;
        this.isAuthenticated = true;

        resolve();
      } catch (error) {
        this.isAuthenticated = false;
        reject(new LoginServiceError("Failed to login: ", error));
      }
    });
  }

  logout(): void {
    this.token = null;
    this.isAuthenticated = false;
    delete axios.defaults.headers.common['Authorization'];
  }

  getAuthStatus(): boolean {
    return this.isAuthenticated;
  }

  getToken(): string | null {
    return this.token;
  }
}

export default new AuthService();
