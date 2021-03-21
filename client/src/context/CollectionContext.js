import { useState, createContext } from "react";
import fetcher from "../functions/fetcher";

const CollectionContext = createContext();

const CollectionContextProvider = ({ children }) => {

  const [collectionFromDB, setCollectionFromDB] = useState([]);

  const syncCollectionWithDB = async (token) => {
      await fetcher("/api/plant/collection", token)
  }

  return (
    <CollectionContext.Provider value={{ collectionFromDB, syncCollectionWithDB }}>
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionContext;
export { CollectionContextProvider };