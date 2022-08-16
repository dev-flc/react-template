import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

const AppWithCallbackAfterRender = () => {
  useEffect(() => {
    console.log("render");
  });

  return <h1>Welcome</h1>;
};

const container = document.getElementById("app");
const app = createRoot(container);

app.render(<AppWithCallbackAfterRender />);
