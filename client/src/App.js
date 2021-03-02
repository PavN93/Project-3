import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [ fetching, setFetching ] = useState(true);
  const [ text, setText ] = useState('');

  // hit endpoint when component is mounted
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/test');
        console.log(response);
        const payload = await response.json();
        setText(payload.message);
        setFetching(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
      fetching ? 
      <h1>Please wait...</h1> :
      <h1>Message from endpoint: {text}</h1> 
  );
}

export default App;
