import React from "react";
import Navbar from "./navbar/Navbar";
import Items from "./items/items";
import Header from "./Header/Header"
import ScrollBar from "./ItemScroll/ItemScroll";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <ScrollBar />
        <Items />
      </div>
    </Router>
  );
};

export default App;
