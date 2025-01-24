import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import LoginPage from "./pages/login-page/LoginPage";
import AuthenticatedRoute from "./components/authenticated-route/AuthenticatedRoute";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/home-page/HomePage";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";
import NewUser from "./components/new-user/NewUser";
import Notification from "./components/notification/Notification";

function App() {
  return (
    <AuthProvider>
      <Router>
        <CssBaseline />
        <Container maxWidth="md">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <AuthenticatedRoute
                  element={<Navigate to="/home" />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="/home"
              element={
                <AuthenticatedRoute
                  element={<HomePage />}
                  redirectTo="/login"
                />
              }
            />
            <Route path="register" element={<NewUser />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <Notification />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
