import React from "react";
import Navbar from "./navbar/Navbar";
import Items from "./items/items";
import Header from "./header/header";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Items />
      </div>
    </Router>
  );
};

export default App;
