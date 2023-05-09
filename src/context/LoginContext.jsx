import { createContext, useState } from 'react';
export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [Logins, setLogins] = useState(false);

  const loginsHandle = () => {
    setLogins(prev => !prev);
  };
  return (
    <LoginContext.Provider value={{ Logins, setLogins, loginsHandle }}>
      {children}
    </LoginContext.Provider>
  );
};
