import { useState, createContext } from 'react';

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {

  const [ userLoggedIn, setUserLoggedIn ] = useState(false);

  const doLogin = (payload) => {
    const { token, user } = payload;
    const toStorage = {
      token,
      username: user.username,
      email: user.email,
      _id: user._id
    }
    localStorage.setItem('user', JSON.stringify(toStorage));
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