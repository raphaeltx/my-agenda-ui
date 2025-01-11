import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ProtectedRouteProps } from './ProtectedRoute.types';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, redirectTo }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;