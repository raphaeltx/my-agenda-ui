import React from 'react';

export interface ProtectedRouteProps {
  element: React.ReactElement;
  redirectTo: string;
}