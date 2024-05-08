import { DetailedHTMLProps, HTMLAttributes, ReactNode, memo } from 'react'

import { clsx } from 'clsx'

import s from './header.module.css'

export const Header = memo(({ children, className, ...rest }: Props) => {
  return (
    <header className={clsx(s.header)} {...rest}>
      <div className={clsx(s.container, className)}>{children}</div>
    </header>
  )
})

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode
}
