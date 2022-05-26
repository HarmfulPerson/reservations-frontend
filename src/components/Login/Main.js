import React from 'react';
import LoginForm from './LoginForm';
import { postRequest } from '../../helpers/requests';
import history from '../../history';
import Authenticate from '../../auth/Auth';
import UserSessionDataHandler from '../../auth/UserSessionDataHandler';

const Main = () => {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });
  const [alert, setAlert] = React.useState({});

  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
  });

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setErrors({
      ...errors,
      [name]: false,
    });
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const login = async () => {
    if (!credentials.email.length || !credentials.password.length) {
      setErrors({
        email: !credentials.email.length,
        password: !credentials.password.length,
      });

      return;
    }
    const result = await postRequest('login', credentials);
    if (result.status !== 200) {
      setAlert({
        status: 'error',
        text: 'Podane dane są nieprawidłowe',
      });
    } else {
      UserSessionDataHandler.saveUserData(result.data.user);
      Authenticate.authenticate(result.data.token);
      history.push('/');
    }
  };

  return (
    <LoginForm
      login={login}
      handleChange={handleChange}
      errors={errors}
      alert={alert}
      values={credentials}
    />
  );
};

export default Main;
