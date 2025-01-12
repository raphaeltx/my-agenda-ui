export interface IAuthService {
  login(email: string, password: string): Promise<void>;
  logout(): void;
  getAuthStatus(): boolean;
}
