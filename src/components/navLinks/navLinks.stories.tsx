import type { Meta, StoryObj } from '@storybook/react'

import { NavLinks } from './'

const meta: Meta = {
  argTypes: {},
  component: NavLinks,
  tags: ['autodocs'],
  title: 'Components/UI/navLinks',
} satisfies Meta<typeof NavLinks>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
}
