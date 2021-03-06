import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Homepage/homepage";

function App() {

  // hit endpoint when component is mounted
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/test");
        const payload = await response.json();
        console.log(payload.message);
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
      </div>
    </div>
  );
}

export default App;
