import LoginModal from "./components/LoginModal";
import "./App.css";
import Home from "./Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
