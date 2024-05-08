import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { TextField } from './textField'

describe('TextField component', () => {
  test('renders TextField component with label and input element', () => {
    const { getByLabelText, getByRole } = render(<TextField label={'Username'} />)

    const inputElement = getByRole('textbox')

    expect(inputElement).toBeInTheDocument()
  })

  test('renders TextField component with disabled state', () => {
    const { getByRole } = render(<TextField disabled />)

    const inputElement = getByRole('textbox')

    expect(inputElement).toBeDisabled()
  })
})
