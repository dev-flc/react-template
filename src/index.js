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
    <div className="container">
      <div className="sub-section">
        <h1 className="title"> Welcome </h1>
      </div>
      <div className="sub-section">
        <img src={imageReact} className="image image-animation" alt="React" />
        <img src={imageRedux} className="image image-animation" alt="Redux" />
        <img src={imageSass} className="image" alt="Sass" />
        <img src={imagePrettier} className="image" alt="Prettier" />
        <img src={imageEslint} className="image image-animation" alt="Eslint" />
        <img
          src={imageWebpack}
          className="image image-animation"
          alt="Webpack"
        />
      </div>
    </div>
  );
};

const container = document.getElementById("app");
const app = createRoot(container);

app.render(<AppWithCallbackAfterRender />);
