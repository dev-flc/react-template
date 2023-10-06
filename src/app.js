import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Router } from 'Routers/router.js'
import { themeMui } from 'Constants/theme/themeMui.js'
import { ThemeProvider } from '@mui/material/styles'

import { useStore } from 'Hook/store/useStore.js'

const App = () => {
  const [mapStateToProps] = useStore()
  const { theme } = mapStateToProps
  const { paletteMode } = theme

  return (
    <ThemeProvider theme={themeMui(paletteMode)}>
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  )
}

App.displayName = 'App'

export { App }
