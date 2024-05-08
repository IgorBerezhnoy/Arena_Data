import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { clsx } from 'clsx'

import s from './header.module.css'

import { HelpIcon, MenuIcon, ProfileIcon, SettingsIcon, TaskIcon } from '../../assets'
import { SearchTextField } from '../searchTextField'
import { Header } from './'

const meta: Meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/UI/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    children: (
      <>
        <div className={s.logoAndIcon}>
          <button className={s.buttonIcon}>
            <MenuIcon className={s.icon} />
          </button>
          <span className={s.logoCompany}>Логотип компании</span>
        </div>
        <SearchTextField />
        <div className={s.buttons}>
          <button className={s.buttonIcon}>
            <HelpIcon />
          </button>
          <button className={s.buttonIcon}>
            <SettingsIcon />
          </button>
          <button className={s.buttonIcon}>
            <TaskIcon />
          </button>
          <button className={clsx(s.buttonIcon, s.profileIcon)}>
            <ProfileIcon />
          </button>
        </div>
      </>
    ),
    className: clsx(s.mainHeader),
  },
}
