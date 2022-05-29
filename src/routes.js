import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { isAutehenticated } from "./auth";

const Login = () => {
  return <h1>login</h1>;
};
const Home = () => {
  return <h1>autenticado</h1>;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {isAutehenticated() ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
