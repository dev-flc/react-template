import { createTheme } from '@mui/material/styles'
import { themeDark } from './themeDark.js'
import { themeLight } from './themeLight.js'

export const MODE_PALETTE = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const themeMui = (themeMode = MODE_PALETTE.LIGHT) => {
  const theme = themeMode === MODE_PALETTE.DARK ? themeDark : themeLight
  return createTheme(theme)
}
