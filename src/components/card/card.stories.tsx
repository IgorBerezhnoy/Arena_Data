import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { Card } from './'

const meta: Meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/UI/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    children: <></>,
    style: {
      height: '300px',
      width: '300px',
    },
  },
}
