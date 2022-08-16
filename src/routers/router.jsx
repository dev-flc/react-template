import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContainerGlobal } from "Containers/containerGlobal.jsx";
import { Home } from "View/home/home.jsx";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContainerGlobal>
            <Home />
          </ContainerGlobal>
        }
      />
      <Route
        index
        path="*"
        element={
          <ContainerGlobal>
            <Home />
          </ContainerGlobal>
        }
      />
    </Routes>
  );
};

export { Router };
