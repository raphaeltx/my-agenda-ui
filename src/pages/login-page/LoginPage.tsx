import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import LoginForm from '../../components/login-form/LoginForm';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="xs" className="login-container">
      <Box className="logo-title-container">
        <Typography 
          variant="h4"
          component="h1"
          gutterBottom  
          className="login-title"
        >
          <FormattedMessage id="app.title" />
        </Typography>
      </Box>

      <Box className="login-form-container">
        <LoginForm />
      </Box>
    </Container>
  );
};

export default LoginPage;