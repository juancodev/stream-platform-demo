import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userAuth, setUser] = useState({});

  const logout = () => {
    setUser({});
  }

  return (
    <>
      <AuthContext.Provider value={{ userAuth, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export { AuthContext, AuthProvider }