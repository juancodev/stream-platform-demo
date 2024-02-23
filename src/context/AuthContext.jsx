import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);

  const logout = () => {
    setUserAuth(null);
  }

  return (
    <>
      <AuthContext.Provider value={{ userAuth, setUserAuth, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export { AuthContext, AuthProvider }