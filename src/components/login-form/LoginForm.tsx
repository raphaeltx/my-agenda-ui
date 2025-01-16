import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { TextField, Button, Box, Link } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import "./LoginForm.css";

const LoginForm: React.FC = () => {
  const intl = useIntl();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleLogin}>
      <TextField
        label={intl.formatMessage({ id: "login.emailLabel" })}
        variant="standard"
        margin="normal"
        fullWidth
        value={email}
        className="custom-textfield"
        size="small"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label={intl.formatMessage({ id: "login.passwordLabel" })}
        type="password"
        variant="standard"
        margin="normal"
        fullWidth
        value={password}
        className="custom-textfield"
        size="small"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="outlined"
        fullWidth
        onClick={handleLogin}
        size="small"
        className="custom-button"
      >
        {intl.formatMessage({ id: "login.loginButton" })}
      </Button>

      <Box className="new-account-link-container">
        <Link href="/register" variant="body2" className="new-account-link">
          {intl.formatMessage({ id: "login.newAccount" })}
        </Link>
      </Box>
    </Box>
  );
};

export default LoginForm;
