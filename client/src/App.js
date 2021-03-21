import "./App.css";
import Routed from "./routes/Routed";
import UserAuthContext from "./context/UserAuth";
import { useContext, useEffect } from "react";

function App() {

  const { doLogin } = useContext(UserAuthContext);

  useEffect(() => {
    doLogin();
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
