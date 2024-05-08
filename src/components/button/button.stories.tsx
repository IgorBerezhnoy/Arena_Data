import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import s from './button.module.css'

import { ErrorIcon, FailIcon } from '../../assets'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  argTypes: {
    onChange: {
      action: 'Change',
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/UI/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: (
      <>
        <FailIcon className={s.icon} />
        Импортировать объекты
      </>
    ),
    variant: 'primary',
  },
}
export const Error: Story = {
  args: {
    children: (
      <>
        <ErrorIcon className={s.icon} />
        Отменить
      </>
    ),
    variant: 'error',
  },
}
