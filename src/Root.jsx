import { BrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import { AppContextProvider } from "./app/context/AppContext";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

function Root() {
  return (
    <AppContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <React.Suspense fallback={null}>
            <App />
          </React.Suspense>
        </BrowserRouter>
      </Provider>
    </AppContextProvider>
  );
}

export default Root;
