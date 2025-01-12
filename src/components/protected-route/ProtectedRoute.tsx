import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { IProtectedRouteProps } from '../../domain/interfaces/IProtectedRouteProps';

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ element, redirectTo }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;