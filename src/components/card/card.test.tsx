import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Card } from './card'

describe('Card component', () => {
  test('renders Card component with correct className', () => {
    const { container } = render(<Card className={'custom-class'} />)
    const cardElement = container.firstChild

    expect(cardElement).toHaveClass('custom-class')
  })

  test('renders Card component with rest props', () => {
    const { container } = render(<Card aria-label={'Card label'} id={'card-id'} />)
    const cardElement = container.firstChild

    expect(cardElement).toHaveAttribute('id', 'card-id')
    expect(cardElement).toHaveAttribute('aria-label', 'Card label')
  })
})
