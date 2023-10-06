import React, { useState } from 'react'

import { actionSetModeIsDark } from 'Actions/actionsTheme.js'
import { actionSetTitle } from 'Actions/actionSetTitle.js'
import { convertTextUpperOrLower } from 'Utils/utils.js'
import { useStore } from 'Hook/store/useStore.js'

import imageEslint from 'Images/eslint.svg'
import imagePrettier from 'Images/prettier.svg'
import imageReact from 'Images/react.svg'
import imageRedux from 'Images/redux.svg'
import imageSass from 'Images/sass.svg'
import imageWebpack from 'Images/webpack.svg'

import ButtonIcon from 'Components/buttonIcon/buttonIcon.js'
import { MODE_PALETTE } from 'Constants/theme/themeMui.js'

import Container from '@mui/material/Container'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import TextRotateUpIcon from '@mui/icons-material/TextRotateUp'
import TextRotateVerticalIcon from '@mui/icons-material/TextRotateVertical'
import Typography from '@mui/material/Typography'

const Home = React.memo(() => {
  const [mapStateToProps, mapDispatchToProps] = useStore()
  const [isUpperCase, setIsUpperCase] = useState(false)
  const { title, theme } = mapStateToProps
  const { paletteMode } = theme

  const handleThemeMode = () => {
    const mode =
      paletteMode === MODE_PALETTE.DARK ? MODE_PALETTE.LIGHT : MODE_PALETTE.DARK

    mapDispatchToProps(actionSetModeIsDark(mode))
  }

  const handleConvertText = () => {
    const { 0: text, 1: status } = convertTextUpperOrLower(title)
    setIsUpperCase(status)
    mapDispatchToProps(actionSetTitle(text))
  }

  return (
    <Container maxWidth="sm" fixed>
      <div className="container">
        <div className="sub-section">
          <Typography variant="h1" component="h1">
            {title}
          </Typography>
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
        <div>
          <ButtonIcon
            statusButton={isUpperCase}
            onClick={handleConvertText}
            iconOn={TextRotateUpIcon}
            iconOff={TextRotateVerticalIcon}
          />

          <ButtonIcon
            statusButton={paletteMode === MODE_PALETTE.DARK}
            onClick={handleThemeMode}
            iconOn={LightModeIcon}
            iconOff={DarkModeIcon}
          />
        </div>
      </div>
    </Container>
  )
})

Home.displayName = 'Home'

export { Home }
