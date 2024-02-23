import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const ProtectedRouter = ({ children }) => {
  const { userAuth } = useAuth();

  if (Object.entries(userAuth) === "") {
    return (
      <Navigate to='auth/sign-in' replace="true" />
    )
  }

  return (<>{children}</>);
}

export { ProtectedRouter };