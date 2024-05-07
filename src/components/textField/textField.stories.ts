import type { Meta, StoryObj } from '@storybook/react'

import s from './textField.module.css'

import { TextField } from './textField'

const meta: Meta<typeof TextField> = {
  argTypes: {
    onChange: {
      action: 'Change',
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/UI/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof TextField>

export const Search: Story = {
  args: {
    className: s.storyBook,
    label: 'TextField',
  },
}
