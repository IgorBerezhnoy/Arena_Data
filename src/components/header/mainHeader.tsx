import { clsx } from 'clsx'

import s from './header.module.css'

import { HelpIcon, MenuIcon, ProfileIcon, SettingsIcon, TaskIcon } from '../../assets/icons'
import { SearchTextField } from '../searchTextField/searchTextField'
import { Header } from './header'

type Props = {}

export const MainHeader = ({}: Props) => {
  return (
    <Header className={clsx(s.mainHeader)}>
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
    </Header>
  )
}
