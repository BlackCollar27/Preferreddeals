import { Navigate } from 'react-router';
import { useAuth } from './auth-context';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAuth?: boolean;
  requireUserType?: 'partner' | 'distribution' | 'admin';
}

export function ProtectedRoute({ 
  children, 
  requireAuth = true,
  requireUserType 
}: ProtectedRouteProps) {
  const { isUserLoggedIn, userType } = useAuth();

  if (requireAuth && !isUserLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (requireUserType && userType !== requireUserType) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
