export class LoginServiceError extends Error {
    constructor(message: string, public originalError: any) {
        super(message);
        this.name = "LoginServiceError";
    }
}