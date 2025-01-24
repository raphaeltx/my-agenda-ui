export class UserServiceError extends Error {
  constructor(message: string, public originalError: any) {
    super(message);
    this.name = "UserServiceError";
  }
}
