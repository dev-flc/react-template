import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContainerGlobal } from "./../containers/containerGlobal.jsx";
import { Home } from "./../view/home/home.jsx";

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
