import React from 'react'

import s from './navLinks.module.css'

import { NavLink } from './navLink'

export const NavLinks = () => {
  const linksArr = ['Главная', 'Главный глоссарий', 'Импорт']

  const links = (
    <>
      {linksArr.map((el, i) => (
        <NavLink key={i}>
          {el} <span className={s.arrow}>{'>'}</span>
        </NavLink>
      ))}
    </>
  )

  return (
    <div className={s.wrapper}>
      {links}
      <NavLink>
        <b>Проверка</b>
      </NavLink>
    </div>
  )
}
