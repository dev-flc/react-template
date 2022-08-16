import React from "react";
import imageEslint from "Images/eslint.svg";
import imagePrettier from "Images/prettier.svg";
import imageReact from "Images/react.svg";
import imageRedux from "Images/redux.svg";
import imageSass from "Images/sass.svg";
import imageWebpack from "Images/webpack.svg";
import { title } from "Constants/home.js";

const Home = React.memo(() => (
  <div className="container">
    <div className="sub-section">
      <h1 className="title"> {title} </h1>
    </div>
    <div className="sub-section">
      <img src={imageReact} className="image image-animation" alt="React" />
      <img src={imageRedux} className="image image-animation" alt="Redux" />
      <img src={imageSass} className="image" alt="Sass" />
      <img src={imagePrettier} className="image" alt="Prettier" />
      <img src={imageEslint} className="image image-animation" alt="Eslint" />
      <img src={imageWebpack} className="image image-animation" alt="Webpack" />
    </div>
  </div>
));

export { Home };
