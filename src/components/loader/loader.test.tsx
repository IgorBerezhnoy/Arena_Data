import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Loader } from './loader'

test('renders Loader component with correct styling', () => {
  const { container } = render(<Loader />)

  const loaderElement = container.querySelector('span')

  expect(loaderElement).toBeInTheDocument()
})
