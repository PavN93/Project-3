import { useState, createContext } from "react";
import fetcher from "../functions/fetcher";

const CollectionContext = createContext();

const CollectionContextProvider = ({ children }) => {

  const [collectionFromDB, setCollectionFromDB] = useState([]);

  const syncCollectionWithDB = async () => {
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      const parsedStorage = JSON.parse(userInStorage);
      const { token } = parsedStorage;
      const collection = await fetcher("/api/plant/collection", token);
      setCollectionFromDB(collection.payload.collection);
    }
  }

  return (
    <CollectionContext.Provider value={{ collectionFromDB, syncCollectionWithDB }}>
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionContext;
export { CollectionContextProvider };