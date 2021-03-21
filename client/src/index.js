import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserAuthContextProvider } from './context/UserAuth';
import { PlantDataContextProvider } from './context/PlantData';
import { CollectionContextProvider } from './context/CollectionContext';

ReactDOM.render(
  // <React.StrictMode>
  <UserAuthContextProvider>
    <PlantDataContextProvider>
      <CollectionContextProvider>
        <App />
      </CollectionContextProvider>
    </PlantDataContextProvider>
  </UserAuthContextProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();