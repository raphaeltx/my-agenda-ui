import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import LoginPage from './pages/login-page/LoginPage';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/home-page/HomePage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <CssBaseline />
        <Container maxWidth="sm">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedRoute element={<Navigate to="/home" />} redirectTo="/login" />} />
            {/* <Route path="/home" element={<ProtectedRoute element={<HomePage />} redirectTo="/login" />} /> */}
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;