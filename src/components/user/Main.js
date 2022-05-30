import React from 'react';
import PropTypes from 'prop-types';
import UserRenderForm from './FormRender';
import UserSessionDataHandler from '../../auth/UserSessionDataHandler';
import { authPatchRequest } from '../../helpers/requests';

const User = (props) => {
  const { showUserSettings, setShowUserSettings } = props;
  const [userData, setUserData] = React.useState(
    UserSessionDataHandler.getUserData()
  );
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
    rePassword: false,
    firstName: false,
    lastName: false,
    phone: false,
  });

  const handleModalToggle = () => {
    setErrors(
      Object.assign(...Object.keys(errors).map((k) => ({ [k]: false })))
    );
    setUserData(UserSessionDataHandler.getUserData());
  };

  React.useEffect(() => {
    handleModalToggle();
  }, [showUserSettings]);

  const errorChecker = (errorObject, name, value) => {
    let newErrors = { ...errorObject };
    if (name === 'email') {
      newErrors = { ...newErrors, email: !emailRegexp.test(value) };
      return newErrors;
    }
    if (!value.length) {
      newErrors = { ...newErrors, [name]: true };
    } else if (value.length && errors[name] === true) {
      newErrors = { ...newErrors, [name]: false };
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const currentErrors = { ...errors };
    setErrors(errorChecker(currentErrors, name, value));
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const closeModal = () => {
    setShowUserSettings(false);
  };

  const changeSettings = async () => {
    if (userData.password) {
      if (userData.password !== userData.rePassword) {
        setErrors({ ...errors, rePassword: true });

        return;
      }
    }
    const result = await authPatchRequest('user', userData);

    if (result.status === 200) {
      closeModal();
      UserSessionDataHandler.saveUserData(result.data);
    }
  };

  return (
    <UserRenderForm
      showUserSettings={showUserSettings}
      closeModal={closeModal}
      values={userData}
      errors={errors}
      handleChange={handleChange}
      changeSettings={changeSettings}
    />
  );
};

User.propTypes = {
  showUserSettings: PropTypes.bool.isRequired,
  setShowUserSettings: PropTypes.func.isRequired,
};

export default User;
