import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useState, useEffect } from 'react';

const ProtectedRouter = ({ children }) => {
  const { userAuth } = useAuth();
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    if (userAuth === null) {
      setRedirectToLogin(true);
    } else {
      setRedirectToLogin(false);
    }
  }, [userAuth]);

  if (redirectToLogin) {
    return <Navigate to='/auth/sign-in' replace={true} />;
  }

  return <>{children}</>;
};

export { ProtectedRouter };