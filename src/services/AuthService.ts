class AuthService {
    private isAuthenticated = false;
  
    async login(email: string, password: string): Promise<void> {
      
      // TODO: Implement login logic 

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'admin' && password === 'admin') {
            this.isAuthenticated = true;
            resolve();
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 1000);
      });
    }
  
    logout(): void {
      this.isAuthenticated = false;
    }
  
    getAuthStatus(): boolean {
      return this.isAuthenticated;
    }
  }
  
  export default new AuthService();