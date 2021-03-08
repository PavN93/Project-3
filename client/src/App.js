import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Homepage/homepage";
import Login from "./pages/LoginPage/LoginPage"

function App() {
  const [fetching, setFetching] = useState(true);
  const [text, setText] = useState("");

  // hit endpoint when component is mounted
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/test");
        const payload = await response.json();
        setText(payload.message);
        setFetching(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    // Need to randomise the background image, but I've dropped one in for ref for now.
    <div
      className="backgroundImage"
      style={{ backgroundImage: "url(/bg-1.jpg)" }}
    >
      <div className="pageContent">
        <Home />
        <Login />
      </div>
    </div>
  );
}

export default App;
