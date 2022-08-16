import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "Routers/router.jsx";

const AppWithCallbackAfterRender = () => {
  useEffect(() => {
    console.log("render");
  });

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

const container = document.getElementById("app");
const app = createRoot(container);

app.render(<AppWithCallbackAfterRender />);
