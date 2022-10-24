import { createTheme } from '@mui/material/styles'
import { themeDark } from './themeDark.js'
import { themeLight } from './themeLight.js'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const MODE_PALETTE = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const themeMui = (themeMode = MODE_PALETTE.LIGHT) => {
  const theme = themeMode === MODE_PALETTE.DARK ? themeDark : themeLight
  return createTheme(theme)
}
