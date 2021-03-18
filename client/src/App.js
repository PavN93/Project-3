// import { set } from "mongoose";
import { useState, useEffect } from "react";
import "./App.css";
import Routed from "./routes/Routed";

function App() {

  // Amount of bgds for randomize
  const bgAmount = 11;

  const [bg, setBg] = useState(Math.floor(Math.random() * bgAmount) + 1);

  
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBg(Math.floor(Math.random() * bgAmount) + 1)
    }, 10000);
    return () => {
      clearInterval(bgTimer);
    };
  }, []);
  
  return (
    <div
      className="backgroundImage"
      style={{ backgroundImage: `url(/bg-${bg}.jpg)` }}
    >
      <div className="pageContent">
        <Routed />
      </div>
    </div>
  );
}

export default App;
