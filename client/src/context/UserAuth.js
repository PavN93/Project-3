import { useState, createContext } from 'react';

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {

  const [ userLoggedIn, setUserLoggedIn ] = useState(false);

  const loginToggle = () => {
    setUserLoggedIn((userLoggedIn) => !userLoggedIn);
  }

  return (
    <UserAuthContext.Provider value={{ userLoggedIn, loginToggle }}>
      {children}
    </UserAuthContext.Provider>
  )
}

export default UserAuthContext;
export { UserAuthContextProvider };