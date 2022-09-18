import React from "react"
import PropTypes from "prop-types"
import IconButton from "@mui/material/IconButton"

const ButtonIcon = React.memo(
  ({ statusButton, iconOn: IconOn, iconOff: IconOff, ...props }) => (
    <IconButton {...props} variant="outlined">
      {statusButton ? <IconOn /> : <IconOff />}
    </IconButton>
  )
)

ButtonIcon.propTypes = {
  "aria-label": PropTypes.string,
  disabled: PropTypes.bool,
  statusButton: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  iconOn: PropTypes.elementType.isRequired,
  iconOff: PropTypes.elementType.isRequired,
}

ButtonIcon.defaultProps = {
  "aria-label": "button",
  disabled: false,
}

ButtonIcon.displayName = "ButtonIcon"

export default ButtonIcon
