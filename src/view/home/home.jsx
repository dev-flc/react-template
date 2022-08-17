import React from 'react';
import { actionSetTitle } from 'Actions/actionSetTitle.js';
import { useStore } from 'Hook/store/useStore.js';
import { convertTextUpperOrLower } from 'Utils/utils.js';
import imageEslint from 'Images/eslint.svg';
import imagePrettier from 'Images/prettier.svg';
import imageReact from 'Images/react.svg';
import imageRedux from 'Images/redux.svg';
import imageSass from 'Images/sass.svg';
import imageWebpack from 'Images/webpack.svg';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Home = React.memo(() => {
  const [mapStateToProps, mapDispatchToProps] = useStore();
  const { title } = mapStateToProps;

  const handleButton = () => {
    const newText = convertTextUpperOrLower(title);

    mapDispatchToProps(actionSetTitle(newText));
  };

  return (
    <Container maxWidth="sm" fixed>
      <div className="container">
        <div className="sub-section">
          <h1 className="title"> {title} </h1>
        </div>
        <div className="sub-section">
          <img src={imageReact} className="image image-animation" alt="React" />
          <img src={imageRedux} className="image image-animation" alt="Redux" />
          <img src={imageSass} className="image" alt="Sass" />
          <img src={imagePrettier} className="image" alt="Prettier" />
          <img
            src={imageEslint}
            className="image image-animation"
            alt="Eslint"
          />
          <img
            src={imageWebpack}
            className="image image-animation"
            alt="Webpack"
          />
        </div>
        <Button variant="outlined" size="large" onClick={handleButton}>
          Conver Text
        </Button>
      </div>
    </Container>
  );
});

Home.displayName = 'Home';

export { Home };
