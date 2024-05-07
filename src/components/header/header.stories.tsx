import type { Meta, StoryObj } from '@storybook/react'

import s from './header.module.css'

import { Header } from './'

const meta: Meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/UI/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>
//TODO не забудььте включить storybook для этого компонента
export const Default: Story = {
  args: {
    children: <div className={s.wrapper}></div>,
  },
}
