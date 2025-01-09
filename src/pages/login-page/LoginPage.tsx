import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import LoginForm from '../../components/login-form/LoginForm';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default LoginPage;