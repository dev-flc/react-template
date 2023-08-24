import ButtonIcon from './../../src/components/buttonIcon/buttonIcon' // Ajusta la importación según tu estructura de directorios
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

// Mock de iconos para las pruebas
const MockIconOn = () => <span data-testid="mock-icon-on">On</span>
const MockIconOff = () => <span data-testid="mock-icon-off">Off</span>

describe('COMPONENT ButtonIcon', () => {
  test('METODO ONCLICK (FALSE)', () => {
    const handleClick = jest.fn()

    const { getByTestId } = render(
      <ButtonIcon
        statusButton={true}
        iconOn={MockIconOn}
        iconOff={MockIconOff}
        onClick={handleClick}
      />
    )
    const button = getByTestId('button-icon')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('METODO ONCLICK (TRUE)', () => {
    const handleClick = jest.fn()

    const { getByTestId } = render(
      <ButtonIcon
        statusButton={false}
        iconOn={MockIconOn}
        iconOff={MockIconOff}
        onClick={handleClick}
      />
    )
    const button = getByTestId('button-icon')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
