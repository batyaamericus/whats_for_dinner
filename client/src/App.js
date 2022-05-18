import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import AuthProvider from "./components/AuthProvider";
import { Routes } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Auth />
      <Routes></Routes>
    </AuthProvider>
  );
}

export default App;
