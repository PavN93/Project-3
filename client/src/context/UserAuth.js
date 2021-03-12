import { useState, createContext } from 'react';

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {

  const [ userLoggedIn, setUserLoggedIn ] = useState(false);
  const [ token, setToken ] = useState('');

  const loginToggle = () => {
    setUserLoggedIn(!userLoggedIn);
  }

  return (
    <UserAuthContext.Provider value={{ userLoggedIn, loginToggle }}>
      {children}
    </UserAuthContext.Provider>
  )
}

export default UserAuthContext;
export { UserAuthContextProvider };