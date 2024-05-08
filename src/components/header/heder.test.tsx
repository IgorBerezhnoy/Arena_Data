import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Header } from './header'
import { MainHeader } from './mainHeader'

describe('Header component', () => {
  test('renders MainHeader component with correct elements', () => {
    const { getAllByRole, getByText } = render(<MainHeader />)

    const logoCompany = getByText('Логотип компании')

    expect(logoCompany).toBeInTheDocument()
  })
})

describe('Header component', () => {
  test('renders Header component with children', () => {
    const { getByText } = render(<Header>Header Content</Header>)
    const headerElement = getByText('Header Content')

    expect(headerElement).toBeInTheDocument()
  })

  test('passes rest props to Header component', () => {
    const { container } = render(<Header aria-label={'Header label'} id={'header-id'} />)
    const headerElement = container.firstChild

    expect(headerElement).toHaveAttribute('id', 'header-id')
    expect(headerElement).toHaveAttribute('aria-label', 'Header label')
  })
})
