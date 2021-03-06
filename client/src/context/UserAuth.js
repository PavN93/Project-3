import { useState, createContext } from "react";
import fetcher from "../functions/fetcher";
// import CollectionContext from "./CollectionContext";

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {

  // const syncCollectionWithDB = useContext(CollectionContext);
  
  const [ userLoggedIn, setUserLoggedIn ] = useState(false);
  
  const doLogin = (payload) => {
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      // const { token } = userInStorage;
      setUserLoggedIn(true);
      // await syncCollectionWithDB(token);
      return;
    }
    if (payload) {
      const { token, user } = payload;
      const toStorage = {
        token,
        username: user.username,
        dateOfBirth: user.dateOfBirth,
        currentCity: user.currentCity,
        email: user.email,
        _id: user._id
      }
      localStorage.setItem("user", JSON.stringify(toStorage));
      localStorage.setItem("profilepic", user.profilePic);
      setUserLoggedIn(true);
      // await syncCollectionWithDB(token);
    }
  }

  const doLogout = async () => {
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      const parsedStorage = JSON.parse(userInStorage);
      await fetcher("/api/user/logout", parsedStorage.token);
      localStorage.removeItem("user");
      localStorage.removeItem("profilepic");
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