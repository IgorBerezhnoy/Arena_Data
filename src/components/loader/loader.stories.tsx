import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './'

const meta: Meta = {
  argTypes: {},
  component: Loader,
  tags: ['autodocs'],
  title: 'Components/UI/loader',
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
}
