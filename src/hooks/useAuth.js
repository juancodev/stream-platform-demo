import { useContext } from 'react';
import {AuthContext} from 'context/AuthContext.jsx';

const useAuth = () => {
  const contextAuth = useContext(AuthContext);

  if(!contextAuth) throw new Error('There is not auth provider');

  return contextAuth;
}

export {useAuth};