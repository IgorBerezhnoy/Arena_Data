import React from 'react'
import s from './navLinks.module.css'

export const NavLink = ({ children }: { children: React.ReactNode }) => {
  return <span className={s.link}>{children}</span>
}