import "./App.css";
import React from "react";
import MainApp from "./MainApp";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <MainApp />
    </React.Suspense>
  );
};

export default App;
