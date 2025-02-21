/*
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import du router
import App from "./App";
import { AppContextProvider } from "./app/context/AppContext"; 
import "./index.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> 
      <AppContextProvider> 
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
*/

/*import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import du router
import Root from "./Root"; 
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(); 
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root/>
  </StrictMode>,
)
