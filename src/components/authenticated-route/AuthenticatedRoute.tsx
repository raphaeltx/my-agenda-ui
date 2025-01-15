import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { IAuthenticatedRouteProps } from '../../domain/interfaces/IProtectedRouteProps';

const AuthenticatedRoute: React.FC<IAuthenticatedRouteProps> = ({ element, redirectTo }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to={redirectTo} />;
};

export default AuthenticatedRoute;