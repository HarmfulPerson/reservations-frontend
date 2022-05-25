import React from 'react';
import { postRequest } from '../../helpers/requests';
import languages from '../../consts/language';
import RegisterForm from './RegisterForm';

const Register = () => {
  const [newUser, setNewUser] = React.useState({
    email: null,
    password: null,
    rePassword: null,
    firstName: null,
    lastName: null,
    phone: null,
  });
  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
    rePassword: false,
    firstName: false,
    lastName: false,
    phone: false,
  });

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const register = async () => {
    const result = await postRequest('register', newUser);
  };

  return (
    <RegisterForm
      register={register}
      values={newUser}
      errors={errors}
      handleChange={handleChange}
    />
  );
};

export default Register;
