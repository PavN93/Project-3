import { useState, createContext } from 'react';

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {

  const [ userLoggedIn, setUserLoggedIn ] = useState(false);
  // const [ user, setUser ] = useState('');
  // const [ token, setToken ] = useState('');
  

  const doLogin = (payload) => {
    const { token, user } = payload;
    // setToken(token);
    // setUser(user);
    localStorage.setItem('token', token);
    setUserLoggedIn(true);
  }

  return (
    <UserAuthContext.Provider value={{ userLoggedIn, doLogin }}>
      {children}
    </UserAuthContext.Provider>
  )
}

export default UserAuthContext;
export { UserAuthContextProvider };