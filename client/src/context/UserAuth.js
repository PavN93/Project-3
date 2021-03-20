import { useState, createContext } from "react";
import fetcher from "../functions/fetcher";

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
    localStorage.setItem("user", JSON.stringify(toStorage));
    setUserLoggedIn(true);
  }

  const doLogout = async () => {
    const user = localStorage.getItem("user");
    const user2 = JSON.parse(user);
    if (user) {
      await fetcher("/api/user/logout", user2.token);
      // localStorage.removeItem("user")
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