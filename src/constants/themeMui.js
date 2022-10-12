import { createTheme } from '@mui/material/styles'
import { paletteDark } from './palette/paletteDark.js'
import { paletteLight } from './palette/paletteLight.js'

export const MODE_PALETTE = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const themeMui = (mode = MODE_PALETTE.LIGHT) => {
  const palette = mode === MODE_PALETTE.DARK ? paletteDark : paletteLight

  return createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            body1: 'span',
            body2: 'span',
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2'
          }
        }
      }
    },
    palette: {
      mode,
      ...palette
    }
  })
}
