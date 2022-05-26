import React from 'react';
import { postRequest } from '../../helpers/requests';
import languages from '../../consts/language';
import RegisterForm from './RegisterForm';
import history from '../../history';

const Register = () => {
  const [newUser, setNewUser] = React.useState({
    email: '',
    password: '',
    rePassword: '',
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
    rePassword: false,
    firstName: false,
    lastName: false,
    phone: false,
  });
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const firstRegisterClick = React.useRef(false);
  const [alert, setAlert] = React.useState({});

  const errorChecker = (errorObject, name, value) => {
    let newErrors = { ...errorObject };
    if (name === 'email') {
      newErrors = { ...newErrors, email: !emailRegexp.test(value) };
      return newErrors;
    }
    if (!value.length) {
      newErrors = { ...newErrors, [name]: true };
    } else if (
      firstRegisterClick.current &&
      value.length &&
      errors[name] === true
    ) {
      newErrors = { ...newErrors, [name]: false };
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const currentErrors = { ...errors };
    if (firstRegisterClick.current)
      setErrors(errorChecker(currentErrors, name, value));
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const checkIfHasErrors = () => {
    if (!firstRegisterClick.current) {
      let newErrors = { ...errors };
      for (const [key, value] of Object.entries(newUser)) {
        newErrors = errorChecker(newErrors, key, value);
      }
      setErrors(newErrors);
      firstRegisterClick.current = true;

      return Object.values(newErrors).indexOf(true) > -1;
    }

    return Object.values(errors).indexOf(true) > -1;
  };

  const arePasswordsIdentical = (password, rePassword) => {
    if (password !== rePassword) {
      setErrors({ ...errors, rePassword: true });

      return false;
    }

    return true;
  };

  const register = async () => {
    if (
      !checkIfHasErrors() &&
      arePasswordsIdentical(newUser.password, newUser.rePassword)
    ) {
      const result = await postRequest('register', newUser);
      if (result.status !== 201) {
        setAlert({
          status: 'error',
          text: 'Nie udało się stworzyć użytkownika',
        });
      } else {
        history.push('/login');
      }
    }
  };

  return (
    <RegisterForm
      register={register}
      values={newUser}
      errors={errors}
      handleChange={handleChange}
      alert={alert}
    />
  );
};

export default Register;
