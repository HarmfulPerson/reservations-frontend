import UserSessionDataHandler from './UserSessionDataHandler';

class Authenticate {
  static isAuthenticated = () => {
    const result = UserSessionDataHandler.getToken();

    return !!result;
  };

  static authenticate = (token) => {
    UserSessionDataHandler.saveToken(token);
  };

  static unauthenticate = () => {
    UserSessionDataHandler.removeToken();
    UserSessionDataHandler.removeUserData();
  };
}

export default Authenticate;
