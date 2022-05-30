class UserSessionDataHandler {
  static token = 'token';

  static userData = 'user';

  static getToken() {
    return localStorage.getItem(this.token);
  }

  static saveToken(token) {
    return localStorage.setItem(this.token, token);
  }

  static getRefreshToken() {
    return localStorage.getItem(this.refreshToken);
  }

  static getUserData() {
    const userData = localStorage.getItem(this.userData) || '';

    return userData ? JSON.parse(userData) : null;
  }

  static saveUserData(user) {
    localStorage.setItem(this.userData, JSON.stringify(user));
  }

  static removeUserData() {
    localStorage.removeItem(this.userData);
  }

  static removeToken() {
    localStorage.removeItem(this.token);
  }
}

export default UserSessionDataHandler;
