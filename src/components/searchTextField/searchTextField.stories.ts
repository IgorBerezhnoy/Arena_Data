import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { SearchTextField } from './searchTextField'

const meta: Meta<typeof SearchTextField> = {
  argTypes: {
    onChange: {
      action: 'Change',
    },
  },
  component: SearchTextField,
  tags: ['autodocs'],
  title: 'Components/UI/SearchTextField',
} satisfies Meta<typeof SearchTextField>

export default meta
type Story = StoryObj<typeof SearchTextField>

export const Default: Story = {
  args: {},
}
