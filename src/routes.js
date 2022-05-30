import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import { setAuth } from "./store/auth";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.auth);
  const [isAutehenticated, setIsAutehenticated] = useState(false);
  useEffect(() => {
    if (stateAuth.token === "") {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      if (user && token) {
        const authData = {
          user: JSON.parse(user),
          token,
        };
        dispatch(setAuth(authData));
        setIsAutehenticated(true);
      } else {
        setIsAutehenticated(false);
      }
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
