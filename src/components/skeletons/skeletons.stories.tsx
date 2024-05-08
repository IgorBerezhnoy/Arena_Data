import type { Meta, StoryObj } from '@storybook/react'

import { Skeletons } from './'

const meta: Meta = {
  argTypes: {},
  component: Skeletons,
  tags: ['autodocs'],
  title: 'Components/UI/Skeletons',
} satisfies Meta<typeof Skeletons>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
}
