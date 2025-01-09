import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container, CssBaseline, Typography } from '@mui/material';
import LoginPage from './pages/login-page/LoginPage';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <CssBaseline />
        <Container maxWidth="sm">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedRoute element={<Navigate to="/main" />} redirectTo="/login" />} />
            <Route path="/main" element={<ProtectedRoute element={
              <Typography variant="h4" component="h1" gutterBottom>
                My Agenda [Working on it]
              </Typography>
            } redirectTo="/login" />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;