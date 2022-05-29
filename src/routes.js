import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

const AppRoutes = () => {
  const stateAuth = useSelector((state) => state.auth);
  const [isAutehenticated, setIsAutehenticated] = useState(false);
  useEffect(() => {
    if (stateAuth.token === "") {
      setIsAutehenticated(false);
    } else {
      setIsAutehenticated(true);
    }
  }, [stateAuth]);

  return (
    <BrowserRouter>
      <Routes>
        {isAutehenticated ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
