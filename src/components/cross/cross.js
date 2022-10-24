import PropTypes from 'prop-types'
import React from 'react'
import { css, styled } from '@mui/material/styles'

const CrossStyle = styled('div')(
  ({ color, theme }) => css`
    background: ${color || theme.palette.primary.main};
    height: 143px;
    width: 20px;
    position: relative;
    &:after {
      background: ${color || theme.palette.primary.main};
      content: '';
      height: 20px;
      left: -40px;
      position: absolute;
      top: 40px;
      width: 100px;
    }
  `
)

const Cross = React.memo(({ color }) => {
  return <CrossStyle color={color} />
})

Cross.propTypes = {
  color: PropTypes.string
}

Cross.displayName = 'Cross'

export default Cross
