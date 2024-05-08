import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { makeServer } from '../../server'
import { MainPageContainer } from './'

const meta: Meta = {
  argTypes: {},
  component: MainPageContainer,
  tags: ['autodocs'],
  title: 'Components/Pages/MainPageContainer',
} satisfies Meta<typeof MainPageContainer>

export default meta
type Story = StoryObj<typeof meta>
export const Complete = () => {
  const queryClient = new QueryClient()

  if (process.env.NODE_ENV === 'development') {
    makeServer({ environment: 'development' })
  }

  return (
    <QueryClientProvider client={queryClient}>
      <MainPageContainer />
    </QueryClientProvider>
  )
}
