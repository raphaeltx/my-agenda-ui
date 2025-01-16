import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import './NewUser.css';

const NewUser: React.FC = () => {
  const intl = useIntl();
  const [formValues, setFormValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    userName: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    userName: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let errors = { ...formErrors };
    let isValid = true;

    // Email validation
    if (!formValues.email) {
      errors.email = intl.formatMessage({ id: 'validation.required' });
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = intl.formatMessage({ id: 'validation.invalidEmail' });
      isValid = false;
    } else {
      errors.email = '';
    }

    // Password validation
    if (!formValues.password) {
      errors.password = intl.formatMessage({ id: 'validation.required' });
      isValid = false;
    } else if (formValues.password.length < 8) {
      errors.password = intl.formatMessage({ id: 'validation.passwordLength' });
      isValid = false;
    } else {
      errors.password = '';
    }

    // Required fields validation
    ['firstName', 'lastName', 'phoneNumber', 'userName'].forEach((field) => {
      if (!formValues[field as keyof typeof formValues]) {
        errors[field as keyof typeof formErrors] = intl.formatMessage({ id: 'validation.required' });
        isValid = false;
      } else {
        errors[field as keyof typeof formErrors] = '';
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formValues);
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} className="new-user-form">
      <Typography variant="h5" className="form-title">
        {intl.formatMessage({ id: 'newUser.title' })}
      </Typography>
      <TextField
        label={intl.formatMessage({ id: 'newUser.emailLabel' })}
        variant="standard"
        margin="normal"
        fullWidth
        name="email"
        className="custom-textfield"
        value={formValues.email}
        onChange={handleInputChange}
        error={!!formErrors.email}
        helperText={formErrors.email}
      />
      <TextField
        label={intl.formatMessage({ id: 'newUser.firstNameLabel' })}
        variant="standard"
        margin="normal"
        fullWidth
        name="firstName"
        className="custom-textfield"
        value={formValues.firstName}
        onChange={handleInputChange}
        error={!!formErrors.firstName}
        helperText={formErrors.firstName}
      />
      <TextField
        label={intl.formatMessage({ id: 'newUser.lastNameLabel' })}
        variant="standard"
        margin="normal"
        fullWidth
        name="lastName"
        className="custom-textfield"
        value={formValues.lastName}
        onChange={handleInputChange}
        error={!!formErrors.lastName}
        helperText={formErrors.lastName}
      />
      <TextField
        label={intl.formatMessage({ id: 'newUser.phoneLabel' })}
        variant="standard"
        margin="normal"
        fullWidth
        name="phoneNumber"
        className="custom-textfield"
        value={formValues.phoneNumber}
        onChange={handleInputChange}
        error={!!formErrors.phoneNumber}
        helperText={formErrors.phoneNumber}
      />
      <TextField
        label={intl.formatMessage({ id: 'newUser.userNameLabel' })}
        variant="standard"
        margin="normal"
        fullWidth
        name="userName"
        className="custom-textfield"
        value={formValues.userName}
        onChange={handleInputChange}
        error={!!formErrors.userName}
        helperText={formErrors.userName}
      />
      <TextField
        label={intl.formatMessage({ id: 'newUser.passwordLabel' })}
        type="password"
        variant="standard"
        margin="normal"
        fullWidth
        name="password"
        className="custom-textfield"
        value={formValues.password}
        onChange={handleInputChange}
        error={!!formErrors.password}
        helperText={formErrors.password}
      />
      <Button variant="outlined" fullWidth type="submit" className="custom-button">
        {intl.formatMessage({ id: 'newUser.submitButton' })}
      </Button>
    </Box>
  );
};

export default NewUser;