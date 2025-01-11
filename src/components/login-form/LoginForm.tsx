import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { TextField, Button, Box } from '@mui/material';
import AuthService from '../../services/AuthService';
import { useAuth } from '../../context/AuthContext';

const LoginForm: React.FC = () => {
  const intl = useIntl();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await AuthService.login(email, password);
      login();
      
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        label={intl.formatMessage({ id: 'login.emailLabel' })}
        variant="standard"
        margin="normal"
        fullWidth
        value={email}
        size="small"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label={intl.formatMessage({ id: 'login.passwordLabel' })}
        type="password"
        variant="standard"
        margin="normal"
        fullWidth
        value={password}
        size="small"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={handleLogin}
        size="small"
        sx={{ mt: 2 }}
      >
        {intl.formatMessage({ id: 'login.loginButton' })}
      </Button>
    </Box>
  );
};

export default LoginForm;