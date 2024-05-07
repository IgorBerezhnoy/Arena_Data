import { clsx } from 'clsx'

import s from './header.module.css'

import { MenuIcon } from '../../assets/icons'
import { Header } from './header'

type Props = {}

export const MainHeader = ({}: Props) => {
  return (
    <Header className={clsx(s.mainHeader)}>
      <MenuIcon />
      <span className={s.logoCompany}>Логотип компании</span>
    </Header>
  )
}
