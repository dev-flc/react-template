import React from 'react'

import IconButton from '@mui/material/IconButton'
import PropTypes from 'prop-types'

const ButtonIcon = React.memo(
  ({ statusButton, iconOn: IconOn, iconOff: IconOff, ...props }) => (
    <IconButton data-testid="button-icon" {...props} variant="outlined">
      {statusButton ? <IconOn /> : <IconOff />}
    </IconButton>
  )
)

ButtonIcon.propTypes = {
  'aria-label': PropTypes.string,
  disabled: PropTypes.bool,
  iconOff: PropTypes.elementType.isRequired,
  iconOn: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
  statusButton: PropTypes.bool.isRequired
}

ButtonIcon.defaultProps = {
  'aria-label': 'button',
  disabled: false
}

ButtonIcon.displayName = 'ButtonIcon'

export default ButtonIcon
