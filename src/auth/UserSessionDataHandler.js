class UserSessionDataHandler {
  static token = 'token';

  static refreshToken = 'refreshToken';

  static userData = 'user';

  static settings = 'settings';

  static settingsKeys = SettingsKeys;

  static userKeys = UserKeys;

  static getToken() {
    return localStorage.getItem(this.token);
  }

  static getRefreshToken() {
    return localStorage.getItem(this.refreshToken);
  }

  static getUserData() {
    const userData = localStorage.getItem(this.userData) || '';

    return userData ? JSON.parse(userData) : null;
  }

  static getSettings() {
    const settings = localStorage.getItem(this.settings) || '';

    return settings ? JSON.parse(settings) : null;
  }

  static saveToken(token) {
    localStorage.setItem(this.token, token);
  }

  static saveRefreshToken(token) {
    localStorage.setItem(this.refreshToken, token);
  }

  static saveUserData(user) {
    localStorage.setItem(this.userData, JSON.stringify(user));
  }

  static removeUserData() {
    localStorage.removeItem(this.userData);
  }

  static saveSettings(settings) {
    localStorage.setItem(this.settings, JSON.stringify(settings));
  }

  static removeSettings() {
    localStorage.removeItem(this.settings);
  }

  static removeToken() {
    localStorage.removeItem(this.token);
  }

  static removeRefreshToken() {
    localStorage.removeItem(this.refreshToken);
  }
}

export default UserSessionDataHandler;
