
# ButtonIcon #

## Props ##

|   name prop  |   type      | required  |            Description                       |
|--------------|-------------|-----------|--------------------------------------------- |
| disabled     | bool        | false     | indicator to enable or disable the button    |
| arial-label  | string      | false     | button description or name                   |
| statusButton | bool        | true      | button on and off status                     |
| onClick      | func        | true      | funtion onClick button                       |
| iconOn       | elementType | true      | icon displayed when the statusButon is TRUE  |
| iconOff      | elementType | true      | icon displayed when the statusButon is FALSE |

__NOTA :__ Full accessories are located at the following URL : [ Documentation Botton API ]( https://mui.com/material-ui/react-button/ )


## Usage example  ##

```js
/****************************************************
**  Author      : Fernando L.C.                    **
**  Title       : ButtonIcon                       **
**  Description : Botton type icon                 **
****************************************************/

import React from 'react';
import ButtonIcon from "Components/buttonIcon/buttonIcon.js"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"

export const Example = () => {
  const [statusButton, setStatusButton] = useState(false)

  const handleOnClick = () => {
      setStatusButton(!statusButton)
  };

  return (
    <ButtonIcon
      statusButton={statusButton}
      onClick={handleOnClick}
      iconOn={LightModeIcon}
      iconOff={DarkModeIcon}
    />
  );
}

```
