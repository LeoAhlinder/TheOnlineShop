import React from "react";
import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
};

export default App;
