import { useState, createContext } from "react";
import fetcher from "../functions/fetcher";

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {

  const [ userLoggedIn, setUserLoggedIn ] = useState(false);

  const doLogin = (payload) => {
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      setUserLoggedIn(true);
      return;
    }
    if (payload) {
      const { token, user } = payload;
      const toStorage = {
        token,
        username: user.username,
        email: user.email,
        _id: user._id
      }
      localStorage.setItem("user", JSON.stringify(toStorage));
      setUserLoggedIn(true);
    }
  }

  const doLogout = async () => {
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      const parsedStorage = JSON.parse(userInStorage);
      await fetcher("/api/user/logout", parsedStorage.token);
      localStorage.removeItem("user");
      setUserLoggedIn(false);
    }
  }



  return (
    <UserAuthContext.Provider value={{ userLoggedIn, doLogin, doLogout }}>
      {children}
    </UserAuthContext.Provider>
  )
}

export default UserAuthContext;
export { UserAuthContextProvider };