import React from "react";
import Header from "./Header/Header";
import Items from "./items/items";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Items />
      </div>
    </Router>
  );
};

export default App;
