import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import AuthProvider from "./components/AuthProvider";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/HomePage/Home";
import Search from "./pages/Search/Search";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
