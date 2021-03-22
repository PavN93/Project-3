import "./App.css";
import Routed from "./routes/Routed";
import UserAuthContext from "./context/UserAuth";
import { useContext, useEffect } from "react";
import CollectionContext from "./context/CollectionContext";

function App() {

  const { doLogin } = useContext(UserAuthContext);
  const { syncCollectionWithDB } = useContext(CollectionContext)

  useEffect(() => {
    (async () => {
      doLogin();
      await syncCollectionWithDB();
    })();
  }, [])

  return (
    <div className="backgroundImage">
      <div className="bg-crossfade">
        <figure />
        <figure />
        <figure />
        <figure />
        <figure />
        <figure />
        <figure />
        <figure />
      </div>
      <div className="pageContent">
        <Routed />
      </div>
    </div>
  );
}

export default App;
