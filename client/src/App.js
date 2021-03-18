// import { useState, useEffect } from "react";
import "./App.css";
import Routed from "./routes/Routed";

function App() {

  // Amount of bgds for randomize
  // const bgAmount = 8;

  // const [bg, setBg] = useState(Math.floor(Math.random() * bgAmount) + 1);
  
  return (
    // <div
    //   className="backgroundImage"
    //   style={{ backgroundImage: `url(/bg-${bg}-min.jpg)` }}
    // >
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
