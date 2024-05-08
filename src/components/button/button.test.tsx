import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Button } from './button'

describe('Button component', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Button>Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('renders with custom variant and className', () => {
    const { getByText } = render(
      <Button className={'custom'} variant={'error'}>
        Error button
      </Button>
    )
    const button = getByText('Error button')

    expect(button).toHaveClass('custom')
  })

  it('renders with custom element type', () => {
    const { getByText } = render(<Button as={'a'}>Link button</Button>)

    expect(getByText('Link button').tagName).toBe('A')
  })
})
