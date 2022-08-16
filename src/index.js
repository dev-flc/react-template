import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

import imageEslint from "./assets/images/eslint.svg";
import imagePrettier from "./assets/images/prettier.svg";
import imageReact from "./assets/images/react.svg";
import imageRedux from "./assets/images/redux.svg";
import imageSass from "./assets/images/sass.svg";
import imageWebpack from "./assets/images/webpack.svg";

const AppWithCallbackAfterRender = () => {
  useEffect(() => {
    console.log("render");
  });

  return (
    <div>
      <h1> Welcome </h1>
      <img src={imageReact} alt="React" />
      <img src={imageRedux} alt="Redux" />
      <img src={imageSass} alt="Sass" />
      <img src={imagePrettier} alt="Prettier" />
      <img src={imageEslint} alt="Eslint" />
      <img src={imageWebpack} alt="Webpack" />
    </div>
  );
};

const container = document.getElementById("app");
const app = createRoot(container);

app.render(<AppWithCallbackAfterRender />);
