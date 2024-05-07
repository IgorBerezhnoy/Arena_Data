import { clsx } from 'clsx'

import s from './header.module.css'

import { MenuIcon } from '../../assets/icons'
import { SearchTextField } from '../searchTextField/searchTextField'
import { Header } from './header'

type Props = {}

export const MainHeader = ({}: Props) => {
  return (
    <Header className={clsx(s.mainHeader)}>
      <div className={s.logoAndIcon}>
        <MenuIcon className={s.icon} />
        <span className={s.logoCompany}>Логотип компании</span>
      </div>
      <SearchTextField />
    </Header>
  )
}
